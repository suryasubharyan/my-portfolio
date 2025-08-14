export default function SectionWrapper({ id, children }) {
  const cardBase = {
    background: "#fff",
    borderRadius: "12px",
    padding: window.innerWidth < 768 ? "15px" : "20px",
    margin: "20px auto",
    maxWidth: "900px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    animation: "fadeIn 0.8s ease forwards",
    opacity: 0,
    transition: "transform 0.3s ease"
  };

  return (
    <section
      id={id}
      style={cardBase}
      onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
      onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
    >
      {children}
    </section>
  );
}
