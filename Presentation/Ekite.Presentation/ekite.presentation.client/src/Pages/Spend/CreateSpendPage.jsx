import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { SpendContext } from '../../context/SpendContext';
import CreateSpend from '../../Components/Spend/CreateSpend'
import { PageContext } from "../../context/PageContext";


const CreateSpendPage = () => {
    const { id, setId, setIsAuthenticated } = useContext(AuthContext);
    const [spendTypes, setSpendTypes] = useState(null);
    const [currencyTypes, setCurrencyTypes] = useState(null);
    const { getSpendType, getCurrencyType } = useContext(SpendContext);
    const { handlePrevPage } = useContext(PageContext)

    useEffect(() => {
        if (id !== 0) {
            (async () => {
                try {
                    handlePrevPage(location.pathname)
                    let typeData = await getSpendType();
                    setSpendTypes(typeData);

                    let currencyData = await getCurrencyType();

                    setCurrencyTypes(currencyData);

                    console.log(typeData, currencyData)
                } catch (error) {
                    console.log(error);
                }
            })()
        } else {
            const storedEmployeeId = localStorage.getItem("id");
            if (storedEmployeeId) {
                setId(parseInt(storedEmployeeId));
            }
        }
    }, [id])

    return (
        <div className="main-content">
            <div className="container mt-4 ">
                <div className="row ">
                    <div className="col ">
                        <CreateSpend spendTypes={spendTypes} currencyTypes={currencyTypes} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateSpendPage