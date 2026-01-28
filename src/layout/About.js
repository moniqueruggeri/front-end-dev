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
          Hi! <br />
          I'm <span className="color">Monique</span>,
        </Title>
        <p>
          I’m a Frontend Developer & Designer with a background in graphic
          design and UX, focused on building clean, responsive interfaces and
          meaningful digital experiences.
        </p>
      </div>

      <div className="aboutExperience">
        <Title>
          Work <span className="stroke">Experience</span>
        </Title>

        <div className="experiences">
          <Experience
            BtnText={">"}
            link={"/"}
            job={"Art Director"}
            place={"Fressen, Unica, Rooftop"}
            time={"2017 | 2022"}
            jobDescription={
              "Role overview Creative direction & branding Campaigns & digital assets Cross-team collaboration"
            }
          />
        </div>
      </div>

      <div className="aboutEducation">
        <Title>Education</Title>
        <Experience
          job={"Technologist in Multimedia Production"}
          place={"Senac"}
          time={"2014  - 2016"}
          jobDescription={
            "Focused on digital content creation, design and audiovisual media."
          }
        />

        <Experience
          job={"Computer Programmer"}
          place={"IEFP"}
          time={"2025  - 2026"}
          jobDescription={
            "Technical training in software development, with foundations in algorithms, databases, computer networks and programming using C/C++, Python, C#, Java and COBOL."
          }
        />

          <Link to="/modulos" className="modulos">Ver Módulos</Link>
      </div>

      <div className="aboutOtherCourses">
        <Title>
          Other <span className="stroke">Courses</span>
        </Title>

        <div className="courses">
          <Courses courseName={"UX/UI"} courseList={uxCourses} />
          <Courses courseName={"Front End"} courseList={frontEndCourses} />
        </div>
      </div>
      <a href="/MoniqueResumeFEPt.pdf" target="blank" className="btn">Download CV</a>
      <Icons />
    </div>
  );
};

export default About;
