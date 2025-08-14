import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact({ contact, darkMode }) {
  const containerStyle = {
    padding: "50px 20px",
    background: darkMode ? "#1f1f1f" : "#fff",
    color: darkMode ? "#fff" : "#000",
    textAlign: "center"
  };

  const titleStyle = { color: "#f8b400", marginBottom: "20px", fontSize: "1.8rem" };

  const gridStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap"
  };

  const cardStyle = {
    padding: "20px",
    borderRadius: "10px",
    background: darkMode ? "#2b2b2b" : "#fafafa",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    width: "250px",
    textAlign: "center"
  };

  const iconStyle = { fontSize: "2rem", marginBottom: "10px", color: "#f8b400" };
  const textStyle = { fontSize: "1rem", wordBreak: "break-word" };

  const hoverEnter = (e) => {
    e.currentTarget.style.transform = "translateY(-5px)";
    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
  };

  const hoverLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
  };

  return (
    <section style={containerStyle} id="contact">
      <h2 style={titleStyle}>Contact Me</h2>
      <div style={gridStyle}>
        {/* Email */}
        <div style={cardStyle} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
          <FaEnvelope style={iconStyle} />
          <div style={textStyle}>
            <a href={`mailto:${contact.email}`} style={{ color: "inherit", textDecoration: "none" }}>
              {contact.email}
            </a>
          </div>
        </div>

        {/* GitHub */}
        <div style={cardStyle} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
          <FaGithub style={iconStyle} />
          <div style={textStyle}>
            <a href={contact.github} target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
              GitHub Profile
            </a>
          </div>
        </div>

        {/* LinkedIn */}
        <div style={cardStyle} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
          <FaLinkedin style={iconStyle} />
          <div style={textStyle}>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
