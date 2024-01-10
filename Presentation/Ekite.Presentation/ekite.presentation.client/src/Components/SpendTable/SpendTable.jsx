import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext"
import {SpendContext} from "../../context/SpendContext"

const SpendTable = ({ spendList }) => {
  const { employeeId } = useContext(AuthContext);
  const {deleteSpend, setUpdateSpendId,updateSpendId}= useContext(SpendContext)

  const navigate = useNavigate();
  useEffect(() => {
    console.log("Spend Table çalıştı.", spendList);
  }, []);

  const handleDeleteSpend = async (spendId) => {
    try {
      console.log(spendId);
      let data = await deleteSpend(spendId);

      console.log(data);
    } catch (error) {}
  };

  const handleUpdateSpend = async (spendId) => {
    setUpdateSpendId(spendId)
    navigate("/updatespend")
  }

  

  return (
    <div className="table-responsive">
      {spendList && (
        <table className="table align-items-center table-dark table-flush">
          <thead className="thead-dark">
            <tr>
              <th scope="col" className="sort" data-sort="budget">
                Harcama Türü
              </th>
              <th scope="col" className="sort" data-sort="budget">
                 Tutar
              </th>
              <th scope="col" className="sort" data-sort="budget">
                Para Birimi
              </th>
              <th scope="col" className="sort" data-sort="status">
                Onay Durumu
              </th>
              <th scope="col" className="sort" data-sort="completion">
                Talep Edilme Tarihi
              </th>
              <th scope="col" className="sort" data-sort="completion">
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
                    <i className="bg-warning"></i>
                    <span className="status">{spend.approvalStatus}</span>
                  </span>
                </td>
                <td>{spend.createdDate}</td>
                <td>{spend.updatedDate}</td>
                {spend.approvalStatus === "Bekleniyor" ? (
                  <td className="text-right">
                    <a
                      className="btn btn-outline-primary"
                      onClick={() => handleUpdateSpend(spend.id)}

                    >
                      Güncelle
                    </a>
                  </td>
                ) : (
                  <td></td>
                )}
                  {spend.approvalStatus === "Bekleniyor" ? (
                  <td className="text-right">
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
