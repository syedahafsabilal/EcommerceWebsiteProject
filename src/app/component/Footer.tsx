import React from "react";

const Footer = () => {
  return (
    <div style={{display:'flex' , justifyContent:'center' , alignItems:'center',  backgroundColor: "#F3F4F6"}}>
    <div
  style={{
    width: "85%",
    backgroundColor: "#F3F4F6",
    padding: "50px 30px",
    fontFamily: "'Poppins', sans-serif",
    color: "#1F2937",
    lineHeight: "1.8",
  }}
>
  {/* Header */}
  <div style={{ marginBottom: "40px", textAlign: "center" }}>
    <h1
      style={{
        color: "#2563EB",
        fontSize: "36px",
        fontWeight: "700",
        letterSpacing: "-0.02em",
      }}
    >
      MORENT
    </h1>
    <p
      style={{
        color: "#6B7280",
        fontSize: "16px",
        maxWidth: "600px",
        margin: "10px auto",
      }}
    >
      Providing convenience and boosting your business with innovative solutions
    </p>
  </div>

  {/* Main Sections */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "40px",
      marginBottom: "50px",
    }}
  >
    {/* About Section */}
    <div>
      <h2
        style={{
          color: "#111827",
          fontSize: "22px",
          fontWeight: "600",
          marginBottom: "12px",
        }}
      >
        About Us
      </h2>
      <p
        style={{
          color: "#6B7280",
          fontSize: "16px",
        }}
      >
        Our vision is to streamline operations for businesses while increasing
        sales and efficiency through modern technology.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h2
        style={{
          color: "#111827",
          fontSize: "22px",
          fontWeight: "600",
          marginBottom: "12px",
        }}
      >
        Quick Links
      </h2>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        {[
          { label: "How It Works", icon: "🔗" },
          { label: "Featured", icon: "⭐" },
          { label: "Partnership", icon: "🤝" },
          { label: "Business Relation", icon: "📈" },
        ].map((item) => (
          <li
            key={item.label}
            style={{
              display: "flex",
              alignItems: "center",
              color: "#2563EB",
              fontSize: "16px",
              marginBottom: "8px",
              cursor: "pointer",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#1D4ED8")}
            onMouseOut={(e) => (e.target.style.color = "#2563EB")}
          >
            <span style={{ marginRight: "8px" }}>{item.icon}</span>
            {item.label}
          </li>
        ))}
      </ul>
    </div>

    {/* Community Section */}
    <div>
      <h2
        style={{
          color: "#111827",
          fontSize: "22px",
          fontWeight: "600",
          marginBottom: "12px",
        }}
      >
        Community
      </h2>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        {[
          { label: "Events", icon: "🎉" },
          { label: "Blog", icon: "✍️" },
          { label: "Podcast", icon: "🎙️" },
          { label: "Invite a Friend", icon: "📨" },
        ].map((item) => (
          <li
            key={item.label}
            style={{
              display: "flex",
              alignItems: "center",
              color: "#2563EB",
              fontSize: "16px",
              marginBottom: "8px",
              cursor: "pointer",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#1D4ED8")}
            onMouseOut={(e) => (e.target.style.color = "#2563EB")}
          >
            <span style={{ marginRight: "8px" }}>{item.icon}</span>
            {item.label}
          </li>
        ))}
      </ul>
    </div>

    {/* Socials Section */}
    <div>
      <h2
        style={{
          color: "#111827",
          fontSize: "22px",
          fontWeight: "600",
          marginBottom: "12px",
        }}
      >
        Follow Us
      </h2>
      <div style={{ display: "flex", gap: "15px" }}>
        {[
          { platform: "Discord", icon: "💬" },
          { platform: "Instagram", icon: "📸" },
          { platform: "Twitter", icon: "🐦" },
          { platform: "Facebook", icon: "📘" },
        ].map((social) => (
          <div
            key={social.platform}
            style={{
              color: "#2563EB",
              fontSize: "18px",
              cursor: "pointer",
              transition: "transform 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            {social.icon} {social.platform}
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Footer */}
  <footer
    style={{
      borderTop: "1px solid #E5E7EB",
      paddingTop: "20px",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      alignItems: "center",
    }}
  >
    <p style={{ fontSize: "14px", color: "#9CA3AF" }}>
      © 2024 MORENT. All Rights Reserved.
    </p>
    <div style={{ display: "flex", gap: "20px" }}>
      <span
        style={{
          fontSize: "14px",
          color: "#2563EB",
          cursor: "pointer",
        }}
      >
        Privacy Policy
      </span>
      <span
        style={{
          fontSize: "14px",
          color: "#2563EB",
          cursor: "pointer",
        }}
      >
        Terms & Conditions
      </span>
    </div>
  </footer>
</div>
</div>
  );
};

export default Footer;
