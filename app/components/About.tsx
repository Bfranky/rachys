"use client";

export default function About() {
  return (
    <section id="about" className="py-24 px-6" style={{ background: "#FFFAF5" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story */}
          <div>
            <p className="font-script text-5xl mb-2" style={{ color: "#A84E47" }}>Our Story</p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6" style={{ color: "#3D1F1A" }}>
              Baked with Heart,<br />Served with Love
            </h2>
            <div className="section-divider" style={{ margin: "0 0 24px 0" }} />

            <div className="space-y-4 font-dm text-base leading-relaxed" style={{ color: "#4A2E2A" }}>
              <p>
                Rachy&apos;s Confectionery was born from a deep love for bringing joy through food. Nestled in Port Harcourt&apos;s Queens Park Estate, we believe every celebration deserves a cake as unique as the person it honours.
              </p>
              <p>
                Our founder &mdash; Rachy &mdash; doesn&apos;t just make cakes. She asks about your story, your person, your moment. Every design is intentional, every flavour carefully crafted to leave a lasting memory.
              </p>
              <p>
                From light sponges to rich fruit cakes, from intricate wedding tiers to simple everyday snacks, we pour the same love into everything we make. That&apos;s the Rachy&apos;s promise.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 mt-10">
              {[
                { icon: "🌟", label: "Premium Quality" },
                { icon: "💝", label: "Made with Love" },
                { icon: "⚡", label: "Swift Delivery" },
                { icon: "💰", label: "Budget Friendly" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <span className="text-xl">{icon}</span>
                  <span className="font-dm text-sm font-semibold" style={{ color: "#3D1F1A" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual info cards */}
          <div className="grid grid-cols-2 gap-5">
            {[
              {
                icon: "🎂",
                title: "Custom Cakes",
                desc: "Tell us your story and we'll bake it into every layer.",
                bg: "linear-gradient(135deg, #A84E47 0%, #7B2E28 100%)",
                light: false,
              },
              {
                icon: "📍",
                title: "Location",
                desc: "Road 9b, Queens Park Estate, House 2, off Eneka Link Road, Rumunduru, Port Harcourt",
                bg: "#FDF6EC",
                light: true,
              },
              {
                icon: "🕐",
                title: "Open 24 Hours",
                desc: "Craving something sweet at 2am? We've got you covered.",
                bg: "#FDF6EC",
                light: true,
              },
              {
                icon: "📞",
                title: "Call to Order",
                desc: "0816 785 3002",
                bg: "linear-gradient(135deg, #C9A84C 0%, #A8833A 100%)",
                light: false,
              },
            ].map((card) => (
              <div
                key={card.title}
                className="card-hover rounded-2xl p-6 flex flex-col gap-3"
                style={{
                  background: card.bg,
                  border: card.light ? "1px solid rgba(245, 198, 176, 0.6)" : "none",
                  boxShadow: card.light ? "0 4px 16px rgba(61, 31, 26, 0.06)" : "0 8px 30px rgba(168, 78, 71, 0.25)",
                }}
              >
                <span className="text-3xl">{card.icon}</span>
                <h4
                  className="font-playfair font-semibold text-lg"
                  style={{ color: card.light ? "#3D1F1A" : "white" }}
                >
                  {card.title}
                </h4>
                <p
                  className="font-dm text-sm leading-relaxed"
                  style={{ color: card.light ? "#6B3D38" : "rgba(255,255,255,0.8)", opacity: card.light ? 0.8 : 1 }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
