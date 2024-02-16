import axios from "axios"
import { axiosInstance } from "../axiosInstance/axios"
import { endpoint } from "../endpoint/endpoint"





export const SignUpData=async (data:{ email: string
    user_name: string
    password: string
    first_name: string
    last_name: string
    fullName: string
    phone: string})=>{
    const res = await axiosInstance.post(endpoint.auth.SIGNUP,data)
    console.log("sign res data",res)
    
    return res.data
}


export const LogInData=async (data:{
    email:string,
    password:string
})=>{
    const res =await axiosInstance.post(endpoint.auth.login,data)


    return res.data
}

