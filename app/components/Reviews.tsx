"use client";

const reviews = [
  {
    name: "MR CIA",
    badge: "Local Guide · 138 reviews",
    rating: 5,
    date: "2 months ago",
    text: "RACHYS CONFECTIONERY is a trustworthy brand. I just needed a special cake to celebrate my beautiful lady and I reached out to her. She didn't just suggest various cakes for me to choose from — she asked me what story I want the cake to tell. That personal touch made all the difference. Absolutely phenomenal experience.",
    avatar: "M",
  },
  {
    name: "Nwaneri Azuka",
    badge: "2 reviews",
    rating: 5,
    date: "3 months ago",
    text: "I just have to say your cake was amazing! 😍 From the packaging to the taste, I could literally feel the love in every bite. It's soft, moist, no aftertaste — just pure goodness. Even two days later, it still tasted incredible. Will definitely be ordering again!",
    avatar: "N",
  },
  {
    name: "Samuel Rejoyce",
    badge: "8 reviews",
    rating: 5,
    date: "3 months ago",
    text: "Rachys confectionery is the best shop in Portharcourt for your cakes and snacks. Their services are swift, customer friendly and budget friendly. The cake is so yummy and well-decorated. My favourite is the fruit cake 🤗🤗🤗. I recommend their service anytime, any day.",
    avatar: "S",
  },
];

const colors = ["#A84E47", "#C9A84C", "#7B5E4A"];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-24 px-6"
      style={{ background: "linear-gradient(160deg, #FDF6EC 0%, #FDE8DC 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-script text-5xl mb-2" style={{ color: "#A84E47" }}>Testimonials</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold" style={{ color: "#3D1F1A" }}>
            What Our Customers Say
          </h2>
          <div className="section-divider" />

          {/* Overall rating */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="font-playfair text-6xl font-bold" style={{ color: "#A84E47" }}>5.0</span>
            <div className="flex flex-col items-start gap-1">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <span className="font-dm text-sm" style={{ color: "#6B3D38" }}>Based on 7 Google reviews</span>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="card-hover rounded-3xl p-7 flex flex-col gap-4"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(245, 198, 176, 0.5)",
                boxShadow: "0 4px 24px rgba(61, 31, 26, 0.06)",
              }}
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(r.rating)].map((_, j) => (
                  <span key={j} className="text-yellow-400 text-base">★</span>
                ))}
              </div>

              {/* Review text */}
              <p className="font-dm text-sm leading-relaxed flex-1" style={{ color: "#4A2E2A", opacity: 0.85 }}>
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: "rgba(245, 198, 176, 0.4)" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-playfair font-bold text-lg flex-shrink-0"
                  style={{ background: colors[i % colors.length] }}
                >
                  {r.avatar}
                </div>
                <div>
                  <p className="font-dm font-semibold text-sm" style={{ color: "#3D1F1A" }}>{r.name}</p>
                  <p className="font-dm text-xs" style={{ color: "#6B3D38", opacity: 0.65 }}>
                    {r.badge} · {r.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google CTA */}
        <div className="text-center mt-12">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <span>📝</span> Leave Us a Review on Google
          </a>
        </div>
      </div>
    </section>
  );
}
