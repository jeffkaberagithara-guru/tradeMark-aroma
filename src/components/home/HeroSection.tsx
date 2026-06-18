import { COLORS, FONTS, WA_LINK } from "../../constants/theme";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Background video — zIndex 0 */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
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

      {/* Cinematic gradient overlay — zIndex 1 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(11,11,11,0.3) 0%, rgba(11,11,11,0.5) 40%, rgba(11,11,11,0.88) 80%, rgba(11,11,11,1) 100%)",
        }}
      />

      {/* Side vignette — zIndex 1 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(11,11,11,0.65) 100%)",
        }}
      />

      {/* Hero content — zIndex 2 */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "120px 24px 160px",
          maxWidth: "900px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontFamily: FONTS.body,
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: COLORS.goldAged,
            margin: "0 0 28px 0",
          }}
        >
          Luxury Fragrances · Nairobi, Kenya
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          style={{
            fontFamily: FONTS.heading,
            fontSize: "clamp(52px, 9vw, 104px)",
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "0.02em",
            color: "#FFFFFF",
            margin: "0 0 32px 0",
            textShadow: "0 4px 40px rgba(0,0,0,0.5)",
          }}
        >
          Wear a scent that{" "}
          <span style={{ color: COLORS.gold, fontStyle: "italic" }}>
            tells your story.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            fontFamily: FONTS.body,
            fontSize: "clamp(16px, 2vw, 20px)",
            fontWeight: 400,
            lineHeight: 1.8,
            color: "#DDDDDD",
            maxWidth: "560px",
            margin: "0 0 52px 0",
            textShadow: "0 2px 16px rgba(0,0,0,0.5)",
          }}
        >
          Handpicked perfumes and colognes for the man and woman who understand
          that fragrance is the invisible, unforgettable part of their presence.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <motion.a
            href="/fragrances"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              textDecoration: "none",
              fontFamily: FONTS.body,
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: COLORS.onyx,
              backgroundColor: COLORS.gold,
              padding: "16px 36px",
              borderRadius: "32px",
              display: "inline-block",
            }}
          >
            Explore Fragrances
          </motion.a>

          <motion.a
            href={WA_LINK(
              "Hi, I'd like to order a fragrance from Scents of Omark",
            )}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              textDecoration: "none",
              fontFamily: FONTS.body,
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: COLORS.gold,
              backgroundColor: "transparent",
              padding: "16px 36px",
              borderRadius: "32px",
              border: `1px solid ${COLORS.gold}`,
              display: "inline-block",
            }}
          >
            Order on WhatsApp
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator — pointerEvents none, never blocks clicks */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: "36px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontFamily: FONTS.body,
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: "easeInOut",
          }}
          style={{
            width: "1px",
            height: "36px",
            backgroundColor: COLORS.goldAged,
            opacity: 0.5,
          }}
        />
      </motion.div>
    </section>
  );
}