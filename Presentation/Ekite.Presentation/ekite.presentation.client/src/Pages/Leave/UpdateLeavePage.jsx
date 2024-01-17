import React, { useContext, useEffect, useState } from "react";
import UpdateLeave from "../../components/Leave/UpdateLeave";
import { LeaveContext } from "../../context/LeaveContext";
import { AuthContext } from "../../context/AuthContext";

const UpdateLeavePage = () => {
  const [leaveTypes, setLeaveTypes] = useState(null);
  const { getLeaveTypes } = useContext(LeaveContext);
  const { id, setId, setIsAuthenticated } =
    useContext(AuthContext);

  useEffect(() => {
    if (id !== 0) {
      (async () => {
        try {
          let data = await getLeaveTypes();
          setLeaveTypes(data);
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      const storedEmployeeId = localStorage.getItem("id");
      if (storedEmployeeId) {
        setId(parseInt(storedEmployeeId));
      }
    }
  }, [id]);

  return (
    <div className="main-content">
      <div className="container mt-4">
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
