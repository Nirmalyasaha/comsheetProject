import { UserData } from "@/typeScript/type/user.type";



export interface UserSliceData{
    
    UserData:UserData | null
    isLogedIn: boolean
    accessToken:null

}