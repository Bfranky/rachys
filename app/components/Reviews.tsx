"use client";

const reviews = [
  {
    name: "MR CIA",
    badge: "Local Guide · 138 reviews",
    rating: 5,
    date: "2 months ago",
    avatar: "M",
    color: "#2C1810",
    text: "RACHYS CONFECTIONERY is a trustworthy brand. I needed a special cake to celebrate my lady and she didn't just suggest options — she asked what story I wanted the cake to tell. That personal touch made all the difference. Absolutely phenomenal.",
  },
  {
    name: "Nwaneri Azuka",
    badge: "2 reviews",
    rating: 5,
    date: "3 months ago",
    avatar: "N",
    color: "#B8946A",
    text: "Your cake was amazing! From the packaging to the taste, I could feel the love in every bite. Soft, moist, no aftertaste — just pure goodness. Even two days later it still tasted incredible. Will definitely be ordering again.",
  },
  {
    name: "Samuel Rejoyce",
    badge: "8 reviews",
    rating: 5,
    date: "3 months ago",
    avatar: "S",
    color: "#7A5C4E",
    text: "The best cake shop in Port Harcourt. Swift, customer friendly and budget friendly. So yummy and beautifully decorated. My favourite is the fruit cake 🤗 — I recommend their service anytime, any day.",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-28 px-8 md:px-12"
      style={{ background: "#F7F0E8" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <p
              className="text-[11px] tracking-[5px] uppercase mb-4"
              style={{ color: "#B8946A", fontFamily: "'DM Sans', sans-serif" }}
            >
              Testimonials
            </p>
            <h2
              className="font-light leading-tight"
              style={{
                fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
                color: "#2C1810",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
              }}
            >
              What Our<br />
              <em style={{ fontStyle: "italic" }}>Customers Say</em>
            </h2>
          </div>

          {/* Rating Block */}
          <div className="flex items-center gap-6 pb-2">
            <div>
              <p
                className="font-light leading-none"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "5rem",
                  color: "#2C1810",
                  lineHeight: 1,
                }}
              >
                5.0
              </p>
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: "#B8946A", fontSize: "1rem" }}>★</span>
                ))}
              </div>
              <p
                className="text-[10px] tracking-[2px] uppercase mt-1"
                style={{ color: "#9A7A6C", fontFamily: "'DM Sans', sans-serif" }}
              >
                7 Google Reviews
              </p>
            </div>
            <div className="w-px h-20 bg-[#D4B896]" />
            <div>
              <p
                className="text-sm leading-relaxed max-w-[180px]"
                style={{ color: "#7A5C4E", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
              >
                Trusted by families across Port Harcourt
              </p>
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-px bg-[#D4B896]">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="flex flex-col p-8 md:p-10 group transition-colors duration-500"
              style={{ background: "#FEFCF8" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#F7F0E8";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#FEFCF8";
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(r.rating)].map((_, i) => (
                  <span key={i} style={{ color: "#B8946A", fontSize: "0.85rem" }}>★</span>
                ))}
              </div>

              {/* Large quote mark */}
              <p
                className="leading-none mb-4 select-none"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "5rem",
                  color: "#E8DDD0",
                  lineHeight: 0.8,
                  marginTop: "-8px",
                }}
              >
                &ldquo;
              </p>

              {/* Review text */}
              <p
                className="flex-1 text-[15px] leading-relaxed mb-8"
                style={{
                  color: "#5C3D2E",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                }}
              >
                {r.text}
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#E8DDD0]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0"
                  style={{
                    background: r.color,
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1rem",
                  }}
                >
                  {r.avatar}
                </div>
                <div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "#2C1810", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {r.name}
                  </p>
                  <p
                    className="text-[11px] mt-0.5"
                    style={{ color: "#B8A898", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {r.badge} · {r.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google CTA */}
        <div className="flex justify-center mt-12">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase font-medium transition-colors duration-300 group"
            style={{ color: "#7A5C4E", fontFamily: "'DM Sans', sans-serif" }}
          >
            <span
              className="block h-px w-8 transition-all duration-300 group-hover:w-14"
              style={{ background: "#B8946A" }}
            />
            Leave a Review on Google
            <span
              className="block h-px w-8 transition-all duration-300 group-hover:w-14"
              style={{ background: "#B8946A" }}
            />
          </a>
        </div>

      </div>
    </section>
  );
}