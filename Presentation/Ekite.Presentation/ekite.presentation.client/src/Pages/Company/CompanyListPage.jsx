import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import CompanyList from "../../components/Company/CompanyList";
import { CompanyContext } from "../../context/CompanyContext";
import CompanyHeader from "../../components/Company/CompanyHeader";
import { PageContext } from "../../context/PageContext";

const CompanyListPage = () => {
  const { id, setId } = useContext(AuthContext);
  const [companyData, setCompanyData] = useState(null)
    const {getCompanies} = useContext(CompanyContext)
    const { handlePrevPage } = useContext(PageContext)

  useEffect(() => {
    console.log("CompanylistPage çalıştı");
    if (id !== 0) {
      (async () => {
        try {
          handlePrevPage(location.pathname);
          let data = await getCompanies();
          console.log(data);
          setCompanyData(data);
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
                <CompanyHeader />
                <div className="container-fluid mt--6">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <CompanyList companyData={companyData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
};

export default CompanyListPage;
