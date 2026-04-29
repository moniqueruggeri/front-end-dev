import Button from "../Button";
import NavBar from "../NavBar";

const Acknowledgements = () => {
  return (
    <>
      <NavBar />
      <section className="portfolio">
        <section className="agradecimentos">
          <h1 className="titlePRA">Agradecimentos</h1>
          <p className="txtAgradecimentos">
            Ao concluir este trabalho, gostaria de expressar a minha sincera
            gratidão a todos aqueles que contribuíram, direta ou indiretamente,
            para a realização deste percurso no curso de Programador
            Informático. <br/>
            <br/>
            Agradeço aos formadores pelo conhecimento partilhado,
            pela orientação e pela dedicação ao longo de toda a formação. Aos
            colegas, pela colaboração, entreajuda e momentos de aprendizagem
            conjunta que tornaram esta caminhada mais enriquecedora. <br/>
            <br/>
            Por fim, deixo um agradecimento especial à minha família e amigos, pelo
            apoio, compreensão e incentivo constantes, fundamentais para a
            concretização deste objetivo.
          </p>
        </section>
        <Button text={"Próximo"} link={"/intro"} variant="next" />
      </section>
    </>
  );
};

export default Acknowledgements;
