import React, { useState } from 'react'
import Header from '../../Header'
import { GetData, GetLang, PageTitle } from '../../../../Components/Functions'
import { CreateCours } from '../../../../Layout/Create'
import { AdminCour } from '../../../../Layout/Cours'
import { DetailCour } from '../../../../Layout/Details'
import { UpdateCour } from '../../../../Layout/Update'

function Cours() {
    let cours = GetData("/cours/index", true)
    PageTitle('Admin - Cours')


    const [createBtn, setCreateBtn] = useState(false)
    const [detailsCour, setDetailsCour] = useState(null)
    const [updateCour, setUpdateCour] = useState(null)

    let lang = GetLang()?.data.courses

  return (
    <div className='w-full py-10 px-6 md:px-20'>
      <Header title={lang.cours} create={true} btn={lang.createCour} total={cours?.length || 0} setCreateBtn={setCreateBtn} />

      <div className='courses mt-10 flex flex-wrap justify-center'>
        {cours?.map((item,key)=>(
          <AdminCour item={item} key={key}  setDetailsCour={setDetailsCour} />
        ))}
      </div>

      {createBtn && <CreateCours setCreateBtn={setCreateBtn} />}
      {detailsCour && <DetailCour detailsCour={detailsCour} setDetailsCour={setDetailsCour} setUpdateCour={setUpdateCour} />}
      {updateCour && <UpdateCour detailsCour={detailsCour} setUpdateCour={setUpdateCour} />}
    </div>
  )
}

export default Cours