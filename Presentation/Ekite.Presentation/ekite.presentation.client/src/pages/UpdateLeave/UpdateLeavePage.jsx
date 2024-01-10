import React, { useContext, useEffect, useState } from "react";
import UpdateLeave from "../../components/UpdateLeave/UpdateLeave";
import { LeaveContext } from "../../context/LeaveContext";
import { AuthContext } from "../../context/AuthContext";

const UpdateLeavePage = () => {
  const [leaveTypes, setLeaveTypes] = useState(null);
  const { getLeaveTypes } = useContext(LeaveContext);
  const { employeeId, setEmployeeId, setIsAuthenticated } =
    useContext(AuthContext);

  useEffect(() => {
    if (employeeId !== 0) {
      (async () => {
        try {
          let data = await getLeaveTypes();
          setLeaveTypes(data);
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      const storedEmployeeId = localStorage.getItem("employeeId");
      if (storedEmployeeId) {
        setEmployeeId(parseInt(storedEmployeeId));
      }
    }
  }, [employeeId]);

  return (
    <div className="main-content">
      <div className="container mt-5  ">
        <div className="row ">
          <div className="col ">
            <UpdateLeave leaveTypes={leaveTypes}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateLeavePage;