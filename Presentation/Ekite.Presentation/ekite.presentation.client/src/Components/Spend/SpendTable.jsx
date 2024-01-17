import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { SpendContext } from "../../context/SpendContext";
import Swal from "sweetalert2";

const SpendTable = ({ spendList }) => {
  const { id } = useContext(AuthContext);
  const { deleteSpend, setUpdateSpendId, updateSpendId } =
    useContext(SpendContext);
  const navigate = useNavigate();
  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const formattedDate = new Intl.DateTimeFormat("tr-TR").format(date);
    return formattedDate;
  };

  useEffect(() => {
    console.log("Spend table çalıştı:  ", spendList);
    if (spendList && spendList.length === 0) {
      Swal.fire({
        title:
          "Harcama talebiniz bulunamadı. Harcama girişi yapmak ister misiniz?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Evet",
        denyButtonText: `Hayır`,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/createspend");
        } else {
          navigate("/home");
        }
      });
    } else {
    }
  }, [spendList]);

  const handleDeleteSpend = async (spendId) => {
    try {
      await Swal.fire({
        title: "Harcama talebini silmek istediğine emin misin?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Sil",
        denyButtonText: `İptal`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          let data = await deleteSpend(spendId);

          Swal.fire({
            title: "Silme İşlemi Başarılı",
            icon: "success",
            showConfirmButton: false,
          });

          setTimeout(() => {
            location.reload();
          }, 2000);
        }
      });
    } catch (error) {}
  };

  const handleUpdateSpend = async (spendId) => {
    setUpdateSpendId(spendId);
    navigate("/updatespend");
  };

  return (
    
    <div className="table-responsive">
    
      {spendList && (
        <table className="table align-items-center table-dark table-flush">
          <thead className="thead-dark">
            <tr>
              <th scope="col" className="sort">
                Harcama Türü
              </th>
              <th scope="col" className="sort">
                Tutar
              </th>
              <th scope="col" className="sort">
                Para Birimi
              </th>
              <th scope="col" className="sort">
                Onay Durumu
              </th>
              <th scope="col" className="sort">
                Fatura Dosyası
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
            {spendList.map((spend, index) => (
              <tr key={index}>
                <td className="budget">{spend.spendType}</td>
                <td className="budget">{spend.amount}</td>
                <td scope="row">{spend.currency}</td>
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

                <td>
                  <a
                    className="btn btn-outline-primary text-white"
                    href={spend.imagePath}
                    target="_blank"
                  >
                    Görüntüle
                  </a>
                </td>
                <td>{formatDate(spend.createdDate)}</td>
                {spend.approvedDate ? (
                  <td>{formatDate(spend.approvedDate)}</td>
                ) : (
                  <td></td>
                )}
                {spend.approvalStatus === "Bekleniyor" ? (
                  <td className="text-right" style={{paddingRight: '0px'}} >
                    <a
                      className="btn btn-outline-primary"
                      onClick={() => handleUpdateSpend(spend.id)}
                    >
                      Düzenle
                    </a>
                  </td>
                ) : (
                  <td></td>
                )}

                {spend.approvalStatus === "Bekleniyor" ? (
                  <td className="text-right" style={{paddingLeft:'0px'}}>
                    <a
                      className="btn btn-outline-danger"
                      onClick={() => handleDeleteSpend(spend.id)}
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

export default SpendTable;
