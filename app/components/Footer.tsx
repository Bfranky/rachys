export default function Footer() {
  return (
    <footer
      className="py-12 px-6"
      style={{ background: "linear-gradient(135deg, #3D1F1A 0%, #2A1210 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <p className="font-script text-5xl mb-1" style={{ color: "#F5C6B0" }}>Rachy&apos;s</p>
            <p className="font-dm text-xs tracking-widest uppercase font-semibold mb-4" style={{ color: "#C9A84C" }}>
              Confectionery
            </p>
            <p className="font-dm text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Port Harcourt&apos;s beloved cake shop — crafting sweet memories, one cake at a time.
            </p>
            <div className="flex gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">★</span>
              ))}
              <span className="font-dm text-xs ml-2 self-center" style={{ color: "rgba(255,255,255,0.4)" }}>
                5.0 (7 reviews)
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-playfair text-base font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Menu", "Reviews", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={link === "Home" ? "/" : `/#${link.toLowerCase()}`}
                    className="font-dm text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-base font-semibold mb-4 text-white">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:+2348167853002"
                className="flex items-center gap-2 font-dm text-sm transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                <span>📞</span> 0816 785 3002
              </a>
              <p className="flex gap-2 font-dm text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                <span>📍</span>
                <span>Road 9b, Queens Park Estate, House 2, off Eneka Link Road, Port Harcourt</span>
              </p>
              <p className="flex items-center gap-2 font-dm text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                <span>🕐</span> Open 24 Hours
              </p>
            </div>
          </div>
        </div>

        <div
          className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <p className="font-dm text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} Rachy&apos;s Confectionery. All rights reserved.
          </p>
          <p className="font-dm text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            Port Harcourt, Rivers State, Nigeria 🇳🇬
          </p>
        </div>
      </div>
    </footer>
  );
}
