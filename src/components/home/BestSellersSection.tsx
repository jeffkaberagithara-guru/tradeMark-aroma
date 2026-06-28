import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";
import { WA_LINK } from "../../constants/theme";

const bestSellers = [
  {
    id: 1,
    name: "Noir Oud",
    gender: "For Him",
    description: "Dark elegance for unforgettable evenings.",
    price: "$120",
    image:
      "https://images.pexels.com/photos/842876/pexels-photo-842876.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
    rating: 5,
    reviews: 47,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Rose Soir",
    gender: "For Her",
    description: "A whisper of romance that lingers all night.",
    price: "$110",
    image:
      "https://images.pexels.com/photos/1022925/pexels-photo-1022925.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
    rating: 5,
    reviews: 32,
    badge: "Customer Favorite",
  },
  {
    id: 3,
    name: "Velvet Dusk",
    gender: "Unisex",
    description: "Where confidence meets quiet sophistication.",
    price: "$135",
    image:
      "https://images.pexels.com/photos/4666750/pexels-photo-4666750.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
    rating: 4,
    reviews: 28,
    badge: "Editor's Pick",
  },
  {
    id: 4,
    name: "Gold Amber",
    gender: "For Him",
    description: "Warm, rich, and impossible to ignore.",
    price: "$125",
    image:
      "https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
    rating: 5,
    reviews: 39,
    badge: "Top Rated",
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
      />
    ))}
  </div>
);

const ProductCard = ({
  product,
  index,
}: {
  product: (typeof bestSellers)[0];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -6 }}
    className="bg-[#1C1A14] rounded-xl border border-[#2A2519] hover:border-[#C9A94A] transition-all duration-300 overflow-hidden group"
  >
    {/* Image Container */}
    <div className="relative overflow-hidden h-56">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Badge */}
      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#C9A94A] text-[#0B0B0B] font-body text-xs font-bold uppercase tracking-[0.08em]">
        {product.badge}
      </span>

      {/* Gender Tag */}
      <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#0B0B0B]/80 backdrop-blur-sm text-[#C9A94A] font-body text-xs font-semibold uppercase tracking-[0.08em] border border-[#2A2519]">
        {product.gender}
      </span>
    </div>

    {/* Content */}
    <div className="p-5">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h4 className="font-heading text-xl font-bold text-[#F4EADE]">
          {product.name}
        </h4>
        <span className="font-heading text-xl font-bold text-[#C9A94A]">
          {product.price}
        </span>
      </div>

      <p className="font-body text-[#888888] text-sm leading-relaxed mb-3">
        {product.description}
      </p>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-4">
        <StarRating rating={product.rating} />
        <span className="font-body text-[#888888] text-xs">
          ({product.reviews} reviews)
        </span>
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <Link
          to={`/fragrances`}
          className="flex-1 text-center px-4 py-2 rounded-lg border border-[#2A2519] text-[#F4EADE] font-body text-xs font-semibold uppercase tracking-[0.08em] hover:border-[#C9A94A] hover:text-[#C9A94A] transition-colors"
        >
          View
        </Link>
        <a
          href={WA_LINK(
            `Hi, I'd like to order ${product.name} from Trademark Aroma`,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#C9A94A] text-[#0B0B0B] font-body text-xs font-bold uppercase tracking-[0.08em] hover:opacity-90 transition-opacity"
        >
          <ShoppingBag size={14} />
          Order
        </a>
      </div>
    </div>
  </motion.div>
);

export default function BestSellersSection() {
  return (
    <section className="py-20 px-4 max-w-[1200px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="font-body text-[13px] font-semibold uppercase tracking-[0.22em] text-[#6B5A2E] mb-3">
          Our Collection
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#F4EADE]">
          Best Sellers
        </h2>
        <p className="font-body text-[#888888] mt-4 max-w-2xl mx-auto">
          Our most beloved fragrances, loved by customers around the world
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {bestSellers.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>

      {/* View All CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-10"
      >
        <Link
          to="/fragrances"
          className="inline-block px-8 py-3 rounded-full border-2 border-[#C9A94A] text-[#C9A94A] font-body font-semibold uppercase tracking-[0.1em] text-sm hover:bg-[#C9A94A] hover:text-[#0B0B0B] transition-all duration-300"
        >
          View All Fragrances
        </Link>
      </motion.div>
    </section>
  );
}