import useScrollFadeIn from "../hooks/useScrollFadeIn";

export default function Skills({ skills, darkMode }) {
  const containerStyle = {
    padding: "40px 20px",
    background: darkMode ? "#1f1f1f" : "#fff",
    color: darkMode ? "#fff" : "#000"
  };
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px"
  };
  const cardBase = {
    padding: "20px",
    borderRadius: "10px",
    background: darkMode ? "#2b2b2b" : "#fafafa",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer"
  };
  const titleStyle = { color: "#f8b400", fontSize: "1.2rem", marginBottom: "10px" };
  const skillItem = { padding: "5px 0", borderBottom: `1px solid ${darkMode ? "#333" : "#ddd"}` };

  const categories = Object.keys(skills);

  return (
    <section style={containerStyle} id="skills">
      <h2 style={{ color: "#f8b400", marginBottom: "20px" }}>Skills</h2>
      <div style={gridStyle}>
        {categories.map((cat, i) => {
          const fadeInProps = useScrollFadeIn();
          return (
            <div
              key={i}
              ref={fadeInProps.ref}
              style={{ ...cardBase, ...fadeInProps.style }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
              }}
            >
              <h3 style={titleStyle}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </h3>
              {skills[cat].map((skill, idx) => (
                <div key={idx} style={skillItem}>{skill}</div>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}
