import Cards from "./Cards"
import Title from "./Title"
import "../sass/components/viewOtherProjects.sass"

const ViewOtherProjects = () => {
    return (
        <div className="viewOtherProjects">
            <Title><span className="stroke">View Other</span> Projects</Title>
            <Cards/>
        </div>
    )
}

export default ViewOtherProjects