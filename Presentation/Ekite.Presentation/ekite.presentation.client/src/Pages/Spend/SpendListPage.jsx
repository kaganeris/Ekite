import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { SpendContext } from "../../context/SpendContext";
import SpendHeader from "../../Components/Spend/SpendHeader";
import SpendTable from "../../Components/Spend/SpendTable";
import { PageContext } from "../../context/PageContext";

const SpendListPage = () => {

    const { id, setId, setIsAuthenticated } = useContext(AuthContext);
    const { SpendDatas } = useContext(SpendContext);

    const [spendData, setSpendData] = useState();
    const { handlePrevPage } = useContext(PageContext)


    useEffect(() => {
        if (id !== 0) {

            (async () => {
                try {
                    handlePrevPage(location.pathname)
                    let data = await SpendDatas(id);

                    console.log(data);
                    setSpendData(data);
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
                <SpendHeader />
                <div className="container-fluid mt--6">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <SpendTable spendList={spendData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SpendListPage;
