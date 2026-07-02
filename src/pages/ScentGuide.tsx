import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Compass,
  Droplet,
  Flame,
  Leaf,
  Sun,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Heart,
  Clock,
  Briefcase,
  Moon,
  Star,
  Gift,
  Zap,
  Flower2,
  Wind,
  Cloud,
  Trees,
  Snowflake,
  Globe,
  Sprout,
  Layers,
} from "lucide-react";
import { WA_LINK } from "../constants/theme";
import { Link } from "react-router-dom";

// Scent Families Data
const families = [
  {
    label: "Citrus",
    title: "Bright & Energizing",
    description:
      "Sparkling freshness for daytime confidence and radiant clarity.",
    notes: "Bergamot · Lemon · Grapefruit",
    icon: Sun,
    vibe: "Energetic",
  },
  {
    label: "Floral",
    title: "Soft & Romantic",
    description:
      "Petal-rich bouquets that feel elegant, comforting, and luminous.",
    notes: "Jasmine · Rose · Orange Blossom",
    icon: Sparkles,
    vibe: "Romantic",
  },
  {
    label: "Woody",
    title: "Warm & Grounded",
    description:
      "Earthy depth with cedar, vetiver, and luxurious resinous warmth.",
    notes: "Cedar · Sandalwood · Vetiver",
    icon: Leaf,
    vibe: "Grounded",
  },
  {
    label: "Oriental",
    title: "Spicy & Intense",
    description: "Smoky amber warmth and exotic spices for memorable evenings.",
    notes: "Amber · Vanilla · Patchouli",
    icon: Flame,
    vibe: "Intense",
  },
  {
    label: "Fresh",
    title: "Clean & Uplifting",
    description: "Crisp aquatic energy for effortless daytime wear.",
    notes: "Marine · Green Tea · Mint",
    icon: Droplet,
    vibe: "Clean",
  },
  {
    label: "Spicy",
    title: "Dynamic & Bold",
    description: "Fiery accents and gourmand warmth for a confident signature.",
    notes: "Black Pepper · Cinnamon · Cardamom",
    icon: Compass,
    vibe: "Bold",
  },
];

// Questionnaire Data with Icons
const questions = [
  {
    id: "occasion",
    question: "What's the primary occasion for your fragrance?",
    icon: Clock,
    options: [
      { value: "everyday", label: "Everyday Wear", icon: Sun },
      { value: "evening", label: "Evening Events", icon: Moon },
      { value: "work", label: "Professional Setting", icon: Briefcase },
      { value: "special", label: "Special Occasions", icon: Star },
      { value: "gift", label: "Gift for Someone", icon: Gift },
    ],
  },
  {
    id: "personality",
    question: "Which words best describe your personality?",
    icon: Heart,
    options: [
      { value: "bold", label: "Bold & Confident", icon: Zap },
      { value: "elegant", label: "Elegant & Refined", icon: Flower2 },
      { value: "fresh", label: "Fresh & Energetic", icon: Wind },
      { value: "warm", label: "Warm & Approachable", icon: Sun },
      { value: "mysterious", label: "Mysterious & Deep", icon: Cloud },
    ],
  },
  {
    id: "season",
    question: "Which season do you prefer for your fragrance?",
    icon: Sun,
    options: [
      { value: "spring", label: "Spring (Fresh & Floral)", icon: Flower2 },
      { value: "summer", label: "Summer (Light & Citrus)", icon: Sun },
      { value: "autumn", label: "Autumn (Warm & Spicy)", icon: Trees },
      { value: "winter", label: "Winter (Rich & Woody)", icon: Snowflake },
      { value: "all", label: "All Year Round", icon: Globe },
    ],
  },
  {
    id: "intensity",
    question: "How intense do you want your scent to be?",
    icon: Flame,
    options: [
      { value: "light", label: "Light & Subtle", icon: Sprout },
      { value: "moderate", label: "Moderate - Noticeable", icon: Layers },
      { value: "strong", label: "Strong - Long Lasting", icon: Layers },
      { value: "intense", label: "Intense - Statement Making", icon: Flame },
    ],
  },
];

