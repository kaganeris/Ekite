import React, { useContext, useEffect, useState } from "react";
import EmployeeAllList from "../../Components/Employee/EmloyeeAllList";
import { EmployeeContext } from "../../context/EmployeeContext";
import EmployeeAllListHeader from "../../Components/Employee/EmployeeAllListHeader";
import { PageContext } from "../../context/PageContext";
import { AuthContext } from "../../context/AuthContext";
const AllListEmployeePage = () => {
  const [allListEmployee, setAllListEmployee] = useState(null);
  const { getAllEmployee, setEmployeeID } = useContext(EmployeeContext);
  const { handlePrevPage } = useContext(PageContext);
  const { id, setId } = useContext(AuthContext);

  useEffect(() => {
    if (id !== 0) {
      (async () => {
        try {
          let employeeList = await getAllEmployee(id);
          handlePrevPage(location.pathname);
          setAllListEmployee(employeeList);
        } catch (error) {}
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
        <EmployeeAllListHeader />
        <div className="container-fluid mt--6">
          <div className="row">
            <div className="col">
              <div className="card">
                <EmployeeAllList
                  allListEmployee={allListEmployee}
                  setEmployeeID={setEmployeeID}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllListEmployeePage;
