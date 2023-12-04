import React from 'react'
import Header from '../../Header'
import { GetData, GetLang, PageTitle } from '../../../../Components/Functions'
import { Card } from '../../../../Layout/Cards'

function Home() {
  PageTitle('Professeur - Dashboard')
  let lang = GetLang()?.data.dashboard


  const cards =[
    {
      "logo": "./assets/images/cours.png", 
      "title": lang?.cours,
      "total": GetData("/cours/index")?.length,
      "link":"/courses"
    }
  ]

  return (
    <div className='w-full py-10 px-20 '>
      <Header title={lang?.dashboard} />

      <div className='flex flex-wrap mt-4 justify-center'>
        {cards?.map((item,key)=>{
          return <Card key={key} title={item?.title} logo={item?.logo} total={item?.total} link={item?.link}   />
        })}
      </div>

    </div>
  )
}

export default Home
