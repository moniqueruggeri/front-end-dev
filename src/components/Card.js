import { Link } from "react-router-dom";
import "../sass/components/card.sass";

const Card = ({ img, text, link }) => {
  return (
    <Link to={link}>
      <div className="card" style={{ $bgimage: `url(${img})` }}>
        <h2>{text}</h2>
      </div>
    </Link>
  );
};

export default Card;
