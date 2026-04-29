export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#2C1810", padding: "4rem 0 2rem" }}>
      <style>{`
        .footer-inner { max-width: 1280px; margin: 0 auto; padding: 0 1.25rem; }
        @media (min-width: 768px) { .footer-inner { padding: 0 3rem; } }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          margin-bottom: 2rem;
        }
        @media (min-width: 640px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1024px) { .footer-grid { grid-template-columns: 2fr 1fr 1fr; } }

        .footer-link {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 13px;
          color: rgba(247,240,232,0.5);
          text-decoration: none;
          display: block;
          padding: 4px 0;
          transition: color 0.2s;
        }
        .footer-link:hover { color: #D4B896; }

        .footer-bottom {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: center;
          text-align: center;
        }
        @media (min-width: 640px) {
          .footer-bottom { flex-direction: row; justify-content: space-between; text-align: left; }
        }
      `}</style>

      <div className="footer-inner">
        <div className="footer-grid">

          {/* Brand col */}
          <div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem", fontWeight: 300, color: "#F7F0E8", lineHeight: 1, marginBottom: "2px" }}>
              Rachy&apos;s
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "8px", letterSpacing: "5px", textTransform: "uppercase", color: "#B8946A", fontWeight: 500, marginBottom: "1.25rem" }}>
              Confectionery
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "13px", lineHeight: 1.7, color: "rgba(247,240,232,0.5)", maxWidth: "280px", marginBottom: "1.25rem" }}>
              Port Harcourt&apos;s beloved cake shop — crafting sweet memories, one cake at a time.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ display: "flex", gap: "2px" }}>
                {[...Array(5)].map((_, i) => <span key={i} style={{ color: "#B8946A", fontSize: "12px" }}>★</span>)}
              </div>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "rgba(247,240,232,0.3)" }}>
                5.0 · 7 reviews
              </span>
            </div>
          </div>

          {/* Nav col */}
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "8px", letterSpacing: "4px", textTransform: "uppercase", color: "#B8946A", marginBottom: "1rem" }}>
              Navigate
            </p>
            {[
              { label: "Home",    href: "/" },
              { label: "Menu",    href: "/#menu" },
              { label: "Reviews", href: "/#reviews" },
              { label: "About",   href: "/#about" },
              { label: "Contact", href: "/#contact" },
            ].map(({ label, href }) => (
              <a key={label} href={href} className="footer-link">{label}</a>
            ))}
          </div>

          {/* Contact col */}
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "8px", letterSpacing: "4px", textTransform: "uppercase", color: "#B8946A", marginBottom: "1rem" }}>
              Contact
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                { sub: "Phone", val: "0816 785 3002", href: "tel:+2348167853002" },
                { sub: "Address", val: "Road 9b, Queens Park Estate, House 2, off Eneka Link Road, Port Harcourt", href: null },
                { sub: "Hours", val: "Open 24 hours · Every day", href: null },
              ].map(({ sub, val, href }) => (
                <div key={sub}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "8px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(247,240,232,0.2)", marginBottom: "3px" }}>{sub}</p>
                  {href ? (
                    <a href={href} className="footer-link" style={{ padding: 0 }}>{val}</a>
                  ) : (
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "13px", color: "rgba(247,240,232,0.5)", lineHeight: 1.6 }}>{val}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "rgba(247,240,232,0.2)" }}>
            © {year} Rachy&apos;s Confectionery. All rights reserved.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "rgba(247,240,232,0.2)" }}>
            Port Harcourt, Rivers State, Nigeria 🇳🇬
          </p>
        </div>
      </div>
    </footer>
  );
}