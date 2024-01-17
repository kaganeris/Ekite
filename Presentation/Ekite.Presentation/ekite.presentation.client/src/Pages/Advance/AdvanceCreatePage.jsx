import React, { useContext, useEffect, useState } from "react";
import { AdvanceContext } from "../../context/AdvanceContext";
import AdvanceCreate from "../../Components/Advance/AdvanceCreate";
import { AuthContext } from "../../context/AuthContext";
import { PageContext } from "../../context/PageContext";
const AdvanceCreatePage = () => {
    const { getEnums } = useContext(AdvanceContext);
    const [enumsType, setEnumsType] = useState(null);
    const { id, setId, setIsAuthenticated } =
        useContext(AuthContext);
    const { handlePrevPage } = useContext(PageContext)

    useEffect(() => {
        console.log("advancePage çalıştı");
        if (id !== 0) {
            (async () => {
                try {
                    handlePrevPage(location.pathname)
                    let data = await getEnums();
                    setEnumsType(data);
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
        <div className="main-content">
            <div className="container mt-4 ">
                <div className="row ">
                    <div className="col ">
                        <AdvanceCreate enumsType={enumsType} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvanceCreatePage;
