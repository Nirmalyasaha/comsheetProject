
import { useappDispatch } from "@/hooks/redux/useappDispatch"
import { useAppSelector } from "@/hooks/redux/useappSelector"
import { useForm, SubmitHandler } from "react-hook-form"
import { SignUpData } from "@/api/functions/functions"

import { setSIgnUpData } from "@/redux-toolkit/authSlice/authSlice"
import { useRouter } from "next/router"
import { Box, Button, TextField } from "@mui/material"
import styles from '@/styles/signup.module.css'


type Inputs = {
    email: string
    user_name: string
    password: string
    first_name: string
    last_name: string
    fullName: string
    phone: string

}

// export interface dispatchData{
//     UserData:null,
//     isLogedIn: false,
//     accessToken:null
// }

export default function SignUp() {


    const data = useAppSelector((state) => { state?.authSlice });

    console.log("form data:", data)


    const dispatch = useappDispatch()

    const { register, handleSubmit, watch, formState: { errors }, } = useForm<Inputs>()

    const router = useRouter()


    const onSubmit = (data: Inputs) => {
        SignUpData(data)?.then((responce) => {
            const data = responce.data
            console.log("data:", data)
            // if (data?.status===200){
            //     console.log("data",data)
            //     dispatch(setSIgnUpData({
            //         userData:data?.data
            //     }))
            // }
            //  console.log(data)
            router.push("/login")

        }).catch((error) => {
            console.log("error", error)

        })
    }

    //console.log(watch("first_name")) 







    return (


        <Box className={styles.grand}>
            <Box className={styles.parent}>
                <h1>Sign Up</h1>

                <form onSubmit={handleSubmit(onSubmit)} >

                    <TextField placeholder="First Name" {...register("first_name")} sx={{ width: 230, padding: " 0 10px" }} />

                    <TextField placeholder="Last Name" {...register("last_name")} sx={{ width: 230, }} />

                    <TextField placeholder="User Name" {...register("user_name")} sx={{ width: 230, padding: " 0 10px", margin: "10px 0" }} />

                    <TextField placeholder="Email Id" {...register("email")} sx={{ width: 230, margin: "10px 0" }} />

                    <TextField placeholder="Phone Number" {...register("phone")} sx={{ width: 230, padding: " 0 10px" }} />

                    <TextField placeholder="Pass Word" {...register("password")} sx={{ width: 230, }} />

                    <Button variant="contained" type="submit" className={styles.btn}>SUBMIT</Button>


                </form>
            </Box>
        </Box>
    )
}