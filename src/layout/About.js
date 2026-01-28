import Icons from "../components/Icons";
import Experience from "../components/Experiences";
import Title from "../components/Title";
import "../sass/layout/about.sass";
import "../sass/components/experience.sass";
import Courses from "../components/Courses";
import { Link } from "react-router-dom";

const About = () => {
  const uxCourses = [
    "UX Design",
    "UI Design: Melhorando a experiência do usuário",
    "Figma",
    "Design System",
  ];

  const frontEndCourses = [
    "HTML e CSS",
    "Arquitetura CSS",
    "CSS: Dispondo elementos com Flexbox e Grid",
    "Tailwind CSS: estilizando sua página com classes unitárias",
    "SASS: CSS sinteticamente espetacular",
    "Lógica de programação com JavaScript",
    "JavaScript e HTML: desenvolva um jogo e pratique lógica de programação",
    "JavaScript para Web: Crie páginas dinâmicas",
    "Git e GitHub: repositório, commit e versões",
  ];

  return (
    <div className="about">
      <div className="aboutText">
        <Title>
          Olá! <br />
          Sou a <span className="color">Monique</span>,
        </Title>
        <p>
          sou desenvolvedora front-end e designer, com formação em design
          gráfico e UX, focada na criação de interfaces limpas, responsivas e
          experiências digitais com significado.
        </p>
      </div>

      <div className="aboutExperience">
        <Title>
          Experiência <span className="stroke">Profissional</span>
        </Title>

        <div className="experiences">
          <Experience
            BtnText={">"}
            link={"/"}
            job={"Diretora de Arte"}
            place={"Fressen, Unica, Rooftop"}
            time={"2017 | 2022"}
            jobDescription={
              "Direção criativa e branding · Campanhas e ativos digitais · Colaboração entre equipas"
            }
          />
        </div>
      </div>

      <div className="aboutEducation">
        <Title>Formação</Title>
        <Experience
          job={"Tecnólogo em Produção Multimédia"}
          place={"Senac"}
          time={"2014  - 2016"}
          jobDescription={
            "Formação focada na criação de conteúdos digitais, design e meios audiovisuais."
          }
        />

        <Experience
          job={"Programadora Informática"}
          place={"IEFP"}
          time={"2025  -  Atualmente"}
          jobDescription={
            "Formação técnica em desenvolvimento de software, com bases em algoritmos, bases de dados, redes de computadores e programação em C/C++, Python, C# e COBOL."
          }
        />

        <Link to="/modulos" className="modulos">
          Ver Módulos
        </Link>
      </div>

      <div className="aboutOtherCourses">
        <Title>
        Cursos <span className="stroke">Adicionais</span>
        </Title>

        <div className="courses">
          <Courses courseName={"UX/UI"} courseList={uxCourses} />
          <Courses courseName={"Front End"} courseList={frontEndCourses} />
        </div>
      </div>
      <a href="/MoniqueResumeFEPt.pdf" target="blank" className="btn">
        Download CV
      </a>
      <Icons />
    </div>
  );
};

export default About;
