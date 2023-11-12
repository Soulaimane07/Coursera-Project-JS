import React from 'react'
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'
import { WebsiteLogo } from '../../../Components/Variables'

function Footer() {
  let date = new Date()

  return (
    <div className='text-white py-10 ' style={{backgroundColor: "#14213d"}}>
        <div className='px-10 md:px-20 lg:px-32 space-y-10 md:space-y-0 py-14 flex flex-wrap justify-between'>
          <div className='w-full md:w-1/2 md:mb-10 lg:w-1/3'>
            <img src={WebsiteLogo} className='w-40 mb-4' />
            <p className='w-full pr-10 opacity-60'> 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard.
            </p>
            <div className='flex flex-row space-x-6 mt-4'>
              <BsFacebook size={20}  className='opacity-60 hover:opacity-100' />
              <BsInstagram size={20}  className='opacity-60 hover:opacity-100' />
              <BsTwitter size={20}  className='opacity-60 hover:opacity-100' />
            </div>
          </div>
          
          <div className='w-full md:w-1/2 md:mb-10 lg:w-1/5'>
            <h1 className=' font-medium text-xl mb-3 opacity-90'> Resources </h1>
            <ul className='flex flex-col space-y-2'>
              <li className='opacity-60 hover:opacity-100'> List 1 </li>
              <li className='opacity-60 hover:opacity-100'> List 1 </li>
              <li className='opacity-60 hover:opacity-100'> List 3 </li>
              <li className='opacity-60 hover:opacity-100'> List 4 </li>
            </ul>
          </div>
          
          <div className='w-full md:w-1/2 md:mb-10 lg:w-1/5'>
            <h1 className=' font-medium text-xl mb-3 opacity-90'> Courses </h1>
            <ul className='flex flex-col space-y-2'>
              <li className='opacity-60 hover:opacity-100'> List 1 </li>
              <li className='opacity-60 hover:opacity-100'> List 1 </li>
              <li className='opacity-60 hover:opacity-100'> List 3 </li>
              <li className='opacity-60 hover:opacity-100'> List 4 </li>
            </ul>
          </div>
          
          <div className='w-full md:w-1/2 md:mb-10 lg:w-1/5'>
            <h1 className=' font-medium text-xl mb-3 opacity-90'> Courses </h1>
            <ul className='flex flex-col space-y-2'>
              <li className='opacity-60 hover:opacity-100'> List 1 </li>
              <li className='opacity-60 hover:opacity-100'> List 1 </li>
              <li className='opacity-60 hover:opacity-100'> List 3 </li>
              <li className='opacity-60 hover:opacity-100'> List 4 </li>
            </ul>
          </div>
        </div>
        
        <hr className='my-10 opacity-30'></hr>
        
        <div className='text-center opacity-60'>
            <h1> Copyright {date.getFullYear()} Coursera. All Rights Reserved. </h1>    
        </div>
    </div>
  )
}

export default Footer