import React, { useContext, useState, useTransition } from "react";
import { ProfileContext } from "../../context/ProfileContext";
import Swal from "sweetalert2";
function EditProfileComponent({ profileData, employeeId }) {
    const [phoneNumber, setPhoneNumber] = useState(profileData.phoneNumber);
    const [city, setCity] = useState(profileData.city);
    const [district, setDistrict] = useState(profileData.district);
    const [addressDetail, setAddressDetail] = useState(
        profileData.addressDetail
    );
    const { putPersonelData } = useContext(ProfileContext)
    const [uploadPath, setUploadPath] = useState(profileData.uploadPath);


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log(event.target.files[0]);
        setUploadPath(file);
    };

    const handleUpdate = async (e) => {
        console.log("handleupdate çalıştı")
        e.preventDefault();
        const formData = new FormData();
        formData.append('phoneNumber', phoneNumber);
        formData.append('city', city);
        formData.append('district', district);
        formData.append('addressDetail', addressDetail);
        formData.append('uploadPath', uploadPath);
        formData.append('imagePath', null);
        await putPersonelData(employeeId, formData)

        //Swal.fire({
        //    position: "top-end",
        //    icon: "success",
        //    title: "Güncelleme başarılı",
        //    showConfirmButton: false,
        //    timer: 1500
        //});

    }

    console.log(profileData);
    return (
        <div className="card m-4">
            <div className="card-header">
                <div className="row align-items-center">
                    <div className="col-8">
                        <h3 className="mb-0">Profili Güncelle </h3>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <form onSubmit={handleUpdate} encType="multipart/form-data">
                    <h6 className="heading-small text-muted mb-4">Çalışan Bilgileri</h6>
                    <div className="pl-lg-4">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-username"
                                    >
                                        Profil Fotoğrafı
                                    </label>
                                    <input
                                        type="file"
                                        id="input-username"
                                        className="form-control"
                                        placeholder="Username"
                                        onChange={handleFileChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-first-name"
                                    >
                                        Telefon Numarası
                                    </label>
                                    <input
                                        value={phoneNumber}
                                        type="text"
                                        id="input-first-name"
                                        className="form-control"
                                        placeholder="First name"
                                        onChange={(e) => setPhoneNumber(e.target.value)}

                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-4" />

                    <h6 className="heading-small text-muted mb-4">İletişim Bilgileri</h6>
                    <div className="pl-lg-4">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="input-city">
                                        Şehir
                                    </label>
                                    <input
                                        value={city}
                                        type="text"
                                        id="input-city"
                                        className="form-control"
                                        placeholder="City"
                                        onChange={(e) => setCity(e.target.value)}

                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="input-country">
                                        İlçe
                                    </label>
                                    <input
                                        value={district}
                                        type="text"
                                        id="input-country"
                                        className="form-control"
                                        placeholder="Country"
                                        onChange={(e) => setDistrict(e.target.value)}

                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="input-address">
                                        Mahalle - Cadde - Sokak
                                    </label>
                                    <input
                                        value={addressDetail}
                                        id="input-address"
                                        className="form-control"
                                        placeholder="Home Address"
                                        type="text"
                                        onChange={(e) => setAddressDetail(e.target.value)}
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
                                    <input type="submit" value="Kaydet" className="btn btn-m btn-primary" />
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
