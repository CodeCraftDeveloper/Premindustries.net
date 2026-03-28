"use client";

import { useEffect, useRef } from "react";

const PlantsMap = ({ plants }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const hasInitializedRef = useRef(false);

  useEffect(() => {
    let mounted = true;
    let observer;

    const initMap = async () => {
      if (hasInitializedRef.current) return;

      const leafletModule = await import("leaflet");
      const L = leafletModule.default ?? leafletModule;

      if (
        !mounted ||
        !mapRef.current ||
        mapInstance.current ||
        !plants?.length
      ) {
        return;
      }

      hasInitializedRef.current = true;

      const map = L.map(mapRef.current, {
        zoomControl: true,
        attributionControl: false,
        scrollWheelZoom: false,
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
          <div class="plant-popup">
            <strong class="plant-popup-title">${plant.name}</strong>
            <p class="plant-popup-copy">${plant.address}</p>
          </div>
        `);
      });

      if (bounds.isValid()) {
        map.fitBounds(bounds, { padding: [50, 50] });
      }

      mapInstance.current = map;
      requestAnimationFrame(() => map.invalidateSize());
    };

    if (mapRef.current && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (!entry?.isIntersecting) return;
          observer?.disconnect();
          initMap();
        },
        { root: null, rootMargin: "300px 0px", threshold: 0.01 },
      );

      observer.observe(mapRef.current);
    } else {
      initMap();
    }

    return () => {
      mounted = false;
      observer?.disconnect();

      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }

      hasInitializedRef.current = false;
    };
  }, [plants]);

  return (
    <div
      ref={mapRef}
      className="plants-map h-[220px] sm:h-[220px] lg:h-[220px]"
      role="img"
      aria-label="Prem Industries plant locations map"
    />
  );
};

export default PlantsMap;
