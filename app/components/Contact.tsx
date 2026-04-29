"use client";
import { useState } from "react";

export default function Contact() {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="contact" className="py-28 px-8 md:px-12" style={{ background: "#F7F0E8" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p
            className="text-[11px] tracking-[5px] uppercase mb-4"
            style={{ color: "#B8946A", fontFamily: "'DM Sans', sans-serif" }}
          >
            Get in Touch
          </p>
          <h2
            className="font-light leading-tight"
            style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
              color: "#2C1810",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
            }}
          >
            Ready to Order?
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-0">

          {/* Left: Info Panel */}
          <div
            className="lg:col-span-2 p-10 md:p-12 flex flex-col justify-between"
            style={{ background: "#2C1810" }}
          >
            <div>
              <p
                className="font-light mb-6 leading-snug"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.6rem",
                  color: "#F7F0E8",
                  lineHeight: 1.3,
                }}
              >
                Share your vision.<br />
                <em style={{ fontStyle: "italic", color: "#D4B896" }}>We&apos;ll bring it to life.</em>
              </p>

              <p
                className="text-sm leading-relaxed mb-12"
                style={{ color: "rgba(247,240,232,0.6)", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
              >
                Tell us about your occasion, your flavour preferences, your style — and we&apos;ll 
                craft something truly special.
              </p>

              <div className="space-y-8">
                {[
                  {
                    label: "Phone",
                    value: "0816 785 3002",
                    href: "tel:+2348167853002",
                  },
                  {
                    label: "Location",
                    value: "Road 9b, Queens Park Estate, House 2, off Eneka Link Road, Rumunduru, Port Harcourt 500102",
                    href: null,
                  },
                  {
                    label: "Hours",
                    value: "Open 24 hours, 7 days a week",
                    href: null,
                  },
                ].map(({ label, value, href }) => (
                  <div key={label}>
                    <p
                      className="text-[9px] tracking-[4px] uppercase mb-1.5"
                      style={{ color: "#B8946A", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm hover:text-[#D4B896] transition-colors duration-200"
                        style={{ color: "#F7F0E8", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                      >
                        {value}
                      </a>
                    ) : (
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "rgba(247,240,232,0.75)", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                      >
                        {value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom: Google rating */}
            <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: "#B8946A", fontSize: "0.85rem" }}>★</span>
                ))}
              </div>
              <p
                className="text-xs"
                style={{ color: "rgba(247,240,232,0.5)", fontFamily: "'DM Sans', sans-serif" }}
              >
                5.0 on Google · 7 reviews
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className="lg:col-span-3 p-10 md:p-12"
            style={{ background: "#FEFCF8", border: "1px solid #E8DDD0", borderLeft: "none" }}
          >
            <h3
              className="font-light mb-8"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.5rem",
                color: "#2C1810",
              }}
            >
              Send an Enquiry
            </h3>

            <div className="space-y-6">
              {[
                { id: "name", label: "Your Name", type: "text", placeholder: "Chiamaka Nwosu" },
                { id: "phone", label: "Phone Number", type: "tel", placeholder: "0801 234 5678" },
                { id: "occasion", label: "Occasion", type: "text", placeholder: "Birthday, Wedding, Anniversary…" },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block text-[10px] tracking-[3px] uppercase font-medium mb-2 transition-colors duration-200"
                    style={{
                      color: focused === field.id ? "#2C1810" : "#B8A898",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    onFocus={() => setFocused(field.id)}
                    onBlur={() => setFocused(null)}
                    className="w-full px-0 py-3 text-sm outline-none transition-all duration-200 bg-transparent border-b"
                    style={{
                      color: "#2C1810",
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 300,
                      borderColor: focused === field.id ? "#2C1810" : "#D4B896",
                    }}
                  />
                </div>
              ))}

              {/* Textarea */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-[10px] tracking-[3px] uppercase font-medium mb-2 transition-colors duration-200"
                  style={{
                    color: focused === "message" ? "#2C1810" : "#B8A898",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your dream cake — size, flavour, theme, date…"
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className="w-full px-0 py-3 text-sm outline-none resize-none transition-all duration-200 bg-transparent border-b"
                  style={{
                    color: "#2C1810",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    borderColor: focused === "message" ? "#2C1810" : "#D4B896",
                  }}
                />
              </div>

              {/* Submit */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4 items-start">
                <a
                  href="tel:+2348167853002"
                  className="px-10 py-4 text-[11px] tracking-widest uppercase font-semibold transition-all duration-300 text-center"
                  style={{
                    background: "#2C1810",
                    color: "#FEFCF8",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#B8946A";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#2C1810";
                  }}
                >
                  Call to Order
                </a>
                <p
                  className="text-[11px] leading-relaxed self-center"
                  style={{ color: "#B8A898", fontFamily: "'DM Sans', sans-serif" }}
                >
                  Or call us directly at<br />
                  <a href="tel:+2348167853002" className="text-[#B8946A] hover:underline">0816 785 3002</a>
                  {" "}— available 24/7
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}