import React from 'react'

function ProfileHeader({user}) {
  return (
    <div 
        style={{ 
            backgroundImage: `url("./assets/images/login.jpeg")`,
        }} 
        className=' relative z-0 BGImage md:mx-40 px-10 py-4 bg-gray-800 rounded-lg h-40 md:h-52'
    >
            
        <div className='absolute -bottom-6 left-6 md:left-10 flex items-center space-x-8'>
            <div
                style={{ 
                    backgroundImage: `url("./assets/images/user.png")`,
                }} 
                className='BGImage w-24 h-24 border-4 border-gray-600 bg-white  rounded-full '
            >
            </div>
            <h1 className='text-white text-2xl font-medium'> {user.fname} {user.lname} </h1>
        </div>
    </div>
  )
}

export default ProfileHeader