import "../sass/components/courseslist.sass";

const CoursesList = ({ items = [] }) => {
  return (
    <ul className="coursesList">
      {items.map((item, index) => (
        <li key={index} className="coursesItem">
          <p>{item}</p>
        </li>
      ))}
    </ul>
  );
};

export default CoursesList;
