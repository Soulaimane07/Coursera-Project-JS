import { TeachersSkeleton } from "../Pages/Logged/Admin/Layout/Skeletons"

import { LuPenSquare } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import { DeleteData } from "../Components/Functions";

export const TeachersTable = ({teachers, lang, setDetailsProf, setUpdateProf}) => {
    let spinner = () => {}

    return(
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-400 uppercase border-b-2 ">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        {lang?.email}
                    </th>
                    <th scope="col" className="px-6 py-3">
                        {lang?.fname}
                    </th>
                    <th scope="col" className="px-6 py-3">
                        {lang?.lname}
                    </th>
                    <th scope="col" className="pr-12 py-3 text-center">
                        {lang?.affected}
                    </th>
                    <th scope="col" className="px-6 py-3">
                        {lang?.action}
                    </th>
                </tr>
            </thead>
            <tbody>
                {teachers 
                    ?   teachers?.professeurs?.map((item,key)=>(
                            <tr key={key} className='hover:bg-blue-100 transition-all border-b-1 border-blue-200 text-gray-700'>
                                <button onClick={()=> setDetailsProf(item)} scope="row" className="px-6 py-4 font-medium whitespace-nowrap hover:text-blue-600">
                                    {item.email}
                                </button>
                                <td className="px-6 py-4">
                                    {item.prenom}
                                </td>
                                <td className="px-6 py-4">
                                    {item.nom}
                                </td>
                                <td className="pr-12 py-4 text-center">
                                    {item.cours?.length}
                                </td>
                                <td className="">
                                    <button onClick={()=> setDetailsProf(item)} className='px-2 opacity-70 hover:opacity-100 transition-all'>
                                        <BiDetail size={20} />
                                    </button>
                                    <button onClick={()=> setUpdateProf(item)} className='px-2 opacity-70 hover:opacity-100 transition-all'>
                                        <LuPenSquare size={18} />
                                    </button>
                                    <button onClick={()=> DeleteData(null, spinner, null, null, `/prof/destroy/${item?.id}`)} className='px-2 opacity-70 hover:opacity-100 transition-all'>
                                        <FaRegTrashAlt size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))
                    :   <TeachersSkeleton />
                }
            </tbody>
        </table>
    )
}


export const CoursesTable = ({cours, lang, setDetailsCour}) => {
    return (
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-400 uppercase border-b-2 ">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        {lang?.title}
                    </th>
                    <th scope="col" className="px-6 py-3">
                        {lang?.desc}
                    </th>
                    <th scope="col" className="px-6 py-3">
                        {lang?.startDate}
                    </th>
                    <th scope="col" className="px-6 py-3">
                        {lang?.endDate}
                    </th>
                </tr>
            </thead>
            <tbody>
                {cours 
                    ?   cours?.cours?.map((item,key)=>(
                            <tr onClick={()=> setDetailsCour(item)} key={key} className=' cursor-pointer hover:bg-blue-100 transition-all border-b-1 border-blue-200 text-gray-700'>
                                <td onClick={()=> setDetailsCour(item)}  scope="row" className="px-6 py-4 font-medium whitespace-nowrap hover:text-blue-600">
                                    {item.libelle}
                                </td>
                                <td className="px-6 py-4">
                                    {item?.desc?.length > 120 ? item?.desc?.substring(0,120)+'...' : item?.desc}
                                </td>
                                <td className="px-6 py-4">
                                    {item.dateDebut}
                                </td>
                                <td className="pr-12 py-4">
                                    {item.dateFin}
                                </td>
                            </tr>
                        ))
                    :   <TeachersSkeleton />
                }
            </tbody>
        </table>
    )
}