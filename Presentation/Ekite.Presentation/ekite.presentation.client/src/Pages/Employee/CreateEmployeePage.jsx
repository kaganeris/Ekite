import React, { useContext, useEffect, useState } from "react";
import CreateEmployeeHeader from "../../Components/Employee/CreateEmployeeHeader";
import EmployeeInfoForm from "../../Components/Employee/EmployeeInfoForm";
import EmployeeContactForm from "../../Components/Employee/EmployeeContactForm";
import EmployeeWorkInfo from "../../Components/Employee/EmployeeWorkInfo";

const CreateEmployeePage = () => {
  const [activeFormNumber, setActiveFormNumber] = useState(0);
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    secondName: "",
    secondLastName: "",
    birthDate: null,
    tcno: "",
    birthPlace: "",
    uploadPath: null,
  });
  const [personalContact, setPersonalContact] = useState({
    phoneNumber: "",
    city: "",
    district: "",
    adressDetail: "",
  });

  return (
    <div className="main-content">
      <CreateEmployeeHeader activeFormNumber={activeFormNumber} />
      <div className="container mt-4 ">
        <div className="row ">
          <div className="col ">
            {activeFormNumber === 0 ? (
              <EmployeeInfoForm
                personalInfo={personalInfo}
                setPersonalInfo={setPersonalInfo}
                setActiveFormNumber={setActiveFormNumber}
              />
            ) : activeFormNumber === 1 ? (
              <EmployeeContactForm
              personalContact={personalContact}
              setPersonalContact={setPersonalContact}
                activeFormNumber={activeFormNumber}
                setActiveFormNumber={setActiveFormNumber}
              />
            ) : (
              <EmployeeWorkInfo
              personalInfo ={personalInfo}
                activeFormNumber={activeFormNumber}
                setActiveFormNumber={setActiveFormNumber}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployeePage;
