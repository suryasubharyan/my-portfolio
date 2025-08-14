export default function Experience({ experience }) {
  const containerStyle = { padding: "20px 40px", backgroundColor: "#f5f5f5" };
  const jobStyle = { marginBottom: "20px" };

  return (
    <section style={containerStyle}>
      <h2>Experience</h2>
      {experience.map((job, i) => (
        <div key={i} style={jobStyle}>
          <h3>{job.role} — {job.company}</h3>
          <p><em>{job.duration}</em></p>
          <ul>
            {job.points.map((point, j) => <li key={j}>{point}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}
