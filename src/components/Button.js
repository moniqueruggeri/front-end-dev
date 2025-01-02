import { useNavigate } from "react-router-dom";
import "../sass/components/button.sass";

const Button = ({ text, action, link, onClick, variant = "default" }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    if (action === "download" && link) {
      window.location.href = link;
    } else if (action === "expand" && onClick) {
      onClick()
    } else if (link) {
      navigate(link)
    }
  }
  
  return (
    <button className={`btn ${variant}`}
    onClick={handleClick}
    >
    {text}
  </button>
)
};

export default Button;
