import React from 'react'
import Header from '../../Header'
import { GetData, GetLang, GetToTop, PageTitle } from '../../../../Components/Functions'
import { Card } from '../../../../Layout/Cards'
import { CoursesBox, TeachersBox } from './HomeBoxs'

function Home() {
  GetToTop()

  let lang = GetLang()?.data.dashboard
  let langSub = GetLang()?.subTitle

  PageTitle('Admin - Dashboard')

  let courses = GetData("/cours/index")?.cours
  let profs = GetData("/prof/showAll")?.professeurs
  let groupes = GetData("/groupe/index")?.groupes

  const cards =[
    {
      "logo": "./assets/images/cours.png", 
      "title": lang?.cours,
      "total": courses?.length || 0,
      "link":"/courses"
    },
    {
      "logo": "./assets/images/teacher.png", 
      "title": lang?.profs,
      "total": profs?.length || 0,
      "link":"/teachers"
    },
    {
      "logo": "./assets/images/student.png", 
      "title": lang?.groups,
      "total": groupes?.length || 0,
      "link":"/groupes"
    }
  ]




  return (
    <div className='w-full py-10 px-6 md:px-20'>
      <Header title={lang?.dashboard} langSub={langSub} total={0} />

      <div className='flex flex-wrap mt-4 justify-center'>
        {cards.map((item,key)=>{
          return <Card key={key} title={item.title} logo={item.logo} total={item.total} link={item.link}   />
        })}
      </div>


      {/* <div className='mt-10 flex flex-col md:flex-row justify-center'>
        <div className='w-full md:w-1/2 flex-1 px-4 py-4'>
          <CoursesBox lang={lang} courses={courses} langSub={langSub} />
        </div>
        <div className='w-full md:w-1/2 flex-1 px-4 py-4'>
          <TeachersBox lang={lang} teachers={profs} langSub={langSub} />
        </div>
      </div> */}
    </div>
  )
}

export default Home
