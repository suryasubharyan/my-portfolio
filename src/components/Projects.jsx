export default function Projects({ projects }) {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: window.innerWidth < 768 ? "1fr" : "1fr 1fr",
    gap: "20px"
  };

  const projectCard = {
    background: "#f8f9fa",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease"
  };

  return (
    <div style={containerStyle}>
      {projects.map((proj, i) => (
        <div
          key={i}
          style={projectCard}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 3px 10px rgba(0,0,0,0.1)";
          }}
        >
          <h3>{proj.name}</h3>
          <p>{proj.description}</p>
          <p><strong>Tech:</strong> {proj.tech.join(", ")}</p>
          <a href={proj.links.github} target="_blank" rel="noreferrer">GitHub</a> |{" "}
          {proj.links.live && <a href={proj.links.live} target="_blank" rel="noreferrer">Live</a>}
        </div>
      ))}
    </div>
  );
}
