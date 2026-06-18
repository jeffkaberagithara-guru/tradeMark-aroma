import { COLORS, FONTS, WA_LINK } from "../../constants/theme";
import { motion } from "framer-motion";

const fragrances = [
  {
    id: 1,
    name: "Noir Oud",
    gender: "For Him",
    description: "Dark elegance for unforgettable evenings.",
    notes: "Oud · Sandalwood · Amber",
    mood: "Powerful",
    image:
      "https://images.unsplash.com/photo-1588514912908-53f6e7932f2d?w=600&q=80",
  },
  {
    id: 2,
    name: "Rose Soir",
    gender: "For Her",
    description: "A whisper of romance that lingers all night.",
    notes: "Rose · Musk · Vanilla",
    mood: "Romantic",
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&q=80",
  },
  {
    id: 3,
    name: "Velvet Dusk",
    gender: "Unisex",
    description: "Where confidence meets quiet sophistication.",
    notes: "Bergamot · Cedar · Iris",
    mood: "Elegant",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683702?w=600&q=80",
  },
  {
    id: 4,
    name: "Gold Amber",
    gender: "For Him",
    description: "Warm, rich, and impossible to ignore.",
    notes: "Amber · Leather · Vetiver",
    mood: "Bold",
    image:
      "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=600&q=80",
  },
  {
    id: 5,
    name: "Blanc Fleur",
    gender: "For Her",
    description: "Soft, pure, and effortlessly refined.",
    notes: "White Florals · Peach · Musk",
    mood: "Delicate",
    image:
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=600&q=80",
  },
  {
    id: 6,
    name: "Midnight Oud",
    gender: "Unisex",
    description: "Inspired by moonlit Arabian nights.",
    notes: "Oud · Vanilla · Smoke",
    mood: "Mysterious",
    image:
      "https://images.unsplash.com/photo-1602928298849-325cec8771c0?w=600&q=80",
  },
];

type Fragrance = (typeof fragrances)[0];

function FragranceCard({
  fragrance,
  index,
}: {
  fragrance: Fragrance;
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
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
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
      {/* Image */}
      <div
        style={{
          position: "relative",
          height: "260px",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <motion.img
          src={fragrance.image}
          alt={fragrance.name}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(11,11,11,0.85) 0%, rgba(11,11,11,0.1) 60%)",
          }}
        />
        <span
          style={{
            position: "absolute",
            top: "16px",
            left: "16px",
            fontFamily: FONTS.body,
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: COLORS.gold,
            backgroundColor: "rgba(11,11,11,0.6)",
            padding: "6px 14px",
            borderRadius: "20px",
            border: `0.5px solid ${COLORS.goldAged}`,
          }}
        >
          {fragrance.gender}
        </span>
      </div>

      {/* Body */}
      <div
        style={{
          padding: "28px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          flex: 1,
        }}
      >
        <h3
          style={{
            fontFamily: FONTS.heading,
            fontSize: "32px",
            fontWeight: 600,
            letterSpacing: "0.02em",
            color: COLORS.ivory,
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          {fragrance.name}
        </h3>

        <p
          style={{
            fontFamily: FONTS.body,
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: 1.7,
            color: COLORS.textMuted,
            margin: 0,
          }}
        >
          {fragrance.description}
        </p>

        <div
          style={{
            height: "0.5px",
            backgroundColor: COLORS.surfaceLight,
            flexShrink: 0,
          }}
        />

        <p
          style={{
            fontFamily: FONTS.body,
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "0.12em",
            color: COLORS.goldAged,
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          {fragrance.notes}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "auto",
            paddingTop: "8px",
          }}
        >
          <span
            style={{
              fontFamily: FONTS.body,
              fontSize: "14px",
              fontWeight: 500,
              color: COLORS.textDim,
              letterSpacing: "0.08em",
            }}
          >
            {fragrance.mood}
          </span>

          <motion.a
            href={WA_LINK(
              `Hi, I'd like to order ${fragrance.name} from Scents of Omark`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            style={{
              textDecoration: "none",
              fontFamily: FONTS.body,
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: COLORS.onyx,
              backgroundColor: COLORS.gold,
              padding: "10px 22px",
              borderRadius: "20px",
            }}
          >
            Order
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function CollectionSection() {
  return (
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
            fontSize: "13px",
            fontWeight: 600,
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
            fontSize: "clamp(42px, 6vw, 68px)",
            fontWeight: 600,
            color: COLORS.ivory,
            letterSpacing: "0.02em",
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          Signature Fragrances
        </h2>
      </motion.div>

      {/* Cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "28px",
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

      {/* View all */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          textAlign: "center",
          marginTop: "64px",
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
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: COLORS.gold,
            border: `1px solid ${COLORS.goldAged}`,
            padding: "16px 40px",
            borderRadius: "32px",
            display: "inline-block",
          }}
        >
          View Full Collection
        </motion.a>
      </motion.div>
    </section>
  );
}