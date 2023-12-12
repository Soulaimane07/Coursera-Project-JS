import { Link } from "react-router-dom"
import { AssignCour, DeleteData, GetData, GetLang, SearchFun, SubmitCertificate, getUserData } from "../Components/Functions";
import { AdminCour } from "./Cours";
import { BackBtn, SubmitButton } from "../Components/Buttons";
import { PrimaryColor } from "../Components/Variables";
import { useState } from "react";


import { LuPenSquare } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CoursesSkeleton } from "../Pages/Logged/Admin/Layout/Skeletons";

export const Card = ({title, logo, total, link}) => {
    return (
        <Link to={link} className="bg-blue-100 hover:shadow-lg transition-all w-1/2 flex-1 px-4 py-4 rounded-md flex mx-2 my-2 items-center">
            <img src={logo} className="w-12" />
            <div className="ml-4">
                <h1 to={link} className="font-medium text-xl mr-4"> {total !== 0 && total} {title} </h1>
            </div>
        </Link>
    )
}

export const AffectCours = ({selectedProf, setSelectedProf, cours}) => {
    let lang = GetLang()?.data.teachers
    let courses = GetData('/cours/index')

    
    const [selectedCour, setSelectedCour] = useState(null)

    let data = {
        cours_ids: [selectedCour]
    }
    const [searchTerm, setSearchTerm] = useState('')
    console.log();


    return(
        <div className="fixed z-20 top-0 left-0 h-screen  bg-opacity-40 w-full flex justify-end">
            <div className="rounded-md h-full bg-white shadow-2xl w-full md:1/2 lg:w-2/6 mx-10 md:mx-20 lg:mx-0">
            <div className="flex flex-col justify-between pb-6 h-full">
                    <div className="relative text-center py-4 font-medium text-xl border-b-2 border-gray-500">
                        <h2> {lang?.affecter} </h2>
                        <BackBtn back={setSelectedProf} />
                    </div>

                    <div className="px-10 mt-6 h-full overflow-hidden">
                        <h1 className="text-2xl font-medium mb-3"> {lang?.cours} ( {courses?.cours?.length} ) </h1>
                        <SearchBox placeholder={"Search by email address"} setSearchTerm={setSearchTerm} width={1} />
                        
                        <ul className="mt-6 overflow-y-scroll h-full overflow-hidden pb-14">
                            {SearchFun(courses?.cours, 'libelle', searchTerm)?.map((item,key)=>(
                                <AdminCour cours={cours} item={item} key={key} setDetailsCour={setSelectedCour} affect={true} selectedCour={selectedCour} />
                            ))}
                        </ul>
                    </div>
                    
                    <div className="flex space-x-4 px-10 pt-4">
                        <SubmitButton data={data} text={lang?.affecter} fun={AssignCour} link={`/prof/${selectedProf}/assignCours`} bgColor={PrimaryColor} color={"white"} condition={selectedCour === null}  />
                    </div> 
                </div>
            </div>
        </div>
    )
}

export const SubmitCourBox = ({detailsCour, setDetailsCour}) => {
    let lang = GetLang()?.data.courses
    const [certifPdf, setSertifPdf] = useState("")
    const [certifText, setSertifText] = useState("")

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
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 -800 hover:bg-gray-100">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 "><span className="font-semibold"> {lang?.image1} </span></p>
                                <p className="text-xs text-gray-500 ">SVG, PNG, JPG </p>
                            </div>
                            <input accept=".pdf" onChange={(e)=> setSertifPdf(e.target.files[0])} id="dropzone-file" type="file" className="hidden" />
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
                    <div className="mb-6 flex flex-col">
                        <label className="mb-1"> Certificate </label>
                        <p className="border-2 rounded-md border-gray-300 outline-none px-3 py-1"> 
                            {certifText} 
                        </p>
                    </div>
                </div>
                <div className="flex space-x-4 px-10 pt-4">
                    <SubmitButton message={setSertifText} text={"Submit"} data={{pdf: certifPdf}} fun={SubmitCertificate} link={`/prof/destroy/`} bgColor={PrimaryColor} color={"white"} condition={certifPdf == ""} />
                </div> 
            </div>
        </div>
    )
}


