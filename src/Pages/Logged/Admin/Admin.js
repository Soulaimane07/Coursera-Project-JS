import React from 'react'
import Navbar from './Layout/Navbar'
import Home from './Layout/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Something from './Layout/Something'

function Admin() {
  return (
    <BrowserRouter>
    <div className='flex flex-row justify-between bg-blue-200'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<Something />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default Admin