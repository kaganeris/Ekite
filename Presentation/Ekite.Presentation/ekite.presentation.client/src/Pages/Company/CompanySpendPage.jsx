import React, { useContext, useEffect, useState } from 'react'
import { CompanyContext } from '../../context/CompanyContext';
import CompanySpendList from '../../components/Company/CompanySpendList';
import CompanySpendHeader from '../../components/Company/CompanySpendHeader';

const CompanySpendPage = () => {

    const [companySpendsData, setCompanySpendsData] = useState(null);
  const { getCompanySpends, companyId } = useContext(CompanyContext);

  useEffect(() => {
    console.log("CompanylistPage çalıştı");
    (async () => {
      try {
        let data = await getCompanySpends(companyId);
        console.log(data);
        setCompanySpendsData(data);
      } catch (error) {}
    })();
  }, []);

  return (
    <>
      <div className="main-content" id="panel">
        <CompanySpendHeader />
        <div className="container-fluid mt--6">
          <div className="row">
            <div className="col">
              <div className="card">
                <CompanySpendList companySpendsData={companySpendsData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CompanySpendPage