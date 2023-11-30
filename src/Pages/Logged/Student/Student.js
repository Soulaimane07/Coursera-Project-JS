import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar'

import Home from './Layout/Home'
import Something from '../Something'
import { GetLang } from '../../../Components/Functions'
import Courses from '../Prof/Courses'
import Profile from '../Admin/Layout/Profile'

function Student() {
  let lang = GetLang()?.data.dashboard

  const pages = [
    {
        "title": lang?.cours,
        "link":"/courses"
    }
  ]

  return (
    <BrowserRouter>
      <div className=' h-screen text-gray-900 mt-16'>
        <Navbar pages={pages} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/*' element={<Something />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Student