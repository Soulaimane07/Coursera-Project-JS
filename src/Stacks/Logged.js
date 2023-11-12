import React from 'react'
import Admin from '../Pages/Logged/Admin/Admin'
import Prof from '../Pages/Logged/Prof/Prof'
import Student from '../Pages/Logged/Student/Student'

function Logged() {
  return (
    <div>
        <Admin />
        <Prof />
        <Student />
    </div>
  )
}

export default Logged