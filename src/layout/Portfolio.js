import Button from "../components/Button";
import NavBar from "../components/NavBar";
import Cover from "../components/Portfolio/Cover";

const Portfolio = () => {
  return (
    <>
      <NavBar />

      <main className="portfolio">
        <Cover />
        <Button
            text={"Próximo"}
            link={"/ack"}
            variant="next"
        />
      </main>
    </>
  );
};

export default Portfolio
