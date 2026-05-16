import Button from "../Button";
import NavBar from "../NavBar";

const ufcds = [
  {
    nome: "Arquitetura interna do computador",
    codigo: 769,
    horas: 25,
    pdf: "https://drive.google.com/file/d/1bFT7p1TVGd7X6Wwln4qpfxzh-SXp4FkZ/view?usp=drive_link",
  },
  {
    nome: "Dispositivos e Periféricos",
    codigo: 770,
    horas: 25,
    pdf: "https://drive.google.com/file/d/1f4SqXy71GoqDcwpbuyuR1agMVknAO30T/view?usp=drive_link",
  },
  {
    nome: "Programação COBOL - ficheiros e interatividade",
    codigo: 808,
    horas: 50,
    pdf: "https://drive.google.com/file/d/19WAFRmG8Rj6xJXmcGVI0ucz1xcUMgGX_/view?usp=drive_link",
  },
  {
    nome: "Programação COBOL - fundamentos",
    codigo: 807,
    horas: 50,
    pdf: "https://drive.google.com/file/d/1u29yilcMNmYvxLlvptoSSLEQ5J9E7_8J/view?usp=drive_link",
  },
  {
    nome: "Programação de sistemas distribuídos - JAVA",
    codigo: 816,
    horas: 50,
    pdf: "https://drive.google.com/file/d/1MKC9GgyUnZ5Ot_6HtAdPzblC9CbaINUT/view?usp=drive_link",
  },
  {
    nome: "Programação em Visual Basic NET",
    codigo: 3934,
    horas: 25,
    pdf: "https://drive.google.com/file/d/1vFsGnIOexOt0PzHwUHojApQ4OLBgipuw/view?usp=drive_link",
  },
  {
    nome: "Administração de bases de dados",
    codigo: 3933,
    horas: 50,
    pdf: "https://drive.google.com/file/d/1u_krdUM8HktlB61f20igyIsb279a8koK/view?usp=drive_link",
  },
  { nome: "Análise de sistemas", codigo: 811, horas: 50, pdf: "https://drive.google.com/file/d/17zZTe-6HElg-whEjbTHi93srihzV0Uav/view?usp=drive_link" },
  {
    nome: "Princípios metodológicos de programação",
    codigo: 806,
    horas: 25,
    pdf: "https://drive.google.com/file/d/1WqZZ1t-8WaYTHollgh1FVDDlJ-IvmhaA/view?usp=drive_link",
  },
  {
    nome: "Programação ASP.Net Core MVC",
    codigo: 10792,
    horas: 25,
    pdf: "https://drive.google.com/file/d/1C8Kevf6ZEd05TjJpwKUSbcJs9A-rnRGJ/view?usp=drive_link",
  },
  { nome: "Programação em C#", codigo: 3935, horas: 50, pdf: "https://drive.google.com/file/d/1kNa-E2dLd-DsSWKbRO_SV6ahW3zPhPaa/view?usp=drive_link" },
  {
    nome: "Sistemas de rede local",
    codigo: 799,
    horas: 25,
    pdf: "https://drive.google.com/file/d/1ePSSjk0EgUY6Q47maSpAsOcalD5m2zwf/view?usp=drive_link",
  },
  {
    nome: "Sistemas operativos - tipologias",
    codigo: 797,
    horas: 25,
    pdf: "https://drive.google.com/file/d/1Bdj9x8-H3NnvORKzqJQs5PPR4p0Kraq0/view?usp=drive_link",
  },
  { nome: "Utilitários", codigo: 798, horas: 25, pdf: "https://drive.google.com/file/d/15ozQUOCCoa5z-K8tsQNJ9ZZH14fRd5Kx/view?usp=drive_link" },
  {
    nome: "Informática - noções básicas",
    codigo: 7846,
    horas: 50,
    pdf: "https://drive.google.com/file/d/12fSww8eB_F_u6O6dLn9TtdJ0npiBhpxq/view?usp=drive_link",
  },
  { nome: "Estruturas de dados", codigo: 805, horas: 25, pdf: "https://drive.google.com/file/d/1LFFx6YGrr2VKAQyWGfelUpA9Pvboapv_/view?usp=drive_link" },
  {
    nome: "Fundamentos da linguagem SQL",
    codigo: 10788,
    horas: 25,
    pdf: "https://drive.google.com/file/d/14xUxmuElQyT_mYRofpdDbdIeSnVrL1ye/view?usp=drive_link",
  },
  {
    nome: "Fundamentos de Python",
    codigo: 10793,
    horas: 50,
    pdf: "https://drive.google.com/file/d/1A-HvQGTNmkWDDDy6nzhQ94aFdBJBUNbK/view?usp=drive_link",
  },
  {
    nome: "Programação avançada com Python",
    codigo: 10794,
    horas: 50,
    pdf: "https://drive.google.com/file/d/1A-HvQGTNmkWDDDy6nzhQ94aFdBJBUNbK/view?usp=drive_link",
  },
  {
    nome: "Administração de redes locais",
    codigo: 801,
    horas: 25,
    pdf: "https://drive.google.com/file/d/1vuJ4wOroAdMYkK-UyLXG3Df858z2lsrC/view?usp=drive_link",
  },
  {
    nome: "Projeto de programação",
    codigo: 10790,
    horas: 25,
    pdf: "https://drive.google.com/file/d/1j211CXN4hjDPgZOlycGmwr4awXwjxFjn/view?usp=drive_link",
  },
  {
    nome: "Segurança no desenvolvimento de software",
    codigo: 10795,
    horas: 25,
    pdf: "https://drive.google.com/file/d/19fQXtxLAxHDmMmtApce62zTJ8P3K1rof/view?usp=drive_link",
  },
  {
    nome: "Serviços adicionais de rede ",
    codigo: 800,
    horas: 25,
    pdf: "https://drive.google.com/file/d/1PKo_LEGn5ghyR6erLSP45nMQt3i9_XEU/view?usp=drive_link",
  },
  { nome: "Algoritmos", codigo: 804, horas: 25, pdf: "https://drive.google.com/file/d/1gJsnzuNMo5pWXGfAyOPxjZizdtWpgJBu/view?usp=drive_link" },
  { nome: "Conexões de rede", codigo: 771, horas: 25, pdf: "https://drive.google.com/file/d/1d-7SxxYKy10ru-CXLrhfrTfl_nTPGvh6/view?usp=drive_link" },
  {
    nome: "Desenvolvimento de aplicações web em JAVA",
    codigo: 10791,
    horas: 50,
    pdf: "https://drive.google.com/file/d/1AaW8kUwUCOlGRbqSodd6ndX3zDCXvNa8/view?usp=drive_link",
  },
  {
    nome: "Processamento computacional",
    codigo: 802,
    horas: 25,
    pdf: "https://drive.google.com/file/d/1FMTdc548SblPRanGkQL2RcSbF7S1rPi_/view?usp=drive_link",
  },
  {
    nome: "Programação em C/C++ - avançada",
    codigo: 810,
    horas: 50,
    pdf: "https://drive.google.com/file/d/14dthQ5Kk7CULX7rXhtAZHLKwn5-Zi3ef/view?usp=drive_link",
  },
  {
    nome: "Programação em C/C++ - fundamentos",
    codigo: 809,
    horas: 50,
    pdf: "https://drive.google.com/file/d/1GptBaL_HV3W7JAFoM1V96ICQHjlVS7K1/view?usp=drive_link",
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
