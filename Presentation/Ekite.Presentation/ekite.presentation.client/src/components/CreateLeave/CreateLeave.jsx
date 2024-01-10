import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { LeaveContext } from "../../context/LeaveContext";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2"
const CreateLeave = ({ leaveTypes }) => {
  const [leaveStartDate, setLeaveStartDate] = useState("");
  const [leaveEndDate, setLeaveEndDate] = useState("");
  const [leaveType, setLeaveType] = useState(1);
  const { createLeave } = useContext(LeaveContext);
    const { employeeId } = useContext(AuthContext)
    const navigate = useNavigate();
    const [error, setError] = useState("");
 
  const handleAddleave = async (e) => {
    e.preventDefault()
    if (leaveEndDate && leaveStartDate && leaveType) {
        const leaveData = {
          leaveType: leaveType,
          leaveStartDate: leaveStartDate,
          leaveEndDate: leaveEndDate,
          employeeId: employeeId,
        };
        const formData = new FormData();
        formData.append('leaveType', leaveType);
        formData.append('leaveStartDate', leaveStartDate);
        formData.append('leaveEndDate', leaveEndDate);
        formData.append('employeeId', employeeId);
        console.log(leaveData);

        let data = await createLeave(formData);
        console.log("data",data)

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "İzin Talebi Oluşturuldu",
            showConfirmButton: false,
            timer: 2000
        });
        setTimeout(() => {

            navigate("/leaves")
        }, 2000)
     
    }
      else{
        Swal.fire({
            icon: "error",
            title: "İzin Talebi Başarısız",
            text: "Tüm Bilgileri Eksiksiz Doldurun",
        });
      }
    }

    useEffect(() => {
        console.log("Leave type",leaveType);
        console.log("leave end date",leaveEndDate);
        console.log("leave start date",leaveStartDate);
        console.log("employee id",employeeId);
    },[leaveType,leaveEndDate,leaveStartDate])

  return (
    <div className="card">
      <div className="card-header">
        <div className="row align-items-center">
          <div className="col-8">
            <h3 className="mb-0">İzin Oluştur </h3>
          </div>
        </div>
      </div>
      <div className="card-body">
        <form onSubmit={handleAddleave} encType="multipart/form-data">
          <div className="pl-lg-4">
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label
                    className="form-control-label"
                    htmlFor="input-username"
                  >
                    İzin Türü
                  </label>
                  {leaveTypes && (
                    <select
                      className="form-control"
                      onChange={(e) => setLeaveType(e.target.value)}
                      value={leaveType}
                    >
                      {leaveTypes.map((leaveType) => {
                        return (
                          <option value={leaveType.leaveTypeNo}>
                            {leaveType.leaveTypeName}
                          </option>
                        );
                      })}
                    </select>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label
                    className="form-control-label"
                    htmlFor="input-first-name"
                  >
                    İzin Başlangıç Tarihi
                  </label>
                  <input
                    type="date"
                    id="input-first-name"
                    className="form-control"
                    onChange={(e) => setLeaveStartDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label
                    className="form-control-label"
                    htmlFor="input-leave-end"
                  >
                    İzin Bitiş Tarihi
                  </label>
                  <input
                    type="date"
                    id="input-leave-end"
                    className="form-control"
                    onChange={(e) => setLeaveEndDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="main-content">
            <div className="container">
              <div className="row justify-content-end">
                <div className="col-auto ">
                  <input
                    type="submit"
                    value="Kaydet"
                    className="btn btn-m btn-primary"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateLeave;
