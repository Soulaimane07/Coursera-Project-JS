import React, { useState } from 'react'
import { PrimaryColor, WebsiteLogo } from '../../../../Components/Variables';
import { LinkButton } from '../../../../Components/Buttons';

function Navbar() {
  const [activeNavbar, setActiveNavbar] = useState(false)

  const changebg = () => {
    if(window.scrollY >= 80){
        setActiveNavbar(true);
    }else {
      setActiveNavbar(false);
    }
  }

  window.addEventListener('scroll',changebg)

  return (
    <div className={`${activeNavbar && 'fixed top-0 left-0 right-0 z-10 bg-white'} flex flex-row justify-between items-center py-4 px-4 md:px-12 lg:px-32`}>
        <div className='w-40'>
            <img src={WebsiteLogo} className='w-full' />
        </div>

        <div className='buttons flex flex-row items-center space-x-4'>
            <LinkButton link="/login" text="Log in" bgColor="white" color={PrimaryColor} border={PrimaryColor} />
            <LinkButton link="/signup" text="Join for free" bgColor={PrimaryColor} color="white" border={PrimaryColor} />
        </div>
    </div>
  )
}

export default Navbar