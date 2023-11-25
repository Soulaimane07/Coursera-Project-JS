import { AiOutlineClose } from "react-icons/ai";
import { uploadsURL } from "../Components/Variables";
import { SubmitButton } from "../Components/Buttons";
import { DeleteData } from "../Components/Functions";

export const DetailCour = ({detailsCour, setDetailsCour, setUpdateCour}) => {
    return (
        <div className="fixed z-20 top-0 left-0 h-screen bg-gray-800 bg-opacity-40 w-full flex justify-end">
            <div className=" rounded-md bg-white shadow-2xl w-full md:1/2 lg:w-2/6 mx-10 md:mx-20 lg:mx-0 flex flex-col pb-6">
                <div className="flex-1">
                    <div className=" relative text-center py-4 font-medium text-xl border-b-2 border-gray-500">
                        <h2>
                        {detailsCour?.libelle}
                        </h2>
                        <button className=" absolute top-3 left-4 rounded-md px-3 py-2 hover:bg-gray-700 hover:text-white transition-all" onClick={()=> setDetailsCour(false)}>
                        <AiOutlineClose />
                        </button>
                    </div>
                    <div className="flex flex-col justify-between pb-6 flex-1 ">
                        <div className="">
                            <img src={`${uploadsURL}/${detailsCour?.image}`} className="w-full h-60" />
                            <div className="px-10 mt-6">
                                <div className="mb-6">
                                    <label className="text-lg font-medium"> Libelle </label>
                                    <h1> {detailsCour?.libelle} </h1>
                                </div> 
                                <div className="mb-6">
                                    <label className="text-lg font-medium"> Description </label>
                                    <h1> {detailsCour?.desc} </h1>
                                </div> 
                                <div className="mb-6 flex justify-between items-center">
                                    <label className="text-lg font-medium"> Date Debut </label>
                                    <h1> {detailsCour?.dateDebut} </h1>
                                </div> 
                                <div className="mb-6 flex justify-between items-center">
                                    <label className="text-lg font-medium"> Date Fin </label>
                                    <h1> {detailsCour?.dateFin} </h1>
                                </div> 

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-4 px-10">
                    <SubmitButton text={"Delete"} fun={DeleteData} link={`/cours/destroy/${detailsCour?.id}`} bgColor={"red"} color={"white"} />
                    <SubmitButton text={"Update"} fun={()=> setUpdateCour(detailsCour)} bgColor={"green"} color={"white"} />
                </div>
            </div>
        </div>
    )
}

export const DetailProf = ({detailsProf, setDetailsProf}) => {
    return (
        <div className="fixed z-20 top-0 left-0 h-screen bg-gray-800 bg-opacity-40 w-full flex justify-end">
            <div className=" rounded-md h-full bg-white shadow-2xl w-full md:1/2 lg:w-2/6 mx-10 md:mx-20 lg:mx-0">
                <div className="flex flex-col justify-between pb-6 h-full ">
                    <div className="">
                        <div className="relative text-center py-4 font-medium text-xl border-b-2 border-gray-500">
                            <h2>
                                Professeur
                            </h2>
                            <button className=" absolute top-3 left-4 rounded-md px-3 py-2 hover:bg-gray-700 hover:text-white transition-all" onClick={()=> setDetailsProf(false)}>
                            <AiOutlineClose />
                            </button>
                        </div>
                        <div className="px-10 mt-6 flex-1">
                            <div className="mb-6">
                                <label className="text-lg font-medium"> Email Address </label>
                                <h1> {detailsProf?.email} </h1>
                            </div> 
                            <div className="mb-6">
                                <label className="text-lg font-medium"> First name </label>
                                <h1> {detailsProf?.prenom} </h1>
                            </div> 
                            <div className="mb-6">
                                <label className="text-lg font-medium"> Last name </label>
                                <h1> {detailsProf?.nom} </h1>
                            </div> 
                            <div className="mb-6">
                                <label className="text-lg font-medium"> Courses affected (0) </label>
                            </div> 
                        </div>
                    </div>
                    <div className="flex space-x-4 px-10">
                        <SubmitButton text={"Affect Courses"} fun={DeleteData} link={`/prof/destroy/${detailsProf?.id}`} bgColor={"red"} color={"white"} />
                    </div>
                </div>
            </div>
        </div>
    )
}
