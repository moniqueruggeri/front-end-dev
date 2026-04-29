export default function Section({ id, title, children }) {
    return (
      <section id={id} className="section">
        <h1 className="titlePRA">{title}</h1>
        <div className="content">{children}</div>
      </section>
    );
  }