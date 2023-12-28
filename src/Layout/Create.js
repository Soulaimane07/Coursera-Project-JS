import { useState } from "react"
import { SubmitButton, CloseBtn, BackBtn } from "../Components/Buttons"
import { GetLang, PostData } from "../Components/Functions"
import { PrimaryColor } from "../Components/Variables";

export const CreateCours = ({setCreateBtn}) => {
    let lang = GetLang()?.data.courses

    const [image, setImage] = useState("")
    const [libelle, setlibelle] = useState("")
    const [desc, setdesc] = useState("")
    const [dateL, setdateL] = useState("")
    const [dateF, setdateF] = useState("")

    let cour = {
        image, libelle, desc, dateDebut: dateL, dateFin: dateF
    }

    const [logourl, setLogoUrl] = useState()

    const selectImage = (e, variable, urlimg) => {
        variable(e.target.files[0])
        urlimg(URL.createObjectURL(e.target.files[0]))
    }


    return (
        <div className="fixed z-20 top-0 left-0 h-screen bg-gray-800 bg-opacity-40 w-full flex justify-end">
            <div className=" rounded-md bg-white shadow-2xl w-full md:1/2 lg:w-2/6 mx-10 md:mx-20 lg:mx-0 h-full flex flex-col pb-6 overflow-y-scroll">

            <div className="flex-1">
                <div className="relative text-center py-4 font-medium text-xl border-b-2 border-gray-500">
                    <h2> {lang?.createcour} </h2>
                    <CloseBtn close={setCreateBtn} />
                </div>
                <div className="px-10 pb-2">
                    <div className="mt-6 mb-6 flex items-center justify-center w-full overflow-hidden rounded-md">
                        {logourl ?  
                            <div className='logo'>
                                <img src={logourl} alt="" /> 
                            </div>
                        :
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold"> {lang?.image1} </span></p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400"> PNG, JPG </p>
                                </div>
                                <input 
                                    id="dropzone-file" 
                                    type="file" 
                                    className="hidden" 
                                    accept=".jpg, .png,"
                                    onChange={(e) => selectImage(e, setImage, setLogoUrl)}
                                />
                            </label>
                        }
                    </div> 

                    <div className="mb-6 flex flex-col">
                        <label className="mb-1"> {lang?.title} </label>
                        <input onChange={(e)=> setlibelle(e.target.value)} type="text" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                    </div>
                    <div className="mb-6 flex flex-col">
                        <label className="mb-1"> {lang?.desc} </label>
                        <textarea onChange={(e)=> setdesc(e.target.value)} rows="3" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" placeholder="Write your thoughts here..."></textarea>
                    </div>
                    <div className="mb-6 flex flex-col">
                        <label className="mb-1"> {lang?.startDate} </label>
                        <input onChange={(e)=> setdateF(e.target.value)} type="date" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                    </div>
                    <div className="mb-6 flex flex-col">
                        <label className="mb-1"> {lang?.endDate} </label>
                        <input onChange={(e)=> setdateL(e.target.value)} type="date" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                    </div>

                </div>
            </div>
            <div className="flex space-x-4 px-10">
                <SubmitButton text={lang?.create} link="/cours/create" data={cour} fun={PostData} bgColor={PrimaryColor} color={"white"} condition={image === "" || libelle === "" || desc === "" || dateF === "" || dateL === ""} />
            </div>
        </div>
        </div>
    )
}

export const CreateTeacher = ({setCreateBtn}) => {
    let lang = GetLang()?.data.teachers

    const [email, setEmail] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [pass, setPass] = useState("")

    let teacher = {email, nom: lname, prenom: fname, password: pass}


    return (
        <div className="fixed z-20 top-0 left-0 h-screen bg-gray-800 bg-opacity-40 w-full flex justify-end">
            <div className=" rounded-md bg-white shadow-2xl w-full md:1/2 lg:w-2/6 mx-10 md:mx-20 lg:mx-0 flex flex-col pb-6">
            <div className="flex-1">
                <div className=" relative text-center py-4 font-medium text-xl border-b-2 border-gray-500">
                    <h2>
                        {lang?.createteacher}
                    </h2>
                    <CloseBtn close={setCreateBtn} />
                </div>

                <div className="px-10 pb-2 mt-6">
                    <div className="mb-6 flex flex-col">
                        <label className="mb-1"> {lang?.email} </label>
                        <input onChange={(e)=> setEmail(e.target.value)} type="email" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                    </div>
                    <div className="mb-6 flex flex-col">
                        <label className="mb-1"> {lang?.fname} </label>
                        <input onChange={(e)=> setFname(e.target.value)} type="text" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                    </div>
                    <div className="mb-6 flex flex-col">
                        <label className="mb-1"> {lang?.lname} </label>
                        <input onChange={(e)=> setLname(e.target.value)} type="text" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                    </div>
                    <div className="mb-6 flex flex-col">
                        <label className="mb-1"> {lang?.pass} </label>
                        <input onChange={(e)=> setPass(e.target.value)} type="password" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                    </div>

                </div>
            </div>

            <div className="flex space-x-4 px-10">
                <SubmitButton link="/prof/create" data={teacher} fun={PostData} text={lang.create} bgColor={PrimaryColor} color={"white"} condition={email === "" || fname === "" || lname === "" || pass === ""} />
            </div>
        </div>
        </div>
    )
}

