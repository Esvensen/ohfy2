import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileBottomNav from "./components/MobileBottomNav";
import TattooTopNav from "./components/TattooTopNav";
import Home from "./components/Home";
import Tattoo from "./components/Tattoo";
import Studio from "./components/Studio";
import Events from "./components/Events"; // New import
import Artists from "./components/Artists";
import Records from "./components/Records"; // Add this import
import ArtistDetail from "./components/ArtistDetail";
import Booking from "./components/Booking";
import FAQ from "./components/FAQ";
import Policy from "./components/Policy";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <TattooTopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tattoo" element={<Tattoo />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/events" element={<Events />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artists/:artistId" element={<ArtistDetail />} />
        <Route path="/records" element={<Records />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}

export default App;
