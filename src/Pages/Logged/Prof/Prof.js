import React from 'react'
import { SubmitButton } from '../../../Components/Buttons'
import { LogOut } from '../../../Components/Functions'

function Prof() {
  return (
    <div className=' h-screen w-full px-4 py-10 overflow-y-scroll bg-blue-500 text-white'>
      <h1 className=' text-2xl font-medium'>  Hi, Welcome in Professeur dashboard ! </h1>
      <div className='w-60 mt-6'>
        <SubmitButton text="Log out" bgColor={"#39A7FF"} color={"white"} fun={LogOut} />
      </div>
    </div>
  )
}

export default Prof