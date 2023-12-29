import React, { useState } from 'react'
import Header from '../../Header'
import { GetData, GetLang, SearchFun, PageTitle } from '../../../../Components/Functions'
import { GridCours, Layout, SearchBox } from '../../../../Layout/Cards'
import { CoursesTable } from '../../../../Layout/Tables'
import { DetailCour } from '../../../../Layout/Details'
import { UpdateDate } from '../../../../Layout/Update'

function Courses() {
  PageTitle('Professeur - Cours')

  let lang = GetLang()?.data.courses
  let cours = GetData("/cours/index", true)

  const [detailsCour, setDetailsCour] = useState(null)
  const [update, setUpdate] = useState(null)

  const [layout, setLayout] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className='w-full py-10 px-6 md:px-20'>
      <Header title={lang.cours} total={cours?.cours?.length || 0} />

      <div className='flex flex-row justify-between items-center mt-10'>
          <SearchBox placeholder={"Search by cour title"} setSearchTerm={setSearchTerm} />
          <Layout lang={lang} layout={layout} setLayout={setLayout} />
      </div>

      <div className='courses mt-10 flex flex-wrap justify-center'>
        {layout === 0 && <GridCours cours={SearchFun(cours?.cours, 'libelle', searchTerm)} setDetailsCour={setDetailsCour} />}
        {layout === 1 && <CoursesTable cours={SearchFun(cours?.cours, 'libelle', searchTerm)} lang={lang} setDetailsCour={setDetailsCour}  />}
      </div>

      {detailsCour && <DetailCour detailsCour={detailsCour} setDetailsCour={setDetailsCour} setUpdate={setUpdate} />}
      {update && <UpdateDate data={detailsCour} setUpdate={setUpdate} />}
    </div>  
  )
}

export default Courses