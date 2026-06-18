import { COLORS, FONTS, WA_LINK } from "../../constants/theme";
import { motion } from "framer-motion";

export default function PersonalServiceSection() {
  return (
    <section
      style={{
        padding: "120px 24px",
        position: "relative",
        overflow: "hidden",
        marginTop: "40px",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=1600&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(11,11,11,0.88)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "680px",
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
          Personal Service
        </p>

        <h2
          style={{
            fontFamily: FONTS.heading,
            fontSize: "clamp(40px, 5.5vw, 72px)",
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: "0.02em",
            color: COLORS.ivory,
            margin: 0,
          }}
        >
          Your signature scent is{" "}
          <span style={{ color: COLORS.gold, fontStyle: "italic" }}>
            one message away.
          </span>
        </h2>

        <p
          style={{
            fontFamily: FONTS.body,
            fontSize: "17px",
            fontWeight: 400,
            lineHeight: 1.8,
            color: COLORS.textMuted,
            maxWidth: "480px",
            margin: 0,
          }}
        >
          Not sure which fragrance suits you? Speak directly with our fragrance
          consultant. We will find your perfect scent, confirm availability, and
          arrange fast delivery across Nairobi.
        </p>

        <div
          style={{
            width: "48px",
            height: "1px",
            backgroundColor: COLORS.goldAged,
          }}
        />

        {/* WhatsApp button */}
        <motion.a
          href={WA_LINK(
            "Hi, I'd like help finding my signature scent from Scents of Omark",
          )}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontFamily: FONTS.body,
            fontSize: "15px",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#FFFFFF",
            backgroundColor: "#25D366",
            padding: "18px 40px",
            borderRadius: "32px",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Chat with us on WhatsApp
        </motion.a>

        <p
          style={{
            fontFamily: FONTS.body,
            fontSize: "14px",
            fontWeight: 400,
            color: COLORS.textDim,
            letterSpacing: "0.08em",
            margin: 0,
          }}
        >
          Fast delivery across Nairobi · Same day available
        </p>
      </motion.div>
    </section>
  );
}