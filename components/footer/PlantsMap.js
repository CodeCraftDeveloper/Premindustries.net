"use client";

import { useEffect, useRef } from "react";

const PlantsMap = ({ plants }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    let mounted = true;

    const initMap = async () => {
      const leafletModule = await import("leaflet");
      const L = leafletModule.default ?? leafletModule;

      if (!mounted || !mapRef.current || mapInstance.current || !plants?.length) {
        return;
      }

      const map = L.map(mapRef.current, {
        zoomControl: true,
        attributionControl: false,
        scrollWheelZoom: true,
        touchZoom: true,
        dragging: true,
        doubleClickZoom: true,
        boxZoom: true,
        keyboard: true,
        tap: true,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
      }).addTo(map);

      // Force-remove attribution/prefix if added by defaults/plugins.
      map.attributionControl?.setPrefix(false);
      map.attributionControl?.remove();

      const markerPane = map.createPane("plantMarkers");
      markerPane.style.zIndex = "650";

      const points = plants.map((plant) => [plant.lat, plant.lng]);
      const bounds = L.latLngBounds(points);

      plants.forEach((plant) => {
        const isLongLabel = (plant.label || "").length > 3;
        const labelClass = isLongLabel
          ? "marker-label marker-label-compact"
          : "marker-label";
        const labelWidth = Math.max(64, (plant.label || "").length * 8 + 16);

        const icon = L.divIcon({
          className: "custom-plant-marker",
          html: `
            <div class="marker-container">
              <div class="marker-pin"></div>
              <div class="${labelClass}">${plant.label}</div>
            </div>
          `,
          iconSize: [labelWidth, 60],
          iconAnchor: [Math.round(labelWidth / 2), 50],
        });

        const marker = L.marker([plant.lat, plant.lng], {
          icon,
          title: plant.name,
          pane: "plantMarkers",
        }).addTo(map);

        marker.bindPopup(`
          <div style="min-width: 200px;">
            <strong style="font-size: 14px;">${plant.name}</strong>
            <p style="margin: 8px 0 0 0; font-size: 12px; color: #666;">${plant.address}</p>
          </div>
        `);
      });

      if (bounds.isValid()) {
        map.fitBounds(bounds, { padding: [50, 50] });
      }

      mapInstance.current = map;
      requestAnimationFrame(() => map.invalidateSize());
    };

    initMap();

    return () => {
      mounted = false;
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [plants]);

  return (
    <>
      <div
        ref={mapRef}
        className="plants-map"
        role="img"
        aria-label="Prem Industries plant locations map"
      />
      <style jsx>{`
        .plants-map {
          width: 100%;
          height: 210px;
          border-radius: 8px;
          overflow: hidden;
        }

        :global(.leaflet-container) {
          width: 100%;
          height: 100%;
        }

        :global(.custom-plant-marker) {
          background: transparent;
          border: none;
        }

        :global(.marker-container) {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        :global(.marker-pin) {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: #ef4444;
          border: 4px solid #ffffff;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
          position: relative;
        }

        :global(.marker-pin::after) {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 12px solid #ef4444;
        }

        :global(.marker-label) {
          margin-top: 6px;
          background-color: #ffffff;
          padding: 4px 10px;
          border-radius: 12px;
          font-weight: bold;
          font-size: 13px;
          color: #ef4444;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          border: 2px solid #ef4444;
          white-space: nowrap;
        }

        :global(.marker-label-compact) {
          font-size: 11px;
          padding: 3px 8px;
          border-radius: 10px;
        }

        :global(.leaflet-popup-content-wrapper) {
          border-radius: 8px;
          box-shadow: 0 3px 14px rgba(0, 0, 0, 0.2);
        }

        :global(.leaflet-popup-content),
        :global(.leaflet-popup-content strong),
        :global(.leaflet-popup-content p) {
          color: #000000 !important;
        }

        :global(.leaflet-popup-tip) {
          box-shadow: 0 3px 14px rgba(0, 0, 0, 0.2);
        }

        :global(.leaflet-control-zoom a) {
          position: relative;
          color: transparent !important;
          text-indent: -9999px;
          overflow: hidden;
        }

        :global(.leaflet-control-zoom-in::before),
        :global(.leaflet-control-zoom-out::before) {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000000;
          font-size: 20px;
          font-weight: 700;
          text-indent: 0;
          line-height: 1;
        }

        :global(.leaflet-control-zoom-in::before) {
          content: "+";
        }

        :global(.leaflet-control-zoom-out::before) {
          content: "-";
        }

        :global(.leaflet-control-attribution) {
          display: none !important;
        }

        @media (max-width: 768px) {
          .plants-map {
            height: 170px;
          }
        }
      `}</style>
    </>
  );
};

export default PlantsMap;