export const CreateGroupe = ({lang, setCreateBtn}) => {
    const [nom, setNom] = useState("")

    let groupe = {nom}

    return(
        <div className="fixed z-20 top-0 left-0 h-screen bg-gray-800 bg-opacity-40 w-full flex justify-end">
            <div className=" rounded-md bg-white shadow-2xl w-full md:1/2 lg:w-2/6 mx-10 md:mx-20 lg:mx-0 flex flex-col pb-6">
            <div className="flex-1">
                <div className=" relative text-center py-4 font-medium text-xl border-b-2 border-gray-500">
                    <h2>
                        {lang?.creategroup}
                    </h2>
                    <CloseBtn close={setCreateBtn} />
                </div>

                <div className="px-10 pb-2 mt-6">
                    <div className="mb-6 flex flex-col">
                        <label className="mb-1"> {lang?.name} </label>
                        <input onChange={(e)=> setNom(e.target.value)} type="gName" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                    </div>

                </div>
            </div>

                <div className="flex space-x-4 px-10">
                    <SubmitButton link="/groupe/create" data={groupe} fun={PostData} text={lang.create} bgColor={PrimaryColor} color={"white"} condition={nom === ""} />
                </div>
            </div>
        </div>
    )
}

export const CreateStudent = ({groupeId, lang, setCreateBtn}) => {
    const [cin, setCin] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [birth, setBirth] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [phone, setPhone] = useState("")

    let etudiant = {
        "CIN": cin,
        "nom": fname,
        "prenom": lname,
        "dateNaissance": birth,
        "email": email,
        "password": pass,
        "numTele": phone,
        "groupe_id": groupeId
    }

    return(
        <div className="fixed z-20 top-0 left-0 h-screen bg-opacity-40 w-full flex justify-end">
            <div className=" rounded-md bg-white shadow-2xl w-full md:1/2 lg:w-2/6 mx-10 md:mx-20 lg:mx-0 flex flex-col pb-6">
            <div className="flex-1">
                <div className=" relative text-center py-4 font-medium text-xl border-b-2 border-gray-500">
                    <h2>
                        {lang?.createStudent}
                    </h2>
                    <BackBtn back={setCreateBtn} />
                </div>

                <div className="px-10 pb-2 mt-6">
                    <div className="mb-6 flex flex-col">
                        <label className="mb-1"> CIN </label>
                        <input onChange={(e)=> setCin(e.target.value)} type="text" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                    </div>
                    <div className="mb-6 flex flex-col">
                        <label className="mb-1"> {lang?.fname} </label>
                        <input onChange={(e)=> setFname(e.target.value)} type="text" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                    </div>
                    <div className="mb-6 flex flex-col">
                        <label className="mb-1"> {lang?.lname} </label>
                        <input onChange={(e)=> setLname(e.target.value)} type="text" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                    </div>
                    <div className="mb-6 flex flex-col">
                        <label className="mb-1"> {lang?.birth} </label>
                        <input onChange={(e)=> setBirth(e.target.value)} type="date" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                    </div>
                    <div className="mb-6 flex flex-col">
                        <label className="mb-1"> {lang?.email} </label>
                        <input onChange={(e)=> setEmail(e.target.value)} type="email" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                    </div>
                    <div className="mb-6 flex flex-col">
                        <label className="mb-1"> {lang?.pass} </label>
                        <input onChange={(e)=> setPass(e.target.value)} type="password" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                    </div>
                    <div className="mb-6 flex flex-col">
                        <label className="mb-1"> {lang?.phone} </label>
                        <input onChange={(e)=> setPhone(e.target.value)} type="tel" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                    </div>
                </div>
            </div>

                <div className="flex space-x-4 px-10">
                    <SubmitButton link="/etudiant/create" data={etudiant} fun={PostData} text={lang?.create} bgColor={PrimaryColor} color={"white"} condition={cin === "" && fname === "" && lname === "" && birth === "" && email === "" && pass === "" && phone === ""} />
                </div>
            </div>
        </div>
    )
}

export const ImportFile = ({title, lang, setImport}) => {
    const [file, setFile] = useState('')

    return(
        <div className="fixed z-20 top-0 left-0 h-screen bg-opacity-40 w-full flex justify-end">
            <div className=" rounded-md bg-white shadow-2xl w-full md:1/2 lg:w-2/6 mx-10 md:mx-20 lg:mx-0 flex flex-col pb-6">
            <div className="flex-1">
                <div className=" relative text-center py-4 font-medium text-xl border-b-2 border-gray-500">
                    <h2>
                        {title}
                    </h2>
                    <BackBtn back={setImport} />
                </div>

                <div className="px-10 pb-2 mt-6">
                    <div className="mt-6 mb-6 flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 -800 hover:bg-gray-100">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p className="text-sm text-gray-500 "><span className="font-semibold"> Excel File </span></p>
                            </div>
                            <input accept=".xlsx" onChange={(e)=> setFile(e.target.files[0])} id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div> 
                </div>
            </div>

                <div className="flex space-x-4 px-10">
                    <SubmitButton link="/simple-excel/importEtudiant" data={{"fichier": file}} fun={PostData} text={"Import"} bgColor={PrimaryColor} color={"white"} condition={file === ""} />
                </div>
            </div>
        </div>
    )
}