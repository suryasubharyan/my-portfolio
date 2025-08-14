export default function Summary({ summary }) {
  const style = {
    padding: "20px 40px",
    fontSize: "1.1rem",
    lineHeight: "1.5",
    backgroundColor: "#f5f5f5"
  };

  return (
    <section style={style}>
      <h2>Summary</h2>
      <p>{summary}</p>
    </section>
  );
}
