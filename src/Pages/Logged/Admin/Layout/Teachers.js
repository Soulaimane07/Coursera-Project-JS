import React from 'react'
import Header from '../../Header'
import { DeleteData, GetData, GetLang, UpdateData } from '../../../../Components/Functions'
import { useState } from 'react'
import { CreateTeacher } from '../../../../Layout/Create'
import { DetailProf } from '../../../../Layout/Details'
import { LuPenSquare } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import { UpdateProf } from '../../../../Layout/Update'

function Teachers() {
    let teachers = GetData("/prof/index", true)
    let lang = GetLang()?.data.teachers

    const [createBtn, setCreateBtn] = useState(false)
    const [detailsProf, setDetailsProf] = useState(null)
    const [updateProf, setUpdateProf] = useState(null)

    let spinner = () => {
        // console.log("fuck");
    }

  return (
    <div className='w-full py-10 px-6 md:px-20'>
        <Header title={lang.teachers} create={true} btn={lang.createteacher} total={teachers?.length || 0} setCreateBtn={setCreateBtn} />
      
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Email Address
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Fname
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Lname
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {teachers?.map((item,key)=>(
                        <tr key={key} className={`${key % 2 == 0 ? 'bg-gray-800' : 'bg-gray-600'}`}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.email}
                            </th>
                            <td className="px-6 py-4">
                                {item.prenom}
                            </td>
                            <td className="px-6 py-4">
                                {item.nom}
                            </td>
                            <td className="px-0 py-4 space-x-3">

                                <button onClick={()=> setDetailsProf(item)} className='px-1 hover:text-blue-400 transition-all'>
                                    <BiDetail size={20} />
                                </button>
                                <button onClick={()=> setUpdateProf(item)} className='px-1 hover:text-green-400 transition-all'>
                                    <LuPenSquare size={18} />
                                </button>
                                <button onClick={()=> DeleteData(null, spinner, null, null, `/prof/destroy/${item?.id}`)} className='px-1 hover:text-red-600 transition-all'>
                                    <FaRegTrashAlt size={18} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        {createBtn && <CreateTeacher setCreateBtn={setCreateBtn} />}
        {detailsProf && <DetailProf detailsProf={detailsProf} setDetailsProf={setDetailsProf} />}
        {updateProf && <UpdateProf detailsProf={updateProf} setUpdateProf={setUpdateProf} />}
    </div>
  )
}

export default Teachers