import { Link, useLocation, useNavigate } from "react-router-dom";
import { WA_LINK } from "../constants/theme";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "Fragrances", path: "/fragrances" },
  { label: "Scent Guide", path: "/scent-guide" },
  { label: "Gift Finder", path: "/gift-finder" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
  { label: "About", path: "/about" },
];

const socialLinks = [
  {
    icon: Facebook,
    href: "https://facebook.com/trademarkaroma",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/trademarkaroma",
    label: "Instagram",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/trademarkaroma",
    label: "Twitter",
  },
  {
    icon: Youtube,
    href: "https://youtube.com/trademarkaroma",
    label: "YouTube",
  },
];

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

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
  };

  return (
    <footer className="w-full bg-[#1C1A14] text-[#F4EADE] px-6 py-16 sm:px-10 lg:px-16">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12 lg:flex-row lg:justify-between lg:items-start">
        {/* Brand block */}
        <div className="flex flex-col flex-1 min-w-0 lg:max-w-[520px]">
          <p className="font-body text-[13px] font-semibold uppercase tracking-[0.22em] text-[#C9A94A] mb-4">
            TradeMark Aroma
          </p>

          <h2 className="font-heading text-[28px] sm:text-[36px] lg:text-[44px] font-bold leading-[1.1] text-[#F4EADE] mb-4">
            A fragrance experience that lingers long after the moment.
          </h2>

          <p className="font-body text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.8] text-[#888888]">
            Discover curated scents, warm service, and luxurious rituals crafted
            for the bold, the refined, and everyone in between.
          </p>

          <div className="flex items-center gap-4 mt-8">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#2A2519] flex items-center justify-center text-[#888888] hover:text-[#C9A94A] hover:border-[#C9A94A] transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          <a
            href={WA_LINK(
              "Hi, I'd like to order a fragrance from Trademark Aroma",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start mt-8 inline-block rounded-[28px] bg-[#C9A94A] px-8 py-4 font-body text-[13px] font-bold uppercase tracking-[0.12em] text-[#0B0B0B] no-underline hover:opacity-90 transition-opacity duration-200"
          >
            Connect on WhatsApp
          </a>
        </div>

        {/* Links and contact */}
        <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
          {/* Explore */}
          <div className="min-w-[140px]">
            <p className="font-body text-[13px] font-semibold uppercase tracking-[0.2em] text-[#6B5A2E] mb-5">
              Explore
            </p>
            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => {
                // Special handling for Home link
                if (link.path === "/") {
                  return (
                    <button
                      key={link.path}
                      onClick={handleHomeClick}
                      className="font-body text-[14px] sm:text-[15px] font-medium uppercase tracking-[0.06em] text-[#F4EADE] no-underline hover:text-[#C9A94A] transition-colors duration-200 text-left cursor-pointer bg-transparent border-none p-0"
                    >
                      {link.label}
                    </button>
                  );
                }
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="font-body text-[14px] sm:text-[15px] font-medium uppercase tracking-[0.06em] text-[#F4EADE] no-underline hover:text-[#C9A94A] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Contact */}
          <div className="min-w-[160px]">
            <p className="font-body text-[13px] font-semibold uppercase tracking-[0.2em] text-[#6B5A2E] mb-5">
              Contact
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+254114036858"
                className="flex items-center gap-3 font-body text-[15px] text-[#F4EADE] no-underline hover:text-[#C9A94A] transition-colors duration-200"
              >
                <Phone size={16} className="text-[#6B5A2E]" />
                +254 114 036 858
              </a>
              <a
                href="mailto:hello@trademarkaroma.com"
                className="flex items-center gap-3 font-body text-[15px] text-[#F4EADE] no-underline hover:text-[#C9A94A] transition-colors duration-200"
              >
                <Mail size={16} className="text-[#6B5A2E]" />
                hello@trademarkaroma.com
              </a>
              <div className="flex items-start gap-3 font-body text-[15px] text-[#F4EADE]">
                <MapPin
                  size={16}
                  className="text-[#6B5A2E] mt-1 flex-shrink-0"
                />
                <span>Nairobi, Kenya</span>
              </div>
              <p className="font-body text-[13px] text-[#888888] leading-[1.8] mt-2">
                Personal fragrance consultations
                <br />
                and same-day support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1200px] mx-auto mt-12 pt-6 border-t border-[#2A2519] flex flex-col gap-2 sm:flex-row sm:justify-between font-body text-[13px] text-[#888888]">
        <span>
          {`© ${new Date().getFullYear()} TradeMark Aroma. All rights reserved.`}
        </span>
        <span>Crafted for unforgettable presence.</span>
      </div>
    </footer>
  );
}