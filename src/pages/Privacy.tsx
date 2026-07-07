import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy - TradeMark Aroma"
        description="Read TradeMark Aroma's privacy policy to understand how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, personal information, TradeMark Aroma"
      />
      <div className="min-h-screen bg-[#0B0B0B] text-[#F4EADE] pt-[72px]">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#F4EADE] mb-6">
              Privacy Policy
            </h1>
            <p className="font-body text-[#888888] text-sm mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="space-y-6 font-body text-[#DDDDDD] leading-relaxed">
              <section>
                <h2 className="font-heading text-2xl font-bold text-[#F4EADE] mb-3">
                  Information We Collect
                </h2>
                <p>
                  Trademark Aroma collects information you provide directly,
                  such as:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-[#888888]">
                  <li>Name and contact information</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Fragrance preferences</li>
                  <li>Order history</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-[#F4EADE] mb-3">
                  How We Use Your Information
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-[#888888]">
                  <li>Process your orders and requests</li>
                  <li>Send order confirmations and updates</li>
                  <li>Personalize your fragrance recommendations</li>
                  <li>Improve our products and services</li>
                  <li>Send marketing communications (with your consent)</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-[#F4EADE] mb-3">
                  Information Security
                </h2>
                <p className="text-[#888888]">
                  We implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-[#F4EADE] mb-3">
                  Your Rights
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-[#888888]">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-[#F4EADE] mb-3">
                  Contact Us
                </h2>
                <p className="text-[#888888]">
                  If you have questions about this Privacy Policy, please
                  contact us at:
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