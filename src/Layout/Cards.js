import { Link } from "react-router-dom"
import { FaArrowLeftLong } from "react-icons/fa6";
import { GetData, GetLang } from "../Components/Functions";
import { AdminCour } from "./Cours";
import { SubmitButton } from "../Components/Buttons";
import { PrimaryColor } from "../Components/Variables";

export const Card = ({title, logo, total, link}) => {
    return (
        <Link to={link} className="bg-blue-100 hover:shadow-lg transition-all w-1/2 flex-1 px-4 py-4 rounded-md flex mx-2 my-2 items-center">
            <img src={logo} className="w-12" />
            <div className="ml-4">
                <h1 to={link} className="font-medium text-xl mr-4"> {total} {title} </h1>
            </div>
        </Link>
    )
}

export const AffectCours = ({setAffectcours}) => {
    let lang = GetLang()?.data.teachers
    let courses = GetData('/cours/index')

    return(
        <div className="fixed z-20 top-0 left-0 h-screen  bg-opacity-40 w-full flex justify-end">
            <div className="rounded-md h-full bg-white shadow-2xl w-full md:1/2 lg:w-2/6 mx-10 md:mx-20 lg:mx-0">
            <div className="flex flex-col justify-between pb-6 h-full">
                    <div className="relative text-center py-4 font-medium text-xl border-b-2 border-gray-500">
                        <h2> {lang?.affecter} </h2>
                        <button 
                            className=" absolute top-3 left-4 rounded-md px-3 py-2 hover:bg-blue-600 hover:text-white transition-all" 
                            onClick={()=> setAffectcours(false)}
                        >
                            <FaArrowLeftLong />
                        </button>
                    </div>

                    <div className="px-10 mt-6 h-full overflow-hidden">
                        <h1 className="text-2xl font-medium"> {lang?.cours} ( {courses?.length} ) </h1>
                        <ul className="mt-6 overflow-y-scroll h-full overflow-hidden pb-14">
                            {courses?.map((item,key)=>(
                                <AdminCour item={item} key={key} setDetailsCour={null} affect={true} />
                            ))}
                        </ul>
                    </div>
                    
                    <div className="flex space-x-4 px-10 pt-4">
                        <SubmitButton text={lang?.affecter} fun={null} link={`/prof/destroy/`} bgColor={PrimaryColor} color={"white"} />
                    </div> 
                </div>
            </div>
        </div>
    )
}