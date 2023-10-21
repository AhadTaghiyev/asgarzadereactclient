import { useEffect } from "react";
import {setAuthenticationStatus} from "./auth"

const useTokenCheck = () => {
    const token = localStorage.getItem("token");
   if (!token) {
        setAuthenticationStatus(false)
   }else{
     setAuthenticationStatus(true)
     
   }
  };
  export default useTokenCheck;