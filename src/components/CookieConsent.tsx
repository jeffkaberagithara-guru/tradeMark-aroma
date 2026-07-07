import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-[#1C1A14] border-t border-[#2A2519]"
        >
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-6">
            {/* Icon & Text */}
            <div className="flex items-start gap-3 flex-1">
              <Cookie
                size={24}
                className="text-[#C9A94A] flex-shrink-0 mt-0.5"
              />
              <div>
                <p className="font-body text-[#F4EADE] text-sm leading-relaxed">
                  We use cookies to enhance your browsing experience, analyze
                  site traffic, and personalize content. By clicking "Accept
                  All", you consent to our use of cookies.
                </p>
                <div className="flex items-center gap-4 mt-1.5">
                  <Link
                    to="/privacy"
                    className="font-body text-[#888888] text-xs hover:text-[#C9A94A] transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="/cookies"
                    className="font-body text-[#888888] text-xs hover:text-[#C9A94A] transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={declineCookies}
                className="px-4 py-2 rounded-full border border-[#2A2519] text-[#888888] font-body text-sm font-medium hover:text-[#F4EADE] hover:border-[#6B5A2E] transition-colors"
              >
                Decline
              </button>
              <button
                onClick={acceptCookies}
                className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#C9A94A] text-[#0B0B0B] font-body text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Accept All
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}