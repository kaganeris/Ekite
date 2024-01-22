import React, { useContext, useEffect, useState } from 'react';
import { SpendContext } from "../../context/SpendContext";
import { AuthContext } from '../../context/AuthContext';
import { PageContext } from '../../context/PageContext';
import ApprovedSpendListHeader from "../../Components/Spend/ApprovedSpendListHeader";
import ApprovedSpendList from "../../Components/Spend/ApprovedSpendList";

const ApprovedSpendListPage = () => {

    const { id, setId, setIsAuthenticated } =
        useContext(AuthContext);
    const { approvedSpendDatas } = useContext(SpendContext)
    const [approvedSpendList, setApprovedSpendList] = useState(null);
    const { handlePrevPage } = useContext(PageContext)

    useEffect(() => {
        if (id !== 0) {
            (async () => {
                try {
                    handlePrevPage(location.pathname)
                    let data = await approvedSpendDatas();
                    setApprovedSpendList(data);
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
                <ApprovedSpendListHeader />
                <div className="container-fluid mt--6">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <ApprovedSpendList approvedSpendList={approvedSpendList} setApprovedSpendList={setApprovedSpendList} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );


}

export default ApprovedSpendListPage