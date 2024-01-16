import React, { useContext } from 'react'
import { LeaveContext } from '../../context/LeaveContext';

const PendingLeaveList = ({pendingLeaveList,setPendingLeaveList}) => {
  const { rejectLeaveProcess, approveLeaveProcess } = useContext(LeaveContext);

    const formatDate = (inputDate) => {
        const date = new Date(inputDate);
        const formattedDate = new Intl.DateTimeFormat("tr-TR").format(date);
        return formattedDate;
      };


      const handleOperation = (id, result) => {
        const updatedLeaveList = pendingLeaveList.filter(
          (leave) => leave.id !== id
        );
    
        setPendingLeaveList(updatedLeaveList);
    
        if (result) {
          approveLeaveProcess(id);
        } else {
          rejectLeaveProcess(id);
        }
      };

console.log(pendingLeaveList)

  return (
    <div className="table-responsive">
      {pendingLeaveList && (
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
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className="list">
            {pendingLeaveList.map((leave, index) => (
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
                {leave.approvalStatus === "Bekleniyor" ? (
                  <td className="text-right" style={{ paddingRight: '0px' }} >
                    <a
                      className="btn btn-outline-primary"
                      onClick={() => handleOperation(leave.id, true)}
                      >
                      Onayla
                    </a>
                  </td>
                ) : (
                  <td></td>
                )}
                {leave.approvalStatus === "Bekleniyor" ? (
                  <td className="text-right" style={{ paddingLeft: '0px' }} >
                    
                    <a
                      className="btn btn-outline-danger "
                      onClick={() => handleOperation(leave.id, false)}
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
}

export default PendingLeaveList