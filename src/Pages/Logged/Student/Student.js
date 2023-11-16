import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar'

import {RxDashboard} from 'react-icons/rx'
import {BsBook} from 'react-icons/bs'
import {BiUser} from 'react-icons/bi'
import Home from './Layout/Home'
import Something from '../Something'

function Student() {
  const pages = [
    {
        "icon": <BsBook />,
        "title":"Courses",
        "link":"/courses"
    },
    {
        "icon": <BsBook />,
        "title":"Something",
        "link":"/something"
    },
  ]

  return (
    <BrowserRouter>
      <div className=' h-screen text-gray-900 mt-16'>
        <Navbar pages={pages} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/*' element={<Something />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Student