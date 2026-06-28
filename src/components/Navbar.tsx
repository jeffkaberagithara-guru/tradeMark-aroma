import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { WA_LINK } from "../constants/theme";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Our Story", path: "/our-story" },
  { label: "Fragrances", path: "/fragrances" },
  { label: "Scent Guide", path: "/scent-guide" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#2A2519]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-[76px]">
          {/* Brand Section - Left */}
          <Link
            to="/"
            className="flex flex-col no-underline group flex-shrink-0"
          >
            {/* Main Title - Bold Gold Gradient */}
            <span className="font-heading text-[22px] font-bold tracking-[0.08em] bg-gradient-to-r from-[#C9A94A] via-[#E8D5A3] to-[#C9A94A] bg-clip-text text-transparent leading-none">
              TRADEMARK AROMA
            </span>

            {/* Motto - Clean & Minimal */}
            <span className="text-[10px] font-body font-light tracking-[0.3em] text-[#888888] uppercase mt-1 leading-none">
              Scent that defines you
            </span>
          </Link>

          {/* Navigation Section - Center/Right */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-sm font-medium uppercase tracking-[0.12em] no-underline transition-colors duration-200 ${
                  isActive(link.path)
                    ? "text-[#C9A94A]"
                    : "text-[#F4EADE] hover:text-[#C9A94A]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={WA_LINK(
                "Hi, I'd like to place an order with Trademark Aroma",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#C9A94A] px-6 py-2.5 font-body text-sm font-bold uppercase tracking-[0.08em] text-[#0B0B0B] no-underline transition-all hover:opacity-90 hover:scale-105"
            >
              <ShoppingBag size={16} />
              Order
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-[#F4EADE] hover:text-[#C9A94A] transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#1C1A14] border-t border-[#2A2519] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`font-body text-base font-medium uppercase tracking-[0.12em] no-underline transition-colors duration-200 ${
                    isActive(link.path)
                      ? "text-[#C9A94A]"
                      : "text-[#F4EADE] hover:text-[#C9A94A]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={WA_LINK(
                  "Hi, I'd like to place an order with Trademark Aroma",
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-full bg-[#C9A94A] px-6 py-3 font-body text-sm font-bold uppercase tracking-[0.08em] text-[#0B0B0B] no-underline transition-opacity hover:opacity-90 mt-2"
              >
                <ShoppingBag size={18} />
                Order Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}