"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll<HTMLElement>("[data-anim]");
    els?.forEach((el, i) => {
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 200 + i * 150);
    });
  }, []);

  return (
    <section
      ref={ref}
      style={{ background: "#FEFCF8", minHeight: "100svh", position: "relative", overflow: "hidden" }}
    >
      {/* ── Mobile layout: stacked ── */}
      <div style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "0 1.25rem",
        minHeight: "100svh",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr auto",
      }}>

        {/* Text block */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "100px",
          paddingBottom: "2rem",
        }}>

          {/* Eyebrow */}
          <div
            data-anim
            style={{
              display: "flex", alignItems: "center", gap: "12px",
              marginBottom: "1.5rem",
              opacity: 0, transform: "translateY(20px)",
              transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <span style={{ display: "block", width: "28px", height: "1px", background: "#B8946A" }} />
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "10px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#B8946A",
              fontWeight: 500,
            }}>
              Port Harcourt · Made with Love
            </span>
          </div>

          {/* Heading */}
          <h1
            data-anim
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(2.6rem, 10vw, 5.5rem)",
              lineHeight: 1.05,
              color: "#2C1810",
              opacity: 0, transform: "translateY(24px)",
              transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
              letterSpacing: "-0.3px",
            }}
          >
            Cakes Baked<br />
            <em style={{ fontStyle: "italic" }}>with Heart,</em><br />
            Served with Love
          </h1>

          {/* Rule */}
          <div
            data-anim
            style={{
              width: "48px", height: "1px", background: "#D4B896",
              margin: "1.5rem 0",
              opacity: 0, transform: "translateY(12px)",
              transition: "all 0.6s cubic-bezier(0.16,1,0.3,1)",
            }}
          />

          {/* Description */}
          <p
            data-anim
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(0.875rem, 3vw, 1rem)",
              lineHeight: 1.75,
              color: "#7A5C4E",
              maxWidth: "400px",
              opacity: 0, transform: "translateY(12px)",
              transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            Handcrafted celebration cakes, pastries &amp; snacks — made to order,
            each one telling a unique story. Queens Park Estate, Port Harcourt. Open 24 hours.
          </p>

          {/* CTAs */}
          <div
            data-anim
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "2rem",
              opacity: 0, transform: "translateY(12px)",
              transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <a
              href="#menu"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                fontWeight: 600,
                background: "#2C1810",
                color: "#FEFCF8",
                padding: "14px 28px",
                textDecoration: "none",
                transition: "background 0.3s",
                display: "inline-block",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#B8946A"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#2C1810"}
            >
              View Menu
            </a>
            <a
              href="tel:+2348167853002"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                fontWeight: 600,
                background: "transparent",
                color: "#2C1810",
                border: "1px solid #2C1810",
                padding: "14px 28px",
                textDecoration: "none",
                transition: "all 0.3s",
                display: "inline-block",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "#2C1810";
                (e.currentTarget as HTMLElement).style.color = "#FEFCF8";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "#2C1810";
              }}
            >
              Call to Order
            </a>
          </div>

          {/* Stats */}
          <div
            data-anim
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem",
              marginTop: "2.5rem",
              paddingTop: "2rem",
              borderTop: "1px solid #E8DDD0",
              opacity: 0, transform: "translateY(12px)",
              transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            {[
              { value: "5.0★", label: "Google Rating" },
              { value: "24h",  label: "Always Open" },
              { value: "100%", label: "Made Fresh" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", fontWeight: 300, color: "#2C1810", lineHeight: 1 }}>
                  {value}
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", color: "#B8946A", marginTop: "4px" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero image — desktop right side, mobile subtle bg */}
      <div style={{
        position: "absolute",
        top: 0, right: 0, bottom: 0,
        width: "45%",
        zIndex: 0,
      }} className="hero-img-panel">
        <style>{`
          .hero-img-panel { display: none; }
          @media (min-width: 768px) { .hero-img-panel { display: block; } }
          .hero-text-side { position: relative; z-index: 1; }
        `}</style>
        <img
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&q=85&fit=crop"
          alt="Beautiful celebration cake"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, #FEFCF8 0%, transparent 20%)",
        }} />

        {/* Floating card */}
        <div style={{
          position: "absolute",
          bottom: "80px",
          left: "-32px",
          background: "#FEFCF8",
          border: "1px solid #E8DDD0",
          padding: "20px 24px",
          boxShadow: "0 8px 40px rgba(44,24,16,0.12)",
        }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", color: "#B8946A", marginBottom: "4px" }}>
            Custom Orders
          </p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 300, color: "#2C1810" }}>
            Every cake tells your story
          </p>
        </div>
      </div>

      {/* Mobile bg tint image */}
      <div className="mobile-hero-bg" style={{ display: "none" }}>
        <style>{`
          @media (max-width: 767px) {
            .mobile-hero-bg { display: block !important; position: absolute; inset: 0; z-index: 0; }
            .mobile-hero-bg img { width: 100%; height: 100%; object-fit: cover; opacity: 0.08; }
          }
        `}</style>
        <img
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=70&fit=crop"
          alt=""
          aria-hidden="true"
        />
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute",
        bottom: "24px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "6px",
        zIndex: 2,
      }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "8px", letterSpacing: "4px", textTransform: "uppercase", color: "#B8946A" }}>
          Scroll
        </span>
        <div style={{ width: "1px", height: "36px", background: "#D4B896" }} className="anim-scroll-line" />
      </div>
    </section>
  );
}