import Card from "./Card";
import "../sass/components/cards.sass";

const Cards = () => {
  const skoobTags = ["ui design", "ux design", "figma"];

  return (
    <div className="cards">
      <Card tagItems={skoobTags} text={"Literatvs"} link={"/literatvs"} />
      <Card tagItems={skoobTags} text={"AniJourney"} />
      <Card tagItems={skoobTags} text={"Skoob"} />
    </div>
  );
};

export default Cards;
