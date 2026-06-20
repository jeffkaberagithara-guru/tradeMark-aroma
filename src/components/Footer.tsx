import { Link } from "react-router-dom";
import { WA_LINK } from "../constants/theme";

const footerLinks = [
  { label: "Our Story", path: "/our-story" },
  { label: "Fragrances", path: "/fragrances" },
  { label: "Scent Guide", path: "/scent-guide" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1C1A14] text-[#F4EADE] font-body px-6 py-10 sm:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-start">
        <div className="flex-1 min-w-0">
          <div className="text-[14px] font-semibold uppercase tracking-[0.22em] text-[#C9A94A] mb-4">
            Trademark Aroma
          </div>
          <h2 className="text-[clamp(40px,4vw,52px)] font-heading font-bold leading-[1.1] text-[#F4EADE] mb-5">
            A fragrance experience that lingers long after the moment.
          </h2>
          <p className="text-[18px] leading-8 text-[#888888] max-w-[520px]">
            Discover curated scents, warm service, and luxurious rituals crafted for the bold, the refined, and everyone in between.
          </p>
          <a
            href={WA_LINK("Hi, I'd like to order a fragrance from Trademark Aroma")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 rounded-[28px] bg-[#C9A94A] px-8 py-4 text-[16px] font-bold uppercase tracking-[0.12em] text-[#0B0B0B]"
          >
            Connect on WhatsApp
          </a>
        </div>

        <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
          <div className="min-w-[140px]">
            <div className="text-[14px] font-semibold uppercase tracking-[0.2em] text-[#6B5A2E] mb-4">
              Explore
            </div>
            <div className="grid gap-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-[16px] font-semibold uppercase tracking-[0.01em] text-[#F4EADE] transition-colors duration-200 hover:text-[#C9A94A]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="min-w-[160px]">
            <div className="text-[14px] font-semibold uppercase tracking-[0.2em] text-[#6B5A2E] mb-4">
              Contact
            </div>
            <a
              href={WA_LINK("Hi, I'd like to order a fragrance from Trademark Aroma")}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[16px] font-semibold text-[#F4EADE] mb-4 hover:text-[#C9A94A]"
            >
              +254 114 036 858
            </a>
            <p className="text-[15px] text-[#888888] leading-8 max-w-[260px]">
              Nairobi, Kenya · Personal fragrance consultations and same-day support.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-[#2A2519] pt-7 flex flex-col gap-2 sm:flex-row sm:justify-between text-[#888888] text-sm">
        <span>© {new Date().getFullYear()} Trademark Aroma. All rights reserved.</span>
        <span>Crafted for unforgettable presence.</span>
      </div>
    </footer>
  );
}
