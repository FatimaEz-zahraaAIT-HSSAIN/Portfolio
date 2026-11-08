"use client";

import { useState } from "react";
import { RecognitionItem } from "@/content/site";

export function RecognitionSection({ recognitions }: { recognitions: RecognitionItem[] }) {
  const [activeRecog, setActiveRecog] = useState<RecognitionItem | null>(null);

  // Duplicate the array to create a seamless infinite loop effect for the marquee animation
  const marqueeRecogs = [...recognitions, ...recognitions];

  return (
    <section id="recognition" className="section" style={{ overflow: "hidden" }}>
      <div className="wrap" style={{ maxWidth: "100%", padding: "0 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto 32px auto" }}>
          <div className="eyebrow">WHAT OTHERS SAY</div>
          <h2 style={{ fontSize: "36px", marginBottom: "8px" }}>Recognition ({recognitions.length})</h2>
          <p style={{ color: "var(--muted)", fontSize: "15px", margin: 0 }}>Hover to pause, click any card or icon to view the original document.</p>
        </div>

        {/* Animated Marquee Slider for Recognition */}
        <div className="marquee-container">
          <div className="marquee-track" style={{ animationDuration: "35s" }}>
            {marqueeRecogs.map((item, index) => (
              <div
                key={`${item.author}-${index}`}
                onClick={() => setActiveRecog(item)}
                className="card"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  cursor: "pointer",
                  transition: "border-color 0.2s",
                  width: "560px",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                {/* Header with quote and expand icon */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 11H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a3 3 0 0 1-3 3H7"></path>
                    <path d="M20 11h-4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a3 3 0 0 1-3 3h-1"></path>
                  </svg>
                  <div 
                    title="View original document"
                    style={{ border: "1px solid var(--border)", borderRadius: "6px", padding: "6px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.02)" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <polyline points="9 21 3 21 3 15"></polyline>
                      <line x1="21" y1="3" x2="14" y2="10"></line>
                      <line x1="3" y1="21" x2="10" y2="14"></line>
                    </svg>
                  </div>
                </div>

                {/* Quote text */}
                <p style={{ color: "var(--text)", fontSize: "14px", lineHeight: "1.6", marginBottom: "24px", flex: 1, fontStyle: "italic", display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {item.quote}
                </p>

                {/* Author footer */}
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "16px", marginTop: "auto" }}>
                  <h4 style={{ fontSize: "16px", fontWeight: "600", margin: "0 0 4px 0", color: "var(--text)" }}>{item.author}</h4>
                  <p style={{ fontSize: "11px", fontFamily: "var(--mono)", color: "var(--muted)", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full-Size Modal Pop-up */}
        {activeRecog && (
          <div
            onClick={() => setActiveRecog(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0, 0, 0, 0.85)",
              backdropFilter: "blur(6px)",
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                maxWidth: "900px",
                width: "100%",
                padding: "24px",
                position: "relative",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)",
              }}
            >
              <button
                onClick={() => setActiveRecog(null)}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  background: "var(--border)",
                  color: "var(--text)",
                  border: "none",
                  borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                }}
              >
                ✕
              </button>
              <div style={{ marginBottom: "16px" }}>
                <span style={{ fontSize: "11px", fontFamily: "var(--mono)", color: "var(--accent)" }}>{activeRecog.author}</span>
                <h3 style={{ fontSize: "22px", margin: "4px 0 0" }}>{activeRecog.role}</h3>
              </div>
              <div style={{ background: "#000", borderRadius: "8px", overflow: "hidden", display: "flex", justifyContent: "center", padding: "10px" }}>
                {activeRecog.fileType === "pdf" ? (
                  <iframe src={activeRecog.fileUrl} style={{ width: "100%", height: "70vh", border: "none" }} />
                ) : (
                  <img src={activeRecog.fileUrl} alt={activeRecog.author} style={{ width: "100%", height: "auto", maxHeight: "70vh", objectFit: "contain" }} />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}