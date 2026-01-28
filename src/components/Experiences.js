import "../sass/components/experience.sass";
import Button from "./Button";

const Experience = ({ BtnText, job, place, time, jobDescription, link }) => {
  return (
    <div className="experience job">
      <div className="experienceTitle">
        <div className="experienceHeader">
          <Button action={"expand"} text={BtnText} variant="no-border" />
          <div className="experienceName">
            <h3 className="experienceJob">{job}</h3>
            <p className="experiencePlaceTime">
              {place} <span className="color">|</span> {time}
            </p>
          </div>
        </div>
      </div>

      <p className="jobDescription">{jobDescription}</p>
    </div>
  );
};

export default Experience;
