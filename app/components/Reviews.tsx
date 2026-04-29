"use client";

const reviews = [
  {
    name: "MR CIA", badge: "Local Guide · 138 reviews", date: "2 months ago", avatar: "M", color: "#2C1810",
    text: "RACHYS CONFECTIONERY is a trustworthy brand. I needed a special cake to celebrate my lady and she didn't just suggest options — she asked what story I wanted the cake to tell. That personal touch made all the difference. Absolutely phenomenal.",
  },
  {
    name: "Nwaneri Azuka", badge: "2 reviews", date: "3 months ago", avatar: "N", color: "#B8946A",
    text: "Your cake was amazing! From the packaging to the taste, I could feel the love in every bite. Soft, moist, no aftertaste — pure goodness. Even two days later it still tasted incredible. Will definitely be ordering again.",
  },
  {
    name: "Samuel Rejoyce", badge: "8 reviews", date: "3 months ago", avatar: "S", color: "#7A5C4E",
    text: "The best cake shop in Port Harcourt. Swift, customer friendly and budget friendly. So yummy and beautifully decorated. My favourite is the fruit cake 🤗 — I recommend their service anytime, any day.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" style={{ background: "#F7F0E8", padding: "5rem 0" }}>
      <style>{`
        .reviews-inner { max-width: 1280px; margin: 0 auto; padding: 0 1.25rem; }
        @media (min-width: 768px) { .reviews-inner { padding: 0 3rem; } }

        .reviews-header { display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 3rem; }
        @media (min-width: 768px) { .reviews-header { flex-direction: row; align-items: flex-end; justify-content: space-between; } }

        .reviews-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1px;
          background: #D4B896;
        }
        @media (min-width: 768px) {
          .reviews-grid { grid-template-columns: repeat(3, 1fr); }
        }

        .review-card {
          background: #FEFCF8;
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          transition: background 0.4s;
        }
        @media (min-width: 768px) { .review-card { padding: 2.5rem; } }
        .review-card:hover { background: #F7F0E8; }
      `}</style>

      <div className="reviews-inner">

        {/* Header */}
        <div className="reviews-header">
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "5px", textTransform: "uppercase", color: "#B8946A", marginBottom: "0.75rem" }}>
              Testimonials
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(2rem,6vw,3.5rem)", color: "#2C1810", lineHeight: 1.05 }}>
              What Our<br /><em style={{ fontStyle: "italic" }}>Customers Say</em>
            </h2>
          </div>

          {/* Rating */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "4.5rem", fontWeight: 300, color: "#2C1810", lineHeight: 1 }}>
                5.0
              </p>
              <div style={{ display: "flex", gap: "3px", marginTop: "6px" }}>
                {[...Array(5)].map((_, i) => <span key={i} style={{ color: "#B8946A", fontSize: "14px" }}>★</span>)}
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", color: "#9A7A6C", marginTop: "4px" }}>
                7 Google Reviews
              </p>
            </div>
            <div style={{ width: "1px", height: "64px", background: "#D4B896" }} />
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "13px", color: "#7A5C4E", maxWidth: "160px", lineHeight: 1.6 }}>
              Trusted by families across Port Harcourt
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="reviews-grid">
          {reviews.map((r) => (
            <div key={r.name} className="review-card">
              {/* Stars */}
              <div style={{ display: "flex", gap: "3px", marginBottom: "1rem" }}>
                {[...Array(5)].map((_, i) => <span key={i} style={{ color: "#B8946A", fontSize: "13px" }}>★</span>)}
              </div>

              {/* Big quote */}
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "4rem", color: "#E8DDD0", lineHeight: 0.7, marginBottom: "0.5rem" }}>&ldquo;</p>

              {/* Text */}
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "14px", lineHeight: 1.75, color: "#5C3D2E", flexGrow: 1, marginBottom: "1.5rem" }}>
                {r.text}
              </p>

              {/* Reviewer */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingTop: "1.25rem", borderTop: "1px solid #E8DDD0" }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: r.color, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", flexShrink: 0 }}>
                  {r.avatar}
                </div>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "13px", color: "#2C1810" }}>{r.name}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "#B8A898" }}>{r.badge} · {r.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 500, color: "#7A5C4E", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#B8946A"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#7A5C4E"}
          >
            <span style={{ display: "block", height: "1px", width: "32px", background: "#B8946A" }} />
            Leave a Review on Google
            <span style={{ display: "block", height: "1px", width: "32px", background: "#B8946A" }} />
          </a>
        </div>

      </div>
    </section>
  );
}