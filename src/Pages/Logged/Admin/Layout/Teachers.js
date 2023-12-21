import React from 'react'
import Header from '../../Header'
import { GetData, GetLang, GetToTop, PageTitle } from '../../../../Components/Functions'
import { useState } from 'react'
import { CreateTeacher } from '../../../../Layout/Create'
import Nodata from '../../../../Components/Nodata'
import { TeachersBody } from './body/Body'

function Teachers() {
  GetToTop()

    PageTitle('Admin - Teachers')

    let teachers = GetData("/prof/showAll", true)
    let lang = GetLang()?.data.teachers
    let langSub = GetLang()?.subTitle

    const [createBtn, setCreateBtn] = useState(false)

  return (
    <div className='w-full py-10 px-6 md:px-20'>
        <Header title={lang.teachers} create={true} btn={lang.createteacher} total={teachers?.professeurs?.length || 0} setCreateBtn={setCreateBtn} langSub={langSub} />
      
        {teachers?.professeurs?.length !== 0 
          ? <TeachersBody teachers={teachers} lang={lang} />
          : <Nodata />
        }
        
        {createBtn && <CreateTeacher setCreateBtn={setCreateBtn} />}
    </div>
  )
}

export default Teachers