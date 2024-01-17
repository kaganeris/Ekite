import React, { useContext, useEffect, useState } from "react";
import LeaveTable from "../../components/Leave/LeaveTable";
import LeaveHeader from "../../components/Leave/LeaveHeader";
import { AuthContext } from "../../context/AuthContext";
import { LeaveContext } from "../../context/LeaveContext";
import { PageContext } from "../../context/PageContext";

const LeaveListPage = () => {
    const { id, setId, setIsAuthenticated } =
        useContext(AuthContext);
    const [leaveData, setLeaveData] = useState(null)

    const { LeaveDatas } = useContext(LeaveContext)
    const { handlePrevPage } = useContext(PageContext)

    useEffect(() => {
        console.log("LeavePage çalıştı");
        if (id !== 0) {
            (async () => {
                try {
                    handlePrevPage(location.pathname)
                    let data = await LeaveDatas(id);
                    console.log(data);
                    setLeaveData(data);
                } catch (error) { }
            })();
        } else {
            const storedEmployeeId = localStorage.getItem("id");
            if (storedEmployeeId) {
                setId(parseInt(storedEmployeeId));
            }
        }
    }, [id]);

    return (
        <>
            <div className="main-content" id="panel">
                <LeaveHeader />
                <div className="container-fluid mt--6">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <LeaveTable leaveList={leaveData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LeaveListPage;
