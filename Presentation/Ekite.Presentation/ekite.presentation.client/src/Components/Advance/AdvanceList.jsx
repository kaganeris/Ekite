import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdvanceContext } from "../../context/AdvanceContext";
import Swal from "sweetalert2";
import { useEffect } from "react";

const AdvanceList = ({ advanceList }) => {
  const { setUpdateAdvanceId, deleteAdvance } = useContext(AdvanceContext);
  const navigate = useNavigate();

    const formatDate = (inputDate) => {
        const date = new Date(inputDate);
        const formattedDate = new Intl.DateTimeFormat("tr-TR").format(date);
        return formattedDate;
    }


  const handleUpdateAdvance = (id) => {
    setUpdateAdvanceId(id);
    navigate("/updateAdvance");
  };

  const handleDeleteAdvance = (id) => {
      deleteAdvance(id);

      Swal.fire({
          title: "Avans talebini silmek istediğine emin misin?",
          showDenyButton: true,
          showCancelButton: false,
          confirmButtonText: "Sil",
          denyButtonText: `İptal`
      }).then((result) => {
          if (result.isConfirmed) {
              deleteAdvance(id);
              Swal.fire({
                  title: "Silme İşlemi Başarılı",
                  icon: "success",
                  showConfirmButton: false,                  
              });
              setTimeout(() => {
                  location.reload();
              }, 2000)
          } 
      })
    } 


    useEffect(() => {
        if (advanceList && advanceList.length === 0) {
            Swal.fire({
                title: "Avans talebiniz bulunamadı. Avans girişi yapmak ister misiniz?",
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: "Evet",
                denyButtonText: `Hayır`
            }).then(async (result) => {
                if (result.isConfirmed) {
                    navigate("/createAdvance");
                } else {
                    navigate("/home");
                }
            });
        } else { }
    }, [advanceList])

  return (
    <div className="table-responsive">
      {advanceList && (
        <table className="table align-items-center table-dark table-flush">
          <thead className="thead-dark">
            <tr>
              <th scope="col" className="sort">
                Avans Türü
              </th>
              <th scope="col" className="sort">
                Açıklama
              </th>
              <th scope="col" className="sort">
                Miktar
              </th>
              <th scope="col" className="sort">
                Para Birimi
              </th>
              <th scope="col" className="sort">
                Onay Durumu
              </th>
              <th scope="col" className="sort">
                Talep Edilme Tarihi
              </th>
              <th scope="col" className="sort">
                Onaylanma Tarihi
              </th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className="list">
            {advanceList.map((advance, index) => (
              <tr key={index}>
                <td>{advance.advanceType}</td>
                <td>{advance.description}</td>
                <td>{advance.amount}</td>
                <td>{advance.currency}</td>
                <td>
                  <span className="badge badge-dot mr-4">
                    <i
                      className={
                        advance.approvalStatus === "Bekleniyor"
                          ? "bg-warning"
                          : advance.approvalStatus === "Reddedildi"
                          ? "bg-danger"
                          : "bg-success"
                      }
                    ></i>
                    <span className="status">{advance.approvalStatus}</span>
                  </span>
                </td>
                    <td>{formatDate(advance.createdDate)}</td>
                    {advance.approvalDate ? (
                  <td>{formatDate(advance.approvalDate)}</td>
                ) : (
                  <td></td>
                )}

                {advance.approvalStatus === "Bekleniyor" ? (
                  <td className="text-right" style={{ paddingRight: '0px' }}>
                    <a
                      className="btn btn-outline-primary"
                      
                      onClick={() => handleUpdateAdvance(advance.id)}
                    >
                      Düzenle
                    </a>
                  </td>
                ) : (
                  <td></td>
                )}
                {advance.approvalStatus === "Bekleniyor" ? (
                  <td className="text-right" style={{ paddingLeft: '2px' }}>
                    <a
                      className="btn btn-outline-danger"
                      onClick={() => handleDeleteAdvance(advance.id)}
                    >
                      Sil
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

export default AdvanceList;
