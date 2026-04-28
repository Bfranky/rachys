"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll("[data-anim]");
    els?.forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${i * 0.18}s`;
      el.classList.add("animate-fade-up");
    });
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #FFFAF5 0%, #FDF6EC 45%, #FDE8DC 100%)" }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-20 right-10 w-80 h-80 rounded-full opacity-20 animate-float"
        style={{ background: "radial-gradient(circle, #F5C6B0 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-20 left-10 w-64 h-64 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)" }}
      />
      {/* Cake emoji decorations */}
      <div className="absolute top-32 left-8 text-5xl opacity-10 animate-float" style={{ animationDelay: "1s" }}>🎂</div>
      <div className="absolute bottom-40 right-12 text-4xl opacity-10 animate-float" style={{ animationDelay: "2s" }}>🍰</div>
      <div className="absolute top-1/2 left-4 text-3xl opacity-10 animate-float" style={{ animationDelay: "0.5s" }}>✨</div>
      <div className="absolute top-24 right-1/4 text-2xl opacity-10 animate-float" style={{ animationDelay: "1.5s" }}>🌸</div>

      {/* Stars rating decoration */}
      <div className="absolute top-28 right-16 hidden lg:flex flex-col items-center gap-1 opacity-60">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-sm">★</span>
          ))}
        </div>
        <span className="font-dm text-xs text-[#3D1F1A]/50 tracking-wide">5.0 Rating</span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div
          data-anim
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 opacity-0"
          style={{ background: "rgba(201, 168, 76, 0.15)", border: "1px solid rgba(201, 168, 76, 0.4)" }}
        >
          <span className="text-sm">🏆</span>
          <span className="font-dm text-xs font-semibold tracking-widest uppercase" style={{ color: "#C9A84C" }}>
            Port Harcourt&apos;s Favourite Cake Shop
          </span>
        </div>

        {/* Headline */}
        <h1 data-anim className="font-script text-7xl md:text-9xl leading-none mb-2 opacity-0" style={{ color: "#A84E47" }}>
          Rachy&apos;s
        </h1>
        <h2
          data-anim
          className="font-playfair text-3xl md:text-5xl font-bold leading-tight mb-6 opacity-0 hero-title"
        >
          Confectionery
        </h2>

        <p
          data-anim
          className="font-dm text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto opacity-0"
          style={{ color: "#6B3D38" }}
        >
          Handcrafted cakes & pastries made with love — for birthdays, weddings, and every sweet moment in between.
        </p>

        {/* CTA buttons */}
        <div data-anim className="flex flex-wrap gap-4 justify-center opacity-0">
          <a href="#menu" className="btn-primary">
            🎂 View Our Menu
          </a>
          <a href="tel:+2348167853002" className="btn-outline">
            📞 Order Now
          </a>
        </div>

        {/* Stats */}
        <div
          data-anim
          className="flex flex-wrap justify-center gap-8 mt-16 opacity-0"
        >
          {[
            { value: "5.0", label: "Google Rating", icon: "⭐" },
            { value: "24hrs", label: "Open Always", icon: "🕐" },
            { value: "100%", label: "Made with Love", icon: "❤️" },
          ].map(({ value, label, icon }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="text-2xl">{icon}</span>
              <span className="font-playfair text-3xl font-bold" style={{ color: "#A84E47" }}>
                {value}
              </span>
              <span className="font-dm text-xs tracking-wider uppercase" style={{ color: "#6B3D38", opacity: 0.7 }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="w-full" style={{ fill: "#FFFAF5" }}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
