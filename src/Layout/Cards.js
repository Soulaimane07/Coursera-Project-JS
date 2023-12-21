import { Link } from "react-router-dom"
import { AssignCour, GetData, GetLang, SearchFun, SubmitCertificate, getUserData } from "../Components/Functions";
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
            <img src={logo} className="w-12" alt="" />
            <div className="ml-4">
                <h1 to={link} className="font-medium text-xl mr-4"> {total !== 0 && total} {title} </h1>
            </div>
        </Link>
    )
}

const AffectGroupes = ({selected, setSelected}) => {
    let groupes = GetData("/groupe/index", true)?.groupes
    const [searchTerm, setSearchTerm] = useState('')

    let langs = GetLang()?.data?.groups

    return(
        <div className="mt-4">
            <SearchBox placeholder={langs?.placeholder} setSearchTerm={setSearchTerm} width={1} />
            
            <ul className="mt-6 overflow-y-scroll overflow-x-hidden h-full pb-14">
                {SearchFun(groupes, 'name', searchTerm)?.map((item,key)=>(
                    <GroupeCard data={item} key={key} type={1} select={setSelected} selected={selected}  />
                ))}
            </ul>
        </div>
    )
}

const AffectCour = ({selected, setSelected}) => {
    let cours = GetData("/cours/index", true)

    const [searchTerm, setSearchTerm] = useState('')

    let langs = GetLang()?.data?.courses

    return (
        <div className="mt-4">
            <SearchBox placeholder={langs?.placeholder} setSearchTerm={setSearchTerm} width={1} />
            
            <ul className="mt-6 overflow-y-scroll h-full">
                {SearchFun(cours?.cours, 'libelle', searchTerm)?.map((item,key)=>(
                    <AdminCour item={item} key={key} affect={1} selectedCour={selected} setDetailsCour={setSelected} />
                ))}
            </ul>
        </div>
    )
}

export const AffectToTeacher = ({lang, selectedProf, setSelectedProf}) => {
    const [selectedGroup, setSelectedGroup] = useState(null)
    const [selectedCour, setSelectedCour] = useState(null)

    const [type, setType] = useState(0)

    return(
        <div className="fixed z-20 top-0 left-0 h-screen  bg-opacity-40 w-full flex justify-end">
            <div className="rounded-md h-full bg-white shadow-2xl w-full md:1/2 lg:w-2/6 mx-10 md:mx-20 lg:mx-0">
            <div className="flex flex-col justify-between pb-6 h-full">
                    <div className="relative text-center py-4 font-medium text-xl border-b-2 border-gray-500">
                        <h2> {lang?.affecterr} </h2>
                        <BackBtn back={setSelectedProf} />
                    </div>

                    <div className="px-10 mt-6 h-full overflow-hidden">
                        <div className="flex space-x-2">
                            <button onClick={()=> setType(0)} className={`${type === 0 ? " bg-blue-500 text-white " : "bg-blue-100 hover:bg-blue-100 hover:text-blue-600 text-gray-600"} w-full rounded-md py-3`}>
                                {lang?.groups}
                            </button>
                            <button onClick={()=> setType(1)} className={`${type === 1 ? " bg-blue-500 text-white " : "bg-blue-100 hover:bg-blue-100 hover:text-blue-600 text-gray-600"} w-full rounded-md py-3`}>
                                {lang?.cours}
                            </button>
                        </div>

                        {type === 0 && <AffectGroupes lang={lang} selected={selectedGroup} setSelected={setSelectedGroup} />}
                        {type === 1 && <AffectCour lang={lang} selected={selectedCour} setSelected={setSelectedCour} />}
                    </div>
                    
                    <div className="flex space-x-4 px-10 pt-4">
                        {type === 0 && <SubmitButton data={{groupes_ids: [selectedGroup]}} text={lang?.affecterG} fun={AssignCour} link={`/prof/${selectedProf}/assignGroupes`} bgColor={PrimaryColor} color={"white"} condition={selectedGroup === null}  /> }
                        {type === 1 && <SubmitButton data={{cours_ids: [selectedCour]}} text={lang?.affecter} fun={AssignCour} link={`/prof/${selectedProf}/assignCours`} bgColor={PrimaryColor} color={"white"} condition={selectedCour === null}  /> }
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
                    <SubmitButton message={setSertifText} text={"Submit"} data={{pdf: certifPdf}} fun={SubmitCertificate} link={`/prof/destroy/`} bgColor={PrimaryColor} color={"white"} condition={certifPdf === ""} />
                </div> 
            </div>
        </div>
    )
}


