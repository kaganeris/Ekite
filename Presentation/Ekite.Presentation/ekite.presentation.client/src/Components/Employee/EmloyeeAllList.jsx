import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

const EmloyeeAllList = ({ allListEmployee, setEmployeeID }) => {
  const { darkMode } = useContext(ThemeContext);
  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const formattedDate = new Intl.DateTimeFormat("tr-TR").format(date);
    return formattedDate;
  };

  const navigate = useNavigate();

  const handleDetailEmployee = (id) => {
    if (id > 0) {
      setEmployeeID(id);
      navigate("/employeeProfileDetail");
    }
  };

  return (
    <div className="table-responsive">
      {allListEmployee && (
        <table
          className={
            darkMode
              ? "table align-items-center table-dark text-black table-flush"
              : "table align-items-center bg-dark text-white table-flush"
          }
        >
          <thead className={darkMode ? "thead-dark" : "bg-dark"}>
            <tr>
              <th scope="col" className="sort">
                Ad Soyad
              </th>
              <th scope="col" className="sort" data-sort="budget">
                Doğum Tarihi
              </th>
              <th scope="col" className="sort" data-sort="completion">
                Doğum Yeri
              </th>
              <th scope="col" className="sort" data-sort="name">
                Meslek
              </th>
              <th scope="col" className="sort" data-sort="status">
                Departman
              </th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className="list">
            {allListEmployee.map((employee, index) => (
              <tr key={index}>
                <td>{employee.fullName}</td>
                <td className="budget">{formatDate(employee.birthDate)}</td>
                <td className="budget">{employee.birthPlace}</td>
                <td className="budget">{employee.job}</td>
                <td className="budget">{employee.department}</td>
                <td  >
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => handleDetailEmployee(employee.employeeID)}
                  >
                    Detay
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmloyeeAllList;
