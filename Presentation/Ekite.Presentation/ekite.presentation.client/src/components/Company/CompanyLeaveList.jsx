import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../../context/ThemeContext';

const CompanyLeaveList = ({companyLeavesData}) => {
  const {darkMode} = useContext(ThemeContext)

    useEffect(() => {
        console.log("Company Advance List çalıştı",companyLeavesData);
    },[companyLeavesData])

    const formatDate = (inputDate) => {
        const date = new Date(inputDate);
        const formattedDate = new Intl.DateTimeFormat("tr-TR").format(date);
        return formattedDate;
      };


  return (
    <div className="table-responsive">
      {companyLeavesData && (
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
                İzin Türü
              </th>
              <th scope="col" className="sort" >
                Gün
              </th>
              <th scope="col" className="sort" >
                Onay Durumu
              </th>
              <th scope="col" className="sort" >
                İzin Başlangıç Tarihi
              </th>
              <th scope="col" className="sort" >
              İzin Bitiş Tarihi
              </th>
              <th scope="col" className="sort" >
                İşlem Tarihi
              </th>
            </tr>
          </thead>
          <tbody className="list">
            {companyLeavesData.map((companyLeave, index) => (
              <tr key={index}>
                <td className="budget">{companyLeave.fullName}</td>
                <td className="budget">{companyLeave.companyName}</td>
                <th scope="row">{companyLeave.leaveType}</th>
                <td className="budget">{companyLeave.day}</td>
                <td>
                  <span className="badge badge-dot mr-4">
                    <i
                      className={
                        companyLeave.approvalStatus === "Bekleniyor"
                          ? "bg-warning"
                          : companyLeave.approvalStatus === "Reddedildi"
                          ? "bg-danger"
                          : "bg-success"
                      }
                    ></i>

                    <span className="status">{companyLeave.approvalStatus}</span>
                  </span>
                </td>
                <td className="budget">{formatDate(companyLeave.leaveStartDate)}</td>
                <td className="budget">{formatDate(companyLeave.leaveEndDate)}</td>
                {companyLeave.approvalDate ? (
                  <td>{formatDate(companyLeave.approvalDate)}</td>
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

export default CompanyLeaveList