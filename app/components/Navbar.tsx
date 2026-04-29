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

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#FEFCF8]/98 backdrop-blur-sm border-b border-[#E8DDD0]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 md:px-12 h-20 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="group flex flex-col items-start leading-none">
            <span
              className="font-script text-[2.2rem] leading-none transition-colors duration-300"
              style={{
                fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
                color: "#2C1810",
              }}
            >
              Rachy&apos;s
            </span>
            <span
              className="text-[8px] tracking-[5px] uppercase font-medium"
              style={{ color: "#B8946A", fontFamily: "'DM Sans', sans-serif", marginTop: "-2px" }}
            >
              Confectionery
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {[
              { label: "Home", href: "/" },
              { label: "Menu", href: "/#menu" },
              { label: "Reviews", href: "/#reviews" },
              { label: "About", href: "/#about" },
              { label: "Contact", href: "/#contact" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="relative text-[13px] tracking-widest uppercase font-medium transition-colors duration-300 group"
                style={{ color: "#5C3D2E", fontFamily: "'DM Sans', sans-serif" }}
              >
                {label}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#B8946A] transition-all duration-300 group-hover:w-full"
                />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="tel:+2348167853002"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-[12px] tracking-widest uppercase font-semibold transition-all duration-300 border"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "#2C1810",
                borderColor: "#2C1810",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#2C1810";
                (e.currentTarget as HTMLElement).style.color = "#FEFCF8";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "#2C1810";
              }}
            >
              Order Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px bg-[#2C1810] transition-all duration-400 origin-center ${
                menuOpen ? "rotate-45 translate-y-[7px] w-full" : "w-full"
              }`}
            />
            <span
              className={`block h-px bg-[#2C1810] transition-all duration-300 ${
                menuOpen ? "opacity-0 w-0" : "w-3/4"
              }`}
            />
            <span
              className={`block h-px bg-[#2C1810] transition-all duration-400 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[7px] w-full" : "w-1/2"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "#FEFCF8" }}
      >
        <div className="flex flex-col justify-center items-center h-full gap-8">
          {[
            { label: "Home", href: "/" },
            { label: "Menu", href: "/#menu" },
            { label: "Reviews", href: "/#reviews" },
            { label: "About", href: "/#about" },
            { label: "Contact", href: "/#contact" },
          ].map(({ label, href }, i) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-4xl font-light transition-colors duration-300 hover:text-[#B8946A]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#2C1810",
                animationDelay: `${i * 60}ms`,
              }}
            >
              {label}
            </Link>
          ))}
          <a
            href="tel:+2348167853002"
            className="mt-4 px-8 py-3 text-sm tracking-widest uppercase border border-[#2C1810] text-[#2C1810]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            onClick={() => setMenuOpen(false)}
          >
            Order Now
          </a>
        </div>
      </div>
    </>
  );
}