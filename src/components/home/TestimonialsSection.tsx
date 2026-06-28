import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { WA_LINK } from "../../constants/theme";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Nairobi, Kenya",
    rating: 5,
    text: "The moment I sprayed Noir Oud, I knew it was my signature scent. Absolutely divine! The longevity is incredible - I could still smell it the next morning.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "James K.",
    location: "Nairobi, Kenya",
    rating: 5,
    text: "I've been searching for the perfect fragrance for years. Gold Amber is exactly what I was looking for - warm, rich, and impossible to ignore. The customer service was exceptional too.",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Grace W.",
    location: "Nairobi, Kenya",
    rating: 4,
    text: "Rose Soir is my new favorite! It's soft, romantic, and lingers beautifully throughout the day. The presentation was stunning and delivery was fast.",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },
  {
    id: 4,
    name: "David O.",
    location: "Nairobi, Kenya",
    rating: 5,
    text: "Trademark Aroma's scent guide helped me find my perfect match. Velvet Dusk is sophisticated and elegant - I receive compliments every time I wear it.",
    image:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={14}
        fill={i < rating ? "#C9A94A" : "none"}
        color={i < rating ? "#C9A94A" : "#2A2519"}
        className={i < rating ? "text-[#C9A94A]" : "text-[#2A2519]"}
      />
    ))}
  </div>
);

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 max-w-[1200px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="font-body text-[13px] font-semibold uppercase tracking-[0.22em] text-[#6B5A2E] mb-3">
          Testimonials
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#F4EADE]">
          What Our Customers Say
        </h2>
        <p className="font-body text-[#888888] mt-4 max-w-2xl mx-auto">
          Hear from fragrance lovers who found their signature scent with us
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#1C1A14] p-6 rounded-xl border border-[#2A2519] hover:border-[#C9A94A] transition-colors duration-300"
          >
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
              />

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                  <h4 className="font-heading font-semibold text-[#F4EADE]">
                    {testimonial.name}
                  </h4>
                  <StarRating rating={testimonial.rating} />
                </div>
                <p className="font-body text-[#888888] text-sm mb-2">
                  {testimonial.location}
                </p>
                <p className="font-body text-[#F4EADE] text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* WhatsApp CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-10"
      >
        <p className="font-body text-[#888888] text-sm mb-4">
          Join our community of happy customers
        </p>
        <a
          href={WA_LINK(
            "Hi, I'd like to share my fragrance experience with Trademark Aroma",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 rounded-full border border-[#C9A94A] text-[#C9A94A] font-body font-semibold uppercase tracking-[0.1em] text-sm hover:bg-[#C9A94A] hover:text-[#0B0B0B] transition-all duration-300"
        >
          Share Your Experience
        </a>
      </motion.div>
    </section>
  );
}