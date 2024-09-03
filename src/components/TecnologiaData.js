
import './Tecnologia.css'

const TecnologiaData = ({ title, description, courses }) => {
  return (
    <div className="nivel-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            {course.icon && <img src={course.icon} alt={course.name} />} {course.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TecnologiaData;
