import { createContext, useEffect, useState } from "react";
import AuthService from "../services/AuthService.jsx";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [isAuthenticated,setIsAuthenticated] = useState(false)
    const [employeeId,setEmployeeId] = useState(0)
    const [token,setToken] = useState(localStorage.getItem("user"))

    useEffect(() => {
      console.log("auth useeffect çalıştı",token);
      if(token){
        setIsAuthenticated(true)
      }
      else{
        setIsAuthenticated(false)
      }
    },[token])


      const login = async (email, password) => {
        try {
          const response = await AuthService.login(email, password);
          console.log(response);
          if (response.token) {
            setEmployeeId(response.employeeId);
            setIsAuthenticated(true);
          }
        } catch (error) {
          setIsAuthenticated(false);
          throw error
        }
      }

    const logout = () => {
        AuthService.logout()
        setIsAuthenticated(false)
        setToken('');
    }



    return (
        <AuthContext.Provider value={{isAuthenticated,login,setIsAuthenticated,employeeId,setEmployeeId,logout,token,setToken}}>
            {children}
        </AuthContext.Provider>
    )
}