import { getCookie } from "@/lib/lib.util";
import axios from "axios";



export const axiosInstance=axios.create({
    baseURL:process.env.API_URL
})

axiosInstance.interceptors.request.use((config)=>{
    // const  token=[process.env.BRANCH_TOKEN];
    const token=getCookie("accessToken")
    if(token && !! config.headers){
        config.headers["x-access-token"]=`${token}`
    }
    //console.log(config)
    return config;
    
})