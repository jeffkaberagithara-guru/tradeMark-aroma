import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function Cookies() {
  return (
    <>
      <SEO
        title="Cookie Policy - TradeMark Aroma"
        description="Learn about TradeMark Aroma's use of cookies and how you can manage your cookie preferences."
        keywords="cookie policy, cookies, privacy, preferences, TradeMark Aroma"
      />
      <div className="min-h-screen bg-[#0B0B0B] text-[#F4EADE] pt-[72px]">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#F4EADE] mb-6">
              Cookie Policy
            </h1>
            <p className="font-body text-[#888888] text-sm mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="space-y-6 font-body text-[#DDDDDD] leading-relaxed">
              <section>
                <h2 className="font-heading text-2xl font-bold text-[#F4EADE] mb-3">
                  What Are Cookies
                </h2>
                <p className="text-[#888888]">
                  Cookies are small text files that are stored on your device
                  when you visit a website. They help us improve your browsing
                  experience and provide personalized content.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-[#F4EADE] mb-3">
                  How We Use Cookies
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-[#888888]">
                  <li>Essential cookies for website functionality</li>
                  <li>Analytics cookies to understand how you use our site</li>
                  <li>Preference cookies to remember your settings</li>
                  <li>Marketing cookies for personalized advertisements</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-[#F4EADE] mb-3">
                  Types of Cookies We Use
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-[#F4EADE]">
                      Essential Cookies
                    </h3>
                    <p className="text-[#888888]">
                      Required for the website to function properly.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#F4EADE]">
                      Performance Cookies
                    </h3>
                    <p className="text-[#888888]">
                      Help us understand how visitors interact with our site.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#F4EADE]">
                      Functionality Cookies
                    </h3>
                    <p className="text-[#888888]">
                      Remember your preferences and settings.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-[#F4EADE] mb-3">
                  Managing Cookies
                </h2>
                <p className="text-[#888888]">
                  You can manage your cookie preferences in your browser
                  settings. Most browsers allow you to:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-[#888888]">
                  <li>View and delete cookies</li>
                  <li>Block third-party cookies</li>
                  <li>Block all cookies</li>
                  <li>Get notified when cookies are set</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-[#F4EADE] mb-3">
                  Contact Us
                </h2>
                <p className="text-[#888888]">
                  If you have questions about our Cookie Policy, please contact
                  us:
                </p>
                <p className="mt-2 text-[#C9A94A]">
                  Email: hello@trademarkaroma.com
                  <br />
                  Phone: +254 114 036 858
                </p>
              </section>
            </div>

            <div className="mt-8 pt-8 border-t border-[#2A2519] flex justify-center">
              <Link
                to="/"
                className="inline-block px-6 py-3 rounded-full bg-[#C9A94A] text-[#0B0B0B] font-body font-semibold uppercase tracking-[0.08em] hover:opacity-90 transition-opacity"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}