import React from 'react'
import Header from '../../Header'
import { GetData } from '../../../../Components/Functions'
import { Card } from '../../../../Layout/Cards'

import { MdLibraryBooks } from "react-icons/md";


function Home() {
  const cards =[
    {
      "logo": <MdLibraryBooks size={40} />, 
      "title": "Cours",
      "total": GetData("/cours/index")?.length || 0,
      "link":"/courses"
    },
    {
      "logo": <MdLibraryBooks size={40} />, 
      "title": "Professeurs",
      "total": 0,
      "link":"/cours"
    },
    {
      "logo": <MdLibraryBooks size={40} />, 
      "title": "Etudiants",
      "total": 0,
      "link":"/cours"
    },
    {
      "logo": <MdLibraryBooks size={40} />, 
      "title": "Cours",
      "total": 0,
      "link":"/cours"
    },
  ]

  return (
    <div className='w-full py-10 px-20'>
      <Header title="Dashboard Admin" />

      <div className='flex flex-wrap mt-4'>
        {cards.map((item,key)=>{
          return <Card key={key} title={item.title} logo={item.logo} total={item.total} link={item.link}   />
        })}
      </div>

    </div>
  )
}

export default Home
