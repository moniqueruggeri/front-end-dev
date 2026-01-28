import AboutProject from "../components/AboutProject";
import "../sass/layout/literatvs.sass";
import Button from "../components/Button";

const LearningLab = () => {
  return (
    <div className="literatvs">
      <AboutProject
        ProjectName={"Learning Lab"}
        Status={"Work in Progress · Back-end"}
        Overview={
          "Repositório organizado de estudos e testes em desenvolvimento, com projetos frontend e backend para praticar diferentes linguagens, ferramentas e conceitos de programação."
        }
        MainPoints={
          "Este projeto é um laboratório pessoal de aprendizado, com diversas pastas temáticas que contêm mini projetos ou exercícios para consolidar habilidades em diferentes áreas, incluindo: projetos frontend com HTML, CSS, JavaScript; estudos de backend em linguagens como C, C++ e COBOL; organização de estrutura por temática e clareza de propósito"
        }
        Techs={"HTML · CSS · JavaScript · Sass · C · C++ · COBOL"}
      />
      {/* <img src={preview} alt="" /> */}

      <div className="buttons">
        <Button
          text={"Github"}
          link="https://github.com/moniqueruggeri/learning-lab"
          external
        />
      </div>
    </div>
  );
};

export default LearningLab;
