import { createContext, useContext, useState } from "react";
import LeaveService from "../services/LeaveService";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const LeaveContext = createContext();

const LeaveProvider = ({ children }) => {
  const [updateLeaveId, setUpdateLeaveId] = useState(0);
  const { setIsAuthenticated, setToken, token } = useContext(AuthContext);
  const navigate = useNavigate();

  const getLeave = async (leaveId) => {
    try {
      const data = await LeaveService.getLeaveById(leaveId);
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
  };

  const LeaveDatas = async (employeeId) => {
    try {
      const data = await LeaveService.getLeaveListByEmployeeId(employeeId);
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
  };

  const getLeaveTypes = async () => {
    try {
      const data = await LeaveService.getLeaveTypes();
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
  };

  const createLeave = async (leaveData) => {
    try {
      const data = await LeaveService.postLeave(leaveData);
      console.log(data);
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
  };

  const deleteLeave = async (id) => {
    try {
      const data = await LeaveService.deleteLeaveByData(id);
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
  };

  const updateLeave = async (updateData) => {
    try {
      const data = await LeaveService.updateLeaveByData(updateData);
      console.log(data);
      if (data.status === 200) {
        return data.data;
      } else {
        if (token === "") {
          setIsAuthenticated(false);
        }
        setToken("");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const pendingLeaveDatas = async () => {
    try {
      const data = await LeaveService.getPendingLeaveList();
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
  };


  const approvedLeaveDatas = async () => {
    try {
      const data = await LeaveService.getApprovedLeaveList();
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
  };



  const rejectLeaveDatas = async () => {
    try {
      const data = await LeaveService.getRejectLeaveList();
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
  };



  const approveLeaveProcess= async(id) => {
    try {
      const data = await LeaveService.approveLeave(id);
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

  const rejectLeaveProcess= async(id) => {
    try {
      const data = await LeaveService.rejectLeave(id);
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


  return (
    <LeaveContext.Provider
      value={{
        LeaveDatas,
        getLeaveTypes,
        createLeave,
        deleteLeave,
        updateLeaveId,
        setUpdateLeaveId,
        getLeave,
        updateLeave,
        pendingLeaveDatas,
        rejectLeaveProcess,
        approveLeaveProcess,
        approvedLeaveDatas,
        rejectLeaveDatas
      }}
    >
      {children}
    </LeaveContext.Provider>
  );
};

export { LeaveContext, LeaveProvider };
