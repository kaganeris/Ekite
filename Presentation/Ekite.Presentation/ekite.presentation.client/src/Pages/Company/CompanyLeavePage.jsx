import React, { useContext, useEffect, useState } from 'react'
import CompanyLeaveHeader from '../../components/Company/CompanyLeaveHeader'
import CompanyLeaveList from '../../components/Company/CompanyLeaveList'
import { CompanyContext } from '../../context/CompanyContext';

const CompanyLeavePage = () => {

    const [companyLeavesData, setCompanyLeavesData] = useState(null);
  const { getCompanyLeaves, companyId } = useContext(CompanyContext);

  useEffect(() => {
    console.log("CompanylistPage çalıştı");
    (async () => {
      try {
        let data = await getCompanyLeaves(companyId);
        console.log(data);
        setCompanyLeavesData(data);
      } catch (error) {}
    })();
  }, []);

  return (
    <>
      <div className="main-content" id="panel">
        <CompanyLeaveHeader />
        <div className="container-fluid mt--6">
          <div className="row">
            <div className="col">
              <div className="card">
                <CompanyLeaveList companyLeavesData={companyLeavesData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CompanyLeavePage