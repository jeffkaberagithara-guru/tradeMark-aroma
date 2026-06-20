import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/home/HeroSection";
import CollectionSection from "./components/home/CollectionSection";
import OurStorySection from "./components/home/OurStorySection";
import PersonalServiceSection from "./components/home/PersonalServiceSection";
import Fragrances from "./pages/Fragrances";
import OurStory from "./pages/OurStory";
import ScentGuide from "./pages/ScentGuide";
import Contact from "./pages/Contact";
import { COLORS, FONTS } from "./constants/theme";

function Home() {
  return (
    <div className="bg-[#0B0B0B]">
      <HeroSection />
      <CollectionSection />
      <OurStorySection />
      <PersonalServiceSection />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0B0B0B] text-[#F4EADE] font-body">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fragrances" element={<Fragrances />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/scent-guide" element={<ScentGuide />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}