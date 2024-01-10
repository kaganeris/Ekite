import React, { useContext, useEffect, useState } from "react";
import LeaveTable from "../../components/LeaveTable/LeaveTable";
import LeaveHeader from "../../components/LeaveHeader/LeaveHeader";
import { AuthContext } from "../../context/AuthContext";
import { LeaveContext } from "../../context/LeaveContext";

const LeaveListPage = () => {
  const { employeeId, setEmployeeId, setIsAuthenticated } =
    useContext(AuthContext);
    const [leaveData,setLeaveData] = useState(null)

    const {LeaveDatas} = useContext(LeaveContext)

  useEffect(() => {
    console.log("LeavePage çalıştı");
    if (employeeId !== 0) {
      (async () => {
        try {
          let data = await LeaveDatas(employeeId);
          console.log(data);
          setLeaveData(data);
        } catch (error) {}
      })();
    } else {
      const storedEmployeeId = localStorage.getItem("employeeId");
      if (storedEmployeeId) {
        setEmployeeId(parseInt(storedEmployeeId));
      }
    }
  }, [employeeId]);

  return (
    <>
      <div className="main-content" id="panel">
        <LeaveHeader />
        <div className="container-fluid mt--6">
          <div className="row">
            <div className="col">
              <div className="card">
                <LeaveTable leaveList={leaveData}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaveListPage;