// Fragrance Recommendations based on answers
const getRecommendations = (answers: Record<string, string>) => {
  const moodMap: Record<string, string[]> = {
    bold: ["Oriental", "Spicy"],
    elegant: ["Floral", "Woody"],
    fresh: ["Citrus", "Fresh"],
    warm: ["Woody", "Oriental"],
    mysterious: ["Oriental", "Woody"],
  };

  const occasionMap: Record<string, string[]> = {
    everyday: ["Fresh", "Citrus"],
    evening: ["Oriental", "Spicy"],
    work: ["Fresh", "Woody"],
    special: ["Floral", "Oriental"],
    gift: ["Floral", "Citrus"],
  };

  const seasonMap: Record<string, string[]> = {
    spring: ["Floral", "Fresh"],
    summer: ["Citrus", "Fresh"],
    autumn: ["Woody", "Spicy"],
    winter: ["Oriental", "Woody"],
    all: ["Citrus", "Floral", "Woody", "Oriental", "Fresh", "Spicy"],
  };

  const intensityMap: Record<string, string[]> = {
    light: ["Citrus", "Fresh"],
    moderate: ["Floral", "Woody"],
    strong: ["Woody", "Oriental"],
    intense: ["Oriental", "Spicy"],
  };

  // Collect recommendations from all answers
  const allRecommendations: string[] = [];
  if (answers.personality && moodMap[answers.personality]) {
    allRecommendations.push(...moodMap[answers.personality]);
  }
  if (answers.occasion && occasionMap[answers.occasion]) {
    allRecommendations.push(...occasionMap[answers.occasion]);
  }
  if (answers.season && seasonMap[answers.season]) {
    allRecommendations.push(...seasonMap[answers.season]);
  }
  if (answers.intensity && intensityMap[answers.intensity]) {
    allRecommendations.push(...intensityMap[answers.intensity]);
  }

  // Count frequency of each family
  const frequency: Record<string, number> = {};
  allRecommendations.forEach((family) => {
    frequency[family] = (frequency[family] || 0) + 1;
  });

  // Sort by frequency and get top 2
  const sorted = Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([family]) => family);

  return sorted.length > 0 ? sorted : ["Woody", "Oriental"];
};

// Sample fragrances by family
const getFragranceByFamily = (family: string) => {
  const fragranceMap: Record<string, { name: string; description: string }[]> =
    {
      Citrus: [
        {
          name: "Citrus Bloom",
          description: "Bright top notes with silky musk for daytime elegance.",
        },
        {
          name: "Fresh Splash",
          description: "Zesty lemon and grapefruit for an energizing lift.",
        },
      ],
      Floral: [
        {
          name: "Rose Soir",
          description: "A whisper of romance that lingers all night.",
        },
        {
          name: "Blanc Fleur",
          description:
            "Soft, pure, and effortlessly refined with white florals.",
        },
      ],
      Woody: [
        {
          name: "Velvet Dusk",
          description: "Where confidence meets quiet sophistication.",
        },
        {
          name: "Forest Mist",
          description:
            "Green vetiver and cedar evoke an unmistakable presence.",
        },
      ],
      Oriental: [
        {
          name: "Noir Oud",
          description: "Dark elegance for unforgettable evenings.",
        },
        {
          name: "Gold Amber",
          description: "Warm, rich, and impossible to ignore.",
        },
      ],
      Fresh: [
        {
          name: "Ocean Breeze",
          description: "Crisp marine notes for effortless daily wear.",
        },
        {
          name: "Green Tea",
          description: "Clean, uplifting, and refreshingly subtle.",
        },
      ],
      Spicy: [
        {
          name: "Midnight Oud",
          description: "Inspired by moonlit Arabian nights.",
        },
        {
          name: "Leather Velvet",
          description:
            "A smoky blend of leather and spices — bold and refined.",
        },
      ],
    };
  return fragranceMap[family] || [];
};

