"use client";
import { useState } from "react";

const categories = [
  { id: "celebration", label: "Celebration", icon: "✦" },
  { id: "everyday", label: "Everyday", icon: "✦" },
  { id: "snacks", label: "Pastries", icon: "✦" },
];

const menuItems: Record<string, {
  name: string;
  desc: string;
  price: string;
  image: string;
  tag?: string;
}[]> = {
  celebration: [
    {
      name: "Custom Birthday Cake",
      desc: "Personalized designs crafted around your vision — every layer tells your story.",
      price: "From ₦8,000",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80&fit=crop",
      tag: "Bestseller",
    },
    {
      name: "Wedding Cake",
      desc: "Elegant tiered masterpieces that anchor your most precious day.",
      price: "From ₦35,000",
      image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&q=80&fit=crop",
      tag: "Signature",
    },
    {
      name: "Anniversary Cake",
      desc: "Romantic designs woven with the details of your shared journey.",
      price: "From ₦12,000",
      image: "https://images.unsplash.com/photo-1611293388250-580b08c4a145?w=600&q=80&fit=crop",
    },
    {
      name: "Baby Shower Cake",
      desc: "Sweet, adorable themed designs welcoming the newest little one.",
      price: "From ₦10,000",
      image: "https://images.unsplash.com/photo-1551404973-761c83cd8339?w=600&q=80&fit=crop",
    },
  ],
  everyday: [
    {
      name: "Fruit Cake",
      desc: "Rich, moist and packed with fruits — a Port Harcourt crowd favourite.",
      price: "From ₦5,000",
      image: "https://images.unsplash.com/photo-1560180474-e8563fd75bab?w=600&q=80&fit=crop",
      tag: "Fan Favourite",
    },
    {
      name: "Chocolate Cake",
      desc: "Decadent layers of pure chocolate bliss, frosted to perfection.",
      price: "From ₦6,000",
      image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&q=80&fit=crop",
    },
    {
      name: "Vanilla Sponge",
      desc: "Light, airy and perfectly sweet — a timeless classic done right.",
      price: "From ₦4,500",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop",
    },
    {
      name: "Red Velvet",
      desc: "Classic velvety crumb with silky cream cheese frosting.",
      price: "From ₦7,000",
      image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=600&q=80&fit=crop",
    },
  ],
  snacks: [
    {
      name: "Meat Pie",
      desc: "Flaky golden pastry filled with well-seasoned minced meat.",
      price: "₦500",
      image: "https://images.unsplash.com/photo-1541990403272-5f5854c1a077?w=600&q=80&fit=crop",
    },
    {
      name: "Chin Chin",
      desc: "Crunchy, lightly sweetened fried dough — great for gifting.",
      price: "From ₦1,000",
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80&fit=crop",
    },
    {
      name: "Doughnuts",
      desc: "Soft, pillowy rings glazed with care — impossible to have just one.",
      price: "₦400",
      image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80&fit=crop",
    },
    {
      name: "Cupcakes",
      desc: "Miniature cakes with generous fluffy frosting in assorted flavours.",
      price: "From ₦600",
      image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&q=80&fit=crop",
      tag: "Popular",
    },
  ],
};

export default function Menu() {
  const [active, setActive] = useState("celebration");
  const items = menuItems[active];

  return (
    <section id="menu" className="py-28 px-8 md:px-12" style={{ background: "#FEFCF8" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 items-end mb-16">
          <div>
            <p
              className="text-[11px] tracking-[5px] uppercase mb-4"
              style={{ color: "#B8946A", fontFamily: "'DM Sans', sans-serif" }}
            >
              What We Make
            </p>
            <h2
              className="font-light leading-tight"
              style={{
                fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
                color: "#2C1810",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
              }}
            >
              Our Menu
            </h2>
          </div>
          <div className="md:text-right">
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#7A5C4E", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              Every item made fresh, made to order. <br className="hidden md:block" />
              Call us to place a custom order anytime.
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-0 mb-14 border-b border-[#E8DDD0]">
          {categories.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className="relative px-8 py-4 text-[11px] tracking-[3px] uppercase font-medium transition-all duration-300"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: active === id ? "#2C1810" : "#B8A898",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              {label}
              {active === id && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-px"
                  style={{ background: "#2C1810" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={item.name}
              className="group flex flex-col"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/5] mb-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5"
                  style={{ background: "linear-gradient(to top, rgba(44,24,16,0.7) 0%, transparent 60%)" }}
                >
                  <a
                    href="tel:+2348167853002"
                    className="text-[10px] tracking-[3px] uppercase font-semibold border-b border-white/70 pb-0.5"
                    style={{ color: "#FEFCF8", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Order This
                  </a>
                </div>
                {/* Tag badge */}
                {item.tag && (
                  <span
                    className="absolute top-4 left-4 px-3 py-1 text-[9px] tracking-[2px] uppercase font-semibold"
                    style={{
                      background: "#B8946A",
                      color: "#FEFCF8",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {item.tag}
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3
                    className="font-light leading-tight"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: "#2C1810",
                      fontSize: "1.2rem",
                    }}
                  >
                    {item.name}
                  </h3>
                  <span
                    className="text-sm font-medium flex-shrink-0 mt-0.5"
                    style={{ color: "#B8946A", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {item.price}
                  </span>
                </div>
                <p
                  className="text-[13px] leading-relaxed"
                  style={{
                    color: "#9A7A6C",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div
          className="mt-20 flex flex-col md:flex-row items-center justify-between gap-6 px-10 py-10 border border-[#E8DDD0]"
          style={{ background: "#F7F0E8" }}
        >
          <div>
            <p
              className="font-light mb-1"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.8rem",
                color: "#2C1810",
              }}
            >
              Have something specific in mind?
            </p>
            <p
              className="text-sm"
              style={{ color: "#7A5C4E", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              We create fully custom cakes — just share your vision with us.
            </p>
          </div>
          <a
            href="tel:+2348167853002"
            className="flex-shrink-0 px-10 py-4 text-[11px] tracking-widest uppercase font-semibold transition-all duration-300"
            style={{
              background: "#2C1810",
              color: "#FEFCF8",
              fontFamily: "'DM Sans', sans-serif",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#B8946A";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#2C1810";
            }}
          >
            Call Us Now
          </a>
        </div>

      </div>
    </section>
  );
}