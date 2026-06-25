import { motion } from "framer-motion";
import { WA_LINK } from "../../constants/theme";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", minHeight: "650px", maxHeight: "920px" }}
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://videos.pexels.com/video-files/7034150/7034150-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
        <source
          src="https://videos.pexels.com/video-files/7034150/7034150-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-1 bg-gradient-to-b from-[rgba(11,11,11,0.2)] via-[rgba(11,11,11,0.4)] via-40% via-[rgba(11,11,11,0.85)] via-75% to-[rgba(11,11,11,1)]" />

      {/* Radial Vignette */}
      <div
        className="absolute top-0 left-0 w-full h-full z-1"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(11,11,11,0.5) 100%)",
        }}
      />

      {/* Content - Centered with flex */}
      <div className="relative z-2 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-[850px] flex flex-col items-center text-center">
          {/* Top Label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-[11px] sm:text-[12px] md:text-[13px] font-semibold tracking-[0.22em] uppercase text-[#6B5A2E] mb-3 sm:mb-4"
          >
            Luxury Fragrances · Nairobi, Kenya
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-heading text-[clamp(36px,7vw,80px)] font-semibold leading-[1.05] tracking-[0.02em] text-white mb-3 sm:mb-4"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.4)" }}
          >
            Wear a scent that{" "}
            <span className="text-[#C9A94A] italic">tells your story.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-body text-[clamp(14px,1.6vw,18px)] leading-[1.7] text-[#DDDDDD] max-w-[540px] mb-5 sm:mb-6 px-2"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
          >
            Handpicked perfumes and colognes for those who understand that
            fragrance is the invisible, unforgettable part of their presence.
          </motion.p>

          {/* CTA Buttons - Side by side */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-3.5 sm:gap-5 w-full sm:w-auto items-center justify-center"
          >
            <motion.a
              href="/fragrances"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto text-center font-body text-[clamp(12px,1.3vw,14px)] font-semibold tracking-[0.12em] uppercase text-[#0B0B0B] bg-[#C9A94A] px-7 sm:px-10 py-3 sm:py-3.5 rounded-[30px] no-underline transition-all hover:shadow-[0_4px_25px_rgba(201,169,74,0.35)]"
            >
              Explore Fragrances
            </motion.a>

            <motion.a
              href={WA_LINK(
                "Hi, I'd like to order a fragrance from Trademark Aroma",
              )}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto text-center font-body text-[clamp(12px,1.3vw,14px)] font-semibold tracking-[0.12em] uppercase text-[#C9A94A] bg-transparent border-2 border-[#C9A94A] px-7 sm:px-10 py-3 sm:py-3.5 rounded-[30px] no-underline transition-all hover:bg-[#C9A94A]/10"
            >
              Order on WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Fixed at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-5 sm:bottom-7 left-1/2 transform -translate-x-1/2 z-2 flex flex-col items-center gap-1.5 pointer-events-none"
      >
        <span className="font-body text-[10px] sm:text-[11px] font-medium tracking-[0.2em] uppercase text-white/35">
          Scroll
        </span>
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/25 bg-black/25 flex items-start justify-center pt-1.5 sm:pt-1.5">
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-[#C9A94A]"
          />
        </div>
      </motion.div>
    </section>
  );
}
