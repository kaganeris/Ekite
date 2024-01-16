import React, { useContext, useEffect, useState } from 'react'
import PendingLeaveList from '../../Components/PendingLeaveList/PendingLeaveList';
import { AuthContext } from '../../context/AuthContext';
import PendingLeaveListHeader from '../../Components/PendingLeaveList/PendingLeaveListHeader';
import { LeaveContext } from '../../context/LeaveContext';

const PendingLeaveListPage = () => {

    const { id, setId, setIsAuthenticated } =
    useContext(AuthContext);
    const {pendingLeaveDatas} = useContext(LeaveContext)
    const [pendingLeaveList,setPendingLeaveList] = useState(null);

    useEffect(() => {
        if (id !== 0) {
          (async () => {
            try {
              let data = await pendingLeaveDatas();
              console.log("admin leave list çalıştı");
              setPendingLeaveList(data);
            } catch (error) {}
          })();
        } else {
          const storedEmployeeId = localStorage.getItem("id");
          if (storedEmployeeId) {
            setId(parseInt(storedEmployeeId));
          }
        }
      }, [id]);


  return (
    <>
    <div className="main-content" id="panel">
      <PendingLeaveListHeader />
      <div className="container-fluid mt--6">
        <div className="row">
          <div className="col">
            <div className="card">
              <PendingLeaveList pendingLeaveList={pendingLeaveList} setPendingLeaveList={setPendingLeaveList}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default PendingLeaveListPage