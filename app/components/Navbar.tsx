"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg shadow-rose-100/40" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span className="font-script text-4xl text-[#A84E47] group-hover:text-[#D4736A] transition-colors">
            Rachy&apos;s
          </span>
          <span
            className="font-dm text-[9px] tracking-[4px] uppercase font-semibold -mt-1"
            style={{ color: "#C9A84C" }}
          >
            Confectionery
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "Menu", "Reviews", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/#${item.toLowerCase()}`}
              className="font-dm text-sm font-medium text-[#3D1F1A]/70 hover:text-[#A84E47] transition-colors tracking-wide"
            >
              {item}
            </Link>
          ))}
          <a href="tel:+2348167853002" className="btn-primary text-sm !py-2.5 !px-6">
            Order Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#3D1F1A] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#3D1F1A] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#3D1F1A] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-white/98 backdrop-blur-md px-6 pb-6 flex flex-col gap-4 border-t border-rose-100">
          {["Home", "Menu", "Reviews", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/#${item.toLowerCase()}`}
              className="font-dm text-base font-medium text-[#3D1F1A]/80 hover:text-[#A84E47] transition-colors py-1"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <a href="tel:+2348167853002" className="btn-primary text-center mt-2">
            Order Now
          </a>
        </div>
      </div>
    </nav>
  );
}
