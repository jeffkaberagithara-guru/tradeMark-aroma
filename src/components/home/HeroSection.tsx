import { motion } from "framer-motion";
import { WA_LINK } from "../../constants/theme";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
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

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0B0B0B]/30 via-[#0B0B0B]/50 to-[#0B0B0B]" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(11,11,11,0.65)_100%)]" />

      <div className="relative z-20 px-6 pt-28 pb-40 sm:px-8 max-w-[900px] w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-[13px] font-semibold uppercase tracking-[0.24em] text-[#6B5A2E] mb-7"
        >
          Luxury Fragrances · Nairobi, Kenya
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-heading font-semibold text-white text-[clamp(52px,9vw,104px)] leading-[1.05] mb-8 shadow-[0_4px_40px_rgba(0,0,0,0.5)]"
        >
          Wear a scent that <span className="text-[#C9A94A] italic">tells your story.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-[clamp(16px,2vw,20px)] leading-[1.8] text-[#DDDDDD] max-w-[560px] mx-auto mb-12 shadow-[0_2px_16px_rgba(0,0,0,0.5)]"
        >
          Handpicked perfumes and colognes for the man and woman who understand
          that fragrance is the invisible, unforgettable part of their presence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="/fragrances"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center rounded-[32px] bg-[#C9A94A] px-8 py-4 text-[14px] font-body font-semibold uppercase tracking-[0.12em] text-[#0B0B0B]"
          >
            Explore Fragrances
          </motion.a>

          <motion.a
            href={WA_LINK("Hi, I'd like to order a fragrance from Trademark Aroma")}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center rounded-[32px] border border-[#C9A94A] bg-transparent px-8 py-4 text-[14px] font-body font-semibold uppercase tracking-[0.12em] text-[#C9A94A]"
          >
            Order on WhatsApp
          </motion.a>
        </motion.div>
      </div>

      <motion.a
        href="#collection"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-2 text-[#ffffffdd]"
      >
        <span className="font-body text-[12px] font-medium uppercase tracking-[0.22em] text-[#ffffffb3]">
          Scroll for more
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-8 h-8 rounded-[20px] border border-[rgba(255,255,255,0.45)] flex items-start justify-center pt-1.5 bg-[rgba(11,11,11,0.35)]"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-[#C9A94A]"
          />
        </motion.div>
      </motion.a>
    </section>
  );
}
