import { Navigate } from "react-router-dom";
import Auth from "./Auth";

const usertype =Auth();

const PublicElement = ({children})=>{
    return <>{children}</>
}

const UserElement=({children})=>{
    if(usertype === "user" || usertype==="admin"){
        return <>{children}</>
      }
      else{
        return <Navigate to='/'/>;
      }
}

const AdminElement =({children})=>{
    if(usertype === "admin"){
        return <>{children}</>
    }
    else{
        <Navigate to='/'/>
    }
}



export { PublicElement, UserElement, AdminElement};