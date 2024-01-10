import React, { useContext, useEffect, useState } from "react";
import { AdvanceContext } from "../../context/AdvanceContext";
import { AuthContext } from "../../context/AuthContext";
import AdvanceUpdate from "../../Components/AdvanceUpdate/AdvanceUpdate";

const AdvanceUpdatePage = () => {
  const { getEnums, updateAdvanceId, getAdvanceById } =
    useContext(AdvanceContext);
  const { employeeId, setEmployeeId, setIsAuthenticated, isAuthenticated } =
    useContext(AuthContext);

  const [enumsType, setEnumsType] = useState(null);
  const [advance, setAdvance] = useState(null);

  useEffect(() => {
    if (employeeId !== 0) {
      (async () => {
        try {
          let enumData = await getEnums();
          let updateAdvanceData = await getAdvanceById(updateAdvanceId);
          setEnumsType(enumData);
          setAdvance(updateAdvanceData);
          setProfileData(data);
        } catch (error) {}
      })();
    } else {
      const storedEmployeeId = localStorage.getItem("employeeId");
      if (storedEmployeeId) {
        setEmployeeId(parseInt(storedEmployeeId));
      }
    }
  }, []);

  return (
    <>
      {advance && (
        <div className="main-content">
          <div className="container mt-5  ">
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
