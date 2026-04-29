"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const links = [
    { label: "Home",    href: "/" },
    { label: "Menu",    href: "/#menu" },
    { label: "Reviews", href: "/#reviews" },
    { label: "About",   href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          transition: "background 0.5s, border-color 0.5s",
          background: scrolled ? "rgba(254,252,248,0.97)" : "transparent",
          borderBottom: scrolled ? "1px solid #E8DDD0" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 1.25rem",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.9rem",
              color: "#2C1810",
              fontWeight: 300,
              lineHeight: 1,
            }}>
              Rachy&apos;s
            </span>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "7px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#B8946A",
              fontWeight: 500,
              marginTop: "1px",
            }}>
              Confectionery
            </span>
          </Link>

          {/* Desktop links */}
          <div style={{ display: "none" }} className="md-nav">
            <style>{`
              @media (min-width: 768px) {
                .md-nav { display: flex !important; align-items: center; gap: 2.5rem; }
                .mobile-toggle { display: none !important; }
              }
            `}</style>
            {links.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  color: "#5C3D2E",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#B8946A")}
                onMouseLeave={e => (e.currentTarget.style.color = "#5C3D2E")}
              >
                {label}
              </Link>
            ))}
            <a
              href="tel:+2348167853002"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                fontWeight: 600,
                color: "#2C1810",
                border: "1px solid #2C1810",
                padding: "9px 20px",
                textDecoration: "none",
                transition: "all 0.3s",
                marginLeft: "0.5rem",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "#2C1810";
                (e.currentTarget as HTMLElement).style.color = "#FEFCF8";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "#2C1810";
              }}
            >
              Order Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              justifyContent: "center",
            }}
          >
            <span style={{
              display: "block", width: "24px", height: "1px", background: "#2C1810",
              transition: "transform 0.3s, opacity 0.3s",
              transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
            }} />
            <span style={{
              display: "block", width: "18px", height: "1px", background: "#2C1810",
              transition: "opacity 0.3s",
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: "block", height: "1px", background: "#2C1810",
              transition: "transform 0.3s, width 0.3s",
              width: menuOpen ? "24px" : "12px",
              transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
            }} />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          background: "#FEFCF8",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          transition: "opacity 0.4s, transform 0.4s",
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? "translateY(0)" : "translateY(-16px)",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        {links.map(({ label, href }, i) => (
          <Link
            key={label}
            href={href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "2.5rem",
              fontWeight: 300,
              color: "#2C1810",
              textDecoration: "none",
              transition: "color 0.2s",
              transitionDelay: `${i * 50}ms`,
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#B8946A")}
            onMouseLeave={e => (e.currentTarget.style.color = "#2C1810")}
          >
            {label}
          </Link>
        ))}
        <a
          href="tel:+2348167853002"
          onClick={() => setMenuOpen(false)}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            fontWeight: 600,
            color: "#2C1810",
            border: "1px solid #2C1810",
            padding: "12px 32px",
            textDecoration: "none",
            marginTop: "1rem",
          }}
        >
          Order Now
        </a>
      </div>
    </>
  );
}