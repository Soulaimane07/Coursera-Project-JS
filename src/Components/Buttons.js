import { Link } from "react-router-dom"

export const LinkButton = ({link, text, bgColor, color, border}) => {
    return (
        <Link to={link} className="px-6 py-2 rounded-md border-2" style={{backgroundColor: bgColor, color: color, borderColor: border}}>
            {text}
        </Link>
    )
}