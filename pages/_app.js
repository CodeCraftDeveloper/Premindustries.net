import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "leaflet/dist/leaflet.css";
import Header from "../components/navbar/Header";
import Footer from "../components/footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
