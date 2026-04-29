import Button from "../Button";
import NavBar from "../NavBar";

const ufcds = [
  {
    nome: "Arquitetura interna do computador",
    codigo: 769,
    horas: 25,
    pdf: "/pdfs/769.pdf",
  },
  {
    nome: "Dispositivos e Periféricos",
    codigo: 770,
    horas: 25,
    pdf: "/pdfs/770.pdf",
  },
  {
    nome: "Programação COBOL - ficheiros e interatividade",
    codigo: 808,
    horas: 50,
    pdf: "/pdfs/808.pdf",
  },
  {
    nome: "Programação COBOL - fundamentos",
    codigo: 807,
    horas: 50,
    pdf: "/pdfs/807.pdf",
  },
  {
    nome: "Programação de sistemas distribuídos - JAVA",
    codigo: 816,
    horas: 0,
    pdf: "/pdfs/816.pdf",
  },
  {
    nome: "Programação em Visual Basic NET",
    codigo: 3934,
    horas: 25,
    pdf: "/pdfs/3934.pdf",
  },
  {
    nome: "Administração de bases de dados",
    codigo: 3933,
    horas: 50,
    pdf: "/pdfs/3933.pdf",
  },
  { nome: "Análise de sistemas", codigo: 811, horas: 50, pdf: "/pdfs/811.pdf" },
  {
    nome: "Princípios metodológicos de programação",
    codigo: 806,
    horas: 25,
    pdf: "/pdfs/806.pdf",
  },
  {
    nome: "Programação ASP.Net Core MVC",
    codigo: 10792,
    horas: 25,
    pdf: "/pdfs/10792.pdf",
  },
  { nome: "Programação em C#", codigo: 3935, horas: 50, pdf: "/pdfs/3935.pdf" },
  {
    nome: "Sistemas de rede local",
    codigo: 799,
    horas: 25,
    pdf: "/pdfs/799.pdf",
  },
  {
    nome: "Sistemas operativos - tipologias",
    codigo: 797,
    horas: 25,
    pdf: "/pdfs/797.pdf",
  },
  { nome: "Utilitários", codigo: 798, horas: 25, pdf: "/pdfs/798.pdf" },
  {
    nome: "Informática - noções básicas",
    codigo: 7846,
    horas: 50,
    pdf: "/pdfs/7846.pdf",
  },
  { nome: "Estruturas de dados", codigo: 805, horas: 25, pdf: "/pdfs/805.pdf" },
  {
    nome: "Fundamentos da linguagem SQL",
    codigo: 10788,
    horas: 25,
    pdf: "/pdfs/10788.pdf",
  },
  {
    nome: "Fundamentos de Python",
    codigo: 10793,
    horas: 50,
    pdf: "/pdfs/10793.pdf",
  },
  {
    nome: "Programação avançada com Python",
    codigo: 10794,
    horas: 50,
    pdf: "/pdfs/10794.pdf",
  },
  {
    nome: "Administração de redes locais",
    codigo: 801,
    horas: 0,
    pdf: "/pdfs/801.pdf",
  },
  {
    nome: "Projeto de programação",
    codigo: 10790,
    horas: 0,
    pdf: "/pdfs/10790.pdf",
  },
  {
    nome: "Segurança no desenvolvimento de software",
    codigo: 10795,
    horas: 25,
    pdf: "/pdfs/10795.pdf",
  },
  {
    nome: "Serviços adicionais de rede ",
    codigo: 800,
    horas: 0,
    pdf: "/pdfs/800.pdf",
  },
  { nome: "Algoritmos", codigo: 804, horas: 25, pdf: "/pdfs/804.pdf" },
  { nome: "Conexões de rede", codigo: 771, horas: 25, pdf: "/pdfs/771.pdf" },
  {
    nome: "Desenvolvimento de aplicações web em JAVA",
    codigo: 10791,
    horas: 50,
    pdf: "/pdfs/10791.pdf",
  },
  {
    nome: "Processamento computacional",
    codigo: 802,
    horas: 25,
    pdf: "/pdfs/802.pdf",
  },
  {
    nome: "Programação em C/C++ - avançada",
    codigo: 810,
    horas: 50,
    pdf: "/pdfs/810.pdf",
  },
  {
    nome: "Programação em C/C++ - fundamentos",
    codigo: 809,
    horas: 50,
    pdf: "/pdfs/809.pdf",
  },
];

const Reflection = () => {
  return (
    <section className="portfolio">
      <NavBar />
      <section className="tabela-ufcd">
        <h1 className="titlePRA">Grade Curricular</h1>
        <div className="ufcd-table">
          <table>
            <thead>
              <tr className="ufcd-header">
                <th className="ufcd-nome">UFCD</th>
                <th className="ufcd-cod">Código</th>
                <th className="ufcd-hr">Horas</th>
                <th className="ufcd-pdf">PDF</th>
              </tr>
            </thead>

            <tbody>
              {ufcds.map((ufcd, index) => (
                <tr className="ufcd-body" key={index}>
                  <td className="ufcd-nome">{ufcd.nome}</td>
                  <td className="ufcd-cod">{ufcd.codigo}</td>
                  <td className="ufcd-hr">{ufcd.horas}</td>
                  <td className="ufcd-pdf">
                    <a
                      href={ufcd.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver PDF
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <Button
      text={"Próximo"}
      link={"/learning-lab"}
      variant="next"
      />
    </section>
  );
};

export default Reflection;
