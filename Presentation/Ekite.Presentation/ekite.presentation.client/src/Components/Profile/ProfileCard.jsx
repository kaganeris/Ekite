import React, { useContext, useEffect } from "react";
import { ProfileContext } from "../../context/ProfileContext";
import { LeaveContext } from "../../context/LeaveContext";
import AuthService from "../../services/AuthService";

function ProfileCard({ profileData, pendingLeaveList, setPendingLeaveList}) {
  const { loading } = useContext(ProfileContext);
  const { rejectLeaveProcess,approveLeaveProcess} = useContext(LeaveContext);
  if (loading) {
    return <div>Yükleniyor</div>;
  }

  const birthDate = new Date(profileData.birthDate);
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthDate.getFullYear();

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const formattedDate = new Intl.DateTimeFormat("tr-TR").format(date);
    return formattedDate;
  };

  const handleOperation =  (id, result) => {

    const updatedLeaveList = pendingLeaveList.filter(
      (leave) => leave.id !== id
    );
    setPendingLeaveList(updatedLeaveList);
 
if(result)
{
   approveLeaveProcess(id);
}
else{

  rejectLeaveProcess(id);
}

  };

  return (
    <>
      <div className="card">
        <div className="card-header border-0">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="mb-0">İzin İstekleri</h3>
            </div>
            <div className="col text-right">
              <a href="#!" className="btn btn-sm btn-primary">
                Hepsini Gör
              </a>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table align-items-center table-flush">
            <thead className="thead-light">
              <tr>
                <th scope="col">Adı Soyadı</th>
                <th scope="col">Başlangıç</th>
                <th scope="col">Bitiş</th>
                <th scope="col">Gün</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {pendingLeaveList.map((leave, index) => (
                <tr key={index}>
                  <th scope="row">{leave.fullName}</th>
                  <td>{formatDate(leave.leaveStartDate)}</td>
                  <td>{formatDate(leave.leaveEndDate)}</td>
                  <td>{leave.day}</td>
                  <td className="text-right">
                    <a
                      className="btn btn-outline-primary"
                      style={{
                        marginLeft: "-30px",
                        padding: "0px 5px",
                        fontSize: "15px",
                      }}
                      onClick={() => handleOperation(leave.id, true)}
                    >
                      <i className="ni ni-check-bold"></i>
                    </a>
                    <a
                      className="btn btn-outline-danger"
                      style={{ padding: "0px 5px", fontSize: "15px" }}
                      onClick={() => handleOperation(leave.id, false)}
                    >
                      <i className="ni ni-fat-remove"></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* <img
                src="https://ekitedepo.blob.core.windows.net/yeni/img-1-1000x600.jpg"
                alt="#"
                className="card-img-top"
            />
            <div className="row justify-content-center">
                <div className="col-lg-3 order-lg-2">
                    <div className="card-profile-image">
                        <a href="/">
                            <img
                                src={profileData.imagePath}
                                className="rounded-circle"
                                alt="#"
                            />
                        </a>

                    </div>
                </div>
            </div>
            <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">

            </div>
            <div className="card-body pt-0">

                <div className="text-center mt-5">
                    <h5 className="h3">
                        {profileData.fullName}
                        <span className="font-weight-light">, {age}</span>
                    </h5>
                    <div className="h5 font-weight-300">
                        <i className="ni location_pin mr-2"></i>{profileData.address}
                    </div>
                    <div className="h5 mt-4">
                        <i className="ni business_briefcase-24 mr-2"></i>{profileData.jobName}
                    </div>
                    <div>
                        <i className="ni education_hat mr-2"></i>{profileData.companyName}
                    </div>
                </div>
            </div> */}
    </>
  );
}

export default ProfileCard;
