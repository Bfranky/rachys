"use client";
import { useState } from "react";

export default function Contact() {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="contact" style={{ background: "#F7F0E8", padding: "5rem 0" }}>
      <style>{`
        .contact-inner { max-width: 1280px; margin: 0 auto; padding: 0 1.25rem; }
        @media (min-width: 768px) { .contact-inner { padding: 0 3rem; } }

        /* Stack on mobile, side-by-side on desktop */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
        }
        @media (min-width: 1024px) {
          .contact-grid {
            grid-template-columns: 2fr 3fr;
          }
        }

        .contact-dark {
          background: #2C1810;
          padding: 2.5rem 2rem;
        }
        @media (min-width: 768px) {
          .contact-dark { padding: 3rem; }
        }

        .contact-light {
          background: #FEFCF8;
          border: 1px solid #E8DDD0;
          border-top: none;
          padding: 2.5rem 2rem;
        }
        @media (min-width: 1024px) {
          .contact-light {
            border-top: 1px solid #E8DDD0;
            border-left: none;
            padding: 3rem;
          }
        }

        .contact-field {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid #D4B896;
          padding: 0.75rem 0;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #2C1810;
          outline: none;
          transition: border-color 0.2s;
          -webkit-appearance: none;
          border-radius: 0;
        }
        .contact-field::placeholder { color: #B8A898; }
        .contact-field:focus { border-bottom-color: #2C1810; }
      `}</style>

      <div className="contact-inner">

        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "5px", textTransform: "uppercase", color: "#B8946A", marginBottom: "0.75rem" }}>
            Get in Touch
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(2rem,6vw,3.5rem)", color: "#2C1810", lineHeight: 1.05 }}>
            Ready to Order?
          </h2>
        </div>

        <div className="contact-grid">

          {/* Dark info panel */}
          <div className="contact-dark">
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.4rem,4vw,1.8rem)", fontWeight: 300, color: "#F7F0E8", lineHeight: 1.3, marginBottom: "1rem" }}>
              Share your vision.<br />
              <em style={{ fontStyle: "italic", color: "#D4B896" }}>We&apos;ll bring it to life.</em>
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "13px", lineHeight: 1.75, color: "rgba(247,240,232,0.6)", marginBottom: "2.5rem" }}>
              Tell us your occasion, flavour preferences, and style — and we&apos;ll craft something truly special.
            </p>

            {/* Contact details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { label: "Phone", value: "0816 785 3002", href: "tel:+2348167853002" },
                { label: "Location", value: "Road 9b, Queens Park Estate, House 2, off Eneka Link Road, Rumunduru, Port Harcourt 500102", href: null },
                { label: "Hours", value: "Open 24 hours, 7 days a week", href: null },
              ].map(({ label, value, href }) => (
                <div key={label}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "8px", letterSpacing: "4px", textTransform: "uppercase", color: "#B8946A", marginBottom: "4px" }}>
                    {label}
                  </p>
                  {href ? (
                    <a href={href} style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "14px", color: "#F7F0E8", textDecoration: "none" }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#D4B896"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#F7F0E8"}>
                      {value}
                    </a>
                  ) : (
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "13px", color: "rgba(247,240,232,0.7)", lineHeight: 1.6 }}>
                      {value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Stars */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ display: "flex", gap: "2px" }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: "#B8946A", fontSize: "13px" }}>★</span>
                ))}
              </div>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "rgba(247,240,232,0.4)" }}>
                5.0 · 7 Google reviews
              </span>
            </div>
          </div>

          {/* Form panel */}
          <div className="contact-light">
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 300, color: "#2C1810", marginBottom: "2rem" }}>
              Send an Enquiry
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
              {[
                { id: "name",    label: "Your Name",    type: "text",  placeholder: "Chiamaka Nwosu" },
                { id: "phone",   label: "Phone Number", type: "tel",   placeholder: "0801 234 5678" },
                { id: "occasion",label: "Occasion",     type: "text",  placeholder: "Birthday, Wedding, Anniversary…" },
              ].map(field => (
                <div key={field.id}>
                  <label htmlFor={field.id} style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 500, color: focused === field.id ? "#2C1810" : "#B8A898", marginBottom: "6px", transition: "color 0.2s" }}>
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="contact-field"
                    onFocus={() => setFocused(field.id)}
                    onBlur={() => setFocused(null)}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 500, color: focused === "message" ? "#2C1810" : "#B8A898", marginBottom: "6px", transition: "color 0.2s" }}>
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your dream cake — size, flavour, theme, date…"
                  className="contact-field"
                  style={{ resize: "none" }}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <a
                  href="tel:+2348167853002"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 600, background: "#2C1810", color: "#FEFCF8", padding: "15px 32px", textDecoration: "none", transition: "background 0.3s", display: "inline-block", textAlign: "center" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#B8946A"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#2C1810"}
                >
                  Call to Order
                </a>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "#B8A898", textAlign: "center" }}>
                  Or call <a href="tel:+2348167853002" style={{ color: "#B8946A" }}>0816 785 3002</a> — available 24/7
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}