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
      className="bg-[#1C1A14] border border-[#2A2519] hover:border-[#C9A94A] rounded-[16px] overflow-hidden flex flex-col cursor-default transition-all duration-300"
    >
      <div className="relative h-[260px] overflow-hidden flex-shrink-0">
        <motion.img
          src={fragrance.image}
          alt={fragrance.name}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full h-full object-cover block"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(11,11,11,0.85)_0%,rgba(11,11,11,0.1)_60%)]" />
        <span className="absolute top-4 left-4 rounded-[20px] border border-[#6B5A2E] bg-[rgba(11,11,11,0.6)] px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#C9A94A]">
          {fragrance.gender}
        </span>
      </div>

      <div className="p-7 flex flex-col gap-4 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-[32px] font-heading font-semibold leading-[1.1] text-[#F4EADE]">
              {fragrance.name}
            </h3>
            <p className="text-[16px] text-[#888888] leading-[1.7]">
              {fragrance.description}
            </p>
          </div>
        </div>

        <div className="h-px bg-[#2A2519]" />

        <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#6B5A2E]">
          {fragrance.notes}
        </p>

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-[14px] font-medium tracking-[0.08em] text-[#555555]">
            {fragrance.mood}
          </span>

          <motion.a
            href={WA_LINK(`Hi, I'd like to order ${fragrance.name} from Trademark Aroma`)}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-[20px] bg-[#C9A94A] px-4 py-2 text-[13px] font-semibold uppercase text-[#0B0B0B]"
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
    <section id="collection" className="px-6 py-[100px] max-w-[1200px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="font-body text-[13px] font-semibold uppercase tracking-[0.22em] text-[#6B5A2E] mb-4">
          The Collection
        </p>
        <h2 className="font-heading text-[clamp(42px,6vw,68px)] font-semibold text-[#F4EADE] leading-[1.1]">
          Signature Fragrances
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {fragrances.map((fragrance, index) => (
          <FragranceCard key={fragrance.id} fragrance={fragrance} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-16"
      >
        <motion.a
          href="/fragrances"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex rounded-[32px] border border-[#C9A94A] bg-transparent px-10 py-4 text-[14px] font-semibold uppercase tracking-[0.14em] text-[#C9A94A]"
        >
          View Full Collection
        </motion.a>
      </motion.div>
    </section>
  );
}
