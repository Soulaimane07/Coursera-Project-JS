import React, { useContext, useState } from 'react'
import { WebsiteLogo, PrimaryColor } from '../../Components/Variables'
import { Link, NavLink } from 'react-router-dom'

import { userContexts } from '../../Components/Contexts'
import { GetLang, LogOut } from '../../Components/Functions'
import { SubmitButton } from '../../Components/Buttons'
import { IoMdSettings } from "react-icons/io";

function Navbar({pages}) {
   let user = useContext(userContexts)
   let lang = GetLang()?.data.buttons
   let langSub = GetLang()?.subTitle

   const [openNav, setOpenNav] = useState(false)
   const [openOptions, setOpenOptions] = useState(false)

  return (
      <nav 
      // style={{backgroundColor: PrimaryColor}} 
      className='fixed z-10 top-0 left-0 w-full bg-blue-600'>
         <div className="mx-auto px-6 md:px-20 py-5">
            <div className={`flex items-center justify-between ${langSub === "ar" ? ' flex-row-reverse' : 'flex-row'}`}>
               <div className={`flex items-center  ${langSub === "ar" ? ' flex-row-reverse' : 'flex-row'}`}>
                  <Link to={"/"} className="flex-shrink-0 py-2">
                     <img className="w-28" src={WebsiteLogo} alt="Your Company" />
                  </Link>
                  <div className="hidden md:block">
                     <div className={` ${langSub === "ar" ? ' flex-row-reverse mr-6' : 'flex-row ml-10'}  flex items-baseline space-x-4`}>
                        {pages.map((item,key)=>(
                           <NavLink 
                              key={key} 
                              to={item.link} 
                              className={({ isActive }) =>
                                 `text-gray-300  hover:text-white hover:bg-blue-600 rounded-md px-3 py-2 text-sm font-medium ${isActive && " bg-blue-500 text-white"}`
                              }
                           >
                              {item.title}
                           </NavLink>
                        ))}
                     </div>
                  </div>
               </div>
               <div className="hidden md:block">
                  <div className={` flex items-center   ${langSub === "ar" ? ' flex-row-reverse ' : 'flex-row space-x-4'}`}>
                     <NavLink 
                        to="/profile" 
                        className={({ isActive }) =>
                           `text-gray-300 hover:text-white hover:bg-blue-600 rounded-md px-3 py-2 text-sm font-medium ${isActive && " bg-blue-500 text-white"} ${langSub === "ar" && 'ml-4'}`
                        }
                     >
                        <IoMdSettings size={24} />
                     </NavLink>
                     
                     
                     <div className="relative ">
                        <div>
                           <button 
                              style={{ 
                                 backgroundImage: `url("./assets/images/user.png")`,
                              }} 
                              onClick={()=> setOpenOptions(!openOptions)} 
                              type="button" 
                              className={`BGImage  hover:opacity-100 ${openOptions ? "opacity-100" : "opacity-90"} outline-none transition-all w-10 h-10 border-4 border-gray-100 relative flex max-w-xs items-center rounded-full bg-gray-100 text-sm`} 
                           >
                           </button>
                        </div>


                        <div className={`${openOptions ? 'inline' : 'hidden'} ${langSub === "ar" ? 'left-0' : 'right-0'} flex flex-col space-y-1 px-4 py-2 text-sm text-gray-700 absolute  z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
                           <Link to={"/profile"} className='py-2' >
                              <h1> {user?.fname || user?.prenom} {user?.lname || user?.nom} </h1>
                              <h2> {user?.email} </h2>
                           </Link>
                           
                           <SubmitButton text={lang?.logout} bgColor={PrimaryColor} color={"white"} fun={LogOut} />
                        </div>
                     </div>
                  </div>
               </div>

               <div className="-mr-2 flex md:hidden">
                  <button onClick={()=> setOpenNav(!openNav)} type="button" className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 text-white bg-blue-500 transition-all" aria-controls="mobile-menu" aria-expanded="false">
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

         <div className={`md:hidden ${openNav ? 'inline' : 'hidden'} ${langSub === "ar" ? 'text-right' : 'text-left'}`} id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
               {pages.map((item,key)=>(
                  <NavLink 
                     key={key} 
                     to={item.link} 
                     className={({ isActive }) =>
                        `text-gray-300 hover:text-white hover:bg-blue-600 block rounded-md px-3 py-2 text-base font-medium ${isActive && " bg-blue-500 text-white"}`
                     }
                  >
                     {item.title}
                  </NavLink>
               ))}
            </div>

            <div className="border-t border-gray-700 pb-3 pt-4">
               <Link to={"/profile"} className="flex items-center px-2">
                  <div className="ml-3 w-full">
                     <div className="text-base font-medium leading-none text-white mb-2 "> { user?.fname || user?.prenom} {user?.lname || user?.nom} </div>
                     <div className="text-sm font-medium leading-none text-gray-400"> {user?.email} </div>
                  </div>
               </Link>
               <div className="space-y-1 px-4 mt-4">
                  <SubmitButton text={lang.logout} bgColor={"#4895ef"} color={"white"} fun={LogOut} />
               </div>
            </div>
         </div>
      </nav>
  )
}

export default Navbar