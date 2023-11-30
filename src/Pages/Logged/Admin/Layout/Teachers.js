import React from 'react'
import Header from '../../Header'
import { DeleteData, GetData, GetLang, PageTitle, UpdateData } from '../../../../Components/Functions'
import { useState } from 'react'
import { CreateTeacher } from '../../../../Layout/Create'
import { DetailProf } from '../../../../Layout/Details'
import { LuPenSquare } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import { UpdateProf } from '../../../../Layout/Update'
import { AffectCours } from '../../../../Layout/Cards'

function Teachers() {
    PageTitle('Admin - Teachers')

    let teachers = GetData("/prof/index", true)
    let lang = GetLang()?.data.teachers

    const [createBtn, setCreateBtn] = useState(false)
    const [detailsProf, setDetailsProf] = useState(null)
    const [updateProf, setUpdateProf] = useState(null)
    const [affectCours, setAffectcours] = useState(null)

    let spinner = () => {
        // console.log("fuck");
    }

  return (
    <div className='w-full py-10 px-6 md:px-20'>
        <Header title={lang.teachers} create={true} btn={lang.createteacher} total={teachers?.length || 0} setCreateBtn={setCreateBtn} />
      
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
                            {lang?.action}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {teachers?.map((item,key)=>(
                        <tr key={key} className='bg-blue-500 border-b-2 border-blue-500'>
                            <th scope="row" className="px-6 py-4 font-medium text-blue-900 whitespace-nowrap dark:text-white">
                                {item.email}
                            </th>
                            <td className="px-6 py-4 text-gray-200">
                                {item.prenom}
                            </td>
                            <td className="px-6 py-4 text-gray-200">
                                {item.nom}
                            </td>
                            <td className="px-0 py-4 space-x-3">
                                <button onClick={()=> setDetailsProf(item)} className='px-1 text-white opacity-70 hover:opacity-100 transition-all'>
                                    <BiDetail size={20} />
                                </button>
                                <button onClick={()=> setUpdateProf(item)} className='px-1 text-white opacity-70 hover:opacity-100 transition-all'>
                                    <LuPenSquare size={18} />
                                </button>
                                <button onClick={()=> DeleteData(null, spinner, null, null, `/prof/destroy/${item?.id}`)} className='px-1 text-white opacity-70 hover:opacity-100 transition-all'>
                                    <FaRegTrashAlt size={18} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        {createBtn && <CreateTeacher setCreateBtn={setCreateBtn} />}
        {detailsProf && <DetailProf detailsProf={detailsProf} setDetailsProf={setDetailsProf} setAffectcours={setAffectcours} />}
        {updateProf && <UpdateProf detailsProf={updateProf} setUpdateProf={setUpdateProf} />}
        {affectCours && <AffectCours setAffectcours={setAffectcours} />}
    </div>
  )
}

export default Teachers