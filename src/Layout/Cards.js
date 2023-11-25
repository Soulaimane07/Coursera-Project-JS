import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa6";

export const Card = ({title, logo, total, link}) => {
    return (
        <Link to={link} className="bg-gray-200 hover:bg-gray-300  hover:shadow-lg transition-all w-1/2 flex-1 px-4 py-4 rounded-md flex mx-2 my-2 items-center">
            <img src={logo} className="w-12" />
            <div className="ml-4">
                <h1 to={link} className="font-medium text-xl mr-4"> {total} {title} </h1>
                {/* <button to={link} className="flex items-center text-sm font-medium text-center mt-2">
                    <span> Read more </span>
                    <FaArrowRight />
                </button> */}
            </div>
        </Link>
    )
}