import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../../context/ThemeContext';

const CompanySpendList = ({companySpendsData}) => {
  const {darkMode} = useContext(ThemeContext)

    useEffect(() => {
        console.log("Company Advance List çalıştı",companySpendsData);
    },[companySpendsData])

    const formatDate = (inputDate) => {
        const date = new Date(inputDate);
        const formattedDate = new Intl.DateTimeFormat("tr-TR").format(date);
        return formattedDate;
      };


  return (
    <div className="table-responsive">
      {companySpendsData && (
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
                Harcama Türü
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
              <th scope="col" className="sort" >
                Fatura
              </th>
            </tr>
          </thead>
          <tbody className="list">
            {companySpendsData.map((companySpend, index) => (
              <tr key={index}>
                <td className="budget">{companySpend.fullName}</td>
                <td className="budget">{companySpend.companyName}</td>
                <th scope="row">{companySpend.spendType}</th>
                <td className="budget">{companySpend.description}</td>
                <td className="budget">{companySpend.price}</td>
                <td className="budget">{companySpend.currency}</td>
                <td>
                  <span className="badge badge-dot mr-4">
                    <i
                      className={
                        companySpend.approvalStatus === "Bekleniyor"
                          ? "bg-warning"
                          : companySpend.approvalStatus === "Reddedildi"
                          ? "bg-danger"
                          : "bg-success"
                      }
                    ></i>

                    <span className="status">{companySpend.approvalStatus}</span>
                  </span>
                </td>
                <td className="budget">{formatDate(companySpend.createdDate)}</td>
                {companySpend.approvedDate ? (
                  <td>{formatDate(companySpend.approvedDate)}</td>
                ) : (
                  <td></td>
                )}
                <td>
                  <a
                    className="btn btn-outline-primary text-white"
                    href={companySpend.imagePath}
                    target="_blank"
                  >
                    Görüntüle
                  </a>
                </td>
              </tr>
              
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default CompanySpendList