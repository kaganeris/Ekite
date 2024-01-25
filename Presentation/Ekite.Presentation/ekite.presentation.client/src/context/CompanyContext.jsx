import { createContext, useContext } from "react";
import { AuthContext } from "./AuthContext";
import CompanyService from "../services/CompanyService";


const CompanyContext = createContext()

const CompanyProvider = ({children}) => {
    const { setIsAuthenticated, setToken, token } = useContext(AuthContext);

    const getCompanies = async () => {
        try {
            const data = await CompanyService.getCompanies();
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



    return <CompanyContext.Provider value={{getCompanies}}>
        {children}
    </CompanyContext.Provider>
}

export {CompanyContext,CompanyProvider}