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
          I’m a Front-end developer passionate about building clean, intuitive
          interfaces that make digital experiences enjoyable. I enjoy
          collaborating with teams to turn ideas into polished products, and I’m
          always learning new tools and techniques to improve the way users
          interact with technology.
        </p>
        <p>
          I believe great products come from great teamwork, and I’m excited to
          contribute my skills to create meaningful, user-focused solutions.
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
              "Worked with Serzzare and Fressen Joias to create sleek, engaging visuals for social media and campaigns. Focused on turning brand identity into elegant, approachable designs that highlight products and connect with audiences. Led concept development, art direction, and visual storytelling, ensuring every piece was consistent and impactful. Blended creativity with strategy to deliver campaigns that stood out and strengthened brand presence."
            }
          />
          <Experience
            BtnText={"<"}
            link={"/"}
            job={"Art Director"}
            place={"Agência Rooftop"}
            time={"2020 - 2022"}
            jobDescription={
              "Led the visual strategy and execution for various brands, focusing on creating cohesive and engaging content across digital platforms. Developed design concepts, layouts, and motion graphics that effectively communicated brand messages and resonated with target audiences. Collaborated closely with marketing teams to ensure consistency and alignment with brand identity, delivering high-quality visuals that enhanced user engagement and brand presence."
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
            place={"Única Marketing Digital"}
            time={"2019 | 2021 - First Experience"}
            jobDescription={
              "Created dynamic motion graphics and cohesive visual elements to enhance storytelling and audience engagement. Developed clean, professional designs that aligned with project goals and brand identity. Ensured all visual solutions were aesthetically appealing, strategically effective, and resonated with target audiences."
            }
          />

          <Experience
            BtnText={">"}
            link={"/"}
            job={"Art Director"}
            place={"Estela Agendamentos"}
            time={"2020 - 2022 - Last Experience"}
            jobDescription={
              "Developed dynamic visual concepts and motion graphics to enhance brand storytelling and audience engagement. Focused on creating cohesive and visually appealing content that aligns with brand identity and resonates with target audiences. Collaborated closely with clients to ensure that design solutions effectively communicated their messages and objectives."
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
            "A comprehensive undergraduate program combining multimedia design, web development, and user experience. Covered areas include graphic design, typography, photography, 2D/3D animation, illustration, audiovisual production, and digital branding, with practical projects and professional development."
          }
        />
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
      <Icons />
    </div>
  );
};

export default About;
