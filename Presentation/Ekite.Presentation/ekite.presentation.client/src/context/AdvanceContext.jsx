import React, { createContext, useState } from "react";
import AdvanceService from "../services/AdvanceService";

const AdvanceContext = createContext();

const AdvanceProvider = ({children}) => {
  const [updateAdvanceId, setUpdateAdvanceId] = useState(0);

  const getAdvanceList = async (employeeId) => {
    try {
      const data = await AdvanceService.getAdvanceList(employeeId);
      return data;
    } catch (error) {
      return error;
    }
  };

  const getEnums = async () => {
    try {
      const data = await AdvanceService.getEnums();
      return data;
    } catch (error) {
      return error;
    }
  };

  const addAdvance = async (createData) => {
    try {
      const data = await AdvanceService.createAdvance(createData);
      return data;
    } catch (error) {
      return error;
    }
  };

  const getAdvanceById = async (id) => {
    try {
      const data = await AdvanceService.getAdvanceById(id);
      return data;
    } catch (error) {
      return error;
    }
  };

  const updateAdvance = async (id, updateData) => {
    try {
      const data = await AdvanceService.updateAdvance(id, updateData);
      return data;
    } catch (error) {
      return error;
    }
  };


  const deleteAdvance = async (id) => {
try {
  const data = await AdvanceService.deleteAdvance(id);
  return data;
} catch (error) {
  return error;
}

  }

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
        deleteAdvance
      }}
    >
      {children}
    </AdvanceContext.Provider>
  );
};

export { AdvanceProvider, AdvanceContext };
