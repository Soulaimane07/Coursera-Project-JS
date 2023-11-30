import React from 'react'
import Header from '../../Header'
import { GetLang } from '../../../../Components/Functions'

function Courses() {
    let lang = GetLang()?.data.courses
    let cours = 0

  return (
    <div className='w-full py-10 px-6 md:px-20'>
      <Header title={lang.cours} total={cours?.length || 0}  />

    </div>
  )
}

export default Courses