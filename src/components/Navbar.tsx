import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { WA_LINK } from "../constants/theme";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Fragrances", path: "/fragrances" },
  { label: "Scent Guide", path: "/scent-guide" },
  { label: "Gift Finder", path: "/gift-finder" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
  { label: "About", path: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => location.pathname === path;

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/");
    }
    closeMenu();
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#2A2519]">
      <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-19">
          {/* Brand Section - Left */}
          <button
            onClick={handleHomeClick}
            className="flex flex-col no-underline group shrink-0 cursor-pointer bg-transparent border-none text-left p-0"
          >
            <span className="font-heading text-[22px] font-semibold tracking-widest bg-linear-to-r from-[#C9A94A] via-[#E8D5A3] to-[#C9A94A] bg-clip-text text-transparent leading-none">
              TRADEMARK AROMA
            </span>
            <span className="text-[10px] font-body font-light tracking-[0.25em] text-[#888888] uppercase mt-1 leading-none">
              Scent that defines you
            </span>
          </button>

          {/* Navigation Section - Right */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              // Special handling for Home link
              if (link.path === "/") {
                return (
                  <button
                    key={link.path}
                    onClick={handleHomeClick}
                    className={`font-body text-[13px] font-medium uppercase tracking-[0.08em] no-underline transition-colors duration-200 whitespace-nowrap cursor-pointer bg-transparent border-none ${
                      isActive(link.path)
                        ? "text-[#C9A94A]"
                        : "text-[#F4EADE] hover:text-[#C9A94A]"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              }
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`font-body text-[13px] font-medium uppercase tracking-[0.08em] no-underline transition-colors duration-200 whitespace-nowrap ${
                    isActive(link.path)
                      ? "text-[#C9A94A]"
                      : "text-[#F4EADE] hover:text-[#C9A94A]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={WA_LINK(
                "Hi, I'd like to place an order with Trademark Aroma",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#C9A94A] px-5 py-2 font-body text-[12px] font-bold uppercase tracking-[0.06em] text-[#0B0B0B] no-underline transition-all hover:opacity-90 hover:scale-105"
            >
              <ShoppingBag size={15} />
              Order
            </a>
          </div>

          {/* Mobile & Tablet Navigation - Hidden on large screens */}
          <div className="hidden md:flex lg:hidden items-center gap-4">
            <a
              href={WA_LINK(
                "Hi, I'd like to place an order with Trademark Aroma",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full bg-[#C9A94A] px-4 py-1.5 font-body text-[12px] font-bold uppercase tracking-[0.06em] text-[#0B0B0B] no-underline transition-all hover:opacity-90"
            >
              <ShoppingBag size={14} />
              Order
            </a>
            <button
              onClick={toggleMenu}
              className="text-[#F4EADE] hover:text-[#C9A94A] transition-colors p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* Mobile Menu Button - Only on small screens */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-[#F4EADE] hover:text-[#C9A94A] transition-colors p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#1C1A14] border-t border-[#2A2519] overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-2">
              {navLinks.map((link) => {
                // Special handling for Home link in mobile menu
                if (link.path === "/") {
                  return (
                    <button
                      key={link.path}
                      onClick={handleHomeClick}
                      className={`font-body text-[15px] font-medium uppercase tracking-[0.12em] no-underline transition-colors duration-200 py-2 border-b border-[#2A2519]/50 text-left cursor-pointer bg-transparent border-none w-full ${
                        isActive(link.path)
                          ? "text-[#C9A94A]"
                          : "text-[#F4EADE] hover:text-[#C9A94A]"
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                }
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={closeMenu}
                    className={`font-body text-[15px] font-medium uppercase tracking-[0.12em] no-underline transition-colors duration-200 py-2 border-b border-[#2A2519]/50 last:border-0 ${
                      isActive(link.path)
                        ? "text-[#C9A94A]"
                        : "text-[#F4EADE] hover:text-[#C9A94A]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href={WA_LINK(
                  "Hi, I'd like to place an order with Trademark Aroma",
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-full bg-[#C9A94A] px-6 py-3 font-body text-sm font-bold uppercase tracking-[0.08em] text-[#0B0B0B] no-underline transition-opacity hover:opacity-90 mt-3"
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