import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from '../Pages/Auth/Landing/Landing'
import Login from '../Pages/Auth/Login/Login'
import Signup from '../Pages/Auth/Signup/Signup'

function Auth() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Landing />}  />
            <Route path='/login' element={<Login />}  />
            <Route path='/signup' element={<Signup />}  />
        </Routes>
    </BrowserRouter>
  )
}

export default Auth