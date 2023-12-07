import React, { useState } from 'react'
import Header from '../../Header'
import { GetData, GetLang, GetToTop, PageTitle } from '../../../../Components/Functions'
import { CreateCours } from '../../../../Layout/Create'
import { AdminCour } from '../../../../Layout/Cours'
import { DetailCour } from '../../../../Layout/Details'
import { UpdateCour } from '../../../../Layout/Update'
import { CoursesSkeleton } from './Skeletons'
import { GridCours, Layout, SearchBox } from '../../../../Layout/Cards'
import { CoursesTable } from '../../../../Layout/Tables'

function Cours() {
  GetToTop()

    let cours = GetData("/cours/index", true)
    PageTitle('Admin - Cours')


    const [createBtn, setCreateBtn] = useState(false)
    const [detailsCour, setDetailsCour] = useState(null)
    const [updateCour, setUpdateCour] = useState(null)

    let lang = GetLang()?.data.courses
    let langSub = GetLang()?.subTitle
    
    const [layout, setLayout] = useState(0)

  return (
    <div className='w-full py-10 px-6 md:px-20'>
      <Header title={lang.cours} create={true} btn={lang.createCour} total={cours?.cours?.length || 0} setCreateBtn={setCreateBtn} langSub={langSub} />

      <div className='flex flex-row justify-between items-center mt-10'>
          <SearchBox placeholder={"Search by cour title"} />
          <Layout layout={layout} setLayout={setLayout} />
      </div>

      <div className='courses mt-10 flex flex-wrap justify-center'>
        {layout === 0 && <GridCours cours={cours} setDetailsCour={setDetailsCour} />}
        {layout === 1 && <CoursesTable cours={cours} lang={lang} setDetailsCour={setDetailsCour}  />}
      </div>

      {createBtn && <CreateCours setCreateBtn={setCreateBtn} />}
      {detailsCour && <DetailCour detailsCour={detailsCour} setDetailsCour={setDetailsCour} setUpdateCour={setUpdateCour} />}
      {updateCour && <UpdateCour detailsCour={detailsCour} setUpdateCour={setUpdateCour} />}
    </div>
  )
}

export default Cours