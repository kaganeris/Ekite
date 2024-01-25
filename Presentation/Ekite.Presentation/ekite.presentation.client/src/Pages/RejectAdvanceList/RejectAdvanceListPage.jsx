import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { AdvanceContext } from '../../context/AdvanceContext'
import { PageContext } from '../../context/PageContext'
import RejectAdvanceListHeader from '../../Components/Advance/RejectAdvanceListHeader'
import RejectAdvanceList from '../../Components/Advance/RejectAdvanceList'

const RejectAdvanceListPage = () => {
    const {id,setId,setIsAuthenticated}=useContext(AuthContext)
    const {rejectAdvanceDatas}=useContext(AdvanceContext)
    const [rejectAdvanceList, setRejectAdvanceList] = useState(null);
    const {handlePrevPage} = useContext(PageContext)
    
    useEffect(()=>{
      
        if (id !==0) {
            (async()=>{
                try{
                    handlePrevPage(location.pathname)
                    let data = await rejectAdvanceDatas();
                    console.log(data)
                    setRejectAdvanceList(data);
                    console.log(rejectAdvanceList)
                }catch(error){}
            })();
        }else{
            const storedEmployeeId = localStorage.getItem("id");
            if (storedEmployeeId) {
                setId(parseInt(storedEmployeeId))
            }
        }

    },[id])
    console.log(rejectAdvanceList);
  return (
    <>
    <div className="main-content" id="panel">
        <RejectAdvanceListHeader />
        <div className="container-fluid mt--6">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <RejectAdvanceList rejectAdvanceList={rejectAdvanceList} setRejectAdvanceList={setRejectAdvanceList}  />
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default RejectAdvanceListPage