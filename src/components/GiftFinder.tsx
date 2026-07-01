import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  User,
  Calendar,
  Heart,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  ShoppingBag,
} from "lucide-react";
import { WA_LINK } from "../constants/theme";

const giftQuestions = [
  {
    id: "recipient",
    question: "Who is this gift for?",
    icon: User,
    options: [
      { value: "him", label: "For Him" },
      { value: "her", label: "For Her" },
      { value: "unisex", label: "Unisex" },
    ],
  },
  {
    id: "occasion",
    question: "What's the occasion?",
    icon: Calendar,
    options: [
      { value: "birthday", label: "Birthday" },
      { value: "anniversary", label: "Anniversary" },
      { value: "valentine", label: "Valentine's Day" },
      { value: "graduation", label: "Graduation" },
      { value: "just-because", label: "Just Because" },
    ],
  },
  {
    id: "personality",
    question: "What's their personality like?",
    icon: Heart,
    options: [
      { value: "bold", label: "Bold & Confident" },
      { value: "elegant", label: "Elegant & Refined" },
      { value: "fresh", label: "Fresh & Energetic" },
      { value: "warm", label: "Warm & Approachable" },
      { value: "mysterious", label: "Mysterious & Deep" },
    ],
  },
];

const giftResults: Record<string, any> = {
  him: {
    bold: {
      name: "Noir Oud",
      description: "Dark elegance for unforgettable evenings",
      price: "$120",
      image:
        "https://images.pexels.com/photos/842876/pexels-photo-842876.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
      gender: "For Him",
    },
    elegant: {
      name: "Velvet Dusk",
      description: "Where confidence meets quiet sophistication",
      price: "$135",
      image:
        "https://images.pexels.com/photos/4666750/pexels-photo-4666750.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
      gender: "For Him",
    },
    fresh: {
      name: "Forest Mist",
      description: "Green vetiver and cedar for unmistakable presence",
      price: "$125",
      image:
        "https://images.pexels.com/photos/175687/pexels-photo-175687.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
      gender: "For Him",
    },
    warm: {
      name: "Gold Amber",
      description: "Warm, rich, and impossible to ignore",
      price: "$125",
      image:
        "https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
      gender: "For Him",
    },
    mysterious: {
      name: "Midnight Oud",
      description: "Inspired by moonlit Arabian nights",
      price: "$130",
      image:
        "https://images.pexels.com/photos/1602928298849/pexels-photo-1602928298849.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
      gender: "For Him",
    },
  },
  her: {
    bold: {
      name: "Noir Oud",
      description: "Dark elegance for unforgettable evenings",
      price: "$120",
      image:
        "https://images.pexels.com/photos/842876/pexels-photo-842876.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
      gender: "For Her",
    },
    elegant: {
      name: "Rose Soir",
      description: "A whisper of romance that lingers all night",
      price: "$110",
      image:
        "https://images.pexels.com/photos/1022925/pexels-photo-1022925.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
      gender: "For Her",
    },
    fresh: {
      name: "Citrus Bloom",
      description: "Bright top notes with silky musk for daytime elegance",
      price: "$95",
      image:
        "https://images.pexels.com/photos/1587017539504/pexels-photo-1587017539504.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
      gender: "For Her",
    },
    warm: {
      name: "Gold Amber",
      description: "Warm, rich, and impossible to ignore",
      price: "$125",
      image:
        "https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
      gender: "For Her",
    },
    mysterious: {
      name: "Midnight Oud",
      description: "Inspired by moonlit Arabian nights",
      price: "$130",
      image:
        "https://images.pexels.com/photos/1602928298849/pexels-photo-1602928298849.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
      gender: "For Her",
    },
  },
  unisex: {
    bold: {
      name: "Velvet Dusk",
      description: "Where confidence meets quiet sophistication",
      price: "$135",
      image:
        "https://images.pexels.com/photos/4666750/pexels-photo-4666750.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
      gender: "Unisex",
    },
    elegant: {
      name: "Velvet Dusk",
      description: "Where confidence meets quiet sophistication",
      price: "$135",
      image:
        "https://images.pexels.com/photos/4666750/pexels-photo-4666750.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
      gender: "Unisex",
    },
    fresh: {
      name: "Citrus Bloom",
      description: "Bright top notes with silky musk for daytime elegance",
      price: "$95",
      image:
        "https://images.pexels.com/photos/1587017539504/pexels-photo-1587017539504.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
      gender: "Unisex",
    },
    warm: {
      name: "Gold Amber",
      description: "Warm, rich, and impossible to ignore",
      price: "$125",
      image:
        "https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
      gender: "Unisex",
    },
    mysterious: {
      name: "Midnight Oud",
      description: "Inspired by moonlit Arabian nights",
      price: "$130",
      image:
        "https://images.pexels.com/photos/1602928298849/pexels-photo-1602928298849.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
      gender: "Unisex",
    },
  },
};

