import React, { useContext, useEffect, useState, useTransition } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../../context/ProfileContext";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";
import { AddressContext } from "../../context/AddressContext";
import { ThemeContext } from "../../context/ThemeContext";
function EditProfileComponent({ profileData, id }) {
  const [phoneNumber, setPhoneNumber] = useState(profileData.phoneNumber);
  const [cityName, setCityName] = useState(profileData.city);
  const [district, setDistrict] = useState(profileData.district);
  const [addressDetail, setAddressDetail] = useState(profileData.addressDetail);
  const { putPersonelData, putDirectorData } = useContext(ProfileContext);
  const { userRole } = useContext(AuthContext);
  const [uploadPath, setUploadPath] = useState(profileData.uploadPath);
  const [selectedImage, setSelectedImage] = useState(null);
  const [cities, setCities] = useState(null);
  const [districts, setDistricts] = useState(null);
  const { getCities, getDistricts } = useContext(AddressContext);
  const { darkMode } = useContext(ThemeContext);

  const [formErrors, setFormErrors] = useState({
    phoneNumber: "",
    city: "",
    district: "",
    addressDetail: "",
    uploadPath: "",
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];

    if (file && !allowedFileTypes.includes(file.type)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        uploadPath:
          "Lütfen geçerli bir resim dosyası seçin (jpg, jpeg veya png).",
      }));
      setUploadPath(null);
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        uploadPath: "",
      }));
      setUploadPath(file);
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
    console.log(event.target.files[0]);
  };

  const handleUpdate = async (e) => {
    console.log("handleupdate çalıştı");
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("phoneNumber", phoneNumber);
      formData.append("city", cityName);
      formData.append("district", district);
      formData.append("addressDetail", addressDetail);
      formData.append("uploadPath", uploadPath);
      formData.append("imagePath", null);

      if (userRole === "Employee") {
        await putPersonelData(id, formData);
      } else if (userRole === "Admin") {
        await putDirectorData(id, formData);
      }

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Güncelleme başarılı",
        showConfirmButton: false,
        timer: 1500,
      });
      location.reload();
    } catch (error) {
      console.log("swal error", error);
      Swal.fire({
        icon: "error",
        title: "Bilgilerinizi Kontrol Edin",
        text: error,
      });
    }
  };

  useEffect(() => {
    (async () => {
      if (cities === null) {
        const data = await getCities();
        setCities(data);
      }
      const districtData = await getDistricts(cityName);
      setDistricts(districtData);
    })();
  }, [cityName]);

  return (
    <div className={darkMode ? "card m-4" : "card m-4 bg-dark"}>
      <div className={darkMode ? "card-header" : "card-header bg-dark"}>
        <div className="row align-items-center">
          <div className="col-8">
            <h3 className={darkMode ? "mb-0" : "mb-0 text-white"}>
              Profili Güncelle{" "}
            </h3>
          </div>
        </div>
      </div>
      <div className="card-body">
        <form onSubmit={handleUpdate} encType="multipart/form-data">
          <h6
            className={
              darkMode
                ? "heading-small text-muted mb-4"
                : "heading-small text-white mb-4"
            }
          >
            Kişisel Bilgiler
          </h6>
          <div className="pl-lg-4">
            <div className="row">
              <div className={selectedImage ? "col-lg-9" : "col-lg-12"}>
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                    htmlFor="input-username"
                  >
                    Profil Fotoğrafı
                  </label>
                  <input
                    type="file"
                    id="input-username"
                    className={
                      darkMode
                        ? "form-control"
                        : "form-control bg-secondary text-dark"
                    }
                    placeholder="Username"
                    onChange={handleFileChange}
                    accept="image/*"
                    required
                  />
                  {formErrors.uploadPath && (
                    <span style={{ color: "red" }}>
                      {formErrors.uploadPath}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-lg-3 d-flex justify-content-center">
                {selectedImage && (
                  <img
                    src={selectedImage}
                    className="img-fluid"
                    style={{ maxHeight: "150px" }}
                  />
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                    htmlFor="input-first-name"
                  >
                    Telefon Numarası
                  </label>
                  <input
                    value={phoneNumber}
                    type="number"
                    id="input-first-name"
                    className={
                      darkMode
                        ? "form-control"
                        : "form-control bg-secondary text-dark"
                    }
                    placeholder="Telefon Numarası"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="my-4" />

          <h6
            className={
              darkMode
                ? "heading-small text-muted mb-4"
                : "heading-small text-white mb-4"
            }
          >
            İletişim Bilgileri
          </h6>
          <div className="pl-lg-4">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                    htmlFor="input-city"
                  >
                    Şehir
                  </label>
                  {cities && (
                    <select
                    className={
                      darkMode
                        ? "form-control"
                        : "form-control bg-secondary text-dark"
                    }
                      onChange={(e) => setCityName(e.target.value)}
                      value={cityName}
                    >
                      {cities.map((city) => {
                        return (
                          <option key={city.id} value={city.name}>
                            {city.name}
                          </option>
                        );
                      })}
                    </select>
                  )}
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
                    htmlFor="input-country"
                  >
                    İlçe
                  </label>
                  {districts && (
                    <>
                      {cityName && (
                        <select
                        className={
                          darkMode
                            ? "form-control"
                            : "form-control bg-secondary text-dark"
                        }
                          onChange={(e) => setDistrict(e.target.value)}
                          value={district}
                        >
                          {districts.map((district) => (
                            <option key={district.id} value={district.name}>
                              {district.name}
                            </option>
                          ))}
                        </select>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                    htmlFor="input-address"
                  >
                    Mahalle - Cadde - Sokak
                  </label>
                  <input
                    value={addressDetail}
                    id="input-address"
                    className={
                      darkMode
                        ? "form-control"
                        : "form-control bg-secondary text-dark"
                    }
                    placeholder="Mahalle-Cadde-Sokak"
                    type="text"
                    onChange={(e) => setAddressDetail(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="my-3" />

          <div className="main-content">
            <div className="container">
              <div className="row justify-content-end">
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
}

export default EditProfileComponent;
