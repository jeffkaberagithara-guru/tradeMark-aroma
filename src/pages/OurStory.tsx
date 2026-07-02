import { motion } from "framer-motion";
import {
  Sparkles,
  Flame,
  Leaf,
  Droplet,
  Award,
  Heart,
  CheckCircle2,
} from "lucide-react";
import { WA_LINK } from "../constants/theme";

const highlights = [
  {
    icon: Sparkles,
    title: "Curated luxury",
    description:
      "Exclusive blends, thoughtful packaging, and an elevated fragrance discovery experience.",
  },
  {
    icon: Flame,
    title: "Crafted with intention",
    description:
      "Each scent is layered to create bold first impressions and graceful lasting warmth.",
  },
  {
    icon: Leaf,
    title: "Personalized service",
    description:
      "We listen to your style, mood, and occasion to guide your signature fragrance choice.",
  },
  {
    icon: Droplet,
    title: "Memorable rituals",
    description:
      "Fragrance becomes a ritual, not just a product: every scent tells a story.",
  },
];

const storySteps = [
  {
    title: "Born from passion",
    detail:
      "Trademark Aroma started as an invitation to experience fine fragrances through a personal lens.",
    icon: Award,
  },
  {
    title: "Made for presence",
    detail:
      "We design scents that feel confident, elegant, and unmistakably you.",
    icon: Heart,
  },
  {
    title: "Guided discovery",
    detail:
      "Every consultation is tailored, from mood to notes to the moment you want to own.",
    icon: CheckCircle2,
  },
];

export default function OurStory() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F4EADE]">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{
              filter: "brightness(0.35) saturate(0.7) contrast(1.1)",
            }}
          >
            <source
              src="/videos/4154241-hd_2048_1080_25fps.mp4"
              type="video/mp4"
            />
            {/* Fallback image if video doesn't load */}
            <img
              src="https://images.pexels.com/photos/14490634/pexels-photo-14490634.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Trademark Aroma story"
              className="w-full h-full object-cover"
            />
          </video>

          {/* Overlay Gradients for text readability */}
          <div className="absolute inset-0 bg-linear-to-b from-[rgba(11,11,11,0.2)] via-[rgba(11,11,11,0.5)] via-60% to-[rgba(11,11,11,0.95)]" />
          <div className="absolute inset-0 bg-linear-to-t from-[rgba(11,11,11,0.9)] via-transparent to-[rgba(11,11,11,0.1)]" />

          {/* Subtle gold accent overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-[rgba(201,169,74,0.08)] to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl"
          >
            <h1 className="mt-6 text-[clamp(42px,5vw,72px)] font-heading font-extrabold leading-[0.95] text-[#F4EADE]">
              Where fragrance becomes a{" "}
              <span className="text-[#C9A94A]">defining moment</span>.
            </h1>
            <div className="mt-6 space-y-4">
              <p className="text-[18px] leading-[1.9] text-[#DDDDDD] font-body">
                Trademark Aroma brings together thoughtful scent design and
                refined service, crafting memorable rituals for modern luxury.
              </p>
              <p className="text-[18px] leading-[1.9] text-[#DDDDDD] font-body">
                Our story is rooted in artistry, personal connection, and a love
                for scents that linger long after the first encounter.
              </p>
            </div>

            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-20 h-0.5 bg-[#C9A94A] mx-auto mt-8"
            />
          </motion.div>
        </div>
      </section>

      {/* Rest of the content */}
      <section className="px-4 sm:px-6 pb-16 max-w-6xl mx-auto -mt-8 relative z-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-4xl border border-[#2A2519] bg-[#1C1A14] p-8 sm:p-10 shadow-[0_20px_80px_-50px_rgba(0,0,0,0.7)]"
          >
            <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-[#6B5A2E] font-body">
              The Trademark approach
            </p>
            <h2 className="mt-5 text-3xl font-extrabold text-[#F4EADE] font-heading">
              A sensorial journey designed for your presence.
            </h2>
            <p className="mt-6 text-base leading-[1.95] text-[#BFBFBF] font-body">
              We believe fragrance should reflect the person behind it. Through
              curated consultations, elevated blends, and uncompromising
              craftsmanship, we make every scent feel personal, polished, and
              unforgettable.
            </p>
            <div className="mt-10 grid gap-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-3xl bg-[#11100f] p-5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#C9A94A]/15 text-[#C9A94A]">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-[#F4EADE] font-body">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm leading-[1.85] text-[#C5C5C5] font-body">
                        {item.description}
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
            {storySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="rounded-4xl border border-[#2A2519] bg-[#1C1A14] p-8"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#C9A94A]/15 text-[#C9A94A]">
                      <Icon size={22} />
                    </span>
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-[#6B5A2E] font-body">
                        Step {index + 1}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold text-[#F4EADE] font-heading">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-5 text-base leading-[1.85] text-[#C5C5C5] font-body">
                    {step.detail}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-24 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[40px] border border-[#2A2519] bg-[#1C1A14]/80 px-6 sm:px-10 py-12 sm:py-14 text-center shadow-[0_40px_120px_-70px_rgba(0,0,0,0.9)]"
        >
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-[#6B5A2E] font-body">
            Your next signature scent
          </p>
          <h2 className="mt-5 text-[clamp(32px,4vw,56px)] font-extrabold text-[#F4EADE] font-heading">
            We make luxury fragrance effortless and personal.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.95] text-[#D1D1D1] font-body">
            Whether you are searching for a scent for daywear, evening allure,
            or a memorable gift, Trademark Aroma is your guide to refined
            choices and unforgettable impressions.
          </p>
          <motion.a
            href={WA_LINK(
              "Hello Trademark Aroma, I would like a fragrance consultation",
            )}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 inline-flex rounded-[28px] bg-[#C9A94A] px-10 sm:px-14 py-4 text-[18px] font-extrabold uppercase tracking-[0.12em] text-[#0B0B0B] font-body shadow-[0_12px_40px_-18px_rgba(201,169,74,0.9)]"
          >
            Book a Consultation
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
