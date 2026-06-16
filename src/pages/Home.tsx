import { COLORS, FONTS } from "../constants/theme";
import { motion } from "framer-motion";

const fragrances = [
  {
    id: 1,
    name: "Noir Oud",
    gender: "For Him",
    description: "Dark elegance for unforgettable evenings.",
    notes: "Oud · Sandalwood · Amber",
    mood: "Powerful",
  },
  {
    id: 2,
    name: "Rose Soir",
    gender: "For Her",
    description: "A whisper of romance that lingers all night.",
    notes: "Rose · Musk · Vanilla",
    mood: "Romantic",
  },
  {
    id: 3,
    name: "Velvet Dusk",
    gender: "Unisex",
    description: "Where confidence meets quiet sophistication.",
    notes: "Bergamot · Cedar · Iris",
    mood: "Elegant",
  },
  {
    id: 4,
    name: "Gold Amber",
    gender: "For Him",
    description: "Warm, rich, and impossible to ignore.",
    notes: "Amber · Leather · Vetiver",
    mood: "Bold",
  },
  {
    id: 5,
    name: "Blanc Fleur",
    gender: "For Her",
    description: "Soft, pure, and effortlessly refined.",
    notes: "White Florals · Peach · Musk",
    mood: "Delicate",
  },
  {
    id: 6,
    name: "Midnight Oud",
    gender: "Unisex",
    description: "Inspired by moonlit Arabian nights.",
    notes: "Oud · Vanilla · Smoke",
    mood: "Mysterious",
  },
];

function FragranceCard({
  fragrance,
  index,
}: {
  fragrance: (typeof fragrances)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      style={{
        backgroundColor: COLORS.surface,
        border: `0.5px solid ${COLORS.surfaceLight}`,
        borderRadius: "16px",
        padding: "32px 28px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        cursor: "default",
        transition: "border-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = COLORS.goldAged;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor =
          COLORS.surfaceLight;
      }}
    >
      {/* Gender tag */}
      <span
        style={{
          fontFamily: FONTS.body,
          fontSize: "10px",
          fontWeight: 500,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: COLORS.goldAged,
        }}
      >
        {fragrance.gender}
      </span>

      {/* Name */}
      <h3
        style={{
          fontFamily: FONTS.heading,
          fontSize: "28px",
          fontWeight: 400,
          letterSpacing: "0.02em",
          color: COLORS.ivory,
          lineHeight: 1.1,
        }}
      >
        {fragrance.name}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: FONTS.body,
          fontSize: "13px",
          fontWeight: 300,
          lineHeight: 1.7,
          color: COLORS.textMuted,
        }}
      >
        {fragrance.description}
      </p>

      {/* Divider */}
      <div
        style={{
          height: "0.5px",
          backgroundColor: COLORS.surfaceLight,
        }}
      />

      {/* Notes */}
      <p
        style={{
          fontFamily: FONTS.body,
          fontSize: "11px",
          letterSpacing: "0.1em",
          color: COLORS.goldAged,
          textTransform: "uppercase",
        }}
      >
        {fragrance.notes}
      </p>

      {/* Mood + WhatsApp */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "auto",
        }}
      >
        <span
          style={{
            fontFamily: FONTS.body,
            fontSize: "11px",
            color: COLORS.textDim,
            letterSpacing: "0.06em",
          }}
        >
          {fragrance.mood}
        </span>

        <motion.a
          href={`https://wa.me/254114036858?text=Hi%2C%20I%27d%20like%20to%20order%20${encodeURIComponent(fragrance.name)}%20from%20Scents%20of%20Omark`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          style={{
            textDecoration: "none",
            fontFamily: FONTS.body,
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: COLORS.onyx,
            backgroundColor: COLORS.gold,
            padding: "8px 16px",
            borderRadius: "20px",
          }}
        >
          Order
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div style={{ backgroundColor: COLORS.onyx }}>
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontFamily: FONTS.body,
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: COLORS.goldAged,
            marginBottom: "24px",
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
            fontSize: "clamp(42px, 8vw, 88px)",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: "0.02em",
            color: COLORS.ivory,
            maxWidth: "800px",
            marginBottom: "28px",
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
            fontSize: "clamp(14px, 2vw, 17px)",
            fontWeight: 300,
            lineHeight: 1.8,
            color: COLORS.textMuted,
            maxWidth: "520px",
            marginBottom: "48px",
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
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: COLORS.onyx,
              backgroundColor: COLORS.gold,
              padding: "14px 32px",
              borderRadius: "32px",
            }}
          >
            Explore Fragrances
          </motion.a>

          <motion.a
            href="https://wa.me/254114036858?text=Hi%2C%20I%27d%20like%20to%20order%20a%20fragrance%20from%20Scents%20of%20Omark"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              textDecoration: "none",
              fontFamily: FONTS.body,
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: COLORS.gold,
              backgroundColor: "transparent",
              padding: "14px 32px",
              borderRadius: "32px",
              border: `0.5px solid ${COLORS.gold}`,
            }}
          >
            Order on WhatsApp
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              fontFamily: FONTS.body,
              fontSize: "10px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: COLORS.textDim,
            }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            style={{
              width: "1px",
              height: "40px",
              backgroundColor: COLORS.goldAged,
            }}
          />
        </motion.div>
      </section>
      {/* FEATURED FRAGRANCES */}
      <section
        style={{
          padding: "100px 24px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            textAlign: "center",
            marginBottom: "64px",
          }}
        >
          <p
            style={{
              fontFamily: FONTS.body,
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: COLORS.goldAged,
              marginBottom: "16px",
            }}
          >
            The Collection
          </p>
          <h2
            style={{
              fontFamily: FONTS.heading,
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 400,
              color: COLORS.ivory,
              letterSpacing: "0.02em",
              lineHeight: 1.15,
            }}
          >
            Signature Fragrances
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {fragrances.map((fragrance, index) => (
            <FragranceCard
              key={fragrance.id}
              fragrance={fragrance}
              index={index}
            />
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            textAlign: "center",
            marginTop: "56px",
          }}
        >
          <motion.a
            href="/fragrances"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              textDecoration: "none",
              fontFamily: FONTS.body,
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: COLORS.gold,
              border: `0.5px solid ${COLORS.goldAged}`,
              padding: "14px 36px",
              borderRadius: "32px",
            }}
          >
            View Full Collection
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
