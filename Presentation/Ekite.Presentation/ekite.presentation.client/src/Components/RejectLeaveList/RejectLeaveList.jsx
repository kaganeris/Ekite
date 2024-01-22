import React, { useContext } from 'react'
import { LeaveContext } from '../../context/LeaveContext';
import Swal from 'sweetalert2';

const RejectLeaveList = ({rejectLeaveList,setRejectLeaveList}) => {

const{approveLeaveProcess} = useContext(LeaveContext)
  
  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const formattedDate = new Intl.DateTimeFormat("tr-TR").format(date);
    return formattedDate;
  };

  console.log("rejectLeaveList",rejectLeaveList)

  const handleOperation = (id) => {
    const updatedLeaveList = rejectLeaveList.filter(
      (leave) => leave.id !== id
    );
    setRejectLeaveList(updatedLeaveList);


    try {
      approveLeaveProcess(id);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "İzin Başarıyla Onaylandı",
        showConfirmButton: false,
        timer: 2000,
      });
      setTimeout(() => {}, 2000)
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "İzin Onaylama İşlemi Başarısız",
      });
    }
    
  };

  return (
     <div className="table-responsive">
    {rejectLeaveList && (
              <table className="table align-items-center bg-dark text-white table-flush">
        <thead className="thead-dark">
          <tr>
          <th scope="col" className="sort">
              Ad Soyad
            </th>
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
              İşlem Tarihi
            </th>                  
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className="list">
          {rejectLeaveList.map((leave, index) => (
            <tr key={index}>
              <td>{leave.fullName}</td>
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
              {leave.approvalStatus === "Reddedildi" ? (
                <td className="text-right" style={{ paddingLeft: '0px' }} >
                  
                  <a
                    className="btn btn-outline-primary "
                    onClick={() => handleOperation(leave.id)}
                    >
                    Onayla
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
  
}

export default RejectLeaveList