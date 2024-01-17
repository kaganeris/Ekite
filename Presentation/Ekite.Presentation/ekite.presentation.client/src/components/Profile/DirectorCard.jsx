import React, { useContext, useEffect, useRef, useState } from "react";
import { ProfileContext } from "../../context/ProfileContext";
import { LeaveContext } from "../../context/LeaveContext";
import AuthService from "../../services/AuthService";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function DirectorCard({ profileData, pendingLeaveList, setPendingLeaveList }) {
  const { loading } = useContext(ProfileContext);
  const { rejectLeaveProcess, approveLeaveProcess } = useContext(LeaveContext);
  const numberPage = useRef(0);
  const getNumber = useRef(1);
  const [copyPendingLeaveList, setCopyPendingLeaveList] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const { darkMode } = useContext(ThemeContext);
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

  const handleOperation = (id, result) => {
    const updatedLeaveList = pendingLeaveList.filter(
      (leave) => leave.id !== id
    );

    setPendingLeaveList(updatedLeaveList);

    if (result) {
      try {
        (async () => {
          await approveLeaveProcess(id);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "İzin Başarıyla Onaylandı",
            showConfirmButton: false,
            timer: 2000,
          });
          setTimeout(() => {}, 2000);
        })();
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "İzin Onaylama İşlemi Başarısız",
        });
      }
    } else {
      try {
        (async () => {
          await rejectLeaveProcess(id);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "İzin Başarıyla Reddedildi",
            showConfirmButton: false,
            timer: 2000,
          });
          setTimeout(() => {}, 2000);
        })();
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "İzin Reddetme İşlemi Başarısız",
        });
      }
    }
  };

  useEffect(() => {
    setCopyPendingLeaveList(pendingLeaveList.slice(0, 5));

    console.log(copyPendingLeaveList);
  }, [pendingLeaveList]);

  const handleList = (page, bool) => {
    console.log("page", page);
    console.log("getNumber.current ", getNumber.current);
    console.log("pendingLeaveList", Math.ceil(pendingLeaveList.length / 5));
 

    const totalNumberOfPages = Math.ceil(pendingLeaveList.length / 5);

    if (
      bool === true &&
      getNumber.current <= Math.floor(pendingLeaveList.length / 5) 
        && activePage < totalNumberOfPages 
    ) {
      getNumber.current += 1;
      setActivePage(page);
      console.log("next çalıştı");
    } else if (
      bool === false &&
      getNumber.current >= Math.floor(pendingLeaveList.length / 5) &&
      getNumber.current !== 1
    ) {
      getNumber.current -= 1;
      setActivePage(page);

      console.log("Previous çalıştı");
    } else if (bool === undefined) {
      console.log("default çalıştı");
      setActivePage(page);

      getNumber.current = page;
    }
    numberPage.current = getNumber.current * 5;
    setCopyPendingLeaveList(
      pendingLeaveList.slice(numberPage.current - 5, numberPage.current)
    );
  };

  return (
    <>
      {copyPendingLeaveList && (
        <div className={darkMode ? "card" : "card bg-dark"}>
          <div
            className={
              darkMode
                ? "card-header border-0"
                : "card-header border-0 bg-dark "
            }
          >
            <div className="row align-items-center">
              <div className="col">
                <h3 className={darkMode ? "mb-0" : "mb-0 text-white"}>
                  İzin İstekleri
                </h3>
              </div>
              <div className="col text-right">
                <Link to={"/pendingLeaveList"} className="btn btn-sm btn-primary">
                  Hepsini Gör
                </Link>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table
              className={
                darkMode
                  ? "table align-items-center table-flush"
                  : "table align-items-center bg-dark"
              }
            >
              <thead className={darkMode ? "thead-light" : "bg-dark"}>
                <tr className={darkMode ? "" : "text-white"}>
                  <th scope="col">Adı Soyadı</th>
                  <th scope="col">Başlangıç</th>
                  <th scope="col">Bitiş</th>
                  <th scope="col">Gün</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {copyPendingLeaveList.map((leave, index) => (
                  <tr key={index} className={darkMode ? "" : "text-white"}>
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
                          paddingTop: "2px",
                        }}
                        onClick={() => handleOperation(leave.id, true)}
                      >
                        <i className="ni ni-check-bold"></i>
                      </a>
                      <a
                        className="btn btn-outline-danger"
                        style={{
                          padding: "0px 5px",
                          paddingTop: "2px",
                          fontSize: "15px",
                        }}
                        onClick={() => handleOperation(leave.id, false)}
                      >
                        <i
                          className="ni ni-fat-remove"
                          style={{ margin: "auto" }}
                        ></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div
              className={
                darkMode ? "card-footer py-4" : "card-footer py-4 bg-dark"
              }
            >
              <nav aria-label="...">
                <ul className="pagination justify-content-end mb-0">
                  <li className="page-item">
                    <a
                      className={`page-link ${
                        activePage === 1 ? "disabled" : ""
                      }`}
                      onClick={() => {
                        if (
                          getNumber.current >=
                          Math.floor(pendingLeaveList.length / 5)
                        ) {
                          handleList(activePage - 1, false);
                        }
                      }}
                    >
                      <i className="fas fa-angle-left"></i>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  {pendingLeaveList.map(
                    (item, index) =>
                      index % 5 === 0 && (
                        <li
                          key={index}
                          className={`page-item ${
                            Math.floor(index / 5) + 1 === activePage
                              ? "active"
                              : ""
                          }`}
                        >
                          <input
                            type="button"
                            value={`${Math.floor(index / 5) + 1}`}
                            className="page-link"
                            onClick={() => handleList(index / 5 + 1)}
                          />
                        </li>
                      )
                  )}

                  <li className="page-item">
                    <a
                      className={`page-link ${
                        activePage === Math.ceil(pendingLeaveList.length / 5)
                          ? "disabled"
                          : ""
                      }`}
                      onClick={() => {
                        if (
                          getNumber.current <=
                          Math.floor(pendingLeaveList.length / 5)
                        ) {
                          handleList(activePage + 1, true);
                        }
                        // setActivePage(activePage + 1);
                      }}
                    >
                      <i className="fas fa-angle-right"></i>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}

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

export default DirectorCard;
