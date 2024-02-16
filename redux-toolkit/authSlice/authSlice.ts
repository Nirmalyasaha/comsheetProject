import { createSlice } from "@reduxjs/toolkit";
import { UserSliceData } from "../interFace/ineterface";




 const initialState: UserSliceData={

    UserData:null,
    isLogedIn: false,

    accessToken:null


 }

export const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:
    {
        setSIgnUpData:(state,{payload})=>{

            state.UserData=payload.UserData           
           

        },

        setLogInData:(state,{payload})=>{
          //console.log("payload",payload)
            state.UserData=payload.userData
            state.isLogedIn=Boolean(payload.accessToken)
            state.accessToken=payload.accessToken
            


        }

    }
})

export const {setSIgnUpData,setLogInData}=authSlice.actions


export default authSlice.reducer
