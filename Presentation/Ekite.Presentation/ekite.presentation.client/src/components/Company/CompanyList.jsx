import React, { useContext, useEffect } from "react";
import { CompanyContext } from "../../context/CompanyContext";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

const CompanyList = ({ companyData }) => {
  const { setCompanyId } = useContext(CompanyContext);
  const{darkMode} = useContext(ThemeContext)
  const navigate = useNavigate()

  const handleCompanyLeaves = (companyId) => {
    setCompanyId(companyId);
    navigate("/companyLeaves")
  };

  const handleCompanyAdvances = (companyId) => {
    setCompanyId(companyId);
    navigate("/companyAdvances")
  };

  const handleCompanySpends = (companyId) => {
    setCompanyId(companyId);
    navigate("/companySpends")
  };

  return (
    <div className="table-responsive">
      {companyData && (
        <table className={darkMode? "table align-items-center table-dark text-black table-flush":"table align-items-center bg-dark text-white table-flush"}>
        <thead className={darkMode ? "thead-dark" : "bg-dark"}>
            <tr>
              <th scope="col" className="sort">
                Şirket Adı
              </th>
              <th scope="col" className="sort">
                Çalışan Sayısı
              </th>
              <th scope="col" className="sort">
                Tüm İzinler
              </th>
              <th scope="col" className="sort">
                Tüm Avanslar
              </th>
              <th scope="col" className="sort">
                Tüm Harcamalar
              </th>
            </tr>
          </thead>
          <tbody className="list">
            {companyData.map((company, index) => (
              <tr key={index}>
                <td className="budget">{company.name}</td>
                <th scope="row">{company.employeeCount}</th>

                <td className="" style={{ paddingRight: "0px" }}>
                  <a
                    className="btn btn-outline-primary"
                    onClick={() => handleCompanyLeaves(company.id)}
                  >
                    İzinler
                  </a>
                </td>
                <td className="" style={{ paddingRight: "0px" }}>
                  <a
                    className="btn btn-outline-primary"
                    onClick={() => handleCompanyAdvances(company.id)}
                  >
                    Avanslar
                  </a>
                </td>
                <td className="" style={{ paddingRight: "0px" }}>
                  <a
                    className="btn btn-outline-primary"
                    onClick={() => handleCompanySpends(company.id)}
                  >
                    Harcamalar
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CompanyList;
