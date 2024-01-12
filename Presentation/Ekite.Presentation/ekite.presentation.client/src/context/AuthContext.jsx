import { createContext, useEffect, useState } from "react";
import AuthService from "../services/AuthService.jsx";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [isAuthenticated,setIsAuthenticated] = useState(false)
    const [id,setId] = useState(0)
    const [token,setToken] = useState(localStorage.getItem("user"))
    const [userRole,setUserRole] = useState("")

    useEffect(() => {
      if(token){
        setIsAuthenticated(true)
        setUserRole(localStorage.getItem("userRole"))
      }
      else{
        setIsAuthenticated(false)
        setUserRole("")
      }
    },[token])


      const login = async (email, password) => {
        try {
          const response = await AuthService.login(email, password);
          if (response.token) {
            setId(response.id);
            setIsAuthenticated(true);
            setUserRole(localStorage.getItem("userRole"))
          }
        } catch (error) {
          setIsAuthenticated(false);
          setUserRole("")

          throw error

        }
      }

    const logout = () => {
        AuthService.logout()
        setIsAuthenticated(false)
        setToken('');
    }

    return (
        <AuthContext.Provider value={{isAuthenticated,login,setIsAuthenticated,id,setId,logout,token,setToken,userRole,setUserRole}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider