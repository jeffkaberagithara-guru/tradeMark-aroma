import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { WA_LINK } from "../constants/theme";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "How do I find my signature scent?",
    answer:
      "We recommend taking our Scent Guide questionnaire or booking a personal consultation via WhatsApp. Our fragrance experts will help you discover the perfect scent based on your preferences, personality, and occasion.",
  },
  {
    id: 2,
    question: "Do you deliver across Nairobi?",
    answer:
      "Yes! We offer fast delivery across Nairobi and its environs. Same-day delivery is available for orders placed before 2 PM. Delivery times typically range from 2-4 hours depending on your location.",
  },
  {
    id: 3,
    question: "Can I gift a fragrance?",
    answer:
      "Absolutely! We offer beautiful gift wrapping and can include a personalized message. Our gift guide helps you choose the perfect fragrance for any occasion. Simply mention it when placing your order via WhatsApp.",
  },
  {
    id: 4,
    question: "How long does a fragrance last?",
    answer:
      "Our extrait de parfum formulations are highly concentrated, typically lasting 6-8 hours on skin and even longer on clothing. The longevity depends on your skin type, the specific fragrance, and application method.",
  },
  {
    id: 5,
    question: "Do you offer fragrance consultations?",
    answer:
      "Yes! We provide free personal fragrance consultations via WhatsApp. Our experts will understand your preferences and recommend the perfect scents for you. Book yours today!",
  },
  {
    id: 6,
    question: "What payment methods do you accept?",
    answer:
      "We accept M-PESA, bank transfers, and cash on delivery within Nairobi. All transactions are secure and processed with your privacy in mind.",
  },
];

const FAQItem = ({ faq }: { faq: FAQItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-b border-[#2A2519] last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left hover:text-[#C9A94A] transition-colors group"
      >
        <span className="font-body font-medium text-[#F4EADE] text-base pr-4">
          {faq.question}
        </span>
        <span className="shrink-0 text-[#6B5A2E] group-hover:text-[#C9A94A] transition-colors">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="font-body text-[#888888] text-sm leading-relaxed pb-4 pr-8">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQ() {
  return (
    <section className="py-20 px-4 max-w-225 mx-auto min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="font-body text-[13px] font-semibold uppercase tracking-[0.22em] text-[#6B5A2E] mb-3">
          FAQ
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#F4EADE]">
          Frequently Asked Questions
        </h2>
        <p className="font-body text-[#888888] mt-4">
          Find answers to common questions about our fragrances and services
        </p>
      </motion.div>

      <div className="bg-[#1C1A14] rounded-2xl border border-[#2A2519] p-6 md:p-8">
        {faqs.map((faq) => (
          <FAQItem key={faq.id} faq={faq} />
        ))}
      </div>

      {/* Contact CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center mt-10"
      >
        <p className="font-body text-[#888888] text-sm mb-4">
          Still have questions? We're here to help
        </p>
        <a
          href={WA_LINK(
            "Hi, I have a question about Trademark Aroma's fragrances",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 rounded-full bg-[#C9A94A] text-[#0B0B0B] font-body font-semibold uppercase tracking-widest text-sm hover:opacity-90 transition-all duration-300"
        >
          Contact Us
        </a>
      </motion.div>
    </section>
  );
}