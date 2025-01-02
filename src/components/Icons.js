import "../sass/components/icons.sass"

import { ReactComponent as Behance } from "../img/behance-rounded-svgrepo-com.svg"
import { ReactComponent as Instagram } from "../img/instagram-svgrepo-com.svg"
import { ReactComponent as GitHub } from "../img/github-142-svgrepo-com.svg"
import { ReactComponent as Vercel } from "../img/vercel-fill-svgrepo-com.svg"
import { Link } from "react-router-dom"

const Icons = () => {
    return (
        <ul className= "iconsList">
            <li className= "iconItem">
                <Link>
                    <Instagram className="icon"/>
                </Link>
            </li>
            <li className= "iconItem">
                <Link>
                    <GitHub className="icon"/>
                </Link>
            </li>
            <li className= "iconItem">
                <Link>
                    <Behance className="icon"/>
                </Link>
            </li>
            <li className= "iconItem">
                <Link>
                    <Vercel className="icon"/>
                </Link>
            </li>
        </ul>
    )
}

export default Icons