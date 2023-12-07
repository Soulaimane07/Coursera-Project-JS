import React, { useState } from 'react'
import { PrimaryColor, WebsiteLogoBlue } from '../../../Components/Variables'
import { SubmitButton } from '../../../Components/Buttons'
import { LoginFun, GetLang } from '../../../Components/Functions'
import { FooterBox } from '../../../Components/LanguageBox'

function Login() {
    const [role, setRole] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState(null)

   let lang = GetLang()?.data.login
   let langSub = GetLang()?.subTitle


  return (
    <div className={`flex  h-screen w-full overflow-hidden ${langSub === "ar" ? 'text-right flex-row-reverse' : 'text-left md:flex-row'}`}>
        <div className='w-full md:px-32 lg:w-2/3 py-28 lg:px-14 relative'>
            <div className='px-10'>
                <img src={WebsiteLogoBlue} className='w-32' />
                <h1 className=' text-blue-700 my-12 text-4xl mb-12 font-medium'> {lang.login} </h1>

                {message && <div className='text-red-600 w-full text-center font-medium mb-6'> {message} </div>}

                <div className="w-full mb-6 flex flex-col">
                    <label className=' font-semibold mb-2'> {lang.role} </label>
                    <select onChange={(e)=> setRole(e.target.value)} className='border-2 w-full rounded-md border-gray-200 hover:border-gray-300 transition-all focus:border-blue-600 outline-none px-4 py-2'>
                        <option></option>
                        <option id="etudiant" className={langSub === "ar" ? 'text-right' : 'text-left'}> {lang.student} </option>
                        <option id="professeur" className={langSub === "ar" ? 'text-right' : 'text-left'}> {lang.professeur} </option>
                        <option id="responsable" className={langSub === "ar" ? 'text-right' : 'text-left'}> {lang.responsable} </option>
                    </select>
                </div>
                
                <div className="w-full mb-6 flex flex-col">
                    <label className=' font-semibold mb-2'> {lang.email} </label>
                    <input className='border-2 w-full rounded-md border-gray-200 hover:border-gray-300 transition-all focus:border-blue-600 outline-none px-4 py-2' onChange={(e)=> setEmail(e.target.value)} type="email" name="floating_email" id="floating_email"  required />
                </div>
                <div className="w-full mb-6 flex flex-col">
                    <label className=' font-semibold mb-2'> {lang.password} </label>
                    <input className='border-2 w-full rounded-md border-gray-200 hover:border-gray-300 transition-all focus:border-blue-600 outline-none px-4 py-2' onChange={(e)=> setPassword(e.target.value)} type="password" name="floating_password" id="floating_password"  required />
                </div>

                <SubmitButton fun={LoginFun} text={lang.login} bgColor={PrimaryColor} color={"white"} data={{email, password}} condition={email == "" || password == "" || role == ""} message={setMessage} />

                <FooterBox />
            </div>
        </div>

        <div className='w-full hidden lg:inline'>
            <img src="./assets/images/login.jpg" className='w-full h-full' />
        </div>
    </div>
  )
}

export default Login