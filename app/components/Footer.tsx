export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-8 md:px-12 pt-20 pb-10" style={{ background: "#2C1810" }}>
      <div className="max-w-7xl mx-auto">

        {/* Top: Brand + Nav */}
        <div className="grid md:grid-cols-4 gap-12 md:gap-8 pb-16 border-b border-white/10">

          {/* Brand */}
          <div className="md:col-span-2">
            <p
              className="leading-none mb-1"
              style={{
                fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
                fontSize: "3.5rem",
                color: "#F7F0E8",
                fontWeight: 300,
              }}
            >
              Rachy&apos;s
            </p>
            <p
              className="text-[9px] tracking-[5px] uppercase font-medium mb-6"
              style={{ color: "#B8946A", fontFamily: "'DM Sans', sans-serif" }}
            >
              Confectionery
            </p>
            <p
              className="text-sm leading-relaxed max-w-xs mb-8"
              style={{ color: "rgba(247,240,232,0.5)", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              Port Harcourt&apos;s beloved cake shop — crafting sweet memories, one cake at a time.
            </p>

            {/* Stars */}
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: "#B8946A", fontSize: "0.85rem" }}>★</span>
                ))}
              </div>
              <span
                className="text-xs"
                style={{ color: "rgba(247,240,232,0.35)", fontFamily: "'DM Sans', sans-serif" }}
              >
                5.0 · 7 Google Reviews
              </span>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p
              className="text-[9px] tracking-[4px] uppercase font-medium mb-6"
              style={{ color: "#B8946A", fontFamily: "'DM Sans', sans-serif" }}
            >
              Navigate
            </p>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Menu", href: "/#menu" },
                { label: "Reviews", href: "/#reviews" },
                { label: "About", href: "/#about" },
                { label: "Contact", href: "/#contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm transition-colors duration-200 hover:text-[#D4B896]"
                    style={{ color: "rgba(247,240,232,0.5)", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-[9px] tracking-[4px] uppercase font-medium mb-6"
              style={{ color: "#B8946A", fontFamily: "'DM Sans', sans-serif" }}
            >
              Contact
            </p>
            <div className="space-y-5">
              <div>
                <p
                  className="text-[9px] tracking-[3px] uppercase mb-1"
                  style={{ color: "rgba(247,240,232,0.25)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  Phone
                </p>
                <a
                  href="tel:+2348167853002"
                  className="text-sm transition-colors duration-200 hover:text-[#D4B896]"
                  style={{ color: "rgba(247,240,232,0.6)", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                >
                  0816 785 3002
                </a>
              </div>
              <div>
                <p
                  className="text-[9px] tracking-[3px] uppercase mb-1"
                  style={{ color: "rgba(247,240,232,0.25)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  Address
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(247,240,232,0.5)", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                >
                  Road 9b, Queens Park Estate,<br />
                  House 2, off Eneka Link Road,<br />
                  Port Harcourt, Rivers State
                </p>
              </div>
              <div>
                <p
                  className="text-[9px] tracking-[3px] uppercase mb-1"
                  style={{ color: "rgba(247,240,232,0.25)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  Hours
                </p>
                <p
                  className="text-sm"
                  style={{ color: "rgba(247,240,232,0.5)", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                >
                  Open 24 hours · Every day
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p
            className="text-xs"
            style={{ color: "rgba(247,240,232,0.2)", fontFamily: "'DM Sans', sans-serif" }}
          >
            © {year} Rachy&apos;s Confectionery. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: "rgba(247,240,232,0.2)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Port Harcourt, Rivers State, Nigeria 🇳🇬
          </p>
        </div>

      </div>
    </footer>
  );
}