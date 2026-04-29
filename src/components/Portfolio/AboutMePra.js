import Button from "../Button";
import NavBar from "../NavBar";

const AboutMePra = () => {
  return (
    <section className="portfolio">
      <NavBar />
      <section className="aboutmepra">
        <h1 className="titlePRA">Sobre Mim</h1>
        <p className="sobremim">
          Sou a <strong>Monique</strong>, <span className="color">desenvolvedora front-end e designer</span>, com formação em
          design gráfico e UX, focada na criação de interfaces limpas,
          responsivas e experiências digitais com significado. A minha abordagem
          combina sensibilidade estética com pensamento funcional, procurando
          sempre criar soluções que sejam não só visualmente apelativas, mas
          também intuitivas e eficazes para o utilizador.
        </p>
        <p className="sobremim">
          Ao longo do meu percurso profissional, <strong>atuei como Diretora de Arte</strong> em
          projetos para marcas como Fressen, Unica e Rooftop, entre 2017 e 2022.
          Nesse período, fui responsável pela direção criativa e desenvolvimento
          de identidade visual, criação de campanhas e ativos digitais, bem como
          pela colaboração entre diferentes equipas para garantir consistência e
          impacto nos projetos desenvolvidos.
        </p>
        <p className="sobremim">
          A minha formação académica começou com o curso de Tecnólogo em
          <span className="color-destaque"> Produção Multimédia</span> pelo Senac, onde adquiri bases sólidas na criação
          de conteúdos digitais, design e meios audiovisuais. Atualmente, estou
          a frequentar a formação de <span className="color-destaque">Programadora Informática</span> pelo IEFP, onde
          venho aprofundando conhecimentos técnicos em desenvolvimento de
          software, incluindo algoritmos, bases de dados, redes de computadores
          e linguagens como C/C++, Python, C# e COBOL.
        </p>
        <p className="sobremim">
          Hoje, procuro integrar o melhor dos dois mundos — design e
          desenvolvimento — com o objetivo de construir experiências digitais
          completas, funcionais e bem estruturadas, continuando a evoluir e a
          explorar novas tecnologias e desafios na área.
        </p>
      </section>
      <Button text={"Próximo"} link={"/reflection"} variant="next" />
    </section>
  );
};

export default AboutMePra;
