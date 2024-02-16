import { useForm, SubmitHandler } from "react-hook-form"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from "@/styles/login.module.css";
import { LogInData } from "@/api/functions/functions";
import { useAppSelector } from "@/hooks/redux/useappSelector";
import { useDispatch } from "react-redux";
import { setLogInData } from "@/redux-toolkit/authSlice/authSlice";


type Inputs = {
  email: string,
  password: string
}

export default function LogIN() {



  const logindata = useAppSelector((state) => state.authSlice)
  console.log("login data:", logindata)


  const disPatch = useDispatch();

  const { register, handleSubmit, watch, formState: { errors }, } = useForm<Inputs>()



  const onSubmit = (data: Inputs) => {
    LogInData(data).then((resp) => {
      console.log(resp)
        if (resp?.status === 200) {
        disPatch(setLogInData({
          userData: resp.data,
          accessToken: resp.token

        }))
      }


    })

      .catch((error) => {
        console.log("error", error)

      })

  }




  // console.log(watch("email")) // watch input value by passing the name of it


  return (
    // <Box className={styles.loginform}
    //   component="form"
    //   sx={{
    //     '& > :not(style)': { m: 1, width: '25ch' },
    //   }}
    //   noValidate
    //   autoComplete="off"
    // >
    <form onSubmit={handleSubmit(onSubmit)}>

      <TextField id="outlined-basic" label="Email Id" variant="outlined"{...register("email")} />

      <TextField id="outlined-basic" label="Password" variant="outlined"{...register("password")} />

      <input type="submit" />
    </form>

  )
}