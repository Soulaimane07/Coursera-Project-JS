import React, { useContext, useState } from 'react'
import { ProfileImage, WebsiteLogo } from '../../Components/Variables'
import { Link, NavLink } from 'react-router-dom'

import { userContexts } from '../../Components/Contexts'
import { LogOut } from '../../Components/Functions'
import { SubmitButton } from '../../Components/Buttons'

function Navbar({pages}) {
    let user = useContext(userContexts)

    const [openNav, setOpenNav] = useState(false)
    const [openOptions, setOpenOptions] = useState(false)


  return (
      <nav className="fixed top-0 left-0 w-full bg-gray-100 dark:bg-gray-800">
         <div className="mx-auto px-4 md:px-20 py-5">
            <div className="flex items-center justify-between">
               <div className="flex items-center">
                  <Link to={"/"} className="flex-shrink-0">
                     <img className="w-28" src={WebsiteLogo} alt="Your Company" />
                  </Link>
                  <div className="hidden md:block">
                     <div className="ml-10 flex items-baseline space-x-4">
                        {pages.map((item,key)=>(
                           <Link key={key} to={item.link} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">
                              {item.title}
                           </Link>
                        ))}
                     </div>
                  </div>
               </div>
               <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                     <div className="relative ml-3">
                        <div>
                           <button onClick={()=> setOpenOptions(!openOptions)} type="button" className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                              <span className="absolute -inset-1.5"></span>
                              <span className="sr-only">Open user menu</span>
                              <img className="h-8 w-8 rounded-full" src={ProfileImage} alt="" />
                           </button>
                        </div>


                        <div className={`${openOptions ? 'inline' : 'hidden'} flex flex-col space-y-1  px-4 py-2 text-sm text-gray-700 absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
                           <Link to={"/profile"} className='py-2' >
                              <h1> {user?.fname} {user?.lname} </h1>
                              <h2> {user?.email} </h2>
                           </Link>
                           
                           <SubmitButton text="Log out" bgColor={"#FF0303"} color={"white"} fun={LogOut} />
                        </div>
                     </div>
                  </div>
               </div>

               <div className="-mr-2 flex md:hidden">
               <button onClick={()=> setOpenNav(!openNav)} type="button" className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Open main menu</span>
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeLinecap="1.5" stroke="currentColor" aria-hidden="true">
                     <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                  <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeLinecap="1.5" stroke="currentColor" aria-hidden="true">
                     <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
               </button>
               </div>
            </div>
         </div>

         <div className={`md:hidden ${openNav ? 'inline' : 'hidden'}`} id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
               {pages.map((item,key)=>(
                  <Link key={key} to={item.link} className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                     {item.title}
                  </Link>
               ))}
            </div>

            <div className="border-t border-gray-700 pb-3 pt-4">
               <div className="flex items-center px-2">
                  <div className="ml-3">
                     <div className="text-base font-medium leading-none text-white mb-2"> {user?.fname} {user?.fname} </div>
                     <div className="text-sm font-medium leading-none text-gray-400"> {user?.email} </div>
                  </div>
               </div>
               <div className="space-y-1 px-4 mt-4">
                  <SubmitButton text="Log out" bgColor={"#FF0303"} color={"white"} fun={LogOut} />
               </div>
            </div>
         </div>
      </nav>
  )
}

export default Navbar