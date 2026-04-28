"use client";

const categories = [
  {
    name: "Celebration Cakes",
    icon: "🎂",
    items: [
      { name: "Custom Birthday Cake", desc: "Personalized designs for your special day", price: "From ₦8,000" },
      { name: "Wedding Cake", desc: "Elegant multi-tiered masterpieces", price: "From ₦35,000" },
      { name: "Anniversary Cake", desc: "Romantic designs with your love story", price: "From ₦12,000" },
      { name: "Baby Shower Cake", desc: "Adorable themed designs for new arrivals", price: "From ₦10,000" },
    ],
  },
  {
    name: "Everyday Cakes",
    icon: "🍰",
    items: [
      { name: "Fruit Cake", desc: "Rich, moist & packed with fruits – a crowd favourite", price: "From ₦5,000" },
      { name: "Chocolate Cake", desc: "Decadent layers of pure chocolate bliss", price: "From ₦6,000" },
      { name: "Vanilla Sponge", desc: "Light, airy, and perfectly sweet", price: "From ₦4,500" },
      { name: "Red Velvet", desc: "Classic velvety cake with cream cheese frosting", price: "From ₦7,000" },
    ],
  },
  {
    name: "Pastries & Snacks",
    icon: "🥐",
    items: [
      { name: "Meat Pie", desc: "Flaky, golden pastry filled with seasoned meat", price: "₦500" },
      { name: "Chin Chin", desc: "Crunchy fried dough snacks, lightly sweetened", price: "From ₦1,000" },
      { name: "Doughnuts", desc: "Soft, glazed rings of joy", price: "₦400" },
      { name: "Cupcakes", desc: "Mini cakes with fluffy frosting – assorted flavours", price: "From ₦600" },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 px-6" style={{ background: "#FFFAF5" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-script text-5xl mb-2" style={{ color: "#A84E47" }}>Our Menu</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold" style={{ color: "#3D1F1A" }}>
            Crafted with Passion
          </h2>
          <div className="section-divider" />
          <p className="font-dm text-base max-w-lg mx-auto mt-4" style={{ color: "#6B3D38", opacity: 0.8 }}>
            Every bite tells a story. From custom showstoppers to everyday indulgences — made fresh, made with love.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {categories.map((cat) => (
            <div key={cat.name}>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">{cat.icon}</span>
                <h3 className="font-playfair text-2xl font-semibold" style={{ color: "#3D1F1A" }}>
                  {cat.name}
                </h3>
                <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, #F5C6B0, transparent)" }} />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="card-hover rounded-2xl p-5 border"
                    style={{
                      background: "linear-gradient(135deg, #FFFFFF 0%, #FDF6EC 100%)",
                      borderColor: "#F5C6B0",
                    }}
                  >
                    <h4 className="font-playfair text-lg font-semibold mb-2" style={{ color: "#3D1F1A" }}>
                      {item.name}
                    </h4>
                    <p className="font-dm text-sm leading-relaxed mb-4" style={{ color: "#6B3D38", opacity: 0.75 }}>
                      {item.desc}
                    </p>
                    <span
                      className="font-dm text-sm font-bold px-3 py-1 rounded-full"
                      style={{ background: "rgba(168, 78, 71, 0.1)", color: "#A84E47" }}
                    >
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-16 rounded-3xl p-10 text-center"
          style={{
            background: "linear-gradient(135deg, #A84E47 0%, #3D1F1A 100%)",
          }}
        >
          <p className="font-script text-5xl text-white/90 mb-2">Custom Orders Welcome!</p>
          <p className="font-dm text-white/70 text-base mb-6 max-w-md mx-auto">
            Have a specific vision? We bring your cake dreams to life — just tell us your story.
          </p>
          <a
            href="tel:+2348167853002"
            className="inline-block font-dm font-semibold text-sm px-8 py-3 rounded-full transition-all hover:scale-105"
            style={{ background: "#C9A84C", color: "#3D1F1A" }}
          >
            📞 Call to Order: 0816 785 3002
          </a>
        </div>
      </div>
    </section>
  );
}
