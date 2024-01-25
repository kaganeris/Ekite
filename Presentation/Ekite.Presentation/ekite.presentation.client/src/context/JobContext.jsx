import { createContext, useContext } from "react";
import { AuthContext } from "./AuthContext";
import JobService from "../services/JobService";


const JobContext = createContext()

const JobProvider = ({children}) => {
    const { setIsAuthenticated, setToken, token } = useContext(AuthContext);

    const getJobs = async () => {
        try {
            const data = await JobService.getJobs();
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



    return <JobContext.Provider value={{getJobs}}>
        {children}
    </JobContext.Provider>
}

export {JobContext,JobProvider}