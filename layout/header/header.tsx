import { Link } from "@mui/material"




 const Header=()=>{
    return(
       
        <>
         <ul>
           <li><Link href="/login">LOGIN PAGE</Link></li> 
           <li> <Link href="/signup">SIGNUP</Link></li>
           <li> <Link href="/addcomps">ADD COMPS</Link></li>
         </ul>
        </>

    )
}

export default Header

