import React, { useState } from 'react'
import { PrimaryColor, WebsiteLogo } from '../../../Components/Variables'
import { Link } from 'react-router-dom'
import { SubmitButton } from '../../../Components/Buttons'
import { SignupFun } from '../../../Components/Functions'

function Signup() {
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  return (
    <div className='flex flex-row h-screen w-full overflow-hidden'>
        <div className='w-full hidden md:inline'>
            <img src="./assets/images/login.jpeg" className='w-full h-full' />
        </div>

        <div className='w-full lg:w-1/2 px-20 py-20'>
            <Link to={"/"}>
                <img src={WebsiteLogo} className='w-32' />
            </Link>
            <h1 className='my-10 text-center text-4xl'> Sign up </h1>

            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                    <input onChange={(e)=> setFname(e.target.value)} type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none outline-none" placeholder=" " required />
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                    <input onChange={(e)=> setLname(e.target.value)} type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none outline-none" placeholder=" " required />
                </div>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                <input onChange={(e)=> setEmail(e.target.value)} type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none outline-none" placeholder=" " required />
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                <input onChange={(e)=> setPassword(e.target.value)} type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none outline-none" placeholder=" " required />
            </div>

            <SubmitButton fun={SignupFun} text={"Sign Up"} bgColor={PrimaryColor} color={"white"} data={{email, password, fname, lname}} condition={email == "" || password == "" || fname == "" || lname == ""} />
            <p className='mt-10'> Have an account? <Link style={{color: PrimaryColor}} to={"/login"}> Login </Link> </p>
        </div>
    </div>
  )
}

export default Signup