export default function ScentGuide() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleNext = () => {
    if (!selectedAnswer) return;

    const questionId = questions[currentQuestion].id;
    setAnswers((prev) => ({ ...prev, [questionId]: selectedAnswer }));

    if (currentQuestion === questions.length - 1) {
      setShowResults(true);
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer("");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      const prevQuestionId = questions[currentQuestion - 1].id;
      setCurrentQuestion((prev) => prev - 1);
      setSelectedAnswer(answers[prevQuestionId] || "");
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setSelectedAnswer("");
  };

  const recommendedFamilies = getRecommendations(answers);
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div
      className="min-h-screen bg-[#0B0B0B] text-[#F4EADE]"
      style={{ overflowX: "hidden" }}
    >
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
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
              src="/videos/8447340-hd_2048_1080_25fps.mp4"
              type="video/mp4"
            />
            {/* Fallback image if video doesn't load */}
            <img
              src="https://images.pexels.com/photos/842876/pexels-photo-842876.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Trademark Aroma scent guide"
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
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl"
          >
            <h1
              className="font-heading font-extrabold text-[#F4EADE]"
              style={{
                fontSize: "clamp(36px, 6.5vw, 86px)",
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
                marginTop: "12px",
              }}
            >
              Find the fragrance language that{" "}
              <span className="text-[#C9A94A]">defines you.</span>
            </h1>
            <p
              className="font-body text-[#DDDDDD]"
              style={{
                fontSize: "clamp(16px, 2vw, 20px)",
                lineHeight: 1.85,
                marginTop: "16px",
              }}
            >
              Discover the families, notes, and signature stories behind each
              scent so you can shop with confidence and elegance.
            </p>

            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-20 h-0.5 bg-[#C9A94A] mx-auto mt-6"
            />
          </motion.div>
        </div>
      </section>

      {/* Scent Families Grid */}
      <section
        className="w-full max-w-300 mx-auto relative z-10 -mt-4"
        style={{ padding: "0 clamp(16px, 4vw, 24px) clamp(48px, 8vw, 80px)" }}
      >
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "clamp(16px, 2.5vw, 24px)" }}
        >
          {families.map((family) => {
            const Icon = family.icon;
            return (
              <motion.article
                key={family.label}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-[#2A2519] bg-[#1C1A14]"
                style={{ padding: "clamp(24px, 3vw, 32px)" }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p
                      className="font-body font-bold uppercase text-[#6B5A2E] m-0"
                      style={{
                        fontSize: "clamp(11px, 1.4vw, 13px)",
                        letterSpacing: "0.28em",
                      }}
                    >
                      {family.label}
                    </p>
                    <h2
                      className="font-heading font-extrabold text-[#F4EADE] m-0"
                      style={{
                        fontSize: "clamp(22px, 3vw, 28px)",
                        marginTop: "12px",
                      }}
                    >
                      {family.title}
                    </h2>
                  </div>
                  <div
                    className="shrink-0 flex items-center justify-center rounded-[20px] bg-[#C9A94A]/10 text-[#C9A94A]"
                    style={{ width: "52px", height: "52px" }}
                  >
                    <Icon size={22} />
                  </div>
                </div>
                <p
                  className="font-body text-[#bdbdbd]"
                  style={{
                    fontSize: "clamp(14px, 1.8vw, 16px)",
                    lineHeight: 1.85,
                    marginTop: "20px",
                  }}
                >
                  {family.description}
                </p>
                <div style={{ marginTop: "20px" }}>
                  <span
                    className="inline-flex rounded-full bg-[#F4EADE]/10 text-[#F4EADE] font-body font-semibold uppercase"
                    style={{
                      padding: "8px 16px",
                      fontSize: "clamp(11px, 1.4vw, 13px)",
                      letterSpacing: "0.16em",
                    }}
                  >
                    {family.notes}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Interactive Questionnaire */}
      <section
        className="w-full max-w-300 mx-auto relative z-10"
        style={{ padding: "0 clamp(16px, 4vw, 24px) clamp(48px, 8vw, 80px)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-4xl border border-[#2A2519] bg-[#1C1A14] overflow-hidden"
          style={{ padding: "clamp(32px, 5vw, 48px)" }}
        >
          <div className="text-center mb-8">
            <p
              className="font-body font-extrabold uppercase text-[#6B5A2E]"
              style={{
                fontSize: "clamp(11px, 1.5vw, 13px)",
                letterSpacing: "0.28em",
              }}
            >
              Find Your Perfect Scent
            </p>
            <h2
              className="font-heading font-extrabold text-[#F4EADE]"
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                marginTop: "12px",
              }}
            >
              {!showResults ? "Fragrance Questionnaire" : "Your Perfect Match!"}
            </h2>
            <p
              className="font-body text-[#888888]"
              style={{
                fontSize: "clamp(14px, 1.6vw, 17px)",
                marginTop: "8px",
              }}
            >
              {!showResults
                ? "Answer a few questions and we'll recommend the perfect fragrance for you"
                : "Based on your answers, here are your recommended fragrances"}
            </p>
          </div>

          {!showResults ? (
            <>
              {/* Progress Bar */}
              <div className="w-full bg-[#2A2519] rounded-full h-2 mb-8">
                <div
                  className="bg-[#C9A94A] h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Question */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-[#C9A94A]/10 text-[#C9A94A]">
                        {(() => {
                          const Icon = questions[currentQuestion].icon;
                          return <Icon size={24} />;
                        })()}
                      </div>
                      <span
                        className="font-body text-[#6B5A2E] font-semibold"
                        style={{
                          fontSize: "clamp(12px, 1.4vw, 14px)",
                          letterSpacing: "0.12em",
                        }}
                      >
                        Question {currentQuestion + 1} of {questions.length}
                      </span>
                    </div>
                    <h3
                      className="font-heading font-semibold text-[#F4EADE]"
                      style={{
                        fontSize: "clamp(20px, 3vw, 28px)",
                      }}
                    >
                      {questions[currentQuestion].question}
                    </h3>
                  </div>

                  {/* Options with Icons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {questions[currentQuestion].options.map((option) => {
                      const OptionIcon = option.icon;
                      return (
                        <motion.button
                          key={option.value}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleAnswerSelect(option.value)}
                          className={`text-left p-4 rounded-2xl border-2 transition-all font-body flex items-center gap-3 ${
                            selectedAnswer === option.value
                              ? "border-[#C9A94A] bg-[#C9A94A]/10"
                              : "border-[#2A2519] bg-transparent hover:border-[#6B5A2E]"
                          }`}
                        >
                          <div
                            className={`p-1.5 rounded-lg ${
                              selectedAnswer === option.value
                                ? "text-[#C9A94A]"
                                : "text-[#6B5A2E]"
                            }`}
                          >
                            <OptionIcon size={20} />
                          </div>
                          <span className="text-[#F4EADE] font-medium">
                            {option.label}
                          </span>
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between gap-4">
                    <button
                      onClick={handlePrevious}
                      disabled={currentQuestion === 0}
                      className={`flex items-center gap-2 px-6 py-2.5 rounded-[20px] font-body font-semibold transition-all ${
                        currentQuestion === 0
                          ? "opacity-30 cursor-not-allowed"
                          : "hover:bg-[#2A2519]"
                      }`}
                      style={{
                        color: "#888888",
                        fontSize: "clamp(12px, 1.3vw, 14px)",
                      }}
                    >
                      <ArrowLeft size={18} />
                      Previous
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={!selectedAnswer}
                      className={`flex items-center gap-2 px-8 py-2.5 rounded-[20px] font-body font-semibold transition-all ${
                        !selectedAnswer
                          ? "opacity-40 cursor-not-allowed bg-[#2A2519]"
                          : "bg-[#C9A94A] text-[#0B0B0B] hover:scale-105"
                      }`}
                      style={{
                        fontSize: "clamp(12px, 1.3vw, 14px)",
                      }}
                    >
                      {currentQuestion === questions.length - 1 ? (
                        "Get Results"
                      ) : (
                        <>
                          Next
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </>
          ) : (
            /* Results */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C9A94A]/20 text-[#C9A94A] mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <p
                  className="font-body text-[#888888]"
                  style={{ fontSize: "clamp(14px, 1.6vw, 16px)" }}
                >
                  We've found the perfect fragrance families for you!
                </p>
              </div>

              {/* Recommended Families */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {recommendedFamilies.map((familyLabel) => {
                  const family = families.find((f) => f.label === familyLabel);
                  if (!family) return null;
                  const Icon = family.icon;
                  const fragrances = getFragranceByFamily(familyLabel);

                  return (
                    <motion.div
                      key={familyLabel}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="rounded-[20px] border-2 border-[#C9A94A] bg-[#C9A94A]/5 p-6"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-full bg-[#C9A94A]/20 text-[#C9A94A]">
                          <Icon size={24} />
                        </div>
                        <div>
                          <h4
                            className="font-heading font-bold text-[#F4EADE]"
                            style={{ fontSize: "clamp(18px, 2vw, 22px)" }}
                          >
                            {family.title}
                          </h4>
                          <p className="font-body text-[#6B5A2E] text-sm uppercase tracking-widest">
                            {family.label}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {fragrances.map((frag) => (
                          <div
                            key={frag.name}
                            className="bg-[#1C1A14] rounded-xl p-3 border border-[#2A2519]"
                          >
                            <p className="font-heading font-semibold text-[#F4EADE]">
                              {frag.name}
                            </p>
                            <p className="font-body text-[#888888] text-sm">
                              {frag.description}
                            </p>
                          </div>
                        ))}
                      </div>

                      <Link
                        to="/fragrances"
                        className="mt-4 inline-block w-full text-center font-body font-semibold uppercase text-[#C9A94A] border border-[#C9A94A] rounded-[20px] px-4 py-2 hover:bg-[#C9A94A] hover:text-[#0B0B0B] transition-all"
                        style={{
                          fontSize: "clamp(11px, 1.2vw, 13px)",
                          letterSpacing: "0.1em",
                        }}
                      >
                        View All {family.label} Fragrances
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href={WA_LINK(
                    "Hi, I'd like a scent recommendation from Trademark Aroma based on my questionnaire answers",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-8 py-3 rounded-[28px] bg-[#25D366] text-white font-body font-semibold uppercase no-underline transition-all"
                  style={{
                    fontSize: "clamp(12px, 1.3vw, 14px)",
                    letterSpacing: "0.1em",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Get Personal Consultation
                </motion.a>
                <button
                  onClick={handleReset}
                  className="px-8 py-3 rounded-[28px] border border-[#2A2519] text-[#888888] font-body font-semibold uppercase hover:bg-[#1C1A14] transition-all"
                  style={{
                    fontSize: "clamp(12px, 1.3vw, 14px)",
                    letterSpacing: "0.1em",
                  }}
                >
                  Retake Questionnaire
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Bottom CTA */}
      <section
        className="w-full relative z-10"
        style={{
          padding: "0 clamp(16px, 4vw, 24px) clamp(64px, 10vw, 96px)",
          backgroundColor: "#0b0b0b",
        }}
      >
        <div
          className="max-w-300 mx-auto rounded-[32px] border border-[#2A2519] bg-[#1C1A14]/80 text-center"
          style={{ padding: "clamp(40px, 6vw, 64px) clamp(24px, 5vw, 48px)" }}
        >
          <p
            className="font-body font-extrabold uppercase text-[#6B5A2E] m-0"
            style={{
              fontSize: "clamp(12px, 1.6vw, 14px)",
              letterSpacing: "0.28em",
            }}
          >
            Crafted Consultations
          </p>
          <h2
            className="font-heading font-extrabold text-[#F4EADE] m-0"
            style={{ fontSize: "clamp(28px, 5vw, 64px)", marginTop: "20px" }}
          >
            Select a scent that feels unmistakably yours.
          </h2>
          <p
            className="font-body text-[#cccccc]"
            style={{
              fontSize: "clamp(15px, 1.8vw, 19px)",
              lineHeight: 1.9,
              maxWidth: "680px",
              margin: "20px auto 0",
            }}
          >
            From first impression to final notes, we help you choose a fragrance
            that celebrates your mood, your style, and your story.
          </p>
          <motion.a
            href={WA_LINK(
              "Hi, I'd like a scent recommendation from Trademark Aroma",
            )}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center rounded-[28px] bg-[#C9A94A] text-[#0B0B0B] font-body font-extrabold uppercase"
            style={{
              padding: "clamp(14px, 2vw, 18px) clamp(32px, 5vw, 48px)",
              fontSize: "clamp(14px, 1.6vw, 18px)",
              letterSpacing: "0.12em",
              marginTop: "36px",
              boxShadow: "0 12px 40px -18px rgba(201,169,74,0.9)",
            }}
          >
            Request a Custom Match
          </motion.a>
        </div>
      </section>
    </div>
  );
}
