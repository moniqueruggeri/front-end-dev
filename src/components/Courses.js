import { useState } from "react";
import "../sass/components/coursees.sass";
import CoursesList from "./CoursesList";

const Courses = ({ courseName, courseList }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="courseContainer">
      <div className="course">
        <p>{courseName}</p>
        <input
          type="checkbox"
          id={`course-${courseName}`}
          className="courseInput"
          checked={isChecked}
          onChange={handleChange}
        />
        <label
          htmlFor={`course-${courseName}`}
          className={`no-border ${isChecked ? "no-border-active" : ""}`}
        >
          {" > "}
        </label>
      </div>
      {isChecked && (
        <div className="coursesList">
          <CoursesList items={courseList} />
        </div>
      )}
    </div>
  );
};

export default Courses;
