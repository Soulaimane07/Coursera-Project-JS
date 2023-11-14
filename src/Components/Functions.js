import axios from "axios"
import { serverURL } from "./Variables"
import { useNavigate } from "react-router-dom"

export const LoginFun = (data, spinner, navigate) => {
    spinner(true)
    
    axios.post(`${serverURL}/login`, data)
        .then(res => {
            spinner(false)
            console.log(res.data);
            localStorage.setItem("CourseraUser", JSON.stringify(res.data))
            // navigate("/")
            window.location.reload()
        })
        .catch(err => {
            console.log(err);
        })
}

export const Signup = (data, spinner, navigate) => {
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

export const LogOut = (data, spinner, navigate) => {
    spinner(true)
    
    axios.get(`${serverURL}/logout`)
        .then(res => {
            spinner(false)
            localStorage.removeItem("CourseraUser")
            // navigate("/")
            window.location.reload()
        })
        .catch(err => {
            console.log(err);
        })
}

export const getUserData = () => {
    return JSON.parse(localStorage.getItem("CourseraUser"))
}