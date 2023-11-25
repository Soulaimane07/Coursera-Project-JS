import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa6";

export const Card = ({key, title, logo, total, link}) => {
    return (
        <div key={key} className=" w-1/4 px-4 py-4 rounded-md flex">
            {logo}
            <div className="ml-4">
                <Link to={link} className="font-medium text-xl mr-4"> {title} ( {total} ) </Link>
                <Link to={link} className="flex items-center text-sm font-medium text-center mt-2">
                    <span> Read more </span>
                    <FaArrowRight />
                </Link>
            </div>
        </div>
    )
}