import { Link } from "react-router-dom"
import { GetData, GetLang, SubmitCertificate, getUserData } from "../Components/Functions";
import { AdminCour } from "./Cours";
import { BackBtn, SubmitButton } from "../Components/Buttons";
import { PrimaryColor } from "../Components/Variables";
import { useState } from "react";

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
                        <BackBtn back={setAffectcours} />
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

export const SubmitCourBox = ({detailsCour, setDetailsCour}) => {
    let lang = GetLang()?.data.courses
    const [certifPdf, setSertifPdf] = useState("")

    let user = getUserData()

    return(
        <div className="fixed z-20 top-0 left-0 h-screen bg-opacity-40 w-full flex justify-end">
            <div className=" rounded-md bg-white shadow-2xl w-full md:1/2 lg:w-2/6 mx-10 md:mx-20 lg:mx-0 flex flex-col pb-6">
                <div className="flex-1">
                    <div className=" relative text-center py-4 font-medium text-xl border-b-2 border-gray-500">
                        <h2>
                        Certificate
                        </h2>
                        <BackBtn back={setDetailsCour} />
                    </div>
                </div>
                <div className="px-10 mt-6 h-full overflow-hidden">
                    <div className="mt-6 mb-6 flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold"> {lang?.image1} </span></p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG </p>
                            </div>
                            <input onChange={(e)=> setSertifPdf(e.target.files[0])} id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div> 
                    <div className="mb-6 flex flex-col">
                        <label className="mb-1"> Cour </label>
                        <input value={detailsCour?.libelle} disabled type="text" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                    </div>
                    <div className="mb-6 flex flex-col">
                        <label className="mb-1"> Etudiant </label>
                        <input value={user?.email} disabled type="text" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                    </div>
                </div>
                <div className="flex space-x-4 px-10 pt-4">
                    <SubmitButton text={"Submit"} data={{pdf: certifPdf}} fun={SubmitCertificate} link={`/prof/destroy/`} bgColor={PrimaryColor} color={"white"} condition={certifPdf == ""} />
                </div> 
            </div>
        </div>
    )
}