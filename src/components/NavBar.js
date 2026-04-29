const sections = [
  //   { id: "cover", label: "Capa" },
  { id: "portfolio", label: "Portfolio" },
  { id: "ack", label: "Agradecimentos" },
  { id: "intro", label: "Introdução" },
  { id: "about", label: "Sobre Mim" },
  { id: "reflection", label: "UFCDs" },
  { id: "lab", label: "Trabalhos"},
  { id: "balance", label: "Balanço" },
  { id: "future", label: "Futuro" },
];

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navItem">
        {sections.map((s) => (
          <a key={s.id} href={`/${s.id}`}>
            {s.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
