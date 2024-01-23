import { createContext } from "react";
import EmployeeService from "../services/EmployeeService";

const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {

    const sendMail = async (email) => {
        try {
            const data = await EmployeeService.postEmailAddress(email)
            if(data.status === 200){
                return data.data
            }
            else{
                return data.data
            }
        } catch (error) {
            
        }
    }

    const sendCode = async (codeAndAppUserId) => {
        try {
            console.log("🚀 ~ sendCode ~ codeAndAppUserId:", codeAndAppUserId)      
            const data = await EmployeeService.postCode(codeAndAppUserId)
            if(data.status === 200){
                return data
            }
            else{
                return data
            }
        } catch (error) {
            return error;
        }
    }

    const sendPassword = async (passAndAppUserID) => {
        try {
            console.log("🚀 ~ sendCode ~ codeAndAppUserId:", passAndAppUserID)      
            const data = await EmployeeService.postNewPassword(passAndAppUserID)
            if(data.status === 200){
                return data
            }
            else{
                return data
            }
        } catch (error) {
            return error;
        }

    }



  return <EmployeeContext.Provider value={{sendMail , sendCode , sendPassword}}>
    {children}
    </EmployeeContext.Provider>;
};


export {EmployeeContext,EmployeeProvider}