import AboutProject from "../components/AboutProject"
import ViewOtherProjects from "../components/ViewOtherProjects"
import Tags from "../components/Tags"
import "../sass/layout/literatvs.sass"
import img from "../img/img.png"

const Literatvs = () => {
    const literatvsTag = ["Ui Design", "Ux Design", "Figma", "Brand", "Graphic Design"]

    return (
        <div className="literatvs">
            <img src={img} alt="Descrição da imagem"/>
            <Tags className={"topTags"} items={literatvsTag}/>
            <AboutProject
            ProjectName={"Literatvs"}
            ProjectDescription1={"Venenatis et lorem turpis massa. Mi sit senectus et turpis risus tincidunt. Malesuada convallis fringilla nisl at. Ac fermentum commodo magna nec egestas posuere. Fermentum et felis vulputate id nulla cursus sit dui sodales. Nec faucibus porta tincidunt ac ipsum. Imperdiet tincidunt molestie turpis consequat."}
            ProjectDescription2={"Lorem ipsum dolor sit amet consectetur. Etiam pharetra porttitor arcu dignissim in amet rhoncus. Tempor dui enim pharetra turpis dolor mauris. Vitae quis maecenas velit bibendum pretium congue pretium velit. Enim sit aliquam sed ipsum turpis in vulputate scelerisque nullam. Id diam at arcu neque proin."}
            />
            <ViewOtherProjects/>
        </div>
    )
}

export default Literatvs