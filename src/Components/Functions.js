import axios from "axios"
import { serverURL } from "./Variables"
import { useEffect, useState } from "react"
import Langs from "./Langs.json"



export const GetLang = () => {
    let langSub = JSON.parse(localStorage.getItem("CourseraLang"))
    
    let lang = Langs.frensh

    langSub === "en" && (lang = Langs.english)
    langSub === "fr" && (lang = Langs.frensh)
    langSub === "ar" && (lang = Langs.arabic)
    langSub === undefined && (lang = Langs.frensh)

    return lang
}

export const setLang = (lang) => {
    localStorage.setItem("CourseraLang", JSON.stringify(lang))
    window.location.reload()
}

export const PageTitle = (title) => {
    useEffect(() => {
        document.title = title;
    }, []);
}

// ----------------- Authentification

export const LoginFun = (data, spinner, navigate, message) => {
    spinner(true)
    message(false)
    
    axios.post(`${serverURL}/login`, data)
        .then(res => {
            if(res.data){
                spinner(false)
                console.log(res.data)
                localStorage.setItem("CourseraUser", JSON.stringify(res.data))
                navigate("/")
                window.location.reload()
            } else {
                // message(err.response.data.message),
                console.log(res);
                spinner(false)
            }
        })
        .catch(err => {
            console.log(err);
            message(err.response.data.message)
            spinner(false)
        })
}

export const SignupFun = (data, spinner, navigate) => {
    spinner(true)
    console.log(data);
    
    axios.post(`${serverURL}/signup`, {...data, 'role':"etudiant"})
        .then(res => {
            spinner(false)
            localStorage.setItem("CourseraUser", JSON.stringify(res.data))
            navigate("/")
            window.location.reload()
        })
        .catch(err => {
            console.log(err);
        })
}

export const LogOut = (data, spinner, navigate) => {
    spinner(true)
    
    axios.get(`${serverURL}/logout`)
        .then(res => {
            spinner(false)
            localStorage.removeItem("CourseraUser")
            navigate("/")
            window.location.reload()
        })
        .catch(err => {
            console.log(err);
        })
}

export const getUserData = () => {
    return JSON.parse(localStorage.getItem("CourseraUser"))
}



// ----------------- CRUD

export const GetData = (link, roal) => {
    const [data, setData] = useState(null)

    useEffect(()=> {
        axios.get(`${serverURL}${link}`)
            .then(res => {
                setData(res.data)
                // console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return data
}

export const PostData = (data, spinner, navigate, be, link) => {
    spinner(true)

    axios.post(`${serverURL}${link}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then(res => {
            spinner(false)
            console.log(res.data);
            window.location.reload()
        })
        .catch(err => {
            spinner(false)
            console.log(err);
        })
}

export const DeleteData = (data, spinner, navigate, be, link) => {
    spinner(true)

    axios.delete(`${serverURL}${link}`)
        .then(res =>{
            spinner(false)
            console.log(res.data);
            window.location.reload()
        })
        .catch(err => {
            console.log(err);
            spinner(false)
        })
}

export const UpdateData = (data, spinner, navigate, be, link) => {
    spinner(true)

    axios.put(`${serverURL}${link}`, data,{
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
      })
        .then(res =>{
            spinner(false)
            console.log(res.data);
            window.location.reload()
        })
        .catch(err => {
            console.log(err);
            spinner(false)
        })
}