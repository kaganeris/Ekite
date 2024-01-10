import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdvanceContext } from "../../context/AdvanceContext";

const AdvanceList = ({ advanceList }) => {
  const { setUpdateAdvanceId, deleteAdvance } = useContext(AdvanceContext);
  const navigate = useNavigate();

  const handleUpdateAdvance = (id) => {
    setUpdateAdvanceId(id);
    navigate("/updateAdvance");
  };

  const handleDeleteAdvance = (id) => {
    deleteAdvance(id);
  } 

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
                <td>{advance.createdDate}</td>
                <td>{advance.approvalDate}</td>

                {advance.approvalStatus === "Bekleniyor" ? (
                  <td className="text-right">
                    <a
                      className="btn btn-outline-primary"
                      onClick={() => handleUpdateAdvance(advance.id)}
                    >
                      Güncelle
                    </a>
                  </td>
                ) : (
                  <td></td>
                )}
                {advance.approvalStatus === "Bekleniyor" ? (
                  <td className="text-right">
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
