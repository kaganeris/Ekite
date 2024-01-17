import React, { useContext, useEffect, useState } from "react";
import { AdvanceContext } from "../../context/AdvanceContext";
import { AuthContext } from "../../context/AuthContext";
import AdvanceUpdate from "../../Components/Advance/AdvanceUpdate";
import { PageContext } from "../../context/PageContext";

const AdvanceUpdatePage = () => {
    const { getEnums, updateAdvanceId, getAdvanceById } =
        useContext(AdvanceContext);
    const { id, setId, setIsAuthenticated, isAuthenticated } =
        useContext(AuthContext);

    const [enumsType, setEnumsType] = useState(null);
    const [advance, setAdvance] = useState(null);
    const { handlePrevPage } = useContext(PageContext)

    useEffect(() => {
        if (id !== 0) {
            (async () => {
                try {
                    handlePrevPage(location.pathname)
                    let enumData = await getEnums();
                    let updateAdvanceData = await getAdvanceById(updateAdvanceId);
                    setEnumsType(enumData);
                    setAdvance(updateAdvanceData);
                    setProfileData(data);
                } catch (error) { }
            })();
        } else {
            const storedEmployeeId = localStorage.getItem("id");
            if (storedEmployeeId) {
                setId(parseInt(storedEmployeeId));
            }
        }
    }, []);

    return (
        <>
            {advance && (
                <div className="main-content">
                    <div className="container mt-4  ">
                        <div className="row ">
                            <div className="col ">
                                <AdvanceUpdate
                                    enumsType={enumsType}
                                    advance={advance}
                                    updateAdvanceId={updateAdvanceId}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AdvanceUpdatePage;
