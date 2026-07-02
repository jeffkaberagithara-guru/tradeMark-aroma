import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WA_LINK } from "../constants/theme";
import {
  ShoppingCart,
  Search,
  X,
  Star,
  Heart,
  Share2,
  Clock,
  Sparkles,
  Award,
  TrendingUp,
} from "lucide-react";

type Fragrance = {
  id: string;
  name: string;
  brand?: string;
  description: string;
  price?: string;
  image: string;
  gender?: string;
  mood?: string[];
  notes?: string[];
  rating?: number;
  reviews?: number;
  badge?: string;
  isNew?: boolean;
  isLimited?: boolean;
  longevity?: string;
};

// Skeleton Card Component
const SkeletonCard = () => (
  <div className="bg-[#1C1A14] rounded-xl border border-[#2A2519] overflow-hidden">
    <div className="h-56 bg-[#2A2519] animate-pulse" />
    <div className="p-5 space-y-3">
      <div className="h-6 bg-[#2A2519] rounded w-3/4 animate-pulse" />
      <div className="h-4 bg-[#2A2519] rounded w-1/2 animate-pulse" />
      <div className="h-4 bg-[#2A2519] rounded w-full animate-pulse" />
      <div className="h-4 bg-[#2A2519] rounded w-2/3 animate-pulse" />
      <div className="flex gap-2 pt-2">
        <div className="h-10 bg-[#2A2519] rounded flex-1 animate-pulse" />
        <div className="h-10 bg-[#2A2519] rounded flex-1 animate-pulse" />
      </div>
    </div>
  </div>
);

// Sample Fragrance Data
const SAMPLE: Fragrance[] = [
  {
    id: "noir-oud",
    name: "Noir Oud",
    brand: "Trademark Aroma",
    description:
      "Dark elegance for unforgettable evenings. A rich blend of oud and amber.",
    price: "$145",
    image:
      "https://images.pexels.com/photos/842876/pexels-photo-842876.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
    gender: "Unisex",
    mood: ["Warm", "Evening", "Mysterious"],
    notes: ["Oud", "Sandalwood", "Amber", "Vanilla"],
    rating: 4.9,
    reviews: 47,
    badge: "Best Seller",
    longevity: "8-10 hours",
  },
  {
    id: "rose-soir",
    name: "Rose Soir",
    brand: "Trademark Aroma",
    description: "A whisper of romance that lingers all night.",
    price: "$130",
    image:
      "https://images.pexels.com/photos/1022925/pexels-photo-1022925.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
    gender: "Female",
    mood: ["Romantic", "Elegant", "Evening"],
    notes: ["Rose", "Musk", "Vanilla", "Jasmine"],
    rating: 4.8,
    reviews: 32,
    badge: "Editor's Pick",
    longevity: "6-8 hours",
  },
  {
    id: "velvet-dusk",
    name: "Velvet Dusk",
    brand: "Trademark Aroma",
    description: "Where confidence meets quiet sophistication.",
    price: "$150",
    image:
      "https://images.pexels.com/photos/4666750/pexels-photo-4666750.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
    gender: "Unisex",
    mood: ["Sophisticated", "Evening", "Bold"],
    notes: ["Bergamot", "Cedar", "Iris", "Musk"],
    rating: 4.7,
    reviews: 28,
    badge: "Top Rated",
    longevity: "8-10 hours",
  },
  {
    id: "gold-amber",
    name: "Gold Amber",
    brand: "Trademark Aroma",
    description: "Warm, rich, and impossible to ignore.",
    price: "$135",
    image:
      "https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
    gender: "Male",
    mood: ["Warm", "Bold", "Evening"],
    notes: ["Amber", "Leather", "Vetiver", "Spice"],
    rating: 4.9,
    reviews: 39,
    badge: "Best Seller",
    longevity: "8-10 hours",
  },
  {
    id: "blanc-fleur",
    name: "Blanc Fleur",
    brand: "Trademark Aroma",
    description: "Soft, pure, and effortlessly refined.",
    price: "$120",
    image:
      "https://images.pexels.com/photos/1587017539504/pexels-photo-1587017539504.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
    gender: "Female",
    mood: ["Fresh", "Day", "Delicate"],
    notes: ["White Florals", "Peach", "Musk", "Jasmine"],
    rating: 4.6,
    reviews: 22,
    isNew: true,
    longevity: "6-8 hours",
  },
  {
    id: "midnight-oud",
    name: "Midnight Oud",
    brand: "Trademark Aroma",
    description: "Inspired by moonlit Arabian nights.",
    price: "$155",
    image:
      "https://images.pexels.com/photos/1602928298849/pexels-photo-1602928298849.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
    gender: "Unisex",
    mood: ["Mysterious", "Evening", "Intense"],
    notes: ["Oud", "Vanilla", "Smoke", "Spice"],
    rating: 4.8,
    reviews: 31,
    isLimited: true,
    longevity: "10-12 hours",
  },
  {
    id: "ocean-breeze",
    name: "Ocean Breeze",
    brand: "Trademark Aroma",
    description: "Crisp marine notes for effortless daily wear.",
    price: "$110",
    image:
      "https://images.pexels.com/photos/175687/pexels-photo-175687.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
    gender: "Unisex",
    mood: ["Fresh", "Day", "Clean"],
    notes: ["Marine", "Green Tea", "Mint", "Citrus"],
    rating: 4.5,
    reviews: 18,
    isNew: true,
    longevity: "5-7 hours",
  },
  {
    id: "green-tea",
    name: "Green Tea",
    brand: "Trademark Aroma",
    description: "Clean, uplifting, and refreshingly subtle.",
    price: "$105",
    image:
      "https://images.pexels.com/photos/1587017539504/pexels-photo-1587017539504.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
    gender: "Female",
    mood: ["Fresh", "Day", "Calm"],
    notes: ["Green Tea", "Citrus", "Floral", "Musk"],
    rating: 4.4,
    reviews: 15,
    badge: "Editor's Pick",
    longevity: "5-7 hours",
  },
];

