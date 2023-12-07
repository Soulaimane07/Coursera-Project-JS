import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../Pages/Auth/Login/Login'

function Auth() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />}  />
        </Routes>
    </BrowserRouter>
  )
}

export default Auth