import React, { createContext, useContext, useState } from "react";
import AdvanceService from "../services/AdvanceService";
import { useNavigate } from "react-router";
import { AuthContext } from "./AuthContext";

const AdvanceContext = createContext();

const AdvanceProvider = ({ children }) => {
  const [updateAdvanceId, setUpdateAdvanceId] = useState(0);
  const { setIsAuthenticated, setToken, token } = useContext(AuthContext);
  const navigate = useNavigate();

  const getAdvanceList = async (employeeId) => {
    try {
      const data = await AdvanceService.getAdvanceList(employeeId);
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
      return error;
    }
  };

  const getEnums = async () => {
    try {
      const data = await AdvanceService.getEnums();
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
      return error;
    }
  };

  const addAdvance = async (createData) => {
    try {
      const data = await AdvanceService.createAdvance(createData);
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
      return error;
    }
  };

  const getAdvanceById = async (id) => {
    try {
      const data = await AdvanceService.getAdvanceById(id);
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
      return error;
    }
  };

  const updateAdvance = async (id, updateData) => {
    try {
      const data = await AdvanceService.updateAdvance(id, updateData);
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
      return error;
    }
  };

  const deleteAdvance = async (id) => {
    try {
      const data = await AdvanceService.deleteAdvance(id);
      if (data.status !== 401) {
        return data.data;
      }
      else
      {
        if (token === "")
        {
          setIsAuthenticated(false);
        }
        setToken("");
        navigate("/login");
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <AdvanceContext.Provider
      value={{
        getAdvanceList,
        getEnums,
        addAdvance,
        updateAdvance,
        updateAdvanceId,
        setUpdateAdvanceId,
        getAdvanceById,
        deleteAdvance,
      }}
    >
      {children}
    </AdvanceContext.Provider>
  );
};

export { AdvanceProvider, AdvanceContext };
