import Card from "./Card";
import "../sass/components/cards.sass";

const Cards = () => {

  return (
    <div className="cards">
      <Card text={"Amigo Secreto das Cores"} link={"/amigosecretodascores"} />
      <Card text={"My Friend is Single"} link={"/myfriendissingle"} />
      <Card text={"Learning Lab"} link={"/learning-lab"}/>
    </div>
  );
};

export default Cards;
