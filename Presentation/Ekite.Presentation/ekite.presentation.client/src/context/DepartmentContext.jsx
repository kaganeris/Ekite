import { createContext, useContext } from "react";
import { AuthContext } from "./AuthContext";
import DepartmentService from "../services/DepartmentService";


const DepartmentContext = createContext()

const DepartmentProvider = ({children}) => {
    const { setIsAuthenticated, setToken, token } = useContext(AuthContext);

    const getDepartments = async () => {
        try {
            const data = await DepartmentService.getDepartments();
            console.log("department data",data);
            if (data.status === 200) {
              return data.data;
            } else {
              if (token === "") {
                setIsAuthenticated(false);
              }
              setToken("");
              navigate("/login");
            }
          } catch (error) {}
    }



    return <DepartmentContext.Provider value={{getDepartments}}>
        {children}
    </DepartmentContext.Provider>
}

export {DepartmentContext,DepartmentProvider}