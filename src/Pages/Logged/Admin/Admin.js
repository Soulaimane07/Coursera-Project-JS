import React from 'react'
import Navbar from '../Navbar'
import Something from '../Something'
import Home from './Layout/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import {RxDashboard} from 'react-icons/rx'
import {BsBook} from 'react-icons/bs'
import {BiUser} from 'react-icons/bi'
import Cours from './Layout/Cours'

function Admin() {
  const pages = [
    {
        "icon": <BsBook />,
        "title":"Courses",
        "link":"/courses"
    },
    {
      "icon": <BsBook />,
      "title":"Groupes",
      "link":"/groupes"
    },
    {
        "icon": <BiUser />,
        "title":"Professeurs",
        "link":"/profs"
    },
    {
        "icon": <BsBook />,
        "title":"Something",
        "link":"/something"
    },
  ]

  return (
    <BrowserRouter>
      <div className='h-screen mt-16'>
        <Navbar pages={pages} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Cours />} />
          <Route path='/*' element={<Something />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Admin