export default function Fragrances() {
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [filterMood, setFilterMood] = useState<string | null>(null);
  const [filterGender, setFilterGender] = useState<string | null>(null);
  const [sort, setSort] = useState("featured");
  const [selectedFragrance, setSelectedFragrance] = useState<Fragrance | null>(
    null,
  );
  const [showDetails, setShowDetails] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const moods = useMemo(() => {
    const s = new Set<string>();
    SAMPLE.forEach((f) => f.mood?.forEach((m) => s.add(m)));
    return Array.from(s);
  }, []);

  const genders = useMemo(() => {
    const s = new Set<string>();
    SAMPLE.forEach((f) => f.gender && s.add(f.gender));
    return Array.from(s);
  }, []);

  const filtered = useMemo(() => {
    let items = SAMPLE.slice();

    if (query.trim()) {
      const q = query.toLowerCase();
      items = items.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.description.toLowerCase().includes(q) ||
          (i.brand || "").toLowerCase().includes(q) ||
          (i.mood || []).some((m) => m.toLowerCase().includes(q)) ||
          (i.notes || []).some((n) => n.toLowerCase().includes(q)),
      );
    }

    if (filterGender) {
      items = items.filter((i) => i.gender === filterGender);
    }

    if (filterMood) {
      items = items.filter((i) => i.mood?.includes(filterMood));
    }

    if (sort === "price-asc")
      items.sort(
        (a, b) =>
          parseFloat(a.price?.slice(1) || "0") -
          parseFloat(b.price?.slice(1) || "0"),
      );
    if (sort === "price-desc")
      items.sort(
        (a, b) =>
          parseFloat(b.price?.slice(1) || "0") -
          parseFloat(a.price?.slice(1) || "0"),
      );
    if (sort === "name") items.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "rating")
      items.sort((a, b) => (b.rating || 0) - (a.rating || 0));

    return items;
  }, [query, filterMood, filterGender, sort]);

  const clearFilters = () => {
    setQuery("");
    setFilterMood(null);
    setFilterGender(null);
    setSort("featured");
  };

  const openDetails = (fragrance: Fragrance) => {
    setSelectedFragrance(fragrance);
    setQuantity(1);
    setShowDetails(true);
    document.body.style.overflow = "hidden";
  };

  const closeDetails = () => {
    setShowDetails(false);
    setSelectedFragrance(null);
    document.body.style.overflow = "unset";
  };

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const handleShare = (fragrance: Fragrance, e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: fragrance.name,
        text: `Check out ${fragrance.name} from Trademark Aroma!`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(
        `${fragrance.name} - ${fragrance.description}`,
      );
      alert("Link copied to clipboard!");
    }
  };

  const getBadgeIcon = (badge?: string) => {
    switch (badge) {
      case "Best Seller":
        return <Award size={12} className="mr-1" />;
      case "Editor's Pick":
        return <Sparkles size={12} className="mr-1" />;
      case "Top Rated":
        return <TrendingUp size={12} className="mr-1" />;
      default:
        return null;
    }
  };

  const renderStars = (rating: number = 0) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            fill={i < Math.floor(rating) ? "#C9A94A" : "none"}
            color={i < Math.floor(rating) ? "#C9A94A" : "#2A2519"}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F4EADE] pt-18">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.35) saturate(0.7) contrast(1.1)" }}
          >
            <source
              src="/videos/4154241-hd_2048_1080_25fps.mp4"
              type="video/mp4"
            />
            <img
              src="https://images.pexels.com/photos/842876/pexels-photo-842876.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Trademark Aroma fragrances"
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-linear-to-b from-[rgba(11,11,11,0.2)] via-[rgba(11,11,11,0.5)] via-60% to-[rgba(11,11,11,0.95)]" />
          <div className="absolute inset-0 bg-linear-to-t from-[rgba(11,11,11,0.9)] via-transparent to-[rgba(11,11,11,0.1)]" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl"
          >
            <p className="font-body text-[13px] font-semibold uppercase tracking-[0.22em] text-[#C9A94A] mb-3">
              Our Collection
            </p>
            <h1 className="font-heading text-[clamp(42px,5vw,72px)] font-extrabold leading-[0.95] text-[#F4EADE]">
              Discover <span className="text-[#C9A94A]">Signature Scents</span>
            </h1>
            <p className="mt-4 text-[18px] leading-[1.9] text-[#DDDDDD] font-body max-w-2xl mx-auto">
              Browse our curated collection of fragrances handcrafted to leave a
              lasting impression. Filter, explore, and order directly.
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-20 h-0.5 bg-[#C9A94A] mx-auto mt-6"
            />
          </motion.div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="px-4 sm:px-6 max-w-300 mx-auto -mt-4 relative z-10">
        <div className="bg-[#1C1A14] rounded-2xl border border-[#2A2519] p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search
                size={18}
                color="#888888"
                className="absolute left-4 top-1/2 transform -translate-y-1/2"
              />
              <input
                aria-label="Search fragrances"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, mood, notes, or description..."
                className="w-full pl-12 pr-10 py-3 rounded-xl bg-[#0B0B0B] border border-[#2A2519] text-[#F4EADE] placeholder-[#555555] focus:border-[#C9A94A] outline-none transition-colors font-body"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#888888] hover:text-[#F4EADE] transition-colors"
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="flex gap-2">
              <select
                aria-label="Sort fragrances"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="px-4 py-3 rounded-xl bg-[#0B0B0B] border border-[#2A2519] text-[#F4EADE] focus:border-[#C9A94A] outline-none transition-colors font-body"
              >
                <option value="featured">Featured</option>
                <option value="name">Name A-Z</option>
                <option value="rating">Top Rated</option>
                <option value="price-asc">Price: Low → High</option>
                <option value="price-desc">Price: High → Low</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-[#2A2519]">
            <button
              onClick={() => setFilterGender(null)}
              className={`px-3 py-1.5 rounded-full text-xs font-body font-semibold uppercase tracking-[0.08em] transition-colors ${
                !filterGender
                  ? "bg-[#C9A94A] text-[#0B0B0B]"
                  : "bg-[#2A2519] text-[#888888] hover:text-[#F4EADE]"
              }`}
            >
              All Genders
            </button>
            {genders.map((g) => (
              <button
                key={g}
                onClick={() => setFilterGender(filterGender === g ? null : g)}
                className={`px-3 py-1.5 rounded-full text-xs font-body font-semibold uppercase tracking-[0.08em] transition-colors ${
                  filterGender === g
                    ? "bg-[#C9A94A] text-[#0B0B0B]"
                    : "bg-[#2A2519] text-[#888888] hover:text-[#F4EADE]"
                }`}
              >
                {g}
              </button>
            ))}
            <span className="w-px h-6 bg-[#2A2519]" />
            <button
              onClick={() => setFilterMood(null)}
              className={`px-3 py-1.5 rounded-full text-xs font-body font-semibold uppercase tracking-[0.08em] transition-colors ${
                !filterMood
                  ? "bg-[#C9A94A] text-[#0B0B0B]"
                  : "bg-[#2A2519] text-[#888888] hover:text-[#F4EADE]"
              }`}
            >
              All Moods
            </button>
            {moods.map((m) => (
              <button
                key={m}
                onClick={() => setFilterMood(filterMood === m ? null : m)}
                className={`px-3 py-1.5 rounded-full text-xs font-body font-semibold uppercase tracking-[0.08em] transition-colors ${
                  filterMood === m
                    ? "bg-[#C9A94A] text-[#0B0B0B]"
                    : "bg-[#2A2519] text-[#888888] hover:text-[#F4EADE]"
                }`}
              >
                {m}
              </button>
            ))}
            <div className="flex-1" />
            <span className="font-body text-[#888888] text-sm">
              {filtered.length} {filtered.length === 1 ? "result" : "results"}
            </span>
            {(query || filterMood || filterGender) && (
              <button
                onClick={clearFilters}
                className="text-[#888888] text-sm font-body hover:text-[#C9A94A] transition-colors"
              >
                Clear all
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Fragrance Grid */}
      <section className="px-4 sm:px-6 max-w-300 mx-auto py-8 relative z-10">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {[...Array(6)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="font-body text-[#888888] text-lg">
              No fragrances match your search.
            </p>
            <button
              onClick={clearFilters}
              className="mt-4 px-6 py-2 rounded-full bg-[#C9A94A] text-[#0B0B0B] font-body font-semibold hover:opacity-90 transition-opacity"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((f, index) => (
              <motion.article
                key={f.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                className="bg-[#1C1A14] rounded-xl border border-[#2A2519] hover:border-[#C9A94A] transition-colors duration-200 overflow-hidden group"
              >
                <div
                  className="relative overflow-hidden h-56 cursor-pointer"
                  onClick={() => openDetails(f)}
                >
                  <motion.img
                    src={f.image}
                    alt={f.name}
                    className="w-full h-full object-cover"
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0B0B0B]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    {f.badge && (
                      <span className="flex items-center px-3 py-1 rounded-full bg-[#C9A94A] text-[#0B0B0B] font-body text-[10px] font-bold uppercase tracking-[0.08em]">
                        {getBadgeIcon(f.badge)}
                        {f.badge}
                      </span>
                    )}
                    {f.isNew && (
                      <span className="px-3 py-1 rounded-full bg-[#25D366] text-white font-body text-[10px] font-bold uppercase tracking-[0.08em]">
                        New Arrival
                      </span>
                    )}
                    {f.isLimited && (
                      <span className="px-3 py-1 rounded-full bg-[#FF6B6B] text-white font-body text-[10px] font-bold uppercase tracking-[0.08em]">
                        Limited Edition
                      </span>
                    )}
                  </div>

                  <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#0B0B0B]/80 backdrop-blur-sm text-[#C9A94A] font-body text-[10px] font-semibold uppercase tracking-[0.08em] border border-[#2A2519]">
                    {f.gender}
                  </span>

                  <button
                    onClick={(e) => toggleWishlist(f.id, e)}
                    className="absolute top-3 right-12 p-2 rounded-full bg-[#0B0B0B]/80 backdrop-blur-sm border border-[#2A2519] text-[#888888] hover:text-[#C9A94A] transition-colors duration-200"
                    aria-label={`Add ${f.name} to wishlist`}
                  >
                    <Heart
                      size={16}
                      fill={wishlist.includes(f.id) ? "#C9A94A" : "none"}
                      className={
                        wishlist.includes(f.id) ? "text-[#C9A94A]" : ""
                      }
                    />
                  </button>
                  <button
                    onClick={(e) => handleShare(f, e)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-[#0B0B0B]/80 backdrop-blur-sm border border-[#2A2519] text-[#888888] hover:text-[#C9A94A] transition-colors duration-200"
                    aria-label={`Share ${f.name}`}
                  >
                    <Share2 size={16} />
                  </button>
                </div>

                <div className="p-5 flex flex-col gap-2">
                  <div className="flex justify-between items-baseline gap-3">
                    <h3
                      className="font-heading text-xl font-bold text-[#F4EADE] cursor-pointer hover:text-[#C9A94A] transition-colors duration-200"
                      onClick={() => openDetails(f)}
                    >
                      {f.name}
                    </h3>
                    <span className="font-heading text-xl font-bold text-[#C9A94A]">
                      {f.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {renderStars(f.rating || 0)}
                    <span className="font-body text-[#888888] text-xs">
                      ({f.reviews || 0})
                    </span>
                  </div>

                  <p className="font-body text-[#888888] text-sm leading-relaxed line-clamp-2">
                    {f.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-1">
                    {f.mood?.slice(0, 3).map((m) => (
                      <span
                        key={m}
                        className="text-[10px] text-[#6B5A2E] font-body font-medium uppercase tracking-[0.06em]"
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  {f.longevity && (
                    <div className="flex items-center gap-1 mt-1">
                      <Clock size={12} className="text-[#6B5A2E]" />
                      <span className="font-body text-[#888888] text-[10px]">
                        {f.longevity}
                      </span>
                    </div>
                  )}

                  <div className="mt-3 flex gap-2">
                    <button
                      onClick={() => openDetails(f)}
                      className="flex-1 text-center px-3 py-2 rounded-lg border border-[#2A2519] text-[#F4EADE] font-body text-xs font-semibold uppercase tracking-[0.08em] hover:border-[#C9A94A] hover:text-[#C9A94A] transition-colors duration-200"
                    >
                      View Details
                    </button>
                    <a
                      href={WA_LINK(
                        `Hi, I'd like to order ${f.name} from Trademark Aroma`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#C9A94A] text-[#0B0B0B] font-body text-xs font-bold uppercase tracking-[0.08em] hover:opacity-90 transition-opacity duration-200"
                    >
                      <ShoppingCart size={14} />
                      Order
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </section>

      {/* Decorative CTA */}
      <section className="py-16 px-6 border-t border-[#2A2519] text-center">
        <div className="max-w-240 mx-auto">
          <h2 className="font-heading text-[clamp(40px,6vw,56px)] font-extrabold text-[#F4EADE]">
            Need help choosing?
          </h2>
          <p className="mt-4 text-[18px] text-[#888888] font-body">
            Our consultants are available for bespoke recommendations and
            private consultations.
          </p>
          <a
            href={WA_LINK(
              "Hi, I'd like help choosing a signature scent from Trademark Aroma",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-4 rounded-[28px] bg-[#C9A94A] text-[#0B0B0B] font-extrabold font-body text-[18px] hover:opacity-90 transition-opacity duration-200"
          >
            Message Us
          </a>
        </div>
      </section>

      {/* Details Modal */}
      <AnimatePresence>
        {showDetails && selectedFragrance && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeDetails}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0B0B]/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-[#1C1A14] rounded-2xl border border-[#2A2519] max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={closeDetails}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#0B0B0B]/80 backdrop-blur-sm border border-[#2A2519] text-[#888888] hover:text-[#C9A94A] hover:border-[#C9A94A] transition-colors duration-200"
                aria-label="Close details"
              >
                <X size={20} />
              </button>

              <div className="p-6">
                <div className="relative rounded-xl overflow-hidden h-64 mb-6">
                  <img
                    src={selectedFragrance.image}
                    alt={selectedFragrance.name}
                    className="w-full h-full object-cover"
                  />
                  {selectedFragrance.badge && (
                    <span className="absolute top-3 left-3 flex items-center px-3 py-1 rounded-full bg-[#C9A94A] text-[#0B0B0B] font-body text-[10px] font-bold uppercase tracking-[0.08em]">
                      {getBadgeIcon(selectedFragrance.badge)}
                      {selectedFragrance.badge}
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h2 className="font-heading text-3xl font-bold text-[#F4EADE]">
                      {selectedFragrance.name}
                    </h2>
                    <p className="font-body text-[#888888] text-sm">
                      {selectedFragrance.brand}
                    </p>
                  </div>
                  <span className="text-2xl font-heading font-bold text-[#C9A94A]">
                    {selectedFragrance.price}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  {renderStars(selectedFragrance.rating || 0)}
                  <span className="font-body text-[#888888] text-sm">
                    ({selectedFragrance.reviews || 0} reviews)
                  </span>
                </div>

                <p className="font-body text-[#DDDDDD] leading-relaxed mb-4">
                  {selectedFragrance.description}
                </p>

                {selectedFragrance.notes && (
                  <div className="mb-4">
                    <p className="font-body text-[#888888] text-xs uppercase tracking-widest mb-2">
                      Fragrance Notes
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedFragrance.notes.map((note) => (
                        <span
                          key={note}
                          className="px-3 py-1 rounded-full bg-[#0B0B0B] border border-[#2A2519] text-[#F4EADE] text-sm font-body"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="bg-[#0B0B0B] rounded-lg px-4 py-2 border border-[#2A2519]">
                    <span className="font-body text-[#888888] text-xs uppercase tracking-widest">
                      Gender
                    </span>
                    <p className="font-body text-[#F4EADE] font-semibold">
                      {selectedFragrance.gender}
                    </p>
                  </div>
                  <div className="bg-[#0B0B0B] rounded-lg px-4 py-2 border border-[#2A2519]">
                    <span className="font-body text-[#888888] text-xs uppercase tracking-widest">
                      Mood
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {selectedFragrance.mood?.map((m) => (
                        <span
                          key={m}
                          className="text-[#C9A94A] text-sm font-medium"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                  {selectedFragrance.longevity && (
                    <div className="bg-[#0B0B0B] rounded-lg px-4 py-2 border border-[#2A2519]">
                      <span className="font-body text-[#888888] text-xs uppercase tracking-widest">
                        Longevity
                      </span>
                      <p className="font-body text-[#F4EADE] font-semibold">
                        {selectedFragrance.longevity}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#2A2519]">
                  <div className="flex items-center gap-3">
                    <label
                      htmlFor="quantity"
                      className="font-body text-[#888888] text-sm"
                    >
                      Qty:
                    </label>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 rounded-full border border-[#2A2519] text-[#F4EADE] hover:border-[#C9A94A] transition-colors duration-200"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span
                        id="quantity"
                        className="font-body text-[#F4EADE] w-8 text-center"
                      >
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-8 h-8 rounded-full border border-[#2A2519] text-[#F4EADE] hover:border-[#C9A94A] transition-colors duration-200"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-1 gap-3">
                    <a
                      href={WA_LINK(
                        `Hi, I'd like to order ${selectedFragrance.name} from Trademark Aroma (Quantity: ${quantity})`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#C9A94A] text-[#0B0B0B] font-body font-bold uppercase tracking-[0.08em] hover:opacity-90 transition-opacity duration-200"
                    >
                      <ShoppingCart size={18} />
                      Order Now
                    </a>
                    <a
                      href={WA_LINK(
                        `Hi, I'd like a consultation about ${selectedFragrance.name} from Trademark Aroma`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-6 py-3 rounded-full border border-[#2A2519] text-[#F4EADE] font-body font-semibold uppercase tracking-[0.08em] hover:border-[#C9A94A] hover:text-[#C9A94A] transition-colors duration-200"
                    >
                      Consult
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}