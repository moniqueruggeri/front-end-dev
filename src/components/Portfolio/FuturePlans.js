import Button from "../Button";
import NavBar from "../NavBar";
import Section from "../Section";

const FuturePlans = () => {
  return (
    <section className="portfolio">
      <NavBar />
      <section className="future">
      <Section id={"future"} title={"Planos Futuros"}>
        <p>
          Com as aprendizagens adquiridas ao longo desta formação, pretendo
          iniciar e consolidar a minha carreira na área de desenvolvimento de
          software, aplicando na prática os conhecimentos técnicos que
          desenvolvi.
          <br />
          <br />O meu objetivo é integrar o mercado de trabalho como
          programadora, contribuindo para projetos reais e continuando a evoluir
          profissionalmente. Além disso, quero aprofundar constantemente as
          minhas competências, acompanhando as novas tecnologias e tendências da
          área, de forma a tornar-me uma profissional cada vez mais completa.
          Pretendo também aliar a programação ao meu interesse por design,
          criando soluções digitais funcionais, intuitivas e com foco na
          experiência do utilizador.
        </p>
      </Section>
      </section>
      <Button text={"Obrigada!"} link={"/portfolio"} variant="next" />
    </section>
  );
};

export default FuturePlans;
