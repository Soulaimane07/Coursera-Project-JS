import React, { useState } from 'react'
import Header from '../../Header'
import { GetData, GetLang, GetToTop, PageTitle } from '../../../../Components/Functions'
import { CreateCours } from '../../../../Layout/Create'
import Nodata from '../../../../Components/Nodata'
import {CoursBody} from './body/Body'

function Cours() {
    GetToTop()
    let lang = GetLang()?.data.courses
    let langSub = GetLang()?.subTitle

    let cours = GetData("/cours/index", true)
    PageTitle('Admin - Cours')

    
    const [createBtn, setCreateBtn] = useState(false)


  return (
    <div className='w-full py-10 px-6 md:px-20'>
      <Header title={lang.cours} create={true} btn={lang.createCour} total={cours?.cours?.length || 0} setCreateBtn={setCreateBtn} langSub={langSub} />

      {cours?.cours?.length !== 0 
        ? <CoursBody cours={cours} lang={lang} />
        : <Nodata />
      }

      {createBtn && <CreateCours setCreateBtn={setCreateBtn} />}
    </div>
  )
}

export default Cours