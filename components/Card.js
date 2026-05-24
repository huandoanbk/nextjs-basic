export default function Card({ backgroundColor = "#ffffff", title = "Card Title", children }) {
  return (
    <section
      style={{
        backgroundColor,
        padding: "1rem",
        borderRadius: "0.75rem",
        border: "1px solid #cbd5e1",
        marginTop: "1rem",
      }}
    >
      <h3 style={{ marginBottom: "0.5rem" }}>{title}</h3>
      <p>{children}</p>
    </section>
  );
}
