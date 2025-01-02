import Button from "../components/Button"
import Cards from "../components/Cards"
import Icons from "../components/Icons"
import "../sass/layout/projects.sass"

const Projects = () => {
    
    return (
        <div className="home projects">
            <Cards/>
        
            <Button
                action={"navigate"}
                link={"/about"}
                text={"want to know me?"}
            />
            <Icons />
        </div>
    )
}

export default Projects