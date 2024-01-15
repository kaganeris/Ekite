import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { LeaveContext } from "../../context/LeaveContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const LeaveTable = ({ leaveList }) => {
  const { id } = useContext(AuthContext);
  const { deleteLeave, setUpdateLeaveId, updateLeaveId } =
    useContext(LeaveContext);
  const navigate = useNavigate();

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const formattedDate = new Intl.DateTimeFormat("tr-TR").format(date);
    return formattedDate;
  };

  useEffect(() => {
    console.log("Leave Table çalıştı.", leaveList);
    if (leaveList && leaveList.length === 0) {
      Swal.fire({
        title: "İzin talebiniz bulunamadı. İzin girişi yapmak ister misiniz?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Evet",
        denyButtonText: `Hayır`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          navigate("/addLeave");
        } else {

          navigate("/");

        }
      });
    } else {
    }
  }, [leaveList]);

  const handleDeleteLeave = async (leaveId) => {
    try {
      await Swal.fire({
        title: "İzin talebini silmek istediğine emin misin?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Sil",
        denyButtonText: `İptal`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          let data = await deleteLeave(leaveId);
          console.log("delete", data);

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

  const handleUpdateLeave = async (leaveId) => {
    setUpdateLeaveId(leaveId);
    navigate("/updateLeave");
  };

  return (
    <div className="table-responsive">
      {leaveList && (
        <table className="table align-items-center table-dark table-flush">
          <thead className="thead-dark">
            <tr>
              <th scope="col" className="sort" data-sort="budget">
                İzin Türü
              </th>
              <th scope="col" className="sort" data-sort="name">
                Gün
              </th>
              <th scope="col" className="sort" data-sort="status">
                Onay Durumu
              </th>
              <th scope="col" className="sort" data-sort="completion">
                İzin Başlangıç Tarihi
              </th>
              <th scope="col" className="sort" data-sort="completion">
                İzin Bitiş Tarihi
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
            {leaveList.map((leave, index) => (
              <tr key={index}>
                <td className="budget">{leave.leaveType}</td>
                <th scope="row">{leave.day}</th>
                <td>
                  <span className="badge badge-dot mr-4">

                    <i
                      className={
                        leave.approvalStatus === "Bekleniyor"
                          ? "bg-warning"
                          : leave.approvalStatus === "Reddedildi"
                          ? "bg-danger"
                          : "bg-success"
                      }
                    ></i>

                    <span className="status">{leave.approvalStatus}</span>
                  </span>
                </td>
                <td>{formatDate(leave.leaveStartDate)}</td>
                <td>{formatDate(leave.leaveEndDate)}</td>
                <td>{formatDate(leave.createdDate)}</td>
                {leave.approvedDate ? (
                  <td>{formatDate(leave.approvedDate)}</td>
                ) : (
                  <td></td>
                )}

                {leave.approvalStatus === "Bekleniyor" ? (
                  <td className="text-right" style={{ paddingRight: '0px' }} >
                    
                    <a
                      className="btn btn-outline-primary"
                      onClick={() => handleUpdateLeave(leave.id)}
                    >
                      Düzenle
                    </a>
                 
                  </td>
                ) : (
                  <td></td>
                )}
                {leave.approvalStatus === "Bekleniyor" ? (
                  <td className="text-right" style={{ paddingLeft: '0px' }} >
                    
                    <a
                      className="btn btn-outline-danger "
                      
                      onClick={() => handleDeleteLeave(leave.id)}
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

export default LeaveTable;
