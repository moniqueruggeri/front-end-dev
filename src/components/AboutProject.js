import Title from "./Title";
import "../sass/components/aboutProject.sass";

const AboutProject = ({ ProjectName, Status, Overview, MainPoints, Techs }) => {
  return (
    <div className="aboutProject">
      <Title>{ProjectName}</Title>
      <span>{Status}</span>
      <div className="descricaoProjeto">
        <p>{Overview}</p>
        <div className="techs">
          <p>{MainPoints}</p>
          <p>{Techs}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutProject;
