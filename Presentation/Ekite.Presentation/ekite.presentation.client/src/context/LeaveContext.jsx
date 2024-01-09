import { createContext, useState } from "react";
import LeaveService from "../services/LeaveService";

const LeaveContext = createContext();

const LeaveProvider = ({ children }) => {
  const [updateLeaveId,setUpdateLeaveId] = useState(0)

  const getLeave = async (leaveId) => {
    try {
      const data = await LeaveService.getLeaveById(leaveId)
      return data
    } catch (error) {
      
    }
  }


  const LeaveDatas = async (employeeId) => {
    try {
      const data = await LeaveService.getLeaveListByEmployeeId(employeeId);
      console.log(data);
      return data;
    } catch (error) {}
  };

  const getLeaveTypes = async () => {
    try {
      const data = await LeaveService.getLeaveTypes();
      return data;
    } catch (error) {}
  };

  const createLeave = async (leaveData) => {
    try {
      const data = await LeaveService.postLeave(leaveData);
      console.log(leaveData);
      return data;
    } catch (error) {}
  };

  const deleteLeave = async (id) => {
    try {
        const data = await LeaveService.deleteLeaveByData(id)
        return data;
    } catch (error) {
        
    }
  }

  const updateLeave = async (updateData) => {
    try {
      const data = await LeaveService.updateLeaveByData(updateData);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <LeaveContext.Provider value={{ LeaveDatas, getLeaveTypes, createLeave,deleteLeave,updateLeaveId,setUpdateLeaveId,getLeave,updateLeave }}>
      {children}
    </LeaveContext.Provider>
  );
};

export { LeaveContext, LeaveProvider };
