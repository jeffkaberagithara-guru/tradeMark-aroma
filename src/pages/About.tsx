import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Flame,
  Leaf,
  Droplet,
  Award,
  Heart,
  CheckCircle2,
  Users,
  Clock,
  Globe,
} from "lucide-react";
import { WA_LINK } from "../constants/theme";

const values = [
  {
    icon: Sparkles,
    title: "Curated Luxury",
    description:
      "Exclusive blends, thoughtful packaging, and an elevated fragrance discovery experience.",
  },
  {
    icon: Flame,
    title: "Crafted with Intention",
    description:
      "Each scent is layered to create bold first impressions and graceful lasting warmth.",
  },
  {
    icon: Leaf,
    title: "Personalized Service",
    description:
      "We listen to your style, mood, and occasion to guide your signature fragrance choice.",
  },
  {
    icon: Droplet,
    title: "Memorable Rituals",
    description:
      "Fragrance becomes a ritual, not just a product: every scent tells a story.",
  },
];

const stats = [
  { number: "100+", label: "Fragrances Curated", icon: Sparkles },
  { number: "3+", label: "Years of Excellence", icon: Clock },
  { number: "1K+", label: "Happy Clients", icon: Users },
  { number: "10+", label: "Countries Reached", icon: Globe },
];

const milestones = [
  {
    year: "2021",
    title: "Born from Passion",
    description:
      "Trademark Aroma started as an invitation to experience fine fragrances through a personal lens.",
    icon: Award,
  },
  {
    year: "2022",
    title: "Crafted for Presence",
    description:
      "We design scents that feel confident, elegant, and unmistakably you.",
    icon: Heart,
  },
  {
    year: "2023",
    title: "Guided Discovery",
    description:
      "Every consultation is tailored, from mood to notes to the moment you want to own.",
    icon: CheckCircle2,
  },
  {
    year: "2024",
    title: "Global Reach",
    description:
      "Expanding our presence to fragrance lovers around the world.",
    icon: Globe,
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F4EADE] pt-[72px]">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
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
              src="/videos/14160278_3840_2160_25fps.mp4"
              type="video/mp4"
            />
            <img
              src="https://images.pexels.com/photos/14490634/pexels-photo-14490634.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Trademark Aroma story"
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(11,11,11,0.2)] via-[rgba(11,11,11,0.5)] via-60% to-[rgba(11,11,11,0.95)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,11,11,0.9)] via-transparent to-[rgba(11,11,11,0.1)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl"
          >
            <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-[#C9A94A] font-body">
              Our Story
            </p>
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
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-20 h-0.5 bg-[#C9A94A] mx-auto mt-8"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 max-w-[1200px] mx-auto -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1C1A14] rounded-xl border border-[#2A2519] p-6 text-center"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-2 rounded-full bg-[#C9A94A]/10 text-[#C9A94A]">
                    <Icon size={24} />
                  </div>
                </div>
                <div className="font-heading text-3xl font-bold text-[#C9A94A]">
                  {stat.number}
                </div>
                <div className="font-body text-sm text-[#888888] uppercase tracking-[0.08em] mt-1">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-body text-[13px] font-semibold uppercase tracking-[0.22em] text-[#6B5A2E] mb-3">
            Our Values
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#F4EADE]">
            What We Stand For
          </h2>
          <p className="font-body text-[#888888] mt-4 max-w-2xl mx-auto">
            Principles that guide everything we do at Trademark Aroma
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1C1A14] rounded-xl border border-[#2A2519] p-6 hover:border-[#C9A94A] transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-[#C9A94A]/10 text-[#C9A94A] flex-shrink-0">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#F4EADE]">
                      {value.title}
                    </h3>
                    <p className="font-body text-[#888888] leading-relaxed mt-1">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 px-4 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-body text-[13px] font-semibold uppercase tracking-[0.22em] text-[#6B5A2E] mb-3">
            Our Journey
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#F4EADE]">
            Milestones
          </h2>
          <p className="font-body text-[#888888] mt-4 max-w-2xl mx-auto">
            Key moments that shaped Trademark Aroma
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#2A2519] hidden md:block"></div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-6 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 md:text-right">
                    <div className="bg-[#1C1A14] rounded-xl border border-[#2A2519] p-6 hover:border-[#C9A94A] transition-colors duration-300">
                      <div className="flex items-center gap-3 md:justify-end">
                        <span className="font-heading text-2xl font-bold text-[#C9A94A]">
                          {milestone.year}
                        </span>
                        <div className="p-2 rounded-full bg-[#C9A94A]/10 text-[#C9A94A]">
                          <Icon size={18} />
                        </div>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-[#F4EADE] mt-2">
                        {milestone.title}
                      </h3>
                      <p className="font-body text-[#888888] leading-relaxed mt-1">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-[#C9A94A] text-[#0B0B0B] z-10">
                    <div className="w-3 h-3 rounded-full bg-[#C9A94A]"></div>
                  </div>
                  <div className="flex-1 md:text-left">
                    {/* Empty space for alternating layout */}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1C1A14] rounded-2xl border border-[#2A2519] p-8 md:p-12 text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#F4EADE] mb-4">
            Ready to Find Your Signature Scent?
          </h2>
          <p className="font-body text-[#888888] max-w-2xl mx-auto mb-8">
            Let our fragrance experts guide you to the perfect scent that
            defines your presence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/scent-guide"
              className="px-8 py-3 rounded-full bg-[#C9A94A] text-[#0B0B0B] font-body font-semibold uppercase tracking-[0.08em] hover:opacity-90 transition-opacity"
            >
              Take the Scent Guide
            </Link>
            <a
              href={WA_LINK("Hi, I'd like a fragrance consultation from Trademark Aroma")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border border-[#2A2519] text-[#F4EADE] font-body font-semibold uppercase tracking-[0.08em] hover:border-[#C9A94A] hover:text-[#C9A94A] transition-colors"
            >
              Book a Consultation
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}