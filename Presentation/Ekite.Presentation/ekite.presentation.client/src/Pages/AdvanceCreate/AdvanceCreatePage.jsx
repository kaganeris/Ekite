import React, { useContext, useEffect, useState } from "react";
import { AdvanceContext } from "../../context/AdvanceContext";
import AdvanceCreate from "../../Components/AdvanceCreate/AdvanceCreate";
import { AuthContext } from "../../context/AuthContext";

const AdvanceCreatePage = () => {
  const { getEnums } = useContext(AdvanceContext);
  const [enumsType, setEnumsType] = useState(null);
  const { employeeId, setEmployeeId, setIsAuthenticated } =
    useContext(AuthContext);

  useEffect(() => {
    console.log("advancePage çalıştı");
    if (employeeId !== 0) {
      (async () => {
        try {
          let data = await getEnums();
          setEnumsType(data);
        } catch (error) {}
      })();
    } else {
      const storedEmployeeId = localStorage.getItem("employeeId");
      if (storedEmployeeId) {
        setEmployeeId(parseInt(storedEmployeeId));
      }
    }
  }, [employeeId]);

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
