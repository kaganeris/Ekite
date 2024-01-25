import { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import CompanyService from "../services/CompanyService";


const CompanyContext = createContext()

const CompanyProvider = ({children}) => {
    const { setIsAuthenticated, setToken, token } = useContext(AuthContext);
  const [companyId,setCompanyId] = useState(0)

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

    const getCompanyLeaves = async (id) => {
      try {
          const data = await CompanyService.getCompanyLeaves(id);
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

  const getCompanySpends = async (id) => {
    try {
        const data = await CompanyService.getCompanySpends(id);
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

const getCompanyAdvances = async (id) => {
  try {
      const data = await CompanyService.getCompanyAdvances(id);
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



    return <CompanyContext.Provider value={{getCompanies,getCompanyLeaves,getCompanySpends,getCompanyAdvances,companyId,setCompanyId}}>
        {children}
    </CompanyContext.Provider>
}

export {CompanyContext,CompanyProvider}