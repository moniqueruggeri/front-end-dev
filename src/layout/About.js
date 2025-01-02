import Button from "../components/Button";
import Icons from "../components/Icons";
import Experience from "../components/Experiences";
import Title from "../components/Title";
import "../sass/layout/about.sass";
import "../sass/components/experience.sass";
import Courses from "../components/Courses";

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
          Lorem ipsum dolor sit amet consectetur. Etiam pharetra porttitor arcu
          dignissim in amet rhoncus. Tempor dui enim pharetra turpis dolor
          mauris. Vitae quis maecenas velit bibendum pretium congue pretium
          velit. Enim sit aliquam sed ipsum turpis in vulputate scelerisque
          nullam. Id diam at arcu neque proin.
        </p>
        <p>
          Venenatis et lorem turpis massa. Mi sit senectus et turpis risus
          tincidunt. Malesuada convallis fringilla nisl at. Ac fermentum commodo
          magna nec egestas posuere. Fermentum et felis vulputate id nulla
          cursus sit dui sodales. Nec faucibus porta tincidunt ac ipsum.
          Imperdiet tincidunt molestie turpis consequat.
        </p>
      </div>

      <Button
        action={"download"}
        text={"Download my CV"}
        link={"/"}
        variant="default"
      />

      <div className="aboutExperience">
        <Title>
          Work <span className="stroke">Experience</span>
        </Title>
        <div className="experiences">
          <Experience
            BtnText={">"}
            link={"/"}
            job={"Graphic Designer"}
            place={"Fressen Joias"}
            time={"2017 - 2018"}
            jobDescription={
              "Lorem ipsum dolor sit amet consectetur. Etiam pharetra porttitor arcu dignissim in amet rhoncus. Tempor dui enim pharetra turpis dolor mauris."
            }
          />
          <Experience
            BtnText={"<"}
            link={"/"}
            job={"Art Director"}
            place={"Agência Rooftop"}
            time={"2020 - 2022"}
            jobDescription={
              "Lorem ipsum dolor sit amet consectetur. Etiam pharetra porttitor arcu dignissim in amet rhoncus. Tempor dui enim pharetra turpis dolor mauris."
            }
          />
        </div>
        <div className="freelanceTitle">
          <Title className={"stroke"}>Freelance</Title>
        </div>
        <div className="experiences">
          <Experience
            BtnText={">"}
            link={"/"}
            job={"Graphic Designer"}
            place={"Lab0304"}
            time={"2018"}
            jobDescription={
              "Lorem ipsum dolor sit amet consectetur. Etiam pharetra porttitor arcu dignissim in amet rhoncus. Tempor dui enim pharetra turpis dolor mauris."
            }
          />

          <Experience
            BtnText={"<"}
            link={"/"}
            job={"Art Director"}
            place={"Única Marketing Digital"}
            time={"2019 - 2022"}
            jobDescription={
              "Lorem ipsum dolor sit amet consectetur. Etiam pharetra porttitor arcu dignissim in amet rhoncus. Tempor dui enim pharetra turpis dolor mauris."
            }
          />
          <Experience
            BtnText={">"}
            link={"/"}
            job={"Art Director"}
            place={"Estela Agendamentos"}
            time={"2020 - 2022"}
            jobDescription={
              "Lorem ipsum dolor sit amet consectetur. Etiam pharetra porttitor arcu dignissim in amet rhoncus. Tempor dui enim pharetra turpis dolor mauris."
            }
          />
          <Experience
            BtnText={"<"}
            link={"/"}
            job={"Art Director"}
            place={"Fressen Joias"}
            time={"2021 - 2022"}
            jobDescription={
              "Lorem ipsum dolor sit amet consectetur. Etiam pharetra porttitor arcu dignissim in amet rhoncus. Tempor dui enim pharetra turpis dolor mauris."
            }
          />
        </div>
      </div>

      <div className="aboutEducation">
        <Title>Education</Title>
        <Experience
          job={"Multimedia Producer"}
          place={"Senac"}
          time={"2014  - 2016"}
          jobDescription={
            "Lorem ipsum dolor sit amet consectetur. Etiam pharetra porttitor arcu dignissim in amet rhoncus. Tempor dui enim pharetra turpis dolor mauris."
          }
        />
      </div>

      <div className="aboutOtherCourses">
        <Title>
          Other <span className="stroke">Courses</span>
        </Title>

        <div className="courses">
          <Courses 
          courseName={"UX/UI"}
          courseList={uxCourses} />
          <Courses 
          courseName={"Front End"} 
          courseList={frontEndCourses}/>
        </div>
      </div>
      <Icons />
    </div>
  );
};

export default About;
