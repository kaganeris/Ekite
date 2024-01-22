import React, { useContext, useEffect, useState } from 'react'
import RejectSpendList from "../../Components/Spend/RejectSpendList";
import RejectSpendListHeader from "../../Components/Spend/RejectSpendListHeader";
import { AuthContext } from '../../context/AuthContext';
import { PageContext } from '../../context/PageContext';
import { SpendContext } from "../../context/SpendContext";


const RejectSpendListPage = () => {
    const { id, setId, setIsAuthenticated } =
        useContext(AuthContext);
    const { rejectSpendDatas } = useContext(SpendContext)
    const [rejectSpendList, setRejectSpendList] = useState(null);
    const { handlePrevPage } = useContext(PageContext)

    useEffect(() => {
        if (id !== 0) {
            (async () => {
                try {
                    handlePrevPage(location.pathname)
                    let data = await rejectSpendDatas();                    
                    setRejectSpendList(data);
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
                <RejectSpendListHeader />
                <div className="container-fluid mt--6">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <RejectSpendList rejectSpendList={rejectSpendList} setRejectSpendList={setRejectSpendList} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default RejectSpendListPage