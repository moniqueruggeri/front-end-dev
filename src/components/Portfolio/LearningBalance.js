import Button from "../Button";
import NavBar from "../NavBar";
import Section from "../Section";

const LearningBalance = () => {
  return (
    <section className="portfolio">
      <NavBar />
      <section className="balance">
        <Section id={"balance"} title={"Balanço de Aprendizagens"}>
          <section className="descricao-balanco">
            <p>
              Ao longo da realização deste trabalho, procurei adotar uma
              abordagem organizada e consistente, o que contribuiu para o
              cumprimento dos objetivos propostos. Considero que o processo foi
              positivo, sobretudo pela oportunidade de aplicar, na prática, os
              conhecimentos adquiridos ao longo da formação. No entanto,
              surgiram algumas dificuldades, nomeadamente na resolução de
              determinados problemas técnicos e na gestão do tempo em fases mais
              exigentes do projeto. Ainda assim, esses desafios acabaram por ser
              fundamentais para o meu desenvolvimento, obrigando-me a pesquisar,
              testar diferentes soluções e aprimorar o meu raciocínio lógico.
            </p>
            <p>
              Do ponto de vista crítico, destaco como ponto forte a evolução das
              minhas competências técnicas e a capacidade de adaptação perante
              obstáculos. Por outro lado, reconheço que poderia ter otimizado
              melhor a fase de planeamento inicial, o que teria facilitado a
              execução de algumas etapas do trabalho. Esta análise permite-me
              compreender a importância de uma estrutura bem definida desde o
              início, assim como a necessidade de manter uma postura crítica e
              aberta à melhoria contínua.
            </p>
            <p>
              Em termos de aprendizagem, este trabalho foi essencial para
              consolidar conhecimentos e desenvolver novas competências, não só
              a nível técnico, mas também ao nível da autonomia e da resolução
              de problemas. Aprendi através da prática, da experimentação e da
              pesquisa constante, o que reforçou a minha capacidade de aprender
              de forma independente. Esta experiência contribuiu
              significativamente para o meu crescimento enquanto futura
              profissional na área da programação.
            </p>
          </section>
        </Section>
      </section>
      <Button text={"Próximo"} link={"/future"} variant="next" />
    </section>
  );
};

export default LearningBalance;
