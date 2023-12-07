import React, { useState } from 'react'
import Header from '../../Header'
import { GetData, GetLang } from '../../../../Components/Functions'
import { AdminCour } from '../../../../Layout/Cours'
import { DetailCour } from '../../../../Layout/Details'
import { GridCours, Layout, SearchBox, SubmitCourBox } from '../../../../Layout/Cards'
import { CoursesTable } from '../../../../Layout/Tables'

function Courses() {
    let lang = GetLang()?.data.courses
    let cours = GetData("/cours/index", true)

    const [detailsCour, setDetailsCour] = useState(null)
    const [submitCour, setSubmitCour] = useState(null)

    const [layout, setLayout] = useState(0)

  return (
    <div className='w-full py-10 px-6 md:px-20'>
      <Header title={lang.cours} total={cours?.cours?.length} />

      <div className='flex flex-row justify-between items-center mt-10'>
          <SearchBox placeholder={"Search by cour title"} />
          <Layout layout={layout} setLayout={setLayout} />
      </div>

      <div className='courses mt-10 flex flex-wrap justify-center'>
        {layout === 0 && <GridCours cours={cours} setDetailsCour={setDetailsCour} />}
        {layout === 1 && <CoursesTable cours={cours} lang={lang} setDetailsCour={setDetailsCour}  />}
      </div>

      {detailsCour && <DetailCour detailsCour={detailsCour} setDetailsCour={setDetailsCour} setSubmitCour={setSubmitCour} />}
      {submitCour && <SubmitCourBox detailsCour={submitCour} setDetailsCour={setSubmitCour}  />}
      
    </div>
  )
}

export default Courses