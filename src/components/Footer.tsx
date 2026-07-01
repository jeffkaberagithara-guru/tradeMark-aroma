import { Link } from "react-router-dom";
import { WA_LINK } from "../constants/theme";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "Our Story", path: "/our-story" },
  { label: "Fragrances", path: "/fragrances" },
  { label: "Scent Guide", path: "/scent-guide" },
  { label: "Gift Finder", path: "/gift-finder" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
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
            <div className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-body text-[14px] sm:text-[15px] font-semibold uppercase tracking-[0.06em] text-[#F4EADE] no-underline hover:text-[#C9A94A] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="min-w-[160px]">
            <p className="font-body text-[13px] font-semibold uppercase tracking-[0.2em] text-[#6B5A2E] mb-5">
              Contact
            </p>
            <a
              href={WA_LINK("Hi, I'd like to connect with Trademark Aroma")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[15px] sm:text-[16px] lg:text-[17px] font-semibold text-[#F4EADE] no-underline block mb-4 hover:text-[#C9A94A] transition-colors duration-200"
            >
              +254 114 036 858
            </a>
            <p className="font-body text-[13px] sm:text-[14px] text-[#888888] leading-[1.8] max-w-[260px]">
              Nairobi, Kenya · Personal fragrance consultations and same-day
              support.
            </p>
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