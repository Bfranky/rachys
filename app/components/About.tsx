"use client";

export default function About() {
  return (
    <section id="about" className="py-28 px-8 md:px-12" style={{ background: "#FEFCF8" }}>
      <div className="max-w-7xl mx-auto">

        {/* Top: Eyebrow */}
        <p
          className="text-[11px] tracking-[5px] uppercase mb-16"
          style={{ color: "#B8946A", fontFamily: "'DM Sans', sans-serif" }}
        >
          Our Story
        </p>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

          {/* Left: Images */}
          <div className="relative">
            {/* Primary image */}
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=700&q=85&fit=crop"
                alt="Baker decorating a cake"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                style={{ filter: "brightness(0.96) saturate(1.05)" }}
              />
            </div>

            {/* Floating secondary image */}
            <div
              className="absolute -bottom-10 -right-4 md:-right-10 w-48 md:w-56 aspect-square overflow-hidden border-4 border-[#FEFCF8] shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&q=80&fit=crop"
                alt="Decorated cupcakes"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Years badge */}
            <div
              className="absolute top-6 -left-4 md:-left-8 px-6 py-5 shadow-lg"
              style={{ background: "#2C1810" }}
            >
              <p
                className="text-[10px] tracking-[3px] uppercase text-[#B8946A] mb-1"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Founded
              </p>
              <p
                className="text-3xl font-light text-white leading-none"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                PHC
              </p>
            </div>
          </div>

          {/* Right: Text */}
          <div className="flex flex-col justify-center pt-0 lg:pt-8 pb-12">
            <h2
              className="font-light leading-tight mb-8"
              style={{
                fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
                color: "#2C1810",
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              }}
            >
              Baked with Heart,<br />
              <em style={{ fontStyle: "italic" }}>Served with Love</em>
            </h2>

            <span className="block w-16 h-px bg-[#D4B896] mb-8" />

            <div
              className="space-y-5 text-[15px] leading-relaxed mb-10"
              style={{ color: "#7A5C4E", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              <p>
                Rachy&apos;s Confectionery was born from a deep love for bringing joy through food. 
                Nestled in Port Harcourt&apos;s Queens Park Estate, we believe every celebration 
                deserves a cake as unique as the person it honours.
              </p>
              <p>
                Our founder — Rachy — doesn&apos;t just make cakes. She asks about your story, 
                your person, your moment. Every design is intentional, every flavour carefully 
                crafted to leave a lasting memory.
              </p>
              <p>
                From light sponges to rich fruit cakes, from intricate wedding tiers to 
                simple everyday snacks — the same love goes into everything we make.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { label: "Premium Quality", desc: "Only the finest ingredients" },
                { label: "Made with Love", desc: "Every item crafted by hand" },
                { label: "Swift Service", desc: "Fast, friendly, reliable" },
                { label: "Budget Friendly", desc: "Great taste, fair prices" },
              ].map(({ label, desc }) => (
                <div
                  key={label}
                  className="flex flex-col gap-1 p-5 border border-[#E8DDD0]"
                  style={{ background: "#F7F0E8" }}
                >
                  <p
                    className="text-[12px] tracking-wider uppercase font-medium"
                    style={{ color: "#2C1810", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-[12px]"
                    style={{ color: "#9A7A6C", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                  >
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Info strip */}
            <div className="border-t border-[#E8DDD0] pt-8 space-y-3">
              {[
                { icon: "📍", text: "Road 9b, Queens Park Estate, House 2, off Eneka Link Road, Rumunduru, Port Harcourt" },
                { icon: "📞", text: "0816 785 3002", href: "tel:+2348167853002" },
                { icon: "🕐", text: "Open 24 hours, 7 days a week" },
              ].map(({ icon, text, href }) => (
                <div key={text} className="flex items-start gap-3">
                  <span className="text-base mt-0.5 flex-shrink-0">{icon}</span>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm hover:underline transition-colors"
                      style={{ color: "#B8946A", fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
                    >
                      {text}
                    </a>
                  ) : (
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#7A5C4E", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                    >
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