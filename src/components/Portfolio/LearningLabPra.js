import Button from "../Button";
import NavBar from "../NavBar";
import Section from "../Section";

const LearningLabPra = () => {
  return (
    <section className="portfolio">
      <NavBar />
      <section className="trabalhos">
        <Section id={"lab"} title={"Trabalhos Realizados"}>
          <section className="descricao-trabalhos">
            <p>
              Repositório organizado de estudos e testes em desenvolvimento, com
              projetos frontend e backend para praticar diferentes linguagens,
              ferramentas e conceitos de programação.
            </p>
            <p>
              Este projeto é um laboratório pessoal de aprendizado, com diversas
              pastas temáticas que contêm mini projetos ou exercícios para
              consolidar habilidades em diferentes áreas, incluindo: projetos
              frontend com HTML, CSS, JavaScript; estudos de backend em
              linguagens como C, C++ e COBOL; organização de estrutura por
              temática e clareza de propósito.
            </p>

            <div className="tech-hub">
              <p>HTML · CSS · JavaScript · Sass · C · C++ · COBOL</p>
              <Button
                text={"Github"}
                link="https://github.com/moniqueruggeri/learning-lab"
                external
              />
            </div>
          </section>
        </Section>
      </section>
      <Button text={"Próximo"} link={"/balance"} variant="next" />
    </section>
  );
};

export default LearningLabPra;
