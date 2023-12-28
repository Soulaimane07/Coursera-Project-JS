import React, { useState } from 'react'
import Header from '../../Header'
import { GetData, GetLang, GetToTop, PageTitle } from '../../../../Components/Functions'
import { CreateGroupe } from '../../../../Layout/Create'
import Nodata from '../../../../Components/Nodata'
import { GroupeBody } from './body/Body'

function Group() {
  GetToTop()
  
    let lang = GetLang()?.data.groups
    let langSub = GetLang()?.subTitle
    
    PageTitle('Admin - Groups')

    let groupes = GetData("/groupe/index", true)?.groupes

    const [createBtn, setCreateBtn] = useState(false)



  return (
    <div className='w-full py-10 px-6 md:px-20'>
        <Header title={lang?.groups} create={true} btn={lang?.creategroup} total={groupes?.length || 0} setCreateBtn={setCreateBtn} langSub={langSub} />

        {groupes?.length !== 0 
          ? <GroupeBody groupes={groupes} lang={lang} />
          : <Nodata />
        }
       
        {createBtn && <CreateGroupe lang={lang} setCreateBtn={setCreateBtn} />}
    </div>
  )
}

export default Group