import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { JobContext } from "../../context/JobContext";
import { DepartmentContext } from "../../context/DepartmentContext";
import { CompanyContext } from "../../context/CompanyContext";

const EmployeeWorkInfo = ({
  setActiveFormNumber,
  activeFormNumber,
  setPersonalWork,
  personalWork,
  submitEmployeeData,
}) => {
  const { darkMode } = useContext(ThemeContext);
  const [jobs, setJobs] = useState(null);
  const [companies, setCompanies] = useState(null);
  const [departments, setDepartments] = useState(null);
  const { getJobs } = useContext(JobContext);
  const { getDepartments } = useContext(DepartmentContext);
  const { getCompanies } = useContext(CompanyContext);

  const handleHireDate = (e) => {
    const selectedDate = new Date(e.target.value);
    setPersonalWork((prevInfo) => ({
      ...prevInfo,
      hireDate: selectedDate.toISOString().split("T")[0],
    }));
  };

  //MAAŞA YE SADECE SAYI GİRMESİNİ SAĞLIYOR
  const handleSalaryChange = (e) => {
    const sanitizedValue = e.target.value.replace(/[^\d]/g, "");
    setPersonalWork((prevInfo) => ({
      ...prevInfo,
      salary: sanitizedValue,
    }));
  };

  useEffect(() => {
    (async () => {
      let jobData = await getJobs();
      setJobs(jobData);
      let departmentData = await getDepartments();
      setDepartments(departmentData);
      let companyData = await getCompanies();
      setCompanies(companyData);
      console.log("department data", departmentData);
    })();
  }, []);

  return (
    <div className={darkMode ? "card" : "card bg-dark"}>
      <div className={darkMode ? "card-header" : "card-header bg-dark"}>
        <div className="row align-items-center">
          <div className="col-8">
            <h3 className={darkMode ? "mb-0" : "mb-0 text-white"}>
              Pozisyon Bilgileri
            </h3>
          </div>
        </div>
      </div>
      <div className="card-body">
        <form onSubmit={submitEmployeeData} encType="multipart/form-data">
          <div className="pl-lg-4">
            <div className="row">
              <div className="col-lg-4">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                    htmlFor="input-company"
                  >
                    Şirket
                  </label>
                  {companies && (
                    <select
                      className={
                        darkMode
                          ? "form-control"
                          : "form-control bg-secondary text-dark"
                      }
                      onChange={(e) =>
                        setPersonalWork((prevInfo) => ({
                          ...prevInfo,
                          companyId: e.target.value,
                        }))
                      }
                      value={personalWork.companyId}
                    >
                      {companies.map((company) => {
                        return (
                          <option value={company.id}>{company.name}</option>
                        );
                      })}
                    </select>
                  )}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                    htmlFor="input-department"
                  >
                    Departman
                  </label>
                  {departments && (
                    <select
                      className={
                        darkMode
                          ? "form-control"
                          : "form-control bg-secondary text-dark"
                      }
                      onChange={(e) =>
                        setPersonalWork((prevInfo) => ({
                          ...prevInfo,
                          departmentId: e.target.value,
                        }))
                      }
                      value={personalWork.departmentId}
                    >
                      {departments.map((department) => {
                        return (
                          <option value={department.id}>
                            {department.name}
                          </option>
                        );
                      })}
                    </select>
                  )}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                    htmlFor="input-job"
                  >
                    Meslek
                  </label>
                  {jobs && (
                    <select
                      className={
                        darkMode
                          ? "form-control"
                          : "form-control bg-secondary text-dark"
                      }
                      onChange={(e) =>
                        setPersonalWork((prevInfo) => ({
                          ...prevInfo,
                          jobId: e.target.value,
                        }))
                      }
                      value={personalWork.jobId}
                    >
                      {jobs.map((job) => {
                        return <option value={job.id}>{job.name}</option>;
                      })}
                    </select>
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                    htmlFor="district"
                  >
                    Maaş
                  </label>
                  <input
                    type="text"
                    value={personalWork.salary}
                    id="district"
                    className={
                      darkMode
                        ? "form-control"
                        : "form-control bg-secondary text-dark"
                    }
                    onChange={handleSalaryChange}
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                    htmlFor="district"
                  >
                    İşe Giriş Tarihi
                  </label>
                  <input
                    type="date"
                    value={personalWork.hireDate}
                    id="district"
                    className={
                      darkMode
                        ? "form-control"
                        : "form-control bg-secondary text-dark"
                    }
                    onChange={handleHireDate}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="main-content">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-auto ">
                  <input
                    type="submit"
                    value="Geri"
                    className="btn btn-m btn-primary"
                    onClick={() => {
                      setActiveFormNumber(activeFormNumber - 1);
                    }}
                  />
                </div>
                <div className="col-auto ">
                  <input
                    type="submit"
                    value="Kaydet"
                    className="btn btn-m btn-primary"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeWorkInfo;
