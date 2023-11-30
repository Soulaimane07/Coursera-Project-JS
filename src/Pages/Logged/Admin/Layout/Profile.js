import React from 'react'
import { GetLang, LogOut, PageTitle, getUserData, setLang } from '../../../../Components/Functions'
import ProfileHeader from '../../ProfileHeader'
import Langs from '../../../../Components/Langs.json'
import { SubmitButton } from '../../../../Components/Buttons'
import { PrimaryColor } from '../../../../Components/Variables'

function Profile({pageTitle}) {
    PageTitle(pageTitle)
  let lang = GetLang()?.data
  let user = getUserData() 


  return (
    <div className='w-full py-10 px-6 md:px-20'>
        <ProfileHeader user={user} />

        <div className=' md:mx-40 md:px-10 py-4 mt-10 flex flex-col md:flex-row'>
            <div className='w-full md:border-r-2 border-gray-500 py-6 md:pr-10'>
                <div className='mb-4'>
                    <label className='text-gray-500 font-medium'> {lang?.form.email} </label>
                    <h1 className='text-lg font-medium'> {user?.email} </h1>
                </div>
                <div className='mb-4'>
                    <label className='text-gray-500 font-medium'> {lang?.form.fname} </label>
                    <h1 className='text-lg font-medium'> {user?.fname} </h1>
                </div>
                <div className='mb-4'>
                    <label className='text-gray-500 font-medium'> {lang?.form.lname} </label>
                    <h1 className='text-lg font-medium'> {user?.lname} </h1>
                </div>

                <div className='px-10 mt-6'>
                    <SubmitButton text={lang?.buttons.logout} bgColor={PrimaryColor} color={"white"} fun={LogOut} />
                </div>
            </div>

            <div className=' w-full md:pl-10 py-6'>
                <div className='mb-4 flex flex-col'>
                    <label className='text-gray-500 font-medium mb-2'> {lang?.form.language} </label>
                    <select onChange={(e)=> setLang(e.target.value)} className='border-2 border-gray-500 outline-none rounded-md px-2 py-1'>
                        <option>  </option>
                        <option value={Langs.english.subTitle}> {Langs.english.title} </option>
                        <option value={Langs.frensh.subTitle}> {Langs.frensh.title} </option>
                        <option value={Langs.arabic.subTitle}> {Langs.arabic.title} </option>
                    </select>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Profile