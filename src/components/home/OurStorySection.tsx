import { COLORS, FONTS } from "../../constants/theme";
import { motion } from "framer-motion";

export default function OurStorySection() {
  return (
    <section
      style={{
        padding: "100px 24px",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "80px",
        alignItems: "center",
      }}
    >
      {/* Left — image */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        style={{ position: "relative" }}
      >
        <div
          style={{
            borderRadius: "16px",
            overflow: "hidden",
            height: "560px",
          }}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1590156562745-5dd5f237bd7c?w=800&q=85"
            alt="Scents of Omark story"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
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
            bottom: "-28px",
            right: "-28px",
            backgroundColor: COLORS.surface,
            border: `1px solid ${COLORS.goldAged}`,
            borderRadius: "12px",
            padding: "20px 28px",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            backdropFilter: "blur(12px)",
          }}
        >
          <span
            style={{
              fontFamily: FONTS.heading,
              fontSize: "44px",
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
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: COLORS.textMuted,
            }}
          >
            Curated Scents
          </span>
        </motion.div>

        {/* Gold line accent */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            position: "absolute",
            top: "40px",
            left: "-14px",
            width: "3px",
            height: "100px",
            backgroundColor: COLORS.gold,
            transformOrigin: "top",
            borderRadius: "2px",
          }}
        />
      </motion.div>

      {/* Right — text */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "28px",
        }}
      >
        <p
          style={{
            fontFamily: FONTS.body,
            fontSize: "13px",
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
            fontSize: "clamp(38px, 4.5vw, 58px)",
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
            fontSize: "17px",
            fontWeight: 400,
            lineHeight: 1.9,
            color: COLORS.textMuted,
            margin: 0,
          }}
        >
          Scents of Omark was born from a single belief — that the right
          fragrance does not just smell good, it changes how you carry yourself.
          It is the last thing you put on and the first thing people remember.
        </p>

        <p
          style={{
            fontFamily: FONTS.body,
            fontSize: "17px",
            fontWeight: 400,
            lineHeight: 1.9,
            color: COLORS.textMuted,
            margin: 0,
          }}
        >
          Every bottle in our collection is handpicked for the man and woman who
          move through the world with intention. We do not sell fragrances. We
          curate identity.
        </p>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "48px",
            flexWrap: "wrap",
            paddingTop: "8px",
          }}
        >
          {[
            { number: "100+", label: "Fragrances" },
            { number: "3+", label: "Years curating" },
            { number: "1K+", label: "Happy clients" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: "42px",
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
                  fontSize: "13px",
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

        {/* Divider */}
        <div
          style={{
            height: "0.5px",
            backgroundColor: COLORS.surfaceLight,
          }}
        />

        {/* CTA */}
        <motion.a
          href="/our-story"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{
            textDecoration: "none",
            fontFamily: FONTS.body,
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: COLORS.onyx,
            backgroundColor: COLORS.gold,
            padding: "16px 36px",
            borderRadius: "32px",
            display: "inline-block",
            alignSelf: "flex-start",
          }}
        >
          Read Our Story
        </motion.a>
      </motion.div>
    </section>
  );
}