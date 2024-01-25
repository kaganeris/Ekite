import { createContext, useState } from "react";
import EmployeeService from "../services/EmployeeService";

const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
 const [employeeID,setEmployeeID] = useState(0);

  const sendMail = async (email) => {
    try {
      const data = await EmployeeService.postEmailAddress(email);
      if (data.status === 200) {
        return data.data;
      } else {
        return data.data;
      }
    } catch (error) {}
  };

  const sendCode = async (codeAndAppUserId) => {
    try {
      console.log("🚀 ~ sendCode ~ codeAndAppUserId:", codeAndAppUserId);
      const data = await EmployeeService.postCode(codeAndAppUserId);
      if (data.status === 200) {
        return data;
      } else {
        return data;
      }
    } catch (error) {
      return error;
    }
  };

  const sendPassword = async (passAndAppUserID) => {
    try {
      console.log("🚀 ~ sendCode ~ codeAndAppUserId:", passAndAppUserID);
      const data = await EmployeeService.postNewPassword(passAndAppUserID);
      if (data.status === 200) {
        return data;
      } else {
        return data;
      }
    } catch (error) {
      return error;
    }
  };

  const createEmployee = async (employeeData) => {
    try {
      const data = await EmployeeService.createEmployee(employeeData);
      if (data.status !== 401) {
        return data.data;
      } else {
        if (token === "") {
          setIsAuthenticated(false);
        }
        setToken("");
        navigate("/login");
      }
    } catch (error) {
      console.log("employee context create", error);
      return error;
    }
  };

  const getAllEmployee = async (id) => {
    try {
      const data = await EmployeeService.getAllListEmployee(id);
      if (data.status !== 401) {
        return data.data;
      } else {
        if (token === "") {
          setIsAuthenticated(false);
        }
        setToken("");
        navigate("/login");
      }
    } catch (error) {
      console.log("employee context create", error);
      return error;
    }
  };


  const getAllDetailEmployee = async (id) => {
    try {
      const data = await EmployeeService.getAllDetailPersonel(id);
      if (data.status !== 401) {
        return data.data;
      } else {
        if (token === "") {
          setIsAuthenticated(false);
        }
        setToken("");
        navigate("/login");
      }
    } catch (error) {
      console.log("employee context create", error);
      return error;
    }
  }

  return (
    <EmployeeContext.Provider
      value={{
        sendMail,
        getAllEmployee,
        sendCode,
        sendPassword,
        createEmployee,
        getAllDetailEmployee,
        employeeID,
        setEmployeeID
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export { EmployeeContext, EmployeeProvider };
