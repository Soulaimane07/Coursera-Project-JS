import React, { useState } from 'react'
import Header from '../../Header'
import { GetData, GetLang } from '../../../../Components/Functions'
import { AdminCour } from '../../../../Layout/Cours'
import { DetailCour } from '../../../../Layout/Details'
import { SubmitCourBox } from '../../../../Layout/Cards'

function Courses() {
    let lang = GetLang()?.data.courses
    let cours = GetData("/cours/index", true)

    const [detailsCour, setDetailsCour] = useState(null)
    const [submitCour, setSubmitCour] = useState(null)

  return (
    <div className='w-full py-10 px-6 md:px-20'>
      <Header title={lang.cours} total={cours?.length} />

      <div className='courses mt-10 flex flex-wrap justify-center'>
        {cours?.map((item,key)=>(
          <AdminCour item={item} key={key} affect={0}  setDetailsCour={setDetailsCour} />
        ))}
      </div>

      {detailsCour && <DetailCour detailsCour={detailsCour} setDetailsCour={setDetailsCour} setSubmitCour={setSubmitCour} />}
      {submitCour && <SubmitCourBox detailsCour={submitCour} setDetailsCour={setSubmitCour}  />}
      
    </div>
  )
}

export default Courses