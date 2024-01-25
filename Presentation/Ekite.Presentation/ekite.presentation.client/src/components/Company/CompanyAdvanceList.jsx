import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../../context/ThemeContext';

const CompanyAdvanceList = ({companyAdvancesData}) => {
  const {darkMode} = useContext(ThemeContext)

    useEffect(() => {
        console.log("Company Advance List çalıştı",companyAdvancesData);
    },[companyAdvancesData])

    const formatDate = (inputDate) => {
        const date = new Date(inputDate);
        const formattedDate = new Intl.DateTimeFormat("tr-TR").format(date);
        return formattedDate;
      };


  return (
    <div className="table-responsive">
      {companyAdvancesData && (
       <table className={darkMode? "table align-items-center table-dark text-black table-flush":"table align-items-center bg-dark text-white table-flush"}>
       <thead className={darkMode ? "thead-dark" : "bg-dark"}>
            <tr>
              <th scope="col" className="sort" >
                Çalışan Adı
              </th>
              <th scope="col" className="sort" >
                Çalışan Şirketi
              </th>
              <th scope="col" className="sort" >
                Avans Türü
              </th>
              <th scope="col" className="sort" >
                Açıklama
              </th>
              <th scope="col" className="sort" >
                Miktar
              </th>
              <th scope="col" className="sort" >
                Para Birimi
              </th>
              <th scope="col" className="sort" >
                Onay Durumu
              </th>
              <th scope="col" className="sort" >
                Talep Edilme Tarihi
              </th>
              <th scope="col" className="sort" >
                İşlem Tarihi
              </th>
            </tr>
          </thead>
          <tbody className="list">
            {companyAdvancesData.map((companyAdvance, index) => (
              <tr key={index}>
                <td className="budget">{companyAdvance.fullName}</td>
                <td className="budget">{companyAdvance.companyName}</td>
                <th scope="row">{companyAdvance.advanceType}</th>
                <td className="budget">{companyAdvance.description}</td>
                <td className="budget">{companyAdvance.amount}</td>
                <td className="budget">{companyAdvance.currency}</td>
                <td>
                  <span className="badge badge-dot mr-4">
                    <i
                      className={
                        companyAdvance.approvalStatus === "Bekleniyor"
                          ? "bg-warning"
                          : companyAdvance.approvalStatus === "Reddedildi"
                          ? "bg-danger"
                          : "bg-success"
                      }
                    ></i>

                    <span className="status">{companyAdvance.approvalStatus}</span>
                  </span>
                </td>
                <td className="budget">{formatDate(companyAdvance.createdDate)}</td>
                {companyAdvance.approvalDate ? (
                  <td>{formatDate(companyAdvance.approvalDate)}</td>
                ) : (
                  <td></td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default CompanyAdvanceList