import GalleryImages from "./GalleryImages";
import Title from "./Title";
import "../sass/components/aboutProject.sass"

const AboutProject = ({ ProjectName, ProjectDescription1, ProjectDescription2 }) => {
  return (
    <div className="aboutProject">
      <Title>{ProjectName}</Title>
      <p>
        {ProjectDescription1}
        <br/>
        {ProjectDescription2}
      </p>
      <GalleryImages/>
    </div>
  );
};

export default AboutProject;
