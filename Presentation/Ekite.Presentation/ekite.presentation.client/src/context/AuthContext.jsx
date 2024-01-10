import { createContext, useEffect, useState } from "react";
import AuthService from "../services/AuthService.jsx";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [isAuthenticated,setIsAuthenticated] = useState(false)
    const [employeeId,setEmployeeId] = useState(0)

    
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
        }
      }

    const logout = () => {
        AuthService.logout()
        setIsAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{isAuthenticated,login,setIsAuthenticated,employeeId,setEmployeeId,logout}}>
            {children}
        </AuthContext.Provider>
    )
}