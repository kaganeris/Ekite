import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { PageContext } from '../../context/PageContext';
import { AdvanceContext } from '../../context/AdvanceContext';

import ApprovedAdvanceList from '../../Components/Advance/ApprovedAdvanceList';
import ApprovedAdvanceListHeader from '../../Components/Advance/ApprovedAdvanceListHeader'

const ApprovedAdvanceListPage = () => {
    const {id,setId,setIsAuthenticated}= useContext(AuthContext);
    const {approvedAdvanceDatas} = useContext(AdvanceContext);
    const [approvedAdvanceList, setApprovedAdvanceList]= useState(null);
    const { handlePrevPage } = useContext(PageContext)

    useEffect(()=>{
        if(id !==0){
            (async()=>{
                try{
                    console.log(location);
                    //sayfa yenileme işi.
                    handlePrevPage(location.pathname)
                    let data= await approvedAdvanceDatas();
                    setApprovedAdvanceList(data);
                }catch(error){

                }
            })();
        }else{
            const storedEmployeeId= localStorage.getItem("id");
            if(storedEmployeeId){
                setId(parseInt(storedEmployeeId))
            }
        }
    },[id])


  return (
    <>
    <div className="main-content" id="panel">
        <ApprovedAdvanceListHeader />
        <div className="container-fluid mt--6">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <ApprovedAdvanceList approvedAdvanceList={approvedAdvanceList} setApprovedAdvanceList={setApprovedAdvanceList}  />
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default ApprovedAdvanceListPage