export const Layout = ({lang, layout, setLayout}) => {
    return (
        <div className="bg-blue-100 rounded-md w-fit px-0.5 py-1 justify-end flex flex-row space-x-0.5">
            <button onClick={()=> setLayout(0)} className={`rounded-md px-3 py-1  font-medium transition-all ${layout === 0 ? 'text-blue-600 bg-white shadow-md' : 'hover:bg-blue-100 hover:text-blue-600 text-gray-600 '}`}> 
                {lang.grid} 
            </button>
            <button onClick={()=> setLayout(1)} className={`rounded-md px-3 py-1  font-medium transition-all ${layout === 1 ? 'text-blue-600 bg-white shadow-md' : 'hover:bg-blue-100 hover:text-blue-600 text-gray-600 '}`}> 
                {lang.list} 
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

export const GridTeachers = ({teachers, lang, setDetailsProf, setUpdateProf, deleteBtn}) => {
    return (
        teachers?.map((item,key)=>(
            <div key={key} className="bg-blue-100 w-fit shadow-md px-10 py-6 rounded-md text-left">
                <button onClick={()=> setDetailsProf(item)} className="mb-4 mx-auto w-full">
                    <img src="/assets/images/user.png" className="w-20 mx-auto bg-white rounded-full p-4" alt="" />
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
                    <label className="text-gray-400"> {lang?.affectedG} </label>
                    <label className="font-medium pl-2"> {item.groupes?.length} </label>
                </div>
                <div className="flex mb-1 flex-row justify-between">
                    <label className="text-gray-400"> {lang.affected} </label>
                    <label className="font-medium pl-2"> {item.cours?.length} </label>
                </div>

                <div className="flex flex-row justify-between space-x-2 mt-4">
                    <button onClick={()=> setUpdateProf(item)} className='px-4 rounded-md opacity-70 hover:opacity-100 transition-all flex flex-row space-x-2 items-center hover:bg-blue-200 py-2 hover:text-green-600'>
                        <LuPenSquare size={18} />
                        <span> {lang?.update} </span>
                    </button>
                    <button onClick={()=> deleteBtn(item?.id)} className='px-4 rounded-md opacity-70 hover:opacity-100 transition-all flex flex-row space-x-2 items-center hover:bg-blue-200 py-2 hover:text-red-600'>
                        <FaRegTrashAlt size={18} />
                        <span> {lang?.delete} </span>
                    </button>
                </div>
            </div>
        ))
    )
}


export const Alert = ({yesFun, noFun, id, bg}) => {
    let langs = GetLang()?.data?.alert

    return (
        <div className={`${bg ? '' : 'bg-gray-800'} fixed top-0 left-0 bg-opacity-20 z-30 justify-center items-center flex w-full h-full`}>
            <div className=" p-4 w-full max-w-md max-h-full">
                <div className=" bg-white rounded-lg shadow">
                    <button type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                    </button>
                    <div className="p-4 md:p-5 text-center">
                        <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                        <h3 className="mb-5 text-lg font-normal text-gray-500 "> {langs.text} </h3>
                        
                        <div className="flex space-x-3">
                            <SubmitButton text={langs.yes} fun={yesFun} link={`/cours/destroy/${id}`} bgColor={PrimaryColor} color={"white"} />
                            <SubmitButton text={langs.no} fun={noFun} link={""} bgColor={"white"} border={true} color={"gray"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export const GroupeCard = ({data, setDetails, type, select, selected, deleteFun}) => {
    let group = <button 
            className="w-80 bg-blue-100 hover:shadow-lg transition-all px-4 py-6 rounded-md flex mx-2 my-2 items-center"
            onClick={()=> setDetails(data)} 
        >
            <h1 className=" font-medium"> {data?.nom} </h1>
        </button>

    type === 1 && (group = <button
            onClick={()=> select(data?.id)}
            className={`w-full ${selected === data?.id ? 'bg-blue-600 text-white' : 'bg-blue-100'} hover:shadow-lg transition-all px-4 py-6 rounded-md text-left mx-2 my-2 items-center`}
        > 
            <h1 className=" font-medium"> {data?.nom} </h1> 
        </button> 
    )

    type === 2 && (group = <div
            className={`bg-blue-100 hover:shadow-lg transition-all px-4 py-6 rounded-md text-left mx-2 my-2 items-center flex justify-between`}
        > 
            <h1 className=" font-medium"> {data?.nom} </h1> 
            
            <button onClick={deleteFun} className="hover:text-red-500 transition-all">
                Delete
            </button>
        </div> 
    )
    
    return group
}



export const ListTeachers = ({list, setList}) => {
    let teachers = GetData("/prof/showAll", true)?.professeurs

    let AddToList = (item) => {
        setList(oldArray => [...oldArray, item]);
        console.log("==> List",list);
    }
    
    let RemoveFromList = (item) => {
        setList(list.filter(item1 => item1.id !== item.id))
        console.log("==> List",list);
    }


    return (
        <div className="mt-8">
            {teachers?.map((item,key)=>(
                <button 
                    onClick={()=> list.find((el) => el.id === item.id) ? RemoveFromList(item) : AddToList(item)}
                    className={`${list.find((el) => el.id === item.id) ? 'bg-blue-500 text-white hover:bg-blue-400' : 'hover:bg-blue-500 hover:text-white'} w-full bg-blue-100 my-4 rounded-md px-6 py-4 flex justify-between transition-all`}
                    key={key}
                > 
                    <h1> {item.nom} {item.prenom} </h1>
                    <h1> {item.email}</h1>
                </button>
            ))}
        </div>
    )
}

export const ListStudents = () => {
    return (
        <div>
            Students
        </div>
    )
}