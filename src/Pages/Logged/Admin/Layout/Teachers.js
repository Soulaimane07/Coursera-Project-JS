import React from 'react'
import Header from '../../Header'
import { DeleteData, GetData, GetLang, PageTitle } from '../../../../Components/Functions'
import { useState } from 'react'
import { CreateTeacher } from '../../../../Layout/Create'
import { DetailProf } from '../../../../Layout/Details'
import { LuPenSquare } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import { UpdateProf } from '../../../../Layout/Update'
import { AffectCours } from '../../../../Layout/Cards'
import { TeachersSkeleton } from './Skeletons'

function Teachers() {
    PageTitle('Admin - Teachers')

    let teachers = GetData("/prof/showAll", true)
    let lang = GetLang()?.data.teachers
    let langSub = GetLang()?.subTitle

    const [createBtn, setCreateBtn] = useState(false)
    const [detailsProf, setDetailsProf] = useState(null)
    const [updateProf, setUpdateProf] = useState(null)
    const [selectedProf, setSelectedProf] = useState(null)

    let spinner = () => {}

  return (
    <div className='w-full py-10 px-6 md:px-20'>
        <Header title={lang.teachers} create={true} btn={lang.createteacher} total={teachers?.professeurs?.length || 0} setCreateBtn={setCreateBtn} langSub={langSub} />
      
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-200 uppercase bg-blue-600">
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
                        <th scope="col" className="px-6 py-3">
                            Cour Affecté
                        </th>
                        <th scope="col" className="px-6 py-3">
                            {lang?.action}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {teachers 
                        ?   teachers?.professeurs?.map((item,key)=>(
                                <tr key={key} className='bg-blue-100 border-b-2 border-blue-200 text-gray-700'>
                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                        {item.email}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.prenom}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.nom}
                                    </td>
                                    <td className="px-6 py-4">
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
        </div>

        {createBtn && <CreateTeacher setCreateBtn={setCreateBtn} />}
        {detailsProf && <DetailProf detailsProf={detailsProf} setDetailsProf={setDetailsProf} setSelectedProf={setSelectedProf} />}
        {updateProf && <UpdateProf detailsProf={updateProf} setUpdateProf={setUpdateProf} />}
        {selectedProf && <AffectCours cours={detailsProf?.cours} selectedProf={selectedProf} setSelectedProf={setSelectedProf} />}
    </div>
  )
}

export default Teachers