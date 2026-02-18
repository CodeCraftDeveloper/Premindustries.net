import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import Script from "next/script";
import Header from "../components/navbar/Header";
import Footer from "../components/footer/Footer";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 40;

    const initAnimations = () => {
      const hasAOS = typeof window !== "undefined" && typeof window.AOS !== "undefined";
      const hasWOW = typeof window !== "undefined" && typeof window.WOW !== "undefined";

      if (hasAOS) {
        window.AOS.init();
      }

      if (hasWOW) {
        new window.WOW().init();
      }

      if ((hasAOS && hasWOW) || attempts >= maxAttempts) {
        return;
      }

      attempts += 1;
      window.setTimeout(initAnimations, 100);
    };

    initAnimations();
  }, []);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"
        strategy="afterInteractive"
      />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
