import { useState } from "react";
import { CloseBtn, SubmitButton } from "../Components/Buttons";
import { GetLang, UpdateData } from "../Components/Functions";
import { PrimaryColor } from "../Components/Variables";

export const UpdateCour = ({detailsCour, setUpdateCour}) => {
    let lang = GetLang()?.data.courses

    const [image, setImage] = useState(null)
    const [libelle, setlibelle] = useState(detailsCour?.libelle)
    const [desc, setdesc] = useState(detailsCour?.desc)
    const [dateL, setdateL] = useState(detailsCour?.dateDebut)
    const [dateF, setdateF] = useState(detailsCour?.dateFin)

    let cour = {image, libelle, desc, dateDebut: dateL, dateFin: dateF}

    return(
        <div className="fixed z-20 top-0 left-0 h-screen bg-opacity-40 w-full flex justify-end">
            <div className=" rounded-md bg-white shadow-2xl w-full md:1/2 lg:w-2/6 mx-10 md:mx-20 lg:mx-0 flex flex-col pb-6">
                <div className="flex-1">
                    <div className=" relative text-center py-4 font-medium text-xl border-b-2 border-gray-500">
                        <h2> {lang?.update} </h2>
                        <CloseBtn close={setUpdateCour} />
                    </div>

                    <div className="px-10 pb-2">
                        <div className="mt-6 mb-6 flex items-center justify-center w-full">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold"> {lang?.image1} </span></p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG </p>
                                </div>
                                <input onChange={(e)=> setImage(e.target.files[0])} id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div> 

                        <div className="mb-6 flex flex-col">
                            <label className="mb-1"> {lang?.title} </label>
                            <input value={libelle} onChange={(e)=> setlibelle(e.target.value)} type="text" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                        </div>
                        <div className="mb-6 flex flex-col">
                            <label className="mb-1"> {lang?.desc} </label>
                            <textarea value={desc} onChange={(e)=> setdesc(e.target.value)} rows="3" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" placeholder="Write your thoughts here..."></textarea>
                        </div>
                        <div className="mb-6 flex flex-col">
                            <label className="mb-1"> {lang?.startDate} </label>
                            <input value={dateL} onChange={(e)=> setdateL(e.target.value)} type="date" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                        </div>
                        <div className="mb-6 flex flex-col">
                            <label className="mb-1"> {lang?.endDate} </label>
                            <input value={dateF} onChange={(e)=> setdateF(e.target.value)} type="date" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                        </div>

                    </div>
                </div>
                
                <div className="flex space-x-4 px-10">
                    <SubmitButton link={`/cours/update/${detailsCour?.id}`} data={cour} fun={UpdateData} text={lang?.update} bgColor={PrimaryColor} color={"white"} condition={libelle == "" || desc == "" || dateF == "" || dateL == ""} />
                </div> 
            </div>
        </div>
    )
} 

export const UpdateProf = ({detailsProf, setUpdateProf}) => {
    let lang = GetLang()?.data.teachers

    const [email, setEmail] = useState(detailsProf?.email)
    const [fname, setFname] = useState(detailsProf?.prenom)
    const [lname, setLname] = useState(detailsProf?.nom)
    const [pass, setPass] = useState(null)

    let teacher = {email, nom: lname, prenom: fname, password: pass}

    return(
        <div className="fixed z-20 top-0 bg-gray-800 left-0 h-screen bg-opacity-40 w-full flex justify-end">
            <div className=" rounded-md bg-white shadow-2xl w-full md:1/2 lg:w-2/6 mx-10 md:mx-20 lg:mx-0 flex flex-col pb-6">
                <div className="flex-1">
                    <div className=" relative text-center py-4 font-medium text-xl border-b-2 border-gray-500">
                        <h2>{lang.update}</h2>
                        <CloseBtn close={setUpdateProf} />
                    </div>

                    <div className="px-10 pb-2 mt-6">
                        <div className="mb-6 flex flex-col">
                            <label className="mb-1"> {lang?.email} </label>
                            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                        </div>
                        <div className="mb-6 flex flex-col">
                            <label className="mb-1"> {lang?.fname} </label>
                            <input value={fname} onChange={(e)=> setFname(e.target.value)} type="text" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                        </div>
                        <div className="mb-6 flex flex-col">
                            <label className="mb-1"> {lang?.lname} </label>
                            <input value={lname} onChange={(e)=> setLname(e.target.value)} type="text" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                        </div>
                        <div className="mb-6 flex flex-col">
                            <label className="mb-1"> {lang?.pass} </label>
                            <input onChange={(e)=> setPass(e.target.value)} type="password" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                        </div>
                    </div>
                </div>
                
                <div className="flex space-x-4 px-10">
                    <SubmitButton link={`/prof/update/${detailsProf?.id}`} data={teacher} fun={UpdateData} text={lang?.update} bgColor={PrimaryColor} color={"white"} condition={email == "" || fname == "" || lname == "" || pass == ""} />
                </div> 
            </div>
        </div>
    )
}