import { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import BrandedLoader from "./components/BrandedLoader";
import Analytics from "./components/Analytics";
import CookieConsent from "./components/CookieConsent";
import ErrorBoundary from "./components/ErrorBoundary";
import HeroSection from "./components/home/HeroSection";
import CollectionSection from "./components/home/CollectionSection";
import BestSellersSection from "./components/home/BestSellersSection";
import OurStorySection from "./components/home/OurStorySection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import PersonalServiceSection from "./components/home/PersonalServiceSection";
import NewsletterSignup from "./components/NewsletterSignup";

// Lazy loaded pages
const Fragrances = lazy(() => import("./pages/Fragrances"));
const About = lazy(() => import("./pages/About"));
const ScentGuide = lazy(() => import("./pages/ScentGuide"));
const Contact = lazy(() => import("./pages/Contact"));
const FAQ = lazy(() => import("./components/FAQ"));
const GiftFinder = lazy(() => import("./components/GiftFinder"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Cookies = lazy(() => import("./pages/Cookies"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Page Transition Wrapper
const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

function ScrollToTop() {
  const { pathname, key } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname, key]);

  return null;
}

function Home() {
  return (
    <div className="bg-[#0B0B0B]">
      <HeroSection />
      <CollectionSection />
      <BestSellersSection />
      <OurStorySection />
      <TestimonialsSection />
      <PersonalServiceSection />
      <NewsletterSignup />
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <BrandedLoader />;
  }

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <div className="min-h-screen bg-[#0B0B0B] text-[#F4EADE] font-body">
          <ScrollToTop />
          <Analytics />
          <Navbar />
          <Suspense fallback={<BrandedLoader />}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route
                  path="/"
                  element={
                    <PageTransition>
                      <Home />
                    </PageTransition>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <PageTransition>
                      <About />
                    </PageTransition>
                  }
                />
                <Route
                  path="/fragrances"
                  element={
                    <PageTransition>
                      <Fragrances />
                    </PageTransition>
                  }
                />
                <Route
                  path="/scent-guide"
                  element={
                    <PageTransition>
                      <ScentGuide />
                    </PageTransition>
                  }
                />
                <Route
                  path="/gift-finder"
                  element={
                    <PageTransition>
                      <GiftFinder />
                    </PageTransition>
                  }
                />
                <Route
                  path="/faq"
                  element={
                    <PageTransition>
                      <FAQ />
                    </PageTransition>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <PageTransition>
                      <Contact />
                    </PageTransition>
                  }
                />
                <Route
                  path="/privacy"
                  element={
                    <PageTransition>
                      <Privacy />
                    </PageTransition>
                  }
                />
                <Route
                  path="/terms"
                  element={
                    <PageTransition>
                      <Terms />
                    </PageTransition>
                  }
                />
                <Route
                  path="/cookies"
                  element={
                    <PageTransition>
                      <Cookies />
                    </PageTransition>
                  }
                />
                <Route
                  path="*"
                  element={
                    <PageTransition>
                      <NotFound />
                    </PageTransition>
                  }
                />
              </Routes>
            </AnimatePresence>
          </Suspense>
          <Footer />
          <FloatingWhatsApp />
          <CookieConsent />
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
}