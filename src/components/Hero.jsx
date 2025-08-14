import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from "react-icons/si";

export default function Hero({ data }) {
  const containerStyle = {
    background: "#2b2b2b",
    color: "#fff",
    padding: "60px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap"
  };

  const textStyle = { maxWidth: "500px" };
  const headingStyle = { fontSize: "2.5rem", fontWeight: "bold" };
  const introStyle = { fontSize: "1rem", lineHeight: "1.6", color: "#ccc" };

  const imgStyle = {
    borderRadius: "50%", // Circular image
    width: "200px",
    height: "200px",
    objectFit: "cover",
    border: "4px solid #f8b400", // Golden border
    boxShadow: "0 0 20px rgba(248,180,0,0.6)", // Glow effect
    transition: "transform 0.3s ease"
  };

  const iconContainer = {
    marginTop: "15px",
    display: "flex",
    gap: "15px",
    fontSize: "1.8rem"
  };

  const iconBase = {
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer"
  };

  return (
    <section style={containerStyle}>
      <div style={textStyle}>
        <h1 style={headingStyle}>Hey, I'm {data.name.split(" ")[0]}.</h1>
        <p style={introStyle}>{data.intro}</p>

        {/* Social Icons */}
        <div style={iconContainer}>
          <a
            href={data.social.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{ ...iconBase, color: "#0077b5" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <FaLinkedin />
          </a>
          <a
            href={data.social.github}
            target="_blank"
            rel="noreferrer"
            style={{ ...iconBase, color: "#fff" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <FaGithub />
          </a>
          <a
            href={data.social.leetcode}
            target="_blank"
            rel="noreferrer"
            style={{ ...iconBase, color: "#f89f1b" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <SiLeetcode />
          </a>
          <a
            href={data.social.gfg}
            target="_blank"
            rel="noreferrer"
            style={{ ...iconBase, color: "#2f8d46" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <SiGeeksforgeeks />
          </a>
          <a
            href={data.social.codechef}
            target="_blank"
            rel="noreferrer"
            style={{ ...iconBase, color: "#5b4638" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <SiCodechef />
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <img
        src={data.profileImage}
        alt="Profile"
        style={imgStyle}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
    </section>
  );
}
