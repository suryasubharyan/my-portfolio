import useScrollFadeIn from "../hooks/useScrollFadeIn";

export default function About({ about, education, internships, darkMode }) {
  const containerStyle = {
    padding: "40px 20px",
    background: darkMode ? "#1f1f1f" : "#fff",
    color: darkMode ? "#fff" : "#000",
    transition: "background 0.3s ease, color 0.3s ease"
  };

 const sectionTitle = {
  display: "flex",
  alignItems: "center",

  // ✅ camelCase
  gap: "8px",           // Adds space between icon and text
  color: "#f8b400",
  marginBottom: "15px",
  fontSize: "1.4rem",
  fontWeight: "bold"
};


  const introStyle = {
    fontSize: "1rem",
    lineHeight: "1.6",
    marginBottom: "30px"
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    marginBottom: "30px"
  };

  const cardBase = {
    padding: "20px",
    borderRadius: "10px",
    background: darkMode ? "#2b2b2b" : "#fafafa",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
    cursor: "pointer"
  };

  const cardTitle = {
    fontSize: "1.1rem",
    color: "#f8b400",
    marginBottom: "8px",
    fontWeight: "bold"
  };

  const cardSubtitle = {
    fontSize: "0.95rem",
    fontWeight: "bold",
    marginBottom: "5px"
  };

  const yearStyle = {
    fontSize: "0.85rem",
    color: darkMode ? "#aaa" : "#666",
    marginBottom: "10px"
  };

  const detailsStyle = {
    fontSize: "0.9rem",
    lineHeight: "1.4"
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "scale(1.03)";
    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
  };

  return (
    <section style={containerStyle} id="about">
      <h2 style={sectionTitle}>About Me</h2>
      <p style={introStyle}>{about}</p>

      {/* Education */}
      <h3 style={sectionTitle}>Education</h3>
      <div style={gridStyle}>
        {education.map((edu, i) => {
          const fadeInProps = useScrollFadeIn();
          return (
            <div
              key={i}
              ref={fadeInProps.ref}
              style={{ ...cardBase, ...fadeInProps.style }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div style={cardTitle}>{edu.degree}</div>
              <div style={cardSubtitle}>{edu.institution}</div>
              <div style={yearStyle}>{edu.year}</div>
              <div style={detailsStyle}>{edu.details}</div>
            </div>
          );
        })}
      </div>

      {/* Internships */}
      <h3 style={sectionTitle}>Internships</h3>
      <div style={gridStyle}>
        {internships.map((intern, i) => {
          const fadeInProps = useScrollFadeIn();
          return (
            <div
              key={i}
              ref={fadeInProps.ref}
              style={{ ...cardBase, ...fadeInProps.style }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div style={cardTitle}>{intern.role}</div>
              <div style={cardSubtitle}>{intern.company}</div>
              <div style={yearStyle}>{intern.year}</div>
              <div style={detailsStyle}>{intern.details}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
