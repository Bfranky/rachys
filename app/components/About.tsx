"use client";

export default function About() {
  return (
    <section id="about" style={{ background: "#FEFCF8", padding: "5rem 0" }}>
      <style>{`
        .about-inner { max-width: 1280px; margin: 0 auto; padding: 0 1.25rem; }
        @media (min-width: 768px) { .about-inner { padding: 0 3rem; } }

        .about-grid { display: grid; grid-template-columns: 1fr; gap: 3rem; }
        @media (min-width: 1024px) { .about-grid { grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; } }

        .about-img-wrap { position: relative; }

        .about-img-primary { width: 100%; aspect-ratio: 4/5; overflow: hidden; }
        .about-img-primary img { width: 100%; height: 100%; object-fit: cover; }

        .about-img-secondary {
          display: none;
        }
        @media (min-width: 480px) {
          .about-img-secondary {
            display: block;
            position: absolute;
            bottom: -2rem;
            right: -0.5rem;
            width: 140px;
            height: 140px;
            overflow: hidden;
            border: 4px solid #FEFCF8;
            box-shadow: 0 4px 24px rgba(44,24,16,0.12);
          }
        }
        @media (min-width: 768px) {
          .about-img-secondary { width: 180px; height: 180px; right: -1.5rem; }
        }
        .about-img-secondary img { width: 100%; height: 100%; object-fit: cover; }

        .about-badge {
          position: absolute;
          top: 1.5rem;
          left: -0.5rem;
          background: #2C1810;
          padding: 1rem 1.25rem;
        }
        @media (min-width: 768px) { .about-badge { left: -1.5rem; } }

        .values-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
      `}</style>

      <div className="about-inner">
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "5px", textTransform: "uppercase", color: "#B8946A", marginBottom: "3rem" }}>
          Our Story
        </p>

        <div className="about-grid">

          {/* Images */}
          <div className="about-img-wrap" style={{ paddingBottom: "2.5rem" }}>
            <div className="about-img-primary">
              <img
                src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=700&q=85&fit=crop"
                alt="Baker decorating a cake"
              />
            </div>
            <div className="about-img-secondary">
              <img src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&q=80&fit=crop" alt="Cupcakes" />
            </div>
            <div className="about-badge">
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "8px", letterSpacing: "3px", textTransform: "uppercase", color: "#B8946A", marginBottom: "2px" }}>Founded in</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 300, color: "#F7F0E8", lineHeight: 1 }}>PHC</p>
            </div>
          </div>

          {/* Text */}
          <div style={{ paddingTop: "0.5rem" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(2rem,5vw,3rem)", color: "#2C1810", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              Baked with Heart,<br /><em style={{ fontStyle: "italic" }}>Served with Love</em>
            </h2>

            <span style={{ display: "block", width: "48px", height: "1px", background: "#D4B896", marginBottom: "1.5rem" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              {[
                "Rachy's Confectionery was born from a deep love for bringing joy through food. Nestled in Port Harcourt's Queens Park Estate, we believe every celebration deserves a cake as unique as the person it honours.",
                "Our founder — Rachy — doesn't just make cakes. She asks about your story, your person, your moment. Every design is intentional, every flavour carefully crafted to leave a lasting memory.",
                "From light sponges to rich fruit cakes, from intricate wedding tiers to everyday snacks — the same love goes into everything we make.",
              ].map((p, i) => (
                <p key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "14px", lineHeight: 1.8, color: "#7A5C4E" }}>
                  {p}
                </p>
              ))}
            </div>

            {/* Values */}
            <div className="values-grid" style={{ marginBottom: "2rem" }}>
              {[
                { label: "Premium Quality", desc: "Only the finest ingredients" },
                { label: "Made with Love",  desc: "Every item crafted by hand" },
                { label: "Swift Service",   desc: "Fast, friendly, reliable" },
                { label: "Budget Friendly", desc: "Great taste, fair prices" },
              ].map(({ label, desc }) => (
                <div key={label} style={{ padding: "1rem", background: "#F7F0E8", border: "1px solid #E8DDD0" }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 600, color: "#2C1810", marginBottom: "3px" }}>
                    {label}
                  </p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "12px", color: "#9A7A6C" }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div style={{ borderTop: "1px solid #E8DDD0", paddingTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { icon: "📍", text: "Road 9b, Queens Park Estate, House 2, off Eneka Link Road, Rumunduru, Port Harcourt", href: null },
                { icon: "📞", text: "0816 785 3002", href: "tel:+2348167853002" },
                { icon: "🕐", text: "Open 24 hours, 7 days a week", href: null },
              ].map(({ icon, text, href }) => (
                <div key={text} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <span style={{ fontSize: "14px", flexShrink: 0, marginTop: "2px" }}>{icon}</span>
                  {href ? (
                    <a href={href} style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "13px", color: "#B8946A", textDecoration: "none" }}>
                      {text}
                    </a>
                  ) : (
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "13px", color: "#7A5C4E", lineHeight: 1.6 }}>
                      {text}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}