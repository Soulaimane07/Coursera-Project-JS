import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar'
import Home from './Layout/Home'
import Something from '../Something'
import { GetLang } from '../../../Components/Functions'
import Courses from './Layout/Courses'
import Profile from '../Admin/Layout/Profile'
import Footer from '../Footer'
import Groupes from './Layout/Groupes'

function Prof() {
  let lang = GetLang()?.data.dashboard

  const pages = [
    {
        "title": lang?.cours,
        "link":"/courses"
    },
    {
      "title": lang?.groups,
      "link":"/groupes"
    }
  ]
  
  return (
    <BrowserRouter>
      <div className='min-h-screen mt-20'>
        <Navbar pages={pages} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/groupes' element={<Groupes />} />
          <Route path='/profile' element={<Profile pageTitle={'Professeur - Profile'} />} />
          <Route path='/*' element={<Something />} />
        </Routes>
      </div>
      <Footer pages={pages} />
    </BrowserRouter>
  )
}

export default Prof