"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6" style={{ background: "linear-gradient(160deg, #FDE8DC 0%, #FDF6EC 100%)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-script text-5xl mb-2" style={{ color: "#A84E47" }}>Get in Touch</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold" style={{ color: "#3D1F1A" }}>
            Ready to Order?
          </h2>
          <div className="section-divider" />
          <p className="font-dm text-base mt-4 max-w-md mx-auto" style={{ color: "#6B3D38", opacity: 0.8 }}>
            Reach out to place your order, ask questions, or share your cake vision with us.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            {[
              {
                icon: "📞",
                label: "Phone",
                value: "0816 785 3002",
                link: "tel:+2348167853002",
              },
              {
                icon: "📍",
                label: "Address",
                value: "Road 9b, Queens Park Estate, House 2, off Eneka Link Road, Rumunduru, Port Harcourt 500102",
                link: null,
              },
              {
                icon: "🕐",
                label: "Hours",
                value: "Open 24 Hours, 7 days a week",
                link: null,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl p-5 flex gap-4"
                style={{ background: "white", border: "1px solid rgba(245, 198, 176, 0.5)" }}
              >
                <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <p className="font-dm text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#C9A84C" }}>
                    {item.label}
                  </p>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="font-playfair text-base font-semibold hover:underline"
                      style={{ color: "#A84E47" }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-dm text-sm leading-relaxed" style={{ color: "#3D1F1A" }}>
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Order form */}
          <div
            className="lg:col-span-3 rounded-3xl p-8"
            style={{ background: "white", border: "1px solid rgba(245, 198, 176, 0.5)", boxShadow: "0 8px 40px rgba(61, 31, 26, 0.08)" }}
          >
            <h3 className="font-playfair text-xl font-semibold mb-6" style={{ color: "#3D1F1A" }}>
              Send an Enquiry
            </h3>

            <div className="space-y-4">
              {[
                { label: "Your Name", type: "text", placeholder: "e.g. Chiamaka Nwosu" },
                { label: "Phone Number", type: "tel", placeholder: "e.g. 0801 234 5678" },
                { label: "Occasion", type: "text", placeholder: "e.g. Birthday, Wedding, Just because..." },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block font-dm text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "#6B3D38" }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full rounded-xl px-4 py-3 font-dm text-sm outline-none transition-all"
                    style={{
                      background: "#FFFAF5",
                      border: "1.5px solid rgba(245, 198, 176, 0.8)",
                      color: "#3D1F1A",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#A84E47";
                      e.target.style.boxShadow = "0 0 0 3px rgba(168, 78, 71, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(245, 198, 176, 0.8)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
              ))}

              <div>
                <label className="block font-dm text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "#6B3D38" }}>
                  Your Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your dream cake..."
                  className="w-full rounded-xl px-4 py-3 font-dm text-sm outline-none resize-none transition-all"
                  style={{
                    background: "#FFFAF5",
                    border: "1.5px solid rgba(245, 198, 176, 0.8)",
                    color: "#3D1F1A",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#A84E47";
                    e.target.style.boxShadow = "0 0 0 3px rgba(168, 78, 71, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(245, 198, 176, 0.8)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              <button
                onClick={() => window.location.href = "tel:+2348167853002"}
                className="btn-primary w-full text-center mt-2"
              >
                📱 Call to Discuss Your Order
              </button>
              <p className="font-dm text-xs text-center" style={{ color: "#6B3D38", opacity: 0.6 }}>
                Or call us directly at 0816 785 3002 — we&apos;re available 24/7
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
