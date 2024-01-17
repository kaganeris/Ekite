import React, { useContext, useEffect, useState } from "react";
import CreateLeave from "../../Components/Leave/CreateLeave"
import { LeaveContext } from "../../context/LeaveContext";
import { AuthContext } from "../../context/AuthContext";

const AddLeavePage = () => {
    const [leaveTypes,setLeaveTypes] = useState(null)
    const {getLeaveTypes} = useContext(LeaveContext)
    const { id,setId,setIsAuthenticated } = useContext(AuthContext);

    useEffect(() => {
      if (id !== 0) {
        (async () => {
          try {
           let data = await getLeaveTypes()
           setLeaveTypes(data)
          } catch (error) {
               console.log(error);
          }
       })()
      }else{
          const storedEmployeeId = localStorage.getItem("id");
          if (storedEmployeeId) {
            setId(parseInt(storedEmployeeId));
          }
      }
    },[id])

  return (
    <div className="main-content">
      <div className="container mb-3 mt-4">
        <div className="row">
          <div className="col ">
            <CreateLeave leaveTypes={leaveTypes} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLeavePage;
