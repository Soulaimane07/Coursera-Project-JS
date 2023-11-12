export const LoginFun = (data, spinner) => {
    console.log(data)
    spinner(false)

    localStorage.setItem("CourseraUser", JSON.stringify({...data, fname: "Soulaimane", lname:"Ouhmida", role: "admin"}))
}

export const SignupFun = (data, spinner) => {
    console.log(data)
    spinner(false)
}