export const Layout = ({layout, setLayout}) => {
    return (
        <div className="bg-blue-100 rounded-md w-fit px-0.5 py-1 justify-end flex flex-row space-x-0.5">
            <button onClick={()=> setLayout(0)} className={`rounded-md px-3 py-1  font-medium transition-all ${layout == 0 ? 'text-blue-600 bg-white shadow-md' : 'hover:bg-blue-100 hover:text-blue-600 text-gray-600 '}`}> 
                Grid 
            </button>
            <button onClick={()=> setLayout(1)} className={`rounded-md px-3 py-1  font-medium transition-all ${layout == 1 ? 'text-blue-600 bg-white shadow-md' : 'hover:bg-blue-100 hover:text-blue-600 text-gray-600 '}`}> 
                List 
            </button>
        </div>
    )
}

export const SearchBox = ({placeholder, setSearchTerm, width}) => {
    return (
        <div className={`${width ? 'w-full' : 'w-1/3'} bg-blue-100 border-blue-100  border-2 rounded-md flex items-center pr-2 `}>
            <input
                className="bg-transparent w-full outline-none px-4 py-1 text-gray-600" 
                placeholder={placeholder}
                type="email"
                onChange={(e)=> setSearchTerm(e.target.value)}
            />

            <div className="text-gray-600">
                <CiSearch size={20} />
            </div>
        </div>
    )
}




export const GridCours = ({cours, setDetailsCour}) => {
    return (
        cours 
            ?
              cours?.map((item,key)=>(
                <AdminCour item={item} key={key} affect={0}  setDetailsCour={setDetailsCour} />
              ))
            :
              <CoursesSkeleton />
          
    )
}

export const GridTeachers = ({teachers, lang, setDetailsProf, setUpdateProf}) => {
    let spinner = () => {}
    
    return (
        teachers?.map((item,key)=>(
            <div key={key} className="bg-blue-100 w-fit shadow-md px-10 py-6 rounded-md text-left">
                <button onClick={()=> setDetailsProf(item)} className="mb-4 mx-auto w-full">
                    <img src="/assets/images/user.png" className="w-20 mx-auto bg-white rounded-full p-4" />
                </button>
                <div className="flex flex-row justify-center mb-2">
                    <label className="font-medium"> {item.email} </label>
                </div>
                <div className="flex mb-1 flex-row justify-between">
                    <label className="text-gray-400"> {lang.lname} </label>
                    <label className="font-medium pl-2"> {item.nom} </label>
                </div>
                <div className="flex mb-1 flex-row justify-between">
                    <label className="text-gray-400"> {lang.fname} </label>
                    <label className="font-medium pl-2"> {item.prenom} </label>
                </div>
                <div className="flex mb-1 flex-row justify-between">
                    <label className="text-gray-400"> {lang.affected} </label>
                    <label className="font-medium pl-2"> {item.cours?.length} </label>
                </div>

                <div className="flex flex-row justify-between space-x-2 mt-4">
                    <button onClick={()=> setUpdateProf(item)} className='px-4 rounded-md opacity-70 hover:opacity-100 transition-all flex flex-row space-x-2 items-center hover:bg-blue-200 py-2 hover:text-green-600'>
                        <LuPenSquare size={18} />
                        <span> Update </span>
                    </button>
                    <button onClick={()=> DeleteData(null, spinner, null, null, `/prof/destroy/${item?.id}`)} className='px-4 rounded-md opacity-70 hover:opacity-100 transition-all flex flex-row space-x-2 items-center hover:bg-blue-200 py-2 hover:text-red-600'>
                        <FaRegTrashAlt size={18} />
                        <span> Delete </span>
                    </button>
                </div>
            </div>
        ))
    )
}


export const Alert = ({close}) => {
    return (
        <div class="fixed top-0 left-0 bg-gray-600 bg-opacity-20 z-60 justify-center items-center flex w-full h-full">
            <div class=" p-4 w-full max-w-md max-h-full">
                <div class=" bg-white rounded-lg shadow">
                    <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                    <div class="p-4 md:p-5 text-center">
                        <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                        <h3 class="mb-5 text-lg font-normal text-gray-500 ">Are you sure you want to delete this product?</h3>
                        <button type="button" class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 d-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                            Yes, I'm sure
                        </button>
                        <button type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 ">
                            No, cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}