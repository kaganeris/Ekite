import React, { useContext, useEffect, useState } from "react";
import { LeaveContext } from "../../context/LeaveContext";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateLeave = ({ leaveTypes }) => {
    const [leaveStartDate, setLeaveStartDate] = useState("");
    const [leaveEndDate, setLeaveEndDate] = useState("");
    const [leaveType, setLeaveType] = useState(1);
    const navigate = useNavigate();

    const { updateLeave, updateLeaveId, getLeave } = useContext(LeaveContext);
    const { employeeId } = useContext(AuthContext);

    const handleUpdateLeave = async (e) => {
        e.preventDefault()
        if (leaveEndDate && leaveStartDate && leaveType) {

            const formData = new FormData();
            formData.append('id', updateLeaveId);
            formData.append('leaveType', leaveType);
            formData.append('leaveStartDate', leaveStartDate);
            formData.append('leaveEndDate', leaveEndDate);
            let data = await updateLeave(formData);
            console.log("data", data)

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "İzin Başarıyla Güncellendi",
                showConfirmButton: false,
                timer: 2000
            });
            setTimeout(() => {

                navigate("/leaves")
            }, 2000)
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Güncelleme İşlemi Başarısız",
                text: "Tüm Bilgileri Eksiksiz Doldurun",
            });
        }
    }


    useEffect(() => {
        (async () => {
            try {
                let updateLeaveData = await getLeave(updateLeaveId);

                let startDate = new Date(updateLeaveData.leaveStartDate);
                let endDate = new Date(updateLeaveData.leaveEndDate);

                let formattedStartDate = `${startDate.getFullYear()}-${String(startDate.getMonth() + 1).padStart(2, "0")}-${String(startDate.getDate()).padStart(2, "0")}`;
                let formattedEndDate = `${endDate.getFullYear()}-${String(endDate.getMonth() + 1).padStart(2, "0")}-${String(endDate.getDate()).padStart(2, "0")}`;

                setLeaveStartDate(formattedStartDate);
                setLeaveEndDate(formattedEndDate)
                setLeaveType(updateLeaveData.leaveType)
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);


    return (
        <div className="card">
            <div className="card-header">
                <div className="row align-items-center">
                    <div className="col-8">
                        <h3 className="mb-0">İzin Güncelle </h3>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <form onSubmit={handleUpdateLeave} encType="multipart/form-data">
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
                                        value={leaveStartDate}
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
                                        value={leaveEndDate}
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
                                        value="Güncelle"
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

export default UpdateLeave;
