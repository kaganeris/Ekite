import React, { useContext } from "react";
import { SpendContext } from "../../context/SpendContext";
import Swal from "sweetalert2";
import { ThemeContext } from "../../context/ThemeContext";

const ApprovedSpendList = ({ approvedSpendList, setApprovedSpendList }) => {
  const { rejectSpendProcess } = useContext(SpendContext);
  const { darkMode } = useContext(ThemeContext);

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const formattedDate = new Intl.DateTimeFormat("tr-TR").format(date);
    return formattedDate;
  };

  const handleOperation = (id) => {
    const updatedSpendList = approvedSpendList.filter(
      (spend) => spend.id !== id
    );
    setApprovedSpendList(updatedSpendList);

    try {
      rejectSpendProcess(id);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Harcama Başarıyla Reddedildi",
        showConfirmButton: false,
        timer: 2000,
      });
      setTimeout(() => {}, 2000);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Harcama Reddetme işlemi Başarısız",
      });
    }
  };

  return (
    <div className="table-responsive">
      {approvedSpendList && (
        <table
          className={
            darkMode
              ? "table align-items-center table-dark text-black table-flush"
              : "table align-items-center bg-dark text-white table-flush"
          }
        >
          <thead className={darkMode ? "thead-dark" : "bg-dark"}>
            <tr>
              <th scope="col" className="sort">
                Ad Soyad
              </th>
              <th scope="col" className="sort" data-sort="budget">
                Onay Durumu
              </th>
              <th scope="col" className="sort" data-sort="completion">
                Harcama Tipi
              </th>
              <th scope="col" className="sort" data-sort="name">
                Tutar
              </th>
              <th scope="col" className="sort" data-sort="status">
                Para Birimi
              </th>
              <th scope="col" className="sort" data-sort="completion">
                Fatura
              </th>

              <th scope="col" className="sort" data-sort="completion">
                Açıkklama
              </th>
              <th scope="col" className="sort" data-sort="completion">
                Onaylanma Tarihi
              </th>

              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className="list">
            {approvedSpendList.map((spend, index) => (
              <tr key={index}>
                <td>{spend.fullName}</td>
                <td>
                  <span className="badge badge-dot mr-4">
                    <i
                      className={
                        spend.approvalStatus === "Bekleniyor"
                          ? "bg-warning"
                          : spend.approvalStatus === "Reddedildi"
                          ? "bg-danger"
                          : "bg-success"
                      }
                    ></i>

                    <span className="status">{spend.approvalStatus}</span>
                  </span>
                </td>
                <td className="budget">{spend.spendType}</td>
                <td className="budget">{spend.price}</td>
                <td className="budget">{spend.currency}</td>
                <td>
                  <a
                    className="btn btn-outline-primary text-white"
                    href={spend.imagePath}
                    target="_blank"
                  >
                    Görüntüle
                  </a>
                </td>

                <td className="budget">{spend.description}</td>

                {spend.approvedDate ? (
                  <td>{formatDate(spend.approvedDate)}</td>
                ) : (
                  <td></td>
                )}
                {spend.approvalStatus === "Onaylandı" ? (
                  <td className="text-right" style={{ paddingLeft: "0px" }}>
                    <a
                      className="btn btn-outline-danger "
                      onClick={() => handleOperation(spend.id, false)}
                    >
                      Reddet
                    </a>
                  </td>
                ) : (
                  <td></td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ApprovedSpendList;
