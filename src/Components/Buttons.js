import { Link } from "react-router-dom"

export const LinkButton = ({link, text, bgColor, color, border, width}) => {
    return (
        <Link to={link} className={`${width ? "w-full md:px-6 md:w-auto text-center" : "px-6"} py-2 rounded-md border-2`} style={{backgroundColor: bgColor, color: color, borderColor: border}}>
            {text}
        </Link>
    )
}