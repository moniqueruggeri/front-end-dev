import { Link } from "react-router-dom";
import "../sass/components/card.sass";
import Tags from "./Tags";

const Card = ({ img, text, tagItems, link }) => {
  return (
    <Link to={link}>
      <div className="card" style={{ $bgimage: `url(${img})` }}>
        <Tags items={tagItems} />
        <h2>{text}</h2>
      </div>
    </Link>
  );
};

export default Card;
