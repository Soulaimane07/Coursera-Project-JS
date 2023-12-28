import { PrimaryColor, uploadsURL } from "../Components/Variables";
import { CloseBtn, SubmitButton } from "../Components/Buttons";
import { DeleteData, GetLang, PostData, getUserData } from "../Components/Functions";
import { AdminCour } from "./Cours";
import { Alert, GroupeCard } from "./Cards";
import { useState } from "react";

export const DetailCour = ({detailsCour, setDetailsCour, setUpdateCour, setSubmitCour}) => {
    let lang = GetLang()?.data.courses
    let userRole = getUserData()?.role

    const [deleteBtn, setDeleteBtn] = useState(false)

    const Buttons = () => {
        let result

        if(userRole === "etudiant"){
            result = (<SubmitButton text={"Submit"} fun={()=> setSubmitCour(detailsCour)} link={null} bgColor={PrimaryColor} color={"white"} />)
        }
        if(userRole === "responsable"){
            result = (
                <>
                    <SubmitButton text={lang?.delete} fun={()=> setDeleteBtn(true)} link={`/cours/destroy/${detailsCour?.id}`} bgColor={PrimaryColor} color={"white"} />
                    <SubmitButton text={lang?.update} fun={()=> setUpdateCour(detailsCour)} bgColor={PrimaryColor} color={"white"} />
                </>
            )
        }
        if(userRole === "professeur"){
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
                            <img src={`${uploadsURL}/${detailsCour?.image}`} className="w-full h-60" alt="" />
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

            {deleteBtn && <Alert yesFun={DeleteData} noFun={()=> setDeleteBtn(false)} id={detailsCour?.id} />}
        </div>
    )
}


const GroupesList = ({data, lang, setDeleteBtn}) => {
    return(
        <div className="mt-6 px-2">
            <label className="text-md opacity-80 font-medium px-2"> {lang?.affectedG} </label>
            <div className="">
                {data?.map((item,key)=>(
                    <GroupeCard key={key} data={item} type={2} deleteFun={()=> setDeleteBtn(item?.id)}  />
                ))}
            </div>
        </div> 
    )
}

const CoursList = ({data, lang, setDeleteBtn}) => {
    return(
        <div className="mt-6 px-4">
            <label className="text-md opacity-80 font-medium"> {lang?.affected} </label>
            <div className="">
                {data?.map((item,key)=>{
                    return <AdminCour key={key} item={item} affect={2} deleteBtn={1} deleteFun={()=> setDeleteBtn(item?.id)} />
                }
                )}
            </div>
        </div> 
    )
}

export const DetailProf = ({detailsProf, setDetailsProf, setSelectedProf}) => {
    let lang = GetLang()?.data.teachers
  let spinner = () => {}

  const [deleteCour, setDeleteCour] = useState(false)
  const [deleteGroup, setDeleteGroup] = useState(false)

  const [type, setType] = useState(0)

  

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

                            <div className="flex space-x-2">
                                <button onClick={()=> setType(0)} className={`${type === 0 ? " bg-blue-500 text-white " : "bg-blue-100 hover:bg-blue-100 hover:text-blue-600 text-gray-600"} w-full rounded-md py-3`}>
                                    {lang?.groups} ( {detailsProf?.groupes?.length} )
                                </button>
                                <button onClick={()=> setType(1)} className={`${type === 1 ? " bg-blue-500 text-white " : "bg-blue-100 hover:bg-blue-100 hover:text-blue-600 text-gray-600"} w-full rounded-md py-3`}>
                                    {lang?.cours} ( {detailsProf?.cours?.length} )
                                </button>
                            </div>

                            <div className="mb-6">
                                {type === 0 && <GroupesList data={detailsProf?.groupes} lang={lang} setDeleteBtn={setDeleteGroup} />}
                                {type === 1 && <CoursList data={detailsProf?.cours} lang={lang} setDeleteBtn={setDeleteCour} />}
                            </div>
                        </div>
                    </div>

                    {deleteCour && <Alert noFun={()=> setDeleteCour(false)} yesFun={()=> PostData({'cour_id': deleteCour}, spinner, null, null, `/prof/${detailsProf?.id}/removeCours`)} />}
                    {deleteGroup && <Alert noFun={()=> setDeleteGroup(false)} yesFun={()=> DeleteData(null, spinner, null, null, `/group/${deleteGroup}/${detailsProf?.id}/removeprof`)} />}


                    <div className="flex space-x-4 px-10">
                        <SubmitButton text={lang?.affecterr} fun={()=> setSelectedProf(detailsProf?.id)} link={`/prof/destroy/${detailsProf?.id}`} bgColor={PrimaryColor} color={"white"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export const GroupesDetails = ({lang, data, setDetails, setUpdate, setAffect, setDeleteBtn, setImport}) => {
    return(
        <div className="fixed z-20 top-0 left-0 h-screen bg-gray-800 bg-opacity-40 w-full flex justify-end">
            <div className=" rounded-md h-full bg-white shadow-2xl w-full md:1/2 lg:w-2/6 mx-10 md:mx-20 lg:mx-0">
                <div className="flex flex-col justify-between pb-6 h-full ">
                    <div className="overflow-y-scroll">
                        <div className="relative text-center py-4 font-medium text-xl border-b-2 border-gray-500">
                            <h2>
                                {lang?.groups}
                            </h2>
                            <CloseBtn close={setDetails} />
                        </div>
                        <div className="px-10 mt-6 flex-1">
                            <div className="mb-6">
                                <label className="text-lg font-medium"> {lang?.name} </label>
                                <h1> {data?.nom} </h1>
                            </div> 
                            <div className="mb-6">
                                <label className="text-lg font-medium"> {lang?.students} (0) </label>
                                {/* <h1> {data?.nom} </h1> */}
                            </div> 
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2 px-10">
                        <div className="flex space-x-2">
                            <SubmitButton text={lang?.createStudent} fun={()=> setAffect(data?.id)} link={`/prof/destroy/${data?.id}`} bgColor={PrimaryColor} color={"white"} />
                            <SubmitButton text={"Import Excel file"} fun={()=> setImport(true)} link={`/prof/destroy/${data?.id}`} bgColor={PrimaryColor} color={"white"} />
                        </div>
                        <div className="flex space-x-2">
                            <SubmitButton text={lang?.delete} fun={()=> setDeleteBtn(data?.id)} link={`/groupe/destroy/${data?.id}`} bgColor={PrimaryColor} color={"white"} />
                            <SubmitButton text={lang?.update} fun={()=> setUpdate(data)} bgColor={PrimaryColor} color={"white"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



