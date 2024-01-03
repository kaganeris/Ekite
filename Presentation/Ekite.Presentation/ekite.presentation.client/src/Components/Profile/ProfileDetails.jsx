import React, { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../../context/ProfileContext";
import { AuthContext } from "../../context/AuthContext";

const ProfileDetails = () => {
  const { profileData, loading, fetchData } = useContext(ProfileContext);
  const [employeeBilgileri, setEmployeeBilgileri] = useState(null);
  const { employeeId, setEmployeeId, setIsAuthenticated } =
    useContext(AuthContext);



  useEffect(() => {
    if (employeeId !== 0) {
      (async () => {
        console.log("Profil Detayları if kısmı çalıştı", employeeId);
        try {
          let data = await fetchData(employeeId);
          setEmployeeBilgileri(data);
        } catch (error) {}
      })();
    } else {
      const storedEmployeeId = localStorage.getItem("employeeId");
      if (storedEmployeeId) {
        console.log("Profil detayları else kısmı useEffect", storedEmployeeId);
        setEmployeeId(parseInt(storedEmployeeId));
        setIsAuthenticated(true);
      }
    }
  }, [employeeId]);

  if (loading) {
    return <div>Yükleniyor</div>;
  }

  return (
    <div className="card">
      <div className="card-header">
        <div className="row align-items-center">
          <div className="col-8">
            <h3 className="mb-0">Profil Bilgileri </h3>
          </div>
        </div>
      </div>
      <div className="card-body">
        <form>
          <h6 className="heading-small text-muted mb-4">Calisan Bilgileri</h6>
          <div className="pl-lg-4">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label
                    className="form-control-label"
                    htmlFor="input-username"
                  >
                    Isim
                  </label>
                  <label id="input-username" className="form-control">
                    {employeeBilgileri.firstName}
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <label
                    className="form-control-label"
                    htmlFor="input-secondName"
                  >
                    Ikinci Isim
                  </label>
                  <label id="input-username" className="form-control">
                    {employeeBilgileri.secondName}
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <label
                    className="form-control-label"
                    htmlFor="input-last-name"
                  >
                    Soyisim
                  </label>
                  <label id="input-last-name" className="form-control">
                    {employeeBilgileri.lastName}
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <label
                    className="form-control-label"
                    htmlFor="input-last-name"
                  >
                    Ikinci Soyisim
                  </label>
                  <label id="input-last-name" className="form-control">
                    {employeeBilgileri.secondLastName}
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-control-label" htmlFor="input-email">
                    TCKN
                  </label>
                  <label id="input-email" className="form-control">
                    {employeeBilgileri.tcno}
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-control-label" htmlFor="input-email">
                    Adres
                  </label>
                  <label id="input-email" className="form-control">
                    {employeeBilgileri.address}
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-control-label" htmlFor="input-email">
                    Meslek
                  </label>
                  <label id="input-email" className="form-control">
                    {employeeBilgileri.jobName}
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-control-label" htmlFor="input-email">
                    Meslek
                  </label>
                  <label id="input-email" className="form-control">
                    {employeeBilgileri.departmentName}
                  </label>
                </div>
              </div>
            </div>
            <div className="row"></div>
          </div>
          <hr className="my-4" />

          <h6 className="heading-small text-muted mb-4">Iletisim Bilgileri</h6>
          <div className="pl-lg-4">
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label" htmlFor="input-address">
                    Adres
                  </label>
                  <label className="form-control" placeholder="Home Address">
                    {employeeBilgileri.address}
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-control-label" htmlFor="input-city">
                    Sehir
                  </label>
                  <label id="input-city" className="form-control">
                    {employeeBilgileri.phoneNumber}
                  </label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-control-label" htmlFor="input-email">
                    Sehir
                  </label>
                  <label id="input-email" className="form-control">
                    {employeeBilgileri.email}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-4" />

          <div className="main-content">
            <div className="container">
              <div className="row justify-content-end">
                <div className="col-auto ">
                  <a href="/EditProfile" className="btn btn-m btn-primary">
                    Profili Guncelle
                  </a>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileDetails;
