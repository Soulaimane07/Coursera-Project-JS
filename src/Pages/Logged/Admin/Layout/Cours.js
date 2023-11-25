import React, { useState } from 'react'
import Header from '../../Header'
import { GetData } from '../../../../Components/Functions'
import { CreateCours } from '../../../../Layout/Create'
import { AdminCour } from '../../../../Layout/Cours'
import { DetailCour } from '../../../../Layout/Details'
import { UpdateCour } from '../../../../Layout/Update'

function Cours() {
    let cours = GetData("/cours/index")

    const [createBtn, setCreateBtn] = useState(false)
    const [detailsCour, setDetailsCour] = useState(null)
    const [updateCour, setUpdateCour] = useState(null)

  return (
    <div className='w-full py-10 px-20'>
      <Header title="Courses" create={true} btn={"Create Cour"} total={cours?.length || 0} setCreateBtn={setCreateBtn} />

      <div className='courses mt-10 flex flex-wrap justify-center'>
        {cours?.map((item,key)=>(
          <AdminCour item={item} key={key} setDetailsCour={setDetailsCour} />
        ))}
      </div>

      {createBtn && <CreateCours setCreateBtn={setCreateBtn} />}
      {detailsCour && <DetailCour detailsCour={detailsCour} setDetailsCour={setDetailsCour} setUpdateCour={setUpdateCour} />}
      {updateCour && <UpdateCour detailsCour={detailsCour} setUpdateCour={setUpdateCour} />}
    </div>
  )
}

export default Cours