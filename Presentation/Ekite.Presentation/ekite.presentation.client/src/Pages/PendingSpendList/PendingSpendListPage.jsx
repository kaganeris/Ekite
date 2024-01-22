import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from '../../context/PageContext';
import { AuthContext } from '../../context/AuthContext';
import PendingSpendList from "../../Components/Spend/PendingSpendList";
import PendingSpendListHeader from "../../Components/Spend/PendingSpendListHeader";
import { SpendContext } from "../../context/SpendContext";




const PendingSpendListPage = () => {
    const { id, setId, setIsAuthenticated } =
        useContext(AuthContext);
    const { pendingSpendDatas } = useContext(SpendContext)
    const [pendingSpendList, setPendingSpendList] = useState(null);
    const { handlePrevPage } = useContext(PageContext)
    useEffect(() => {
        if (id !== 0) {
            (async () => {
                try {
                    handlePrevPage(location.pathname)
                    let data = await pendingSpendDatas();
                    setPendingSpendList(data);
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
                <PendingSpendListHeader />
                <div className="container-fluid mt--6">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <PendingSpendList pendingSpendList={pendingSpendList} setPendingSpendList={setPendingSpendList} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default PendingSpendListPage;