"use client";
import { useState } from "react";

const categories = [
  { id: "celebration", label: "Celebration" },
  { id: "everyday",    label: "Everyday" },
  { id: "snacks",      label: "Pastries" },
];

const menuItems: Record<string, { name: string; desc: string; price: string; image: string; tag?: string }[]> = {
  celebration: [
    { name: "Custom Birthday Cake", desc: "Personalized designs crafted around your vision.", price: "From ₦8,000", image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80&fit=crop", tag: "Bestseller" },
    { name: "Wedding Cake", desc: "Elegant tiered masterpieces for your most precious day.", price: "From ₦35,000", image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&q=80&fit=crop", tag: "Signature" },
    { name: "Anniversary Cake", desc: "Romantic designs woven with your shared journey.", price: "From ₦12,000", image: "https://images.unsplash.com/photo-1611293388250-580b08c4a145?w=600&q=80&fit=crop" },
    { name: "Baby Shower Cake", desc: "Sweet, adorable themed designs for new arrivals.", price: "From ₦10,000", image: "https://images.unsplash.com/photo-1551404973-761c83cd8339?w=600&q=80&fit=crop" },
  ],
  everyday: [
    { name: "Fruit Cake", desc: "Rich, moist and packed with fruits — a Port Harcourt favourite.", price: "From ₦5,000", image: "https://images.unsplash.com/photo-1560180474-e8563fd75bab?w=600&q=80&fit=crop", tag: "Fan Favourite" },
    { name: "Chocolate Cake", desc: "Decadent layers of pure chocolate bliss.", price: "From ₦6,000", image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&q=80&fit=crop" },
    { name: "Vanilla Sponge", desc: "Light, airy and perfectly sweet — a timeless classic.", price: "From ₦4,500", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop" },
    { name: "Red Velvet", desc: "Classic velvety crumb with silky cream cheese frosting.", price: "From ₦7,000", image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=600&q=80&fit=crop" },
  ],
  snacks: [
    { name: "Meat Pie", desc: "Flaky golden pastry filled with well-seasoned minced meat.", price: "₦500", image: "https://images.unsplash.com/photo-1541990403272-5f5854c1a077?w=600&q=80&fit=crop" },
    { name: "Chin Chin", desc: "Crunchy, lightly sweetened fried dough — great for gifting.", price: "From ₦1,000", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80&fit=crop" },
    { name: "Doughnuts", desc: "Soft, pillowy rings glazed with care.", price: "₦400", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80&fit=crop" },
    { name: "Cupcakes", desc: "Miniature cakes with generous fluffy frosting, assorted flavours.", price: "From ₦600", image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&q=80&fit=crop", tag: "Popular" },
  ],
};

export default function Menu() {
  const [active, setActive] = useState("celebration");
  const items = menuItems[active];

  return (
    <section id="menu" style={{ background: "#FEFCF8", padding: "5rem 0 5rem" }}>
      <style>{`
        .menu-inner { max-width: 1280px; margin: 0 auto; padding: 0 1.25rem; }
        @media (min-width: 768px) { .menu-inner { padding: 0 3rem; } }

        .menu-header { display: grid; grid-template-columns: 1fr; gap: 1rem; margin-bottom: 3rem; }
        @media (min-width: 768px) { .menu-header { grid-template-columns: 1fr 1fr; align-items: end; } }

        .menu-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        @media (min-width: 768px) { .menu-grid { grid-template-columns: repeat(4, 1fr); gap: 1.5rem; } }

        .menu-cta { display: flex; flex-direction: column; gap: 1rem; align-items: flex-start; }
        @media (min-width: 768px) { .menu-cta { flex-direction: row; align-items: center; justify-content: space-between; } }

        .menu-item-img { aspect-ratio: 3/4; overflow: hidden; position: relative; margin-bottom: 0.75rem; }
        @media (min-width: 768px) { .menu-item-img { aspect-ratio: 4/5; } }

        .menu-item-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s; }
        .menu-item:hover .menu-item-img img { transform: scale(1.05); }

        .menu-overlay {
          position: absolute; inset: 0; opacity: 0;
          background: linear-gradient(to top, rgba(44,24,16,0.65) 0%, transparent 55%);
          transition: opacity 0.4s;
          display: flex; align-items: flex-end; padding: 1rem;
        }
        .menu-item:hover .menu-overlay { opacity: 1; }

        .tab-btn {
          background: none; border: none; cursor: pointer;
          padding: 0.75rem 1.25rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 10px; letter-spacing: 3px; text-transform: uppercase; font-weight: 500;
          transition: color 0.2s;
          position: relative;
          white-space: nowrap;
        }
        @media (min-width: 768px) { .tab-btn { padding: 1rem 2rem; } }
      `}</style>

      <div className="menu-inner">

        {/* Header */}
        <div className="menu-header">
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "5px", textTransform: "uppercase", color: "#B8946A", marginBottom: "0.75rem" }}>
              What We Make
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(2rem,6vw,3.5rem)", color: "#2C1810", lineHeight: 1.05 }}>
              Our Menu
            </h2>
          </div>
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.875rem", lineHeight: 1.75, color: "#7A5C4E" }}>
              Every item made fresh, to order. <br />Call us to place a custom order anytime.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", borderBottom: "1px solid #E8DDD0", marginBottom: "2.5rem", overflowX: "auto" }}>
          {categories.map(({ id, label }) => (
            <button
              key={id}
              className="tab-btn"
              onClick={() => setActive(id)}
              style={{ color: active === id ? "#2C1810" : "#B8A898" }}
            >
              {label}
              {active === id && (
                <span style={{
                  position: "absolute", bottom: 0, left: 0, right: 0, height: "1px",
                  background: "#2C1810",
                }} />
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="menu-grid">
          {items.map((item) => (
            <div key={item.name} className="menu-item" style={{ display: "flex", flexDirection: "column" }}>
              <div className="menu-item-img">
                <img src={item.image} alt={item.name} loading="lazy" />
                <div className="menu-overlay">
                  <a href="tel:+2348167853002" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 600, color: "#FEFCF8", borderBottom: "1px solid rgba(255,255,255,0.6)", paddingBottom: "2px", textDecoration: "none" }}>
                    Order This
                  </a>
                </div>
                {item.tag && (
                  <span style={{ position: "absolute", top: "10px", left: "10px", background: "#B8946A", color: "#FEFCF8", fontFamily: "'DM Sans', sans-serif", fontSize: "8px", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600, padding: "4px 8px" }}>
                    {item.tag}
                  </span>
                )}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px", marginBottom: "4px" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(1rem,3vw,1.2rem)", color: "#2C1810", lineHeight: 1.2 }}>
                  {item.name}
                </h3>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 500, color: "#B8946A", flexShrink: 0 }}>
                  {item.price}
                </span>
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "12px", lineHeight: 1.6, color: "#9A7A6C" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="menu-cta" style={{ marginTop: "4rem", background: "#F7F0E8", border: "1px solid #E8DDD0", padding: "2rem 2rem" }}>
          <div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(1.4rem,4vw,2rem)", color: "#2C1810", marginBottom: "4px" }}>
              Have something specific in mind?
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.875rem", color: "#7A5C4E" }}>
              We create fully custom cakes — just share your vision.
            </p>
          </div>
          <a
            href="tel:+2348167853002"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 600, background: "#2C1810", color: "#FEFCF8", padding: "14px 32px", textDecoration: "none", transition: "background 0.3s", display: "inline-block", flexShrink: 0, marginTop: "0" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#B8946A"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#2C1810"}
          >
            Call Us Now
          </a>
        </div>

      </div>
    </section>
  );
}