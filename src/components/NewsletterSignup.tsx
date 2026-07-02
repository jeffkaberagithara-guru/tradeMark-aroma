import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call - Replace with actual newsletter API integration
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitted(true);
    setIsLoading(false);
    setEmail("");

    // Reset after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-16 px-4 max-w-300 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#1C1A14] rounded-2xl p-8 md:p-12 text-center border border-[#2A2519] hover:border-[#C9A94A]/30 transition-colors duration-300"
      >
        <div className="max-w-2xl mx-auto">
          <p className="font-body text-[13px] font-semibold uppercase tracking-[0.22em] text-[#6B5A2E] mb-3">
            Newsletter
          </p>
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-[#F4EADE] mb-3">
            Stay Fragrantly Informed
          </h3>
          <p className="font-body text-[#888888] mb-6">
            Subscribe to receive exclusive offers, new scent alerts, and
            fragrance tips. Be the first to know about our latest collections.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-full bg-[#0B0B0B] border border-[#2A2519] text-[#F4EADE] placeholder-[#555555] focus:border-[#C9A94A] outline-none transition-colors font-body text-sm"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className={`px-6 py-3 rounded-full bg-[#C9A94A] text-[#0B0B0B] font-body font-semibold uppercase tracking-[0.08em] text-sm flex items-center justify-center gap-2 transition-all ${
                isLoading
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:scale-105 hover:shadow-lg"
              }`}
            >
              {isLoading ? (
                <span className="inline-block animate-pulse">
                  Subscribing...
                </span>
              ) : submitted ? (
                <>
                  <CheckCircle size={18} />
                  Subscribed!
                </>
              ) : (
                <>
                  Subscribe
                  <Send size={16} />
                </>
              )}
            </button>
          </form>

          <p className="font-body text-[#555555] text-xs mt-4">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </motion.div>
    </section>
  );
}