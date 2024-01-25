import React, { useContext, useEffect, useState } from "react";
import { CompanyContext } from "../../context/CompanyContext";
import CompanyHeader from "../../components/Company/CompanyHeader";
import CompanyAdvanceList from "../../components/Company/CompanyAdvanceList";
import CompanyAdvanceHeader from "../../components/Company/CompanyAdvanceHeader";

const CompanyAdvancePage = () => {
  const [companyAdvancesData, setCompanyAdvancesData] = useState(null);
  const { getCompanyAdvances, companyId } = useContext(CompanyContext);

  useEffect(() => {
    console.log("CompanylistPage çalıştı");
    (async () => {
      try {
        let data = await getCompanyAdvances(companyId);
        console.log(data);
        setCompanyAdvancesData(data);
      } catch (error) {}
    })();
  }, []);

  return (
    <>
      <div className="main-content" id="panel">
        <CompanyAdvanceHeader />
        <div className="container-fluid mt--6">
          <div className="row">
            <div className="col">
              <div className="card">
                <CompanyAdvanceList companyAdvancesData={companyAdvancesData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyAdvancePage;
