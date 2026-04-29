import Button from "../Button";
import NavBar from "../NavBar";
import Section from "../Section";

const Introduction = () => {
  return (
    <section className="portfolio">
      <NavBar />
      <section className="intro">
        <Section id="intro" title="Introdução">
          <p className="intro-p">
            Este "
            <span className="color-destaque">
              Portefólio Reflexivo de Aprendizagens
            </span>
            " insere-se na avaliação final do <strong>Módulo PRA</strong>,{" "}
            <br />
            no âmbito do Curso de{" "}
            <span className="color-destaque">"Programador de Informática"</span>
            .
          </p>
          <p className="intro-p">
            Tem como objetivo <i>refletir</i> sobre o meu próprio processo de
            aprendizagem, <br />
            evidenciando competências ao nível do{" "}
            <span className="color-destaque">
              "saber-saber", "saber-ser", "saber-fazer"
            </span>
            , <br />
            através da construção individual do meu{" "}
            <strong>Portefólio Reflexivo de Aprendizagens</strong>.
          </p>
          <p className="intro-p">
            Este Portefólio está dividido em <strong>três capítulos</strong>:
          </p>
          <ul className="intro-list">
            <li>
              <span className="color-destaque">1)</span> Apresentação Pessoal,{" "}
            </li>
            <li>
              <span className="color-destaque">2)</span> Balanço das
              aprendizagens e
            </li>
            <li>
              <span className="color-destaque">3)</span> Projetos Futuros
            </li>
          </ul>
          <p className="intro-p">
            No <strong>primeiro</strong>, intitulado de{" "}
            <span className="color">Apresentação Pessoal</span>, farei a minha
            apresentação pessoal.
          </p>
          <p className="intro-p">
            O <strong>segundo</strong> capítulo diz respeito às{" "}
            <span className="color">
              Reflexões das UFCD's e Trabalhos realizados
            </span>
            <br />
            Refletirei sobre o impacto das aprendizagens que vou adquirindo nos
            vários módulos, contextualizando-as nos contexos pessoal e
            profissional.
            <br />
            Este capítulo contempla a{" "}
            <strong>
              integração de trabalhos efetuados ao longo dos vários módulos
            </strong>
            , que de alguma forma, quer pelo interesse do tema, quer pela
            avaliação obtida, me fizeram pensar acerca dele, conferindo-lhe um
            sentido.
          </p>
          <p className="intro-p">
            No <strong>terceiro</strong>, farei um{" "}
            <span className="color">balanço sobre o que aprendi</span> e como
            aprendi.
            <br />
            Apresentarei ainda os meus projetos para o futuro. Ou seja,
            responderei à "grande" questão: "O que pretendo fazer com todas
            estas apredizagens adquiridas?."
          </p>
        </Section>
      </section>
      <Button text={"Próximo"} link={"/AboutMePra"} variant="next" />
    </section>
  );
};

export default Introduction;
