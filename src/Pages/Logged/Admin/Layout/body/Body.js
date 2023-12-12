import React, { useState } from 'react'
import FilteBox from '../../../../../Layout/FilteBox'
import { GridCours } from '../../../../../Layout/Cards'
import { CoursesTable } from '../../../../../Layout/Tables'
import { DetailCour } from '../../../../../Layout/Details'
import { UpdateCour } from '../../../../../Layout/Update'
import { SearchFun } from '../../../../../Components/Functions'

export const CoursBody = ({cours, lang}) => {
  const [detailsCour, setDetailsCour] = useState(null)
  const [updateCour, setUpdateCour] = useState(null)
  const [layout, setLayout] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <FilteBox setSearchTerm={setSearchTerm} layout={layout} setLayout={setLayout} />

      <div className='courses mt-10 flex flex-wrap justify-center'>
        {layout === 0 && <GridCours cours={SearchFun(cours?.cours, 'libelle', searchTerm)} setDetailsCour={setDetailsCour} />}
        {layout === 1 && <CoursesTable cours={SearchFun(cours?.cours, 'libelle', searchTerm)} lang={lang} setDetailsCour={setDetailsCour}  />}
      </div>

      {detailsCour && <DetailCour detailsCour={detailsCour} setDetailsCour={setDetailsCour} setUpdateCour={setUpdateCour} />}
      {updateCour && <UpdateCour detailsCour={detailsCour} setUpdateCour={setUpdateCour} />}
    </div>
  )
}

export default CoursBody