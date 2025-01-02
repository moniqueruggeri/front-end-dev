import Button from "../components/Button";
import Icons from "../components/Icons";
import "../sass/layout/home.sass";

const Home = () => {
  return (
    <main className="home">
      <Icons />
      <h1>
        front <br></br>end dev
      </h1>
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
