import React from 'react'
import Header from '../../Header'
import { GetData, GetLang, GetToTop, PageTitle, SearchFun } from '../../../../Components/Functions'
import { useState } from 'react'
import { CreateTeacher } from '../../../../Layout/Create'
import { DetailProf } from '../../../../Layout/Details'
import { UpdateProf } from '../../../../Layout/Update'
import { AffectCours, GridTeachers, Layout, SearchBox } from '../../../../Layout/Cards'
import { TeachersTable } from '../../../../Layout/Tables'
import Nodata from '../../../../Components/Nodata'

function Teachers() {
  GetToTop()

    PageTitle('Admin - Teachers')

    let teachers = GetData("/prof/showAll", true)
    let lang = GetLang()?.data.teachers
    let langSub = GetLang()?.subTitle


    const [createBtn, setCreateBtn] = useState(false)
    const [detailsProf, setDetailsProf] = useState(null)
    const [updateProf, setUpdateProf] = useState(null)
    const [selectedProf, setSelectedProf] = useState(null)
    
    const [layout, setLayout] = useState(1)
    const [searchTerm, setSearchTerm] = useState('')


  return (
    <div className='w-full py-10 px-6 md:px-20'>
        <Header title={lang.teachers} create={true} btn={lang.createteacher} total={teachers?.professeurs?.length || 0} setCreateBtn={setCreateBtn} langSub={langSub} />
      
        {teachers?.professeurs?.length !== 0 ?
          <>
            <div className='flex flex-row justify-between items-center mt-10'>
                <SearchBox placeholder={"Search by email address"} setSearchTerm={setSearchTerm} />
                <Layout layout={layout} setLayout={setLayout} />
            </div>
          
          
            <div className="relative overflow-x-auto  sm:rounded-lg mt-10">
                {layout === 0 && 
                    <div className='flex flex-wrap justify-center space-x-4'>
                        <GridTeachers teachers={SearchFun(teachers?.professeurs, 'email', searchTerm)}  lang={lang} setDetailsProf={setDetailsProf} setUpdateProf={setUpdateProf} />
                    </div>
                }
                {layout === 1 && <TeachersTable teachers={SearchFun(teachers?.professeurs, 'email', searchTerm)} lang={lang} setDetailsProf={setDetailsProf} setUpdateProf={setUpdateProf} />}
            </div>

            {detailsProf && <DetailProf detailsProf={detailsProf} setDetailsProf={setDetailsProf} setSelectedProf={setSelectedProf} />}
            {updateProf && <UpdateProf detailsProf={updateProf} setUpdateProf={setUpdateProf} />}
            {selectedProf && <AffectCours cours={detailsProf?.cours} selectedProf={selectedProf} setSelectedProf={setSelectedProf} />}
          </>
          : <Nodata />
        }
        
        {createBtn && <CreateTeacher setCreateBtn={setCreateBtn} />}
    </div>
  )
}

export default Teachers