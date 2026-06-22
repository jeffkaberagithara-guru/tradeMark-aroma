import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { COLORS, FONTS } from "../constants/theme";

const navLinks = [
  { label: "Our Story", path: "/our-story" },
  { label: "Fragrances", path: "/fragrances" },
  { label: "Scent Guide", path: "/scent-guide" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 flex h-18 items-center justify-between px-8 transition-all duration-300 ${
          scrolled
            ? "bg-[#0B0B0B] border-b border-[#3A3221]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        {/* Logo */}
        <Link to="/" onClick={handleLogoClick} className="no-underline">
          <motion.div
            whileHover={{ opacity: 0.8 }}
            className="flex flex-col items-start gap-0.75 text-[#C9A94A] uppercase leading-[1.05]"
          >
            <span className="text-[15px] font-bold tracking-[0.16em] font-body">
              TradeMark Aroma
            </span>
            <span className="text-[10px] font-medium tracking-[0.18em] text-[#B79C50] font-body">
              Scent That Defines You
            </span>
          </motion.div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[12px] uppercase tracking-widest font-body transition-colors duration-300 ${
                  isActive
                    ? "text-[#C9A94A] border-b-2 border-[#C9A94A] pb-1"
                    : "text-[#B7B0A0] hover:text-[#F4EADE]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <motion.a
            href="https://wa.me/254114036858?text=Hi%2C%20I%27d%20like%20to%20order%20a%20fragrance%20from%20Trademark%20Aroma"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center rounded-3xl bg-[#C9A94A] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0B0B0B] font-body shadow-[0_4px_20px_-10px_rgba(201,169,74,0.9)] no-underline"
          >
            Order Now
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex md:hidden items-center justify-center rounded-full border-none bg-transparent p-1 text-[#C9A94A] focus:outline-none"
          aria-label="Open navigation menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              position: "fixed",
              top: "72px",
              left: 0,
              right: 0,
              zIndex: 99,
              backgroundColor: COLORS.onyx,
              borderBottom: `0.5px solid ${COLORS.surfaceLight}`,
              padding: "24px 32px 32px",
              display: "flex",
              flexDirection: "column",
              gap: "28px",
            }}
          >
            {navLinks.map((link, i) => {
              const isActive = location.pathname === link.path;
              return (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                >
                  <Link
                    to={link.path}
                    style={{
                      textDecoration: "none",
                      fontFamily: FONTS.heading,
                      fontSize: "28px",
                      fontWeight: 400,
                      letterSpacing: "0.04em",
                      color: isActive ? COLORS.gold : COLORS.ivory,
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}

            <motion.a
              href="https://wa.me/254114036858?text=Hi%2C%20I%27d%20like%20to%20order%20a%20fragrance%20from%20Trademark%20Aroma"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.32 }}
              className="mt-2 inline-flex w-full items-center justify-center rounded-3xl bg-[#C9A94A] px-6 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.12em] text-[#0B0B0B] font-body no-underline"
            >
              Order on WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}