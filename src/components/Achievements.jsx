export default function Achievements({ achievements }) {
  const style = { padding: "20px 40px", backgroundColor: "#f5f5f5" };

  return (
    <section style={style}>
      <h2>Achievements</h2>
      <ul>
        {achievements.map((ach, i) => <li key={i}>{ach}</li>)}
      </ul>
    </section>
  );
}
