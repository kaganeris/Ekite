import React, { useContext, useEffect, useState } from 'react'
import {AdvanceContext} from '../../context/AdvanceContext'
import { AuthContext } from '../../context/AuthContext';
import AdvanceList from '../../Components/Advance/AdvanceList';
import AdvanceHeader from '../../Components/Advance/AdvanceHeader';

const AdvanceListPage = () => {

    const {getAdvanceList} = useContext(AdvanceContext)
    const { employeeId, setEmployeeId, setIsAuthenticated } =
    useContext(AuthContext);

    const [advanceList,setAdvanceList] = useState(null);

    useEffect(() => {
        if (employeeId !== 0) {
          (async () => {
            try {
              let data = await getAdvanceList(employeeId);
              console.log(data);
              setAdvanceList(data);
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
      <AdvanceHeader />
      <div className="container-fluid mt--6">
        <div className="row">
          <div className="col">
            <div className="card">
              <AdvanceList advanceList={advanceList}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default AdvanceListPage