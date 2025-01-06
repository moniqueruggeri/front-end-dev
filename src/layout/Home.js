import Button from "../components/Button";
import Icons from "../components/Icons";
import "../sass/layout/home.sass";
import monique from "../img/monique.png";

const Home = () => {
  return (
    <main className="home">
      <Icons />
      <div className="titleHome">
        <h2 className="stroke stroke-left">
          front <br />
          end dev
        </h2>
        <h1>
          front <br />
          end dev
        </h1>
        <h2 className="stroke stroke-right">
          front <br />
          end dev
        </h2>
        <img src={monique} alt="" />
      </div>
      <Button
        action={"expand"}
        text={"Explore"}
        link={"/projects"}
        variant="default"
      />
    </main>
  );
};

export default Home;
