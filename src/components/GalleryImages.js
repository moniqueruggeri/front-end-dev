import img from "../img/img2.png";
import "../sass/components/galleryImages.sass";

const GalleryImages = () => {
  return (
    <div className="galleryImages">
      <img src={img} alt="" />
    </div>
  );
};

export default GalleryImages;
