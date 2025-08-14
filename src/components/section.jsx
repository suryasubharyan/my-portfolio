import useScrollFadeIn from "../hooks/useScrollFadeIn";

export default function Section({ title, items, darkMode }) {
  const containerStyle = { padding: "40px 20px", background: darkMode ? "#1f1f1f" : "#fff" };
  const titleStyle = { fontSize: "1.5rem", fontWeight: "bold", color: "#f8b400", marginBottom: "20px" };
  
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px"
  };

  const cardBase = {
    padding: "20px",
    borderRadius: "10px",
    background: darkMode ? "#2b2b2b" : "#fafafa",
    color: darkMode ? "#fff" : "#000",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer"
  };

  return (
    <section style={containerStyle} id={title.toLowerCase()}>
      <h2 style={titleStyle}>{title}</h2>
      <div style={gridStyle}>
        {items.map((item, i) => {
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
              <h3>{item.name || item.title}</h3>
              {item.date && <p style={{ fontSize: "0.9rem", color: "#aaa" }}>{item.date}</p>}
              {item.link && (
                <a href={item.link} target="_blank" rel="noreferrer" style={{ color: "#61dafb" }}>View</a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
