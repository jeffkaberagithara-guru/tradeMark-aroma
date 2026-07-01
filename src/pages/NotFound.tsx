import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F4EADE] flex items-center justify-center px-4 pt-[72px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-2xl"
      >
        {/* 404 Number */}
        <div className="relative mb-8">
          <span className="font-heading text-[120px] sm:text-[160px] font-bold bg-gradient-to-r from-[#C9A94A] via-[#E8D5A3] to-[#C9A94A] bg-clip-text text-transparent leading-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 rounded-full bg-[#C9A94A]/5 blur-2xl"></div>
          </div>
        </div>

        {/* Message */}
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-[#F4EADE] mb-4">
          Page Not Found
        </h1>
        <p className="font-body text-[#888888] text-lg leading-relaxed mb-8">
          Oops! The page you're looking for seems to have wandered off into the
          fragrance mist. Let's get you back on track.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 px-8 py-3 rounded-full bg-[#C9A94A] text-[#0B0B0B] font-body font-semibold uppercase tracking-[0.08em] hover:opacity-90 transition-opacity"
          >
            <Home size={18} />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-8 py-3 rounded-full border border-[#2A2519] text-[#F4EADE] font-body font-semibold uppercase tracking-[0.08em] hover:border-[#C9A94A] hover:text-[#C9A94A] transition-colors"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        {/* Decorative */}
        <div className="mt-12 flex items-center justify-center gap-3">
          <span className="w-12 h-px bg-[#2A2519]"></span>
          <span className="font-body text-[#6B5A2E] text-xs uppercase tracking-[0.2em]">
            Scent that defines you
          </span>
          <span className="w-12 h-px bg-[#2A2519]"></span>
        </div>
      </motion.div>
    </div>
  );
}