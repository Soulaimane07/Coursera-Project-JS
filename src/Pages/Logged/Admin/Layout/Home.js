import React from 'react'
import {SubmitButton}  from '../../../../Components/Buttons'
import { LogOut } from '../../../../Components/Functions'

function Home() {
  return (
    <div className='h-screen w-full px-4 py-10 overflow-y-scroll bg-red-600 text-white'>
      <h1 className=' text-2xl font-medium'>  Hi, Welcome in Admin dashboard ! </h1>
      <div className='w-60 mt-6'>
        <SubmitButton text="Log out" bgColor={"#FF0303"} color={"white"} fun={LogOut} />
      </div>
    </div>
  )
}

export default Home