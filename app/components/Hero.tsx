"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll("[data-anim]");
    els?.forEach((el, i) => {
      setTimeout(() => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "translateY(0)";
      }, 150 + i * 160);
    });
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#FEFCF8" }}
    >
      {/* Left: Text Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-12 grid md:grid-cols-2 gap-0 items-center min-h-screen">
        
        {/* Text Side */}
        <div className="flex flex-col justify-center py-32 md:py-0 pr-0 md:pr-16">

          {/* Eyebrow */}
          <div
            data-anim
            className="flex items-center gap-3 mb-8"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)" }}
          >
            <span className="block w-8 h-px bg-[#B8946A]" />
            <span
              className="text-[11px] tracking-[4px] uppercase font-medium"
              style={{ color: "#B8946A", fontFamily: "'DM Sans', sans-serif" }}
            >
              Port Harcourt · Est. with Love
            </span>
          </div>

          {/* Main heading */}
          <h1
            data-anim
            style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
              color: "#2C1810",
              opacity: 0,
              transform: "translateY(24px)",
              transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
              fontSize: "clamp(3.5rem, 7vw, 6rem)",
              lineHeight: 1.05,
              fontWeight: 300,
              letterSpacing: "-0.5px",
            }}
          >
            Cakes Baked<br />
            <em style={{ fontStyle: "italic", fontWeight: 400 }}>with Heart,</em><br />
            Served with Love
          </h1>

          {/* Divider */}
          <div
            data-anim
            className="my-8"
            style={{ opacity: 0, transform: "translateY(16px)", transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)" }}
          >
            <span className="block w-16 h-px bg-[#D4B896]" />
          </div>

          {/* Description */}
          <p
            data-anim
            className="text-base leading-relaxed max-w-md"
            style={{
              color: "#7A5C4E",
              fontFamily: "'DM Sans', sans-serif",
              opacity: 0,
              transform: "translateY(16px)",
              transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
              fontWeight: 300,
            }}
          >
            Handcrafted celebration cakes, pastries &amp; snacks — each one made 
            to order, each one telling a unique story. Based in Queens Park Estate, 
            Port Harcourt. Open 24 hours.
          </p>

          {/* CTAs */}
          <div
            data-anim
            className="flex flex-wrap gap-4 mt-10"
            style={{ opacity: 0, transform: "translateY(16px)", transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)" }}
          >
            <a
              href="#menu"
              className="px-8 py-3.5 text-[12px] tracking-widest uppercase font-semibold transition-all duration-300"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                background: "#2C1810",
                color: "#FEFCF8",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#B8946A";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#2C1810";
              }}
            >
              View Menu
            </a>
            <a
              href="tel:+2348167853002"
              className="px-8 py-3.5 text-[12px] tracking-widest uppercase font-semibold border transition-all duration-300"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "#2C1810",
                borderColor: "#2C1810",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#2C1810";
                (e.currentTarget as HTMLElement).style.color = "#FEFCF8";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "#2C1810";
              }}
            >
              Call to Order
            </a>
          </div>

          {/* Stats row */}
          <div
            data-anim
            className="flex gap-10 mt-14 pt-10 border-t border-[#E8DDD0]"
            style={{ opacity: 0, transform: "translateY(16px)", transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)" }}
          >
            {[
              { value: "5.0★", label: "Google Rating" },
              { value: "24h", label: "Always Open" },
              { value: "100%", label: "Made Fresh" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p
                  className="text-2xl font-light"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "#2C1810" }}
                >
                  {value}
                </p>
                <p
                  className="text-[10px] tracking-[3px] uppercase mt-0.5"
                  style={{ color: "#B8946A", fontFamily: "'DM Sans', sans-serif" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Side */}
        <div
          data-anim
          className="hidden md:block relative h-screen"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "all 1s cubic-bezier(0.16,1,0.3,1)" }}
        >
          {/* Main large image */}
          <div className="absolute inset-0 top-16 bottom-16">
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=85&fit=crop"
              alt="Beautiful celebration cake"
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.97) saturate(1.05)" }}
            />
          </div>

          {/* Floating badge */}
          <div
            className="absolute bottom-24 -left-8 z-10 px-6 py-4 shadow-xl"
            style={{ background: "#FEFCF8", border: "1px solid #E8DDD0" }}
          >
            <p
              className="text-[10px] tracking-[3px] uppercase mb-1"
              style={{ color: "#B8946A", fontFamily: "'DM Sans', sans-serif" }}
            >
              Custom Orders
            </p>
            <p
              className="text-base font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#2C1810" }}
            >
              Every cake tells your story
            </p>
          </div>

          {/* Subtle overlay texture */}
          <div
            className="absolute inset-0 top-16 bottom-16 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(254,252,248,0.3) 100%)" }}
          />
        </div>
      </div>

      {/* Mobile hero image */}
      <div
        className="md:hidden absolute inset-0 z-0"
        style={{ background: "linear-gradient(to bottom, rgba(254,252,248,0.85) 40%, rgba(254,252,248,0.6) 100%)" }}
      >
        <img
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80&fit=crop"
          alt="Celebration cake"
          className="w-full h-full object-cover -z-10 absolute inset-0"
          style={{ opacity: 0.25 }}
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span
          className="text-[9px] tracking-[4px] uppercase"
          style={{ color: "#B8946A", fontFamily: "'DM Sans', sans-serif" }}
        >
          Scroll
        </span>
        <div
          className="w-px h-10 bg-[#D4B896]"
          style={{
            animation: "scrollLine 1.8s ease-in-out infinite",
          }}
        />
        <style>{`
          @keyframes scrollLine {
            0% { transform: scaleY(0); transform-origin: top; opacity: 1; }
            50% { transform: scaleY(1); transform-origin: top; opacity: 1; }
            100% { transform: scaleY(1); transform-origin: bottom; opacity: 0; }
          }
        `}</style>
      </div>
    </section>
  );
}