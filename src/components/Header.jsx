export default function Header({ data }) {
  const containerStyle = {
    background: "linear-gradient(135deg, #1e1e1e, #333)",
    color: "#fff",
    padding: "60px",
    textAlign: "center",
  };

  const nameStyle = { fontSize: "2.8rem", margin: "0" };
  const titleStyle = { fontSize: "1.2rem", color: "#aaa" };
  const linkStyle = { margin: "0 10px", color: "#61dafb", textDecoration: "none" };

  return (
    <header style={containerStyle}>
      <h1 style={nameStyle}>{data.name}</h1>
      <p style={titleStyle}>{data.title}</p>
      <p>{data.location} — {data.phone} — {data.email}</p>
      <div>
        {data.links.map((link, i) => (
          <a key={i} href={link.url} style={linkStyle} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
