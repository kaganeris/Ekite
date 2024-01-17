import React, { useContext, useEffect, useState } from 'react';
import ApprovedLeaveList from '../../Components/ApprovedLeaveList/ApprovedLeaveList';
import ApprovedLeaveListHeader from '../../Components/ApprovedLeaveList/ApprovedLeaveListHeader';
import { LeaveContext } from '../../context/LeaveContext';
import { AuthContext } from '../../context/AuthContext';
import { PageContext } from '../../context/PageContext';

const ApprovedLeaveListPage = () => {
  const { id, setId, setIsAuthenticated } =
    useContext(AuthContext);
  const {approvedLeaveDatas} = useContext(LeaveContext)
  const [approvedLeaveList,setApprovedLeaveList] = useState(null);
  const {handlePrevPage} = useContext(PageContext)

  useEffect(() => {
    if (id !== 0) {
      (async () => {
        try {
          handlePrevPage(location.pathname)
          console.log("admin approved list çalıştı");
          let data = await approvedLeaveDatas();
          setApprovedLeaveList(data);
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
        <ApprovedLeaveListHeader />
        <div className="container-fluid mt--6">
          <div className="row">
            <div className="col">
              <div className="card">
                <ApprovedLeaveList approvedLeaveList={approvedLeaveList} setApprovedLeaveList={setApprovedLeaveList}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApprovedLeaveListPage;
