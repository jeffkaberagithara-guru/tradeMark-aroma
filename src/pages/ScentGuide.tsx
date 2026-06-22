import { motion } from "framer-motion";
import {
  Sparkles,
  Compass,
  Droplet,
  Flame,
  Leaf,
  Sun,
  CheckCircle2,
} from "lucide-react";
import { WA_LINK } from "../constants/theme";

const families = [
  {
    label: "Citrus",
    title: "Bright & Energizing",
    description:
      "Sparkling freshness for daytime confidence and radiant clarity.",
    notes: "Bergamot · Lemon · Grapefruit",
    icon: Sun,
  },
  {
    label: "Floral",
    title: "Soft & Romantic",
    description:
      "Petal-rich bouquets that feel elegant, comforting, and luminous.",
    notes: "Jasmine · Rose · Orange Blossom",
    icon: Sparkles,
  },
  {
    label: "Woody",
    title: "Warm & Grounded",
    description:
      "Earthy depth with cedar, vetiver, and luxurious resinous warmth.",
    notes: "Cedar · Sandalwood · Vetiver",
    icon: Leaf,
  },
  {
    label: "Oriental",
    title: "Spicy & Intense",
    description: "Smoky amber warmth and exotic spices for memorable evenings.",
    notes: "Amber · Vanilla · Patchouli",
    icon: Flame,
  },
  {
    label: "Fresh",
    title: "Clean & Uplifting",
    description: "Crisp aquatic energy for effortless daytime wear.",
    notes: "Marine · Green Tea · Mint",
    icon: Droplet,
  },
  {
    label: "Spicy",
    title: "Dynamic & Bold",
    description: "Fiery accents and gourmand warmth for a confident signature.",
    notes: "Black Pepper · Cinnamon · Cardamom",
    icon: Compass,
  },
];

const steps = [
  {
    icon: CheckCircle2,
    title: "Identify your mood",
    description:
      "Choose whether you want fresh clarity, warm depth, or romantic softness.",
  },
  {
    icon: Sun,
    title: "Explore scent families",
    description:
      "Match your personality to citrus, floral, woody, oriental, or spicy accords.",
  },
  {
    icon: Droplet,
    title: "Sample the notes",
    description:
      "Pay attention to top, heart, and base notes that linger beautifully.",
  },
  {
    icon: Sparkles,
    title: "Commit to confidence",
    description:
      "Select a fragrance that feels like an extension of your presence.",
  },
];

