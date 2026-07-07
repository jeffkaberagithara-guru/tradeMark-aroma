import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service - TradeMark Aroma"
        description="Read TradeMark Aroma's terms of service to understand our policies regarding orders, payments, shipping, and returns."
        keywords="terms of service, terms and conditions, policies, TradeMark Aroma"
      />
      <div className="min-h-screen bg-[#0B0B0B] text-[#F4EADE] pt-[72px]">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#F4EADE] mb-6">
              Terms of Service
            </h1>
            <p className="font-body text-[#888888] text-sm mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="space-y-6 font-body text-[#DDDDDD] leading-relaxed">
              <section>
                <h2 className="font-heading text-2xl font-bold text-[#F4EADE] mb-3">
                  Acceptance of Terms
                </h2>
                <p className="text-[#888888]">
                  By using Trademark Aroma's services, you agree to these Terms
                  of Service. If you do not agree, please do not use our
                  services.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-[#F4EADE] mb-3">
                  Products and Pricing
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-[#888888]">
                  <li>All prices are in USD</li>
                  <li>Prices are subject to change without notice</li>
                  <li>
                    We reserve the right to modify or discontinue products
                  </li>
                  <li>
                    All product descriptions are accurate to the best of our
                    knowledge
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-[#F4EADE] mb-3">
                  Orders and Payments
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-[#888888]">
                  <li>Orders are processed through WhatsApp</li>
                  <li>Payments are handled securely</li>
                  <li>
                    We accept M-PESA, bank transfers, and cash on delivery
                  </li>
                  <li>Order confirmation will be sent via WhatsApp</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-[#F4EADE] mb-3">
                  Shipping and Delivery
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-[#888888]">
                  <li>Delivery available within Nairobi</li>
                  <li>Same-day delivery for orders placed before 2 PM</li>
                  <li>Delivery times: 2-4 hours depending on location</li>
                  <li>Please provide accurate delivery information</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-[#F4EADE] mb-3">
                  Returns and Refunds
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-[#888888]">
                  <li>We accept returns within 7 days of purchase</li>
                  <li>Products must be unused and in original packaging</li>
                  <li>Refunds will be processed within 5-7 business days</li>
                  <li>Contact us via WhatsApp for return authorization</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-[#F4EADE] mb-3">
                  Contact Information
                </h2>
                <p className="text-[#888888]">
                  For questions about these Terms of Service, please contact us
                  at:
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