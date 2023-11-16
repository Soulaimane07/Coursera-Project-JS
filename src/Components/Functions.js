import axios from "axios"
import { serverURL } from "./Variables"

export const LoginFun = (data, spinner, navigate) => {
    spinner(true)
    
    axios.post(`${serverURL}/login`, data)
        .then(res => {
            spinner(false)
            console.log(res.data);
            localStorage.setItem("CourseraUser", JSON.stringify(res.data))
            navigate("/")
            window.location.reload()
        })
        .catch(err => {
            console.log(err);
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