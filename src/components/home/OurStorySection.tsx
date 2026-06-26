import { COLORS, FONTS } from "../../constants/theme";
import { motion } from "framer-motion";
import { useState } from "react";

const stats = [
  { number: "100+", label: "Fragrances" },
  { number: "3+", label: "Years curating" },
  { number: "1K+", label: "Happy clients" },
];

export default function OurStorySection() {
  const [videoError, setVideoError] = useState(false);

  return (
    <section
      className="w-full max-w-[1200px] mx-auto"
      style={{ padding: "clamp(60px, 10vw, 100px) clamp(16px, 4vw, 24px)" }}
    >
      <div
        className="grid grid-cols-1 lg:grid-cols-2 items-center"
        style={{ gap: "clamp(48px, 7vw, 80px)" }}
      >
        {/* Left — Video Block */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{
            position: "relative",
            paddingBottom: "40px",
            paddingRight: "40px",
          }}
          className="pl-4 lg:pl-0"
        >
          {/* Video Container */}
          <div
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              height: "clamp(280px, 48vw, 560px)",
              position: "relative",
              backgroundColor: COLORS.onyx,
            }}
          >
            {/* Background Video */}
            {!videoError ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
                onError={() => {
                  console.error("Video failed to load");
                  setVideoError(true);
                }}
              >
                <source
                  src="/videos/4154241-hd_2048_1080_25fps.mp4"
                  type="video/mp4"
                />
              </video>
            ) : (
              /* Fallback image if video fails */
              <img
                src="https://images.pexels.com/photos/14490634/pexels-photo-14490634.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Trademark Aroma story"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            )}

            {/* Subtle Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, rgba(11,11,11,0.1) 0%, rgba(11,11,11,0.3) 100%)",
                pointerEvents: "none",
              }}
            />

            {/* Decorative Gold Border Glow */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "16px",
                border: "1px solid rgba(201,169,74,0.15)",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Floating accent card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              backgroundColor: COLORS.surface,
              border: `1px solid ${COLORS.goldAged}`,
              borderRadius: "12px",
              padding: "clamp(14px, 2vw, 20px) clamp(18px, 3vw, 28px)",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              backdropFilter: "blur(12px)",
              minWidth: "130px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            <span
              style={{
                fontFamily: FONTS.heading,
                fontSize: "clamp(28px, 5vw, 44px)",
                fontWeight: 600,
                color: COLORS.gold,
                lineHeight: 1,
              }}
            >
              100+
            </span>
            <span
              style={{
                fontFamily: FONTS.body,
                fontSize: "clamp(10px, 1.4vw, 13px)",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: COLORS.textMuted,
              }}
            >
              Curated Scents
            </span>
          </motion.div>

          {/* Gold line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              position: "absolute",
              top: "40px",
              left: 0,
              width: "3px",
              height: "clamp(60px, 10vw, 100px)",
              backgroundColor: COLORS.gold,
              transformOrigin: "top",
              borderRadius: "2px",
            }}
            className="hidden sm:block"
          />
        </motion.div>

        {/* Right — text content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(18px, 3vw, 28px)",
          }}
        >
          <p
            style={{
              fontFamily: FONTS.body,
              fontSize: "clamp(11px, 1.5vw, 13px)",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: COLORS.goldAged,
              margin: 0,
            }}
          >
            Our Story
          </p>

          <h2
            style={{
              fontFamily: FONTS.heading,
              fontSize: "clamp(30px, 4.5vw, 58px)",
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: "0.02em",
              color: COLORS.ivory,
              margin: 0,
            }}
          >
            Fragrance is the most{" "}
            <span style={{ color: COLORS.gold, fontStyle: "italic" }}>
              personal luxury
            </span>{" "}
            of all.
          </h2>

          <p
            style={{
              fontFamily: FONTS.body,
              fontSize: "clamp(15px, 1.8vw, 17px)",
              fontWeight: 400,
              lineHeight: 1.9,
              color: COLORS.textMuted,
              margin: 0,
            }}
          >
            Trademark Aroma was born from a single belief — that the right
            fragrance does not just smell good, it changes how you carry
            yourself. It is the last thing you put on and the first thing people
            remember.
          </p>

          <p
            style={{
              fontFamily: FONTS.body,
              fontSize: "clamp(15px, 1.8vw, 17px)",
              fontWeight: 400,
              lineHeight: 1.9,
              color: COLORS.textMuted,
              margin: 0,
            }}
          >
            Every bottle in our collection is handpicked for the man and woman
            who move through the world with intention. We do not sell
            fragrances. We curate identity.
          </p>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "clamp(20px, 4vw, 48px)",
              flexWrap: "wrap",
              paddingTop: "8px",
            }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: FONTS.heading,
                    fontSize: "clamp(28px, 4vw, 42px)",
                    fontWeight: 600,
                    color: COLORS.gold,
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontFamily: FONTS.body,
                    fontSize: "clamp(11px, 1.4vw, 13px)",
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: COLORS.textMuted,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{ height: "0.5px", backgroundColor: COLORS.surfaceLight }}
          />

          <motion.a
            href="/our-story"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              textDecoration: "none",
              fontFamily: FONTS.body,
              fontSize: "clamp(12px, 1.5vw, 14px)",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: COLORS.onyx,
              backgroundColor: COLORS.gold,
              padding: "clamp(12px, 1.8vw, 16px) clamp(24px, 3.5vw, 36px)",
              borderRadius: "32px",
              display: "inline-block",
              alignSelf: "flex-start",
            }}
          >
            Read Our Story
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}