export default function ScentGuide() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F4EADE]">
      <section className="pt-25 px-6 pb-12 max-w-300 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-215 mx-auto"
        >
          <p className="text-[14px] font-extrabold tracking-[0.28em] uppercase text-[#6B5A2E] mb-6 font-body">
            Scent Guide
          </p>
          <h1 className="text-[clamp(48px,6.5vw,86px)] font-heading font-extrabold leading-[0.98] tracking-[-0.03em] text-[#F4EADE]">
            Find the fragrance language that defines you.
          </h1>
          <p className="mt-6 text-[20px] leading-[1.85] text-[#cccccc] font-body">
            Discover the families, notes, and signature stories behind each
            scent so you can shop with confidence and elegance.
          </p>
        </motion.div>
      </section>

      <section className="px-6 pb-16 max-w-300 mx-auto">
        <div className="grid gap-6 lg:grid-cols-3">
          {families.map((family) => {
            const Icon = family.icon;
            return (
              <motion.article
                key={family.label}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group rounded-4xl border border-[#2A2519] bg-[#1C1A14] p-8 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.8)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[13px] font-bold uppercase tracking-[0.28em] text-[#6B5A2E] font-body">
                      {family.label}
                    </p>
                    <h2 className="mt-4 text-[28px] font-extrabold text-[#F4EADE] font-heading">
                      {family.title}
                    </h2>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#C9A94A]/10 text-[#C9A94A]">
                    <Icon size={24} />
                  </div>
                </div>
                <p className="mt-6 text-[16px] leading-[1.85] text-[#bdbdbd] font-body">
                  {family.description}
                </p>
                <div className="mt-6 space-y-2">
                  <span className="inline-flex rounded-full bg-[#F4EADE]/10 px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#F4EADE] font-body">
                    {family.notes}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="px-6 pb-16 max-w-300 mx-auto">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-4xl border border-[#2A2519] bg-[#1C1A14] p-8"
          >
            <p className="text-[14px] font-extrabold uppercase tracking-[0.26em] text-[#6B5A2E] font-body">
              How to use this guide
            </p>
            <h2 className="mt-5 text-[34px] font-extrabold text-[#F4EADE] font-heading">
              A refined path to your signature scent.
            </h2>
            <p className="mt-4 text-[18px] leading-[1.9] text-[#cccccc] font-body">
              Browse the scent families, follow our selection steps, and
              discover notes that suit your style — from crisp daytime wear to
              intimate evening allure.
            </p>
            <div className="mt-10 space-y-4">
              {steps.map((step, index) => {
                const StepIcon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="flex gap-4 rounded-3xl border border-[#2A2519] bg-[#11100f] p-5"
                  >
                    <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-3xl bg-[#C9A94A]/10 text-[#C9A94A]">
                      <StepIcon size={20} />
                    </div>
                    <div>
                      <p className="text-[15px] font-extrabold text-[#F4EADE] font-heading">
                        {`0${index + 1}`} · {step.title}
                      </p>
                      <p className="mt-2 text-[16px] leading-[1.85] text-[#bdbdbd] font-body">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="rounded-4xl border border-[#2A2519] bg-[#1C1A14] p-8">
              <p className="text-[14px] font-extrabold uppercase tracking-[0.26em] text-[#6B5A2E] font-body">
                Signature Match
              </p>
              <h3 className="mt-5 text-[28px] font-extrabold text-[#F4EADE] font-heading">
                Choose the mood that fits you.
              </h3>
              <div className="mt-8 grid gap-4">
                {[
                  "Bold & Memorable",
                  "Soft & Romantic",
                  "Crisp & Clean",
                  "Warm & Spiced",
                ].map((label) => (
                  <div
                    key={label}
                    className="rounded-3xl border border-[#2A2519] bg-[#11100f] p-4"
                  >
                    <p className="text-[16px] font-semibold text-[#F4EADE] font-body">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-4xl border border-[#2A2519] bg-[#1C1A14] p-8">
              <p className="text-[14px] font-extrabold uppercase tracking-[0.26em] text-[#6B5A2E] font-body">
                Note Spotlight
              </p>
              <div className="mt-6 grid gap-3">
                {[
                  "Bergamot — adds sparkling brightness.",
                  "Jasmine — creates luminous romance.",
                  "Oud — delivers lush, lasting depth.",
                  "Vanilla — brings warm sensuality.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] bg-[#11100f] p-4 text-[16px] leading-[1.8] text-[#d5d5d5] font-body"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-24 bg-[#0b0b0b]">
        <div className="mx-auto flex max-w-300 flex-col gap-8 rounded-[40px] border border-[#2A2519] bg-[#1C1A14]/80 px-8 py-12 text-center shadow-[0_40px_120px_-70px_rgba(0,0,0,0.9)]">
          <div className="max-w-205 mx-auto">
            <p className="text-[14px] font-extrabold uppercase tracking-[0.28em] text-[#6B5A2E] font-body">
              Crafted Consultations
            </p>
            <h2 className="mt-5 text-[clamp(36px,5vw,64px)] font-extrabold text-[#F4EADE] font-heading">
              Select a scent that feels unmistakably yours.
            </h2>
            <p className="mt-5 text-[19px] leading-[1.9] text-[#cccccc] font-body">
              From first impression to final notes, we help you choose a
              fragrance that celebrates your mood, your style, and your story.
            </p>
          </div>

          <motion.a
            href={WA_LINK(
              "Hi, I'd like a scent recommendation from Trademark Aroma",
            )}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mx-auto inline-flex items-center justify-center rounded-[28px] bg-[#C9A94A] px-12 py-4 text-[18px] font-extrabold uppercase tracking-[0.12em] text-[#0B0B0B] font-body shadow-[0_12px_40px_-18px_rgba(201,169,74,0.9)]"
          >
            Request a Custom Match
          </motion.a>
        </div>
      </section>
    </div>
  );
}
