import React from 'react'
import Navbar from '../Navbar'
import Something from '../Something'
import Home from './Layout/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Cours from './Layout/Cours'
import { GetLang } from '../../../Components/Functions'
import Profile from './Layout/Profile'
import Teachers from './Layout/Teachers'

function Admin() {
  let lang = GetLang()?.data.dashboard

  const pages = [
    {
        "title": lang?.cours,
        "link":"/courses"
    },
    {
        "title": lang?.profs,
        "link":"/teachers"
    },
    {
      "title": lang?.groups,
      "link":"/groupes"
    }
  ]

  return (
    <BrowserRouter>
      <div className='h-screen mt-20'>
        <Navbar pages={pages} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Cours />} />
          <Route path='/teachers' element={<Teachers />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/*' element={<Something />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Admin