import "../sass/components/icons.sass"

import { ReactComponent as Behance } from "../img/behance-rounded-svgrepo-com.svg"
import { ReactComponent as Instagram } from "../img/instagram-svgrepo-com.svg"
import { ReactComponent as GitHub } from "../img/github-142-svgrepo-com.svg"
import { Link } from "react-router-dom"

const Icons = () => {
    return (
        <ul className= "iconsList">
            <li className= "iconItem">
                <Link to={"https://www.instagram.com/moniqueruggeri/"}>
                    <Instagram className="icon"/>
                </Link>
            </li>
            <li className= "iconItem">
                <Link to={"https://github.com/moniqueruggeri"}>
                    <GitHub className="icon"/>
                </Link>
            </li>
            <li className= "iconItem">
                <Link to={"https://www.behance.net/ruggerimonique"}>
                    <Behance className="icon"/>
                </Link>
            </li>
        </ul>
    )
}

export default Icons