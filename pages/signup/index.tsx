
import { useappDispatch } from "@/hooks/redux/useappDispatch"
import { useAppSelector } from "@/hooks/redux/useappSelector"
import { useForm, SubmitHandler } from "react-hook-form"
import { SignUpData } from "@/api/functions/functions"

import { setSIgnUpData } from "@/redux-toolkit/authSlice/authSlice"
import { useRouter } from "next/router"


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


        <form onSubmit={handleSubmit(onSubmit)}>

            <input type="test" placeholder="First Name" {...register("first_name")} />

            <input type="test" placeholder="Last Name" {...register("last_name")} />

            <input type="test" placeholder="User Name" {...register("user_name")} />

            <input type="test" placeholder="Email Id" {...register("email")} />

            <input type="number" placeholder="Phone Number" {...register("phone")} />

            <input type="text" placeholder="Pass Word" {...register("password")} />

            <input type="submit" />


        </form>
    )
}