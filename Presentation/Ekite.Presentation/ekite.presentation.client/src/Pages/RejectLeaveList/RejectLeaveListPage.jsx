import React, { useContext, useEffect, useState } from 'react'
import RejectLeaveList from '../../Components/RejectLeaveList/RejectLeaveList'
import RejectLeaveListHeader from '../../Components/RejectLeaveList/RejectLeaveListHeader'
import { AuthContext } from '../../context/AuthContext';
import { LeaveContext } from '../../context/LeaveContext';
import { PageContext } from '../../context/PageContext';

const RejectLeaveListPage = () => {
 
    const { id, setId, setIsAuthenticated } =
    useContext(AuthContext);
    const {rejectLeaveDatas} = useContext(LeaveContext)
    const [rejectLeaveList,setRejectLeaveList] = useState(null);
    const {handlePrevPage} = useContext(PageContext)

    useEffect(() => {
        if (id !== 0) {
            (async () => {
                try {
                  handlePrevPage(location.pathname)
                    let data = await rejectLeaveDatas();
                    console.log("admin leave list çalıştı");
              setRejectLeaveList(data);
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
    <RejectLeaveListHeader/>
      <div className="container-fluid mt--6">
        <div className="row">
          <div className="col">
            <div className="card">
            <RejectLeaveList rejectLeaveList={rejectLeaveList} setRejectLeaveList={setRejectLeaveList}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default RejectLeaveListPage