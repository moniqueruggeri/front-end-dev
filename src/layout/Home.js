import Button from "../components/Button";
import Icons from "../components/Icons";
import "../sass/layout/home.sass";
import monique from "../img/monique.png";

const Home = () => {
  return (
    <main className="home">
      <Icons />
      <div className="titleHome">
        <h2 className="stroke stroke-left pisca">
          front <br />
          end dev
        </h2>
        <h1>
          front <br />
          end dev
        </h1>
        <h2 className="stroke stroke-right pisca">
          front <br />
          end dev
        </h2>
        <img src={monique} alt="" />
      </div>
      <div className="buttons">
        <Button action={"navigate"} link={"/about"} text={"Resume"} />
        
        <Button
          action={"expand"}
          text={"Projects"}
          link={"/projects"}
          variant="default"
        />
      </div>
      {/* <h2 className="stroke coming"><span></span>COMING SOON...</h2> */}
    </main>
  );
};

export default Home;
