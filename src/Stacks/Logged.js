import React, { useContext } from 'react'
import Admin from '../Pages/Logged/Admin/Admin'
import Prof from '../Pages/Logged/Prof/Prof'
import Student from '../Pages/Logged/Student/Student'
import { userContexts } from '../Components/Contexts'

function Logged() {
  let user = useContext(userContexts)

  const Interface = () => {
    switch (user?.role) {
      case "responsable":
        return <Admin />
        break;
      case "prof":
        return <Prof />
        break;
      case "etudiant":
        return <Student />
        break;
    }
  }

  return (
    Interface()
  )
}

export default Logged