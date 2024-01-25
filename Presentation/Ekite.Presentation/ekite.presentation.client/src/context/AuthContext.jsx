import { createContext, useEffect, useState } from "react";
import AuthService from "../services/AuthService.jsx";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [isAuthenticated,setIsAuthenticated] = useState(false)
    const [id,setId] = useState(0)
    const [token,setToken] = useState(localStorage.getItem("user"))
    const [userRole,setUserRole] = useState("")
    const [firstLogin,setFirstLogin] = useState(false);

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
          if (response.token && response.firstLogin === false) {
            setId(Number(response.id));
            setIsAuthenticated(true);
            setUserRole(localStorage.getItem("userRole"))
          }
          else{
            setId(response.id);
            setFirstLogin(true);

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
        <AuthContext.Provider value={{isAuthenticated,login,setIsAuthenticated,id,setId,logout,token,setToken,firstLogin,userRole,setUserRole}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider