"use client";

import { useState } from "react";
import { Certification } from "@/content/site";

export function CertificationsSection({ certs }: { certs: Certification[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeCert, setActiveCert] = useState<Certification | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);

  const categories = ["All", "Networking & IT", "Data & AI", "Development", "Language", "Workplace"];

  const filteredCerts = certs.filter((cert) => {
    return selectedCategory === "All" || cert.category === selectedCategory;
  });

  // Show first 6 cards by default, or all if toggled / filtered
  const displayedCerts = showAll ? filteredCerts : filteredCerts.slice(0, 6);

  return (
    <section id="certifications" className="section">
      <div className="wrap">
        <div className="eyebrow">06 / continuous learning</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px", marginBottom: "32px" }}>
          <div>
            <h2 style={{ fontSize: "32px", marginBottom: "8px" }}>Certifications ({filteredCerts.length})</h2>
            <p style={{ color: "var(--muted)", fontSize: "15px", margin: 0 }}>Click any certificate to view it full size.</p>
          </div>

          {/* Category Filter Tabs */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setShowAll(false); // Reset pagination on filter change
                }}
                style={{
                  background: selectedCategory === cat ? "var(--accent)" : "var(--surface)",
                  color: selectedCategory === cat ? "#fff" : "var(--muted)",
                  border: "1px solid var(--border)",
                  borderRadius: "99px",
                  padding: "6px 14px",
                  fontSize: "12px",
                  cursor: "pointer",
                  fontFamily: "var(--mono)",
                  transition: "all 0.2s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Layout */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
          {displayedCerts.map((cert) => (
            <div
              key={cert.title}
              onClick={() => setActiveCert(cert)}
              className="card"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.2s, border-color 0.2s",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <div style={{ background: "#000", borderBottom: "1px solid var(--border)", height: "200px", overflow: "hidden", display: "flex" }}>
                <img 
                  src={cert.fileUrl} 
                  alt={cert.title} 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                />
              </div>
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                <span style={{ fontSize: "11px", fontFamily: "var(--mono)", color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {cert.issuer}
                </span>
                <h3 style={{ fontSize: "18px", margin: 0, color: "var(--text)" }}>{cert.title}</h3>
                <span style={{ fontSize: "12px", fontFamily: "var(--mono)", color: "var(--faint)", marginTop: "auto" }}>{cert.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Toggle Button */}
        {filteredCerts.length > 6 && (
          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-secondary"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--text)",
                padding: "10px 24px",
                borderRadius: "6px",
                cursor: "pointer",
                fontFamily: "var(--mono)",
                fontSize: "13px",
              }}
            >
              {showAll ? "Show Less ↑" : `View All Certifications (${filteredCerts.length}) ↓`}
            </button>
          </div>
        )}

        {/* Full-Size Modal Pop-up */}
        {activeCert && (
          <div
            onClick={() => setActiveCert(null)}
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
                onClick={() => setActiveCert(null)}
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
                <span style={{ fontSize: "11px", fontFamily: "var(--mono)", color: "var(--accent)" }}>{activeCert.issuer}</span>
                <h3 style={{ fontSize: "22px", margin: "4px 0 0" }}>{activeCert.title}</h3>
              </div>
              <div style={{ background: "#000", borderRadius: "8px", overflow: "hidden", display: "flex", justifyContent: "center", padding: "10px" }}>
                {activeCert.fileType === "pdf" ? (
                  <iframe src={activeCert.fileUrl} style={{ width: "100%", height: "70vh", border: "none" }} />
                ) : (
                  <img src={activeCert.fileUrl} alt={activeCert.title} style={{ width: "100%", height: "auto", maxHeight: "70vh", objectFit: "contain" }} />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}