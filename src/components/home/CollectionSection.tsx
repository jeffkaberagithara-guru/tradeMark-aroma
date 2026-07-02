import { motion } from "framer-motion";
import { WA_LINK } from "../../constants/theme";

type Fragrance = {
  id: number;
  name: string;
  gender: string;
  description: string;
  notes: string;
  mood: string;
  image: string;
};

const fragrances: Fragrance[] = [
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
      className="bg-[#1C1A14] border border-[#2A2519] hover:border-[#C9A94A] rounded-2xl overflow-hidden flex flex-col cursor-default transition-colors duration-300"
    >
      {/* Image */}
      <div
        className="relative overflow-hidden shrink-0"
        style={{ height: "clamp(200px, 28vw, 260px)" }}
      >
        <motion.img
          src={fragrance.image}
          alt={fragrance.name}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full h-full object-cover block"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(11,11,11,0.85)_0%,rgba(11,11,11,0.08)_60%)]" />
        <span
          className="absolute top-4 left-4 rounded-[20px] border border-[#6B5A2E] bg-[rgba(11,11,11,0.6)] px-3 py-1.5 font-semibold uppercase text-[#C9A94A]"
          style={{
            fontSize: "clamp(10px, 1.4vw, 12px)",
            letterSpacing: "0.18em",
          }}
        >
          {fragrance.gender}
        </span>
      </div>

      {/* Body */}
      <div
        className="flex flex-col gap-4 flex-1"
        style={{ padding: "clamp(20px, 3vw, 28px)" }}
      >
        <h3
          className="font-heading font-semibold text-[#F4EADE] leading-[1.1] m-0"
          style={{ fontSize: "clamp(22px, 3.5vw, 32px)" }}
        >
          {fragrance.name}
        </h3>

        <p
          className="text-[#888888] m-0"
          style={{ fontSize: "clamp(14px, 1.8vw, 16px)", lineHeight: 1.7 }}
        >
          {fragrance.description}
        </p>

        <div className="h-px bg-[#2A2519] shrink-0" />

        <p
          className="font-semibold uppercase text-[#6B5A2E] m-0"
          style={{
            fontSize: "clamp(11px, 1.4vw, 13px)",
            letterSpacing: "0.12em",
          }}
        >
          {fragrance.notes}
        </p>

        <div className="mt-auto flex items-center justify-between pt-2">
          <span
            className="font-medium text-[#555555]"
            style={{
              fontSize: "clamp(12px, 1.6vw, 14px)",
              letterSpacing: "0.08em",
            }}
          >
            {fragrance.mood}
          </span>

          <motion.a
            href={WA_LINK(
              `Hi, I'd like to order ${fragrance.name} from Trademark Aroma`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center rounded-[20px] bg-[#C9A94A] text-[#0B0B0B] font-semibold uppercase no-underline"
            style={{
              padding: "clamp(8px, 1.4vw, 10px) clamp(16px, 2.5vw, 22px)",
              fontSize: "clamp(11px, 1.4vw, 13px)",
              letterSpacing: "0.1em",
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
      id="collection"
      className="w-full max-w-300 mx-auto"
      style={{ padding: "clamp(60px, 10vw, 100px) clamp(16px, 4vw, 24px)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
        style={{ marginBottom: "clamp(40px, 6vw, 64px)" }}
      >
        <p
          className="font-body font-semibold uppercase text-[#6B5A2E]"
          style={{
            fontSize: "clamp(11px, 1.5vw, 13px)",
            letterSpacing: "0.22em",
            marginBottom: "16px",
          }}
        >
          The Collection
        </p>
        <h2
          className="font-heading font-semibold text-[#F4EADE] leading-[1.1] m-0"
          style={{ fontSize: "clamp(34px, 6vw, 68px)" }}
        >
          Signature Fragrances
        </h2>
      </motion.div>

      {/* Responsive grid: 1 col → 2 col → 3 col */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        style={{ gap: "clamp(16px, 2.5vw, 28px)" }}
      >
        {fragrances.map((fragrance, index) => (
          <FragranceCard
            key={fragrance.id}
            fragrance={fragrance}
            index={index}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center"
        style={{ marginTop: "clamp(40px, 6vw, 64px)" }}
      >
        <motion.a
          href="/fragrances"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex rounded-4xl border border-[#C9A94A] bg-transparent text-[#C9A94A] font-semibold uppercase no-underline"
          style={{
            padding: "clamp(12px, 1.8vw, 16px) clamp(28px, 4vw, 40px)",
            fontSize: "clamp(12px, 1.5vw, 14px)",
            letterSpacing: "0.14em",
          }}
        >
          View Full Collection
        </motion.a>
      </motion.div>
    </section>
  );
}