import { PrimaryColor, uploadsURL } from "../Components/Variables";
import { CloseBtn, SubmitButton } from "../Components/Buttons";
import { DeleteData, GetLang, getUserData } from "../Components/Functions";
import { AdminCour } from "./Cours";
import { Alert } from "./Cards";

export const DetailCour = ({detailsCour, setDetailsCour, setUpdateCour, setSubmitCour}) => {
    let lang = GetLang()?.data.courses
    let userRole = getUserData()?.role

    const Buttons = () => {
        let result

        if(userRole == "etudiant"){
            result = (<SubmitButton text={"Submit"} fun={()=> setSubmitCour(detailsCour)} link={null} bgColor={PrimaryColor} color={"white"} />)
        }
        if(userRole == "responsable"){
            result = (
                <>
                    <SubmitButton text={lang?.delete} fun={DeleteData} link={`/cours/destroy/${detailsCour?.id}`} bgColor={PrimaryColor} color={"white"} />
                    <SubmitButton text={lang?.update} fun={()=> setUpdateCour(detailsCour)} bgColor={PrimaryColor} color={"white"} />
                </>
            )
        }
        if(userRole == "professeur"){
        }
        
        return result
    }

    return (
        <div className="fixed z-20 top-0 left-0 h-screen bg-gray-800 bg-opacity-40 w-full flex justify-end">
            <div className=" rounded-md bg-white shadow-2xl w-full md:1/2 lg:w-2/6 mx-10 md:mx-20 lg:mx-0 flex flex-col pb-6">
                <div className="flex-1">
                    <div className=" relative text-center py-4 font-medium text-xl border-b-2 border-gray-500">
                        <h2>
                        {detailsCour?.libelle}
                        </h2>
                        <CloseBtn close={setDetailsCour} />
                    </div>
                    <div className="flex flex-col justify-between pb-6 flex-1 ">
                        <div className="">
                            <img src={`${uploadsURL}/${detailsCour?.image}`} className="w-full h-60" />
                            <div className="px-10 mt-6">
                                <div className="mb-6">
                                    <label className="text-lg font-medium"> {lang.title} </label>
                                    <h1> {detailsCour?.libelle} </h1>
                                </div> 
                                <div className="mb-6">
                                    <label className="text-lg font-medium"> {lang.desc} </label>
                                    <h1> {detailsCour?.desc} </h1>
                                </div> 
                                <div className="mb-6 flex justify-between items-center">
                                    <label className="text-lg font-medium"> {lang.startDate} </label>
                                    <h1> {detailsCour?.dateDebut} </h1>
                                </div> 
                                <div className="mb-6 flex justify-between items-center">
                                    <label className="text-lg font-medium"> {lang.endDate} </label>
                                    <h1> {detailsCour?.dateFin} </h1>
                                </div> 

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-4 px-10">
                    {Buttons()}
                </div>
            </div>

            <Alert />
        </div>
    )
}

export const DetailProf = ({detailsProf, setDetailsProf, setSelectedProf}) => {
    let lang = GetLang()?.data.teachers
    

    return (
        <div className="fixed z-20 top-0 left-0 h-screen bg-gray-800 bg-opacity-40 w-full flex justify-end">
            <div className=" rounded-md h-full bg-white shadow-2xl w-full md:1/2 lg:w-2/6 mx-10 md:mx-20 lg:mx-0">
                <div className="flex flex-col justify-between pb-6 h-full ">
                    <div className="overflow-y-scroll">
                        <div className="relative text-center py-4 font-medium text-xl border-b-2 border-gray-500">
                            <h2>
                                {lang?.teacher}
                            </h2>
                            <CloseBtn close={setDetailsProf} />
                        </div>
                        <div className="px-10 mt-6 flex-1">
                            <div className="mb-6">
                                <label className="text-lg font-medium"> {lang?.email} </label>
                                <h1> {detailsProf?.email} </h1>
                            </div> 
                            <div className="flex flex-wrap justify-between">
                                <div className="mb-6">
                                    <label className="text-lg font-medium"> {lang?.fname} </label>
                                    <h1> {detailsProf?.prenom} </h1>
                                </div> 
                                <div className="mb-6">
                                    <label className="text-lg font-medium"> {lang?.lname} </label>
                                    <h1> {detailsProf?.nom} </h1>
                                </div> 
                            </div>

                            <div className="mb-6">
                                <label className="text-lg font-medium"> {lang?.affected} ( {detailsProf?.cours?.length} ) </label>
                                <div className="">
                                    {detailsProf?.cours?.map((item,key)=>(
                                        <AdminCour key={key} item={item} affect={2} deleteBtn={1} />
                                    ))}
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="flex space-x-4 px-10">
                        <SubmitButton text={lang?.affecter} fun={()=> setSelectedProf(detailsProf?.id)} link={`/prof/destroy/${detailsProf?.id}`} bgColor={PrimaryColor} color={"white"} />
                    </div>
                </div>
            </div>

        </div>
    )
}
