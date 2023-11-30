import React, { useState } from 'react'
import Header from '../../Header'
import { GetLang, PageTitle } from '../../../../Components/Functions'

function Group() {
    let lang = GetLang()?.data.groups
    PageTitle('Admin - Groups')


    const [createBtn, setCreateBtn] = useState(false)

  return (
    <div className='w-full py-10 px-6 md:px-20'>
        <Header title={lang?.groups} create={true} btn={lang?.creategroup} total={0} setCreateBtn={setCreateBtn} />
      

    </div>
  )
}

export default Group