import { CreateNewFolderSharp } from "@mui/icons-material";
import React, { useState } from "react";
import CreateEmployeeHeader from "../../Components/Employee/CreateEmployeeHeader";
import EmployeeInfoForm from "../../Components/Employee/EmployeeInfoForm";
import EmployeeContactForm from "../../Components/Employee/EmployeeContactForm";
import EmployeeWorkInfo from "../../Components/Employee/EmployeeWorkInfo";

const CreateEmployeePage = () => {
  const [activeFormNumber, setActiveFormNumber] = useState(0);

  return (
    <div className="main-content">
      <CreateEmployeeHeader  activeFormNumber={activeFormNumber}/>
      <div className="container mt-4 ">
        <div className="row ">
          <div className="col ">
           
            { activeFormNumber === 0 ? <EmployeeInfoForm  setActiveFormNumber={setActiveFormNumber}  /> : activeFormNumber === 1 ? <EmployeeContactForm activeFormNumber={activeFormNumber} setActiveFormNumber={setActiveFormNumber} /> :  <EmployeeWorkInfo activeFormNumber={activeFormNumber} setActiveFormNumber={setActiveFormNumber} /> }
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployeePage;
