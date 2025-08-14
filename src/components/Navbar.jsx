import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navStyle = {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    padding: "15px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backdropFilter: "blur(10px)",
    background: darkMode
      ? "rgba(31, 31, 31, 0.85)"
      : "rgba(255, 255, 255, 0.85)",
    color: darkMode ? "#fff" : "#000",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    transition: "background 0.3s ease, color 0.3s ease"
  };

  const logoStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: darkMode ? "#f8b400" : "#2b2b2b",
    cursor: "pointer"
  };

  const menuStyle = {
    display: "flex",
    gap: "20px"
  };

  const menuItemStyle = {
    textDecoration: "none",
    color: darkMode ? "#fff" : "#000",
    fontWeight: "500",
    transition: "color 0.3s ease"
  };

  const toggleStyle = {
    padding: "8px 16px",
    borderRadius: "20px",
    background: darkMode ? "#f8b400" : "#2b2b2b",
    color: darkMode ? "#000" : "#fff",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "transform 0.3s ease, background 0.3s ease"
  };

  // Mobile menu styles
  const mobileMenuStyle = {
    position: "absolute",
    top: "60px",
    right: "20px",
    background: darkMode ? "#2b2b2b" : "#fff",
    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
    borderRadius: "10px",
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    minWidth: "150px"
  };

  return (
    <nav style={navStyle}>
      {/* Logo */}
      <div style={logoStyle}>My Portfolio</div>

      {/* Desktop Menu */}
      <div className="desktop-menu" style={{ display: window.innerWidth > 768 ? "flex" : "none", gap: "20px" }}>
        {["About", "Projects", "Skills", "Contact"].map((item, i) => (
          <a
            key={i}
            href={`#${item.toLowerCase()}`}
            style={menuItemStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f8b400")}
            onMouseLeave={(e) => (e.currentTarget.style.color = darkMode ? "#fff" : "#000")}
          >
            {item}
          </a>
        ))}
        <button style={toggleStyle} onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="mobile-menu-icon" style={{ display: window.innerWidth <= 768 ? "block" : "none" }}>
        {menuOpen ? (
          <FaTimes size={24} onClick={() => setMenuOpen(false)} style={{ cursor: "pointer" }} />
        ) : (
          <FaBars size={24} onClick={() => setMenuOpen(true)} style={{ cursor: "pointer" }} />
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && window.innerWidth <= 768 && (
        <div style={mobileMenuStyle}>
          {["About", "Projects", "Skills", "Contact"].map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`}
              style={menuItemStyle}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button style={toggleStyle} onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>
        </div>
      )}
    </nav>
  );
}
