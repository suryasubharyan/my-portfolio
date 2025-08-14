export default function Navbar({ darkMode, setDarkMode }) {
  const navStyle = {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backdropFilter: "blur(10px)",
    background: darkMode
      ? "rgba(31, 31, 31, 0.8)"
      : "rgba(255, 255, 255, 0.8)",
    color: darkMode ? "#fff" : "#000",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
  };

  const logoStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    letterSpacing: "1px",
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
    transition: "color 0.3s ease, transform 0.3s ease"
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

  return (
    <nav style={navStyle}>
      {/* Logo */}
      <div style={logoStyle}>My Portfolio</div>

      {/* Menu */}
      <div style={menuStyle}>
        {["About", "Projects", "Skills", "Contact"].map((item, i) => (
          <a
            key={i}
            href={`#${item.toLowerCase()}`}
            style={menuItemStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#f8b400";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = darkMode ? "#fff" : "#000";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Theme Toggle */}
      <button
        style={toggleStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}
