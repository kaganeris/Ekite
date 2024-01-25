import React, { useContext, useEffect, useState } from "react";
import CreateEmployeeHeader from "../../Components/Employee/CreateEmployeeHeader";
import EmployeeInfoForm from "../../Components/Employee/EmployeeInfoForm";
import EmployeeContactForm from "../../Components/Employee/EmployeeContactForm";
import EmployeeWorkInfo from "../../Components/Employee/EmployeeWorkInfo";
import { EmployeeContext } from "../../context/EmployeeContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const CreateEmployeePage = () => {
  const { createEmployee } = useContext(EmployeeContext);
  const navigate = useNavigate();
  const [activeFormNumber, setActiveFormNumber] = useState(0);
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    secondName: "",
    secondLastName: "",
    birthDate: null,
    tCNO: "",
    birthPlace: "",
    uploadPath: null,
  });

  const [personalContact, setPersonalContact] = useState({
    phoneNumber: "",
    city: "Adana",
    district: "",
    adressDetail: "",
  });

  const [personalWork, setPersonalWork] = useState({
    jobId: 1,
    departmentId: 1,
    companyId: 1,
    salary: 0,
    hireDate: null,
  });

  const [personelData, setPersonelData] = useState(null);

  useEffect(() => {
    setPersonelData(Object.assign(personalInfo, personalContact, personalWork));
    console.log("personeldata", personelData);
  }, [personalInfo, personalContact, personalWork]);

  const submitEmployeeData = async (e) => {
    e.preventDefault();
    if (personelData !== null) {
      try {
        console.log("personel Data", personelData);
        const formData = new FormData();
        formData.append("firstName", personelData.firstName);
        formData.append("lastName", personelData.lastName);
        formData.append("secondName", personelData.secondName);
        formData.append("secondLastName", personelData.secondLastName);
        formData.append("birthDate", personelData.birthDate);
        formData.append("tCNO", personelData.tCNO);
        formData.append("birthPlace", personelData.birthPlace);
        formData.append("uploadPath", personelData.uploadPath);
        formData.append("phoneNumber", personelData.phoneNumber);
        formData.append("city", personelData.city);
        formData.append("district", personelData.district);
        formData.append("addressDetail", personelData.adressDetail);
        formData.append("jobId", Number(personelData.jobId));
        formData.append("departmentId", Number(personelData.departmentId));
        formData.append("companyId", Number(personelData.companyId));
        formData.append("salary", personelData.salary);
        formData.append("hireDate", personelData.hireDate);
        formData.append("imagePath", null);
        let data = await createEmployee(formData);
        if (data === "Başarılı") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Çalışan Başarıyla Oluşturuldu",
            showConfirmButton: false,
            timer: 2000,
          });
          setTimeout(() => {
            navigate("/home");
          }, 2000);
        } else {
          let errorsArray = data.map((element, index) => {
            return element + (index < data.length - 1 ? "<br/>" : "");
          });

          let errors = errorsArray.join("");

          Swal.fire({
            icon: "error",
            title: "Çalışan Oluşturma Başarısız",
            html: errors,
            confirmButtonText: "Tamam",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Tüm Bilgiler Doldurulmalıdır!",
          confirmButtonText: "Tamam",
        });
      }
    }
  };

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
                personalWork={personalWork}
                setPersonalWork={setPersonalWork}
                activeFormNumber={activeFormNumber}
                setActiveFormNumber={setActiveFormNumber}
                submitEmployeeData={submitEmployeeData}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployeePage;
