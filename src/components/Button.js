import { useNavigate } from "react-router-dom";
import "../sass/components/button.sass";

const Button = ({ 
  text, 
  link, 
  onClick, 
  variant = "default",
  external = false
}) => {
  const navigate = useNavigate();

  // 👉 Link externo (GitHub, Demo, Figma)
  if (external && link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn ${variant} button`}
      >
        {text}
      </a>
    );
  }

  // 👉 Botão normal (ação ou navegação interna)
  const handleClick = () => {
    if (onClick) onClick();
    else if (link) navigate(link);
  };

  return (
    <button
      type="button"
      className={`btn ${variant} button`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
