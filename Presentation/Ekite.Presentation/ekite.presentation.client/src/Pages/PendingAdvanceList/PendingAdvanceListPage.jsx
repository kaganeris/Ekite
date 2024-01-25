import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AdvanceContext } from '../../context/AdvanceContext'
import { PageContext } from '../../context/PageContext'
import { AuthContext } from '../../context/AuthContext'
import PendingAdvanceListHeader from '../../Components/Advance/PendingAdvanceListHeader'
import PendingAdvanceList from '../../Components/Advance/PendingAdvanceList'


const PendingAdvanceListPage = () => {
    const {id,setId, setIsAuthenticated}= useContext(AuthContext)
    const {pendingAdvanceDatas} =useContext(AdvanceContext)
    const [pendingAdvanceList, setPendingAdvanceList]=useState(null);
    const {handlePrevPage} = useContext(PageContext);

    useEffect(()=>{
        if (id !==0) {
            (async()=>{
                try{
                    handlePrevPage(location.pathname)
                    let data = await pendingAdvanceDatas();
                    setPendingAdvanceList(data);

                }catch{
                    
                }
            })();

        }else{
            const storedEmployeeId=localStorage.getItem("id");
            if(storedEmployeeId){
                setId(parseInt(storedEmployeeId));
            }
        }
    },[id])

  return (
        <>
        <div className='main-content' id='panel' >
            <PendingAdvanceListHeader />
            <div className='container-fluid mt--6'>
            <div className="row">
                <div className="col">
                    <div className="card">
                    <PendingAdvanceList pendingAdvanceList={pendingAdvanceList} setPendingAdvanceList={setPendingAdvanceList} />
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
  )
}

export default PendingAdvanceListPage