export default function GiftFinder() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleNext = () => {
    if (!selectedAnswer) return;

    const questionId = giftQuestions[currentQuestion].id;
    setAnswers((prev) => ({ ...prev, [questionId]: selectedAnswer }));

    if (currentQuestion === giftQuestions.length - 1) {
      setShowResults(true);
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer("");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      const prevQuestionId = giftQuestions[currentQuestion - 1].id;
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

  const progress = ((currentQuestion + 1) / giftQuestions.length) * 100;

  // Get recommendation based on answers
  const getRecommendation = () => {
    const recipient = answers.recipient || "unisex";
    const personality = answers.personality || "elegant";
    return giftResults[recipient]?.[personality] || giftResults.unisex.elegant;
  };

  const recommendation = showResults ? getRecommendation() : null;

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F4EADE] pt-[72px]">
      <section className="py-20 px-4 max-w-[900px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="font-body text-[13px] font-semibold uppercase tracking-[0.22em] text-[#6B5A2E] mb-3">
            Gift Finder
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-[#F4EADE]">
            Find the Perfect Gift
          </h1>
          <p className="font-body text-[#888888] mt-4 max-w-2xl mx-auto">
            Answer a few questions and we'll recommend the perfect fragrance
            gift for any occasion
          </p>
        </motion.div>

        <div className="bg-[#1C1A14] rounded-2xl border border-[#2A2519] p-6 md:p-10">
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
                          const Icon = giftQuestions[currentQuestion].icon;
                          return <Icon size={24} />;
                        })()}
                      </div>
                      <span className="font-body text-[#6B5A2E] font-semibold text-sm tracking-[0.12em]">
                        Question {currentQuestion + 1} of {giftQuestions.length}
                      </span>
                    </div>
                    <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[#F4EADE]">
                      {giftQuestions[currentQuestion].question}
                    </h2>
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {giftQuestions[currentQuestion].options.map((option) => (
                      <motion.button
                        key={option.value}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAnswerSelect(option.value)}
                        className={`p-4 rounded-xl border-2 transition-all text-left font-body ${
                          selectedAnswer === option.value
                            ? "border-[#C9A94A] bg-[#C9A94A]/10"
                            : "border-[#2A2519] bg-transparent hover:border-[#6B5A2E]"
                        }`}
                      >
                        <span className="text-[#F4EADE] font-medium">
                          {option.label}
                        </span>
                      </motion.button>
                    ))}
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between gap-4">
                    <button
                      onClick={handlePrevious}
                      disabled={currentQuestion === 0}
                      className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-body font-semibold transition-all ${
                        currentQuestion === 0
                          ? "opacity-30 cursor-not-allowed"
                          : "hover:bg-[#2A2519]"
                      }`}
                      style={{ color: "#888888" }}
                    >
                      <ArrowLeft size={18} />
                      Previous
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={!selectedAnswer}
                      className={`flex items-center gap-2 px-8 py-2.5 rounded-full font-body font-semibold transition-all ${
                        !selectedAnswer
                          ? "opacity-40 cursor-not-allowed bg-[#2A2519]"
                          : "bg-[#C9A94A] text-[#0B0B0B] hover:scale-105"
                      }`}
                    >
                      {currentQuestion === giftQuestions.length - 1 ? (
                        "Get Recommendation"
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
                  <Sparkles size={32} />
                </div>
                <h2 className="font-heading text-3xl font-bold text-[#F4EADE]">
                  We Found Your Perfect Gift!
                </h2>
                <p className="font-body text-[#888888] mt-2">
                  Based on your answers, we recommend this fragrance
                </p>
              </div>

              {recommendation && (
                <div className="bg-[#0B0B0B] rounded-xl border border-[#2A2519] overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-64 md:h-auto relative">
                      <img
                        src={recommendation.image}
                        alt={recommendation.name}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#C9A94A] text-[#0B0B0B] font-body text-xs font-bold uppercase">
                        Perfect Gift
                      </span>
                    </div>
                    <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-heading text-3xl font-bold text-[#F4EADE]">
                            {recommendation.name}
                          </h3>
                          <span className="font-heading text-2xl font-bold text-[#C9A94A]">
                            {recommendation.price}
                          </span>
                        </div>
                        <p className="font-body text-[#888888] text-sm mb-2">
                          {recommendation.gender}
                        </p>
                        <p className="font-body text-[#F4EADE] leading-relaxed">
                          {recommendation.description}
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3 mt-6">
                        <a
                          href={WA_LINK(
                            `Hi, I'd like to order ${recommendation.name} as a gift from Trademark Aroma`,
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#C9A94A] text-[#0B0B0B] font-body font-semibold uppercase tracking-[0.08em] hover:opacity-90 transition-opacity"
                        >
                          <ShoppingBag size={18} />
                          Order Now
                        </a>
                        <Link
                          to="/fragrances"
                          className="flex items-center justify-center px-6 py-3 rounded-full border border-[#2A2519] text-[#F4EADE] font-body font-semibold uppercase tracking-[0.08em] hover:border-[#C9A94A] hover:text-[#C9A94A] transition-colors"
                        >
                          Browse All
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="text-center mt-8">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full border border-[#2A2519] text-[#888888] font-body font-semibold hover:bg-[#1C1A14] transition-all"
                >
                  Start Over
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}