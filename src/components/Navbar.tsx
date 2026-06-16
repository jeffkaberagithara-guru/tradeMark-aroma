import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 32px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: scrolled ? COLORS.onyx : "transparent",
          borderBottom: scrolled
            ? `0.5px solid ${COLORS.surfaceLight}`
            : "0.5px solid transparent",
          transition: "background-color 0.4s ease, border-color 0.4s ease",
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <motion.div
            whileHover={{ opacity: 0.8 }}
            style={{
              fontFamily: FONTS.body,
              fontSize: "15px",
              fontWeight: 500,
              letterSpacing: "0.14em",
              color: COLORS.gold,
              textTransform: "uppercase",
            }}
          >
            Scents of Omark
          </motion.div>
        </Link>

        {/* Desktop Links */}
        <div
          style={{
            display: "flex",
            gap: "36px",
            alignItems: "center",
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  textDecoration: "none",
                  fontFamily: FONTS.body,
                  fontSize: "12px",
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: isActive ? COLORS.gold : COLORS.textMuted,
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    (e.target as HTMLElement).style.color = COLORS.ivory;
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    (e.target as HTMLElement).style.color = COLORS.textMuted;
                }}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Order CTA */}
          <motion.a
            href="https://wa.me/254114036858?text=Hi%2C%20I%27d%20like%20to%20order%20a%20fragrance%20from%20Scents%20of%20Omark"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              textDecoration: "none",
              fontFamily: FONTS.body,
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: COLORS.onyx,
              backgroundColor: COLORS.gold,
              padding: "9px 20px",
              borderRadius: "24px",
              whiteSpace: "nowrap",
            }}
          >
            Order Now
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex md:hidden"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: COLORS.gold,
            padding: "4px",
          }}
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
              href="https://wa.me/254114036858?text=Hi%2C%20I%27d%20like%20to%20order%20a%20fragrance%20from%20Scents%20of%20Omark"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.32 }}
              style={{
                textDecoration: "none",
                fontFamily: FONTS.body,
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: COLORS.onyx,
                backgroundColor: COLORS.gold,
                padding: "13px 24px",
                borderRadius: "24px",
                textAlign: "center",
                marginTop: "8px",
              }}
            >
              Order on WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}