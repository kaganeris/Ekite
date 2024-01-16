import React, { useContext, useEffect, useState } from "react";
import { SpendContext } from "../../context/SpendContext";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ThemeContext } from "../../context/ThemeContext";

const CreateSpend = ({ spendTypes, currencyTypes }) => {
  const navigate = useNavigate();
  const [spendType, setSpendType] = useState(1);
  const [description, setDescription] = useState("");
  const [currency, setCurrency] = useState(1);
  const [amount, setAmount] = useState(0);
  const [imagePath, setImagePath] = useState(null);

  const [uploadPath, setUploadPath] = useState("");
  const [isDescriptionValid, setDescriptionValid] = useState(true);
  const [isAmountValid, setAmountValid] = useState(true);
  const [isFileValid, setFileValid] = useState(true);

  const { addSpend } = useContext(SpendContext);
  const { id } = useContext(AuthContext);
  const { darkMode } = useContext(ThemeContext);
  const validateFile = (file) => {
    const allowedFileTypes = [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "application/pdf",
    ];
    return allowedFileTypes.includes(file.type);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (validateFile(file)) {
        setFileValid(true);
        setUploadPath(file);
      } else {
        setFileValid(false);
      }
    }
  };

  const handleAddSpend = async (e) => {
    e.preventDefault();

    if (description && amount && uploadPath && isFileValid) {
      const spendData = {
        description: description,
        spendType: spendType,
        currency: currency,
        amount: amount,
        imagePath: imagePath,
        employeeId: id,
      };

      console.log(spendData);
      console.log("currency", currencyTypes);
      const formData = new FormData();
      formData.append("description", description);
      formData.append("spendType", spendType);
      formData.append("currency", currency);
      formData.append("amount", amount);
      formData.append("imagePath", imagePath);
      formData.append("employeeId", id);
      formData.append("uploadPath", uploadPath);
      try {
        let data = await addSpend(formData);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Harcama Talebi Oluşturuldu",
          showConfirmButton: false,
          timer: 2000,
        });
        setTimeout(() => {
          navigate("/spend");
        }, 2000);
      } catch (error) {
        console.error("Hata:", error);
      }
    } else {
      if (!description) setDescriptionValid(false);
      if (!amount) setAmountValid(false);
      if (!uploadPath || !isFileValid) setFileValid(false);
      Swal.fire({
        icon: "error",
        title: "Avans Talebi Başarısız",
        text: "Tüm Bilgileri Eksiksiz Doldurun",
      });
    }
  };

  useEffect(() => {
    console.log("SpendType", spendTypes);
  }, []);

  const handleAmountChange = (e) => {
    const sanitizedValue = e.target.value.replace(/[^\d]/g, "");
    const formattedValue = new Intl.NumberFormat().format(sanitizedValue);
    setAmount(formattedValue);
  };

  return (
    <div className={darkMode ? "card" : "card bg-dark"}>
      <div className={darkMode ? "card-header" : "card-header bg-dark"}>
        <div className="row align-items-center">
          <div className="col-8">
            <h3 className={darkMode ? "mb-0" : "mb-0 text-white"}>
              Harcama Oluştur{" "}
            </h3>
          </div>
        </div>
      </div>
      <div className="card-body">
        <form onSubmit={handleAddSpend} encType="multipart/form-data">
          <div className="pl-lg-4">
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                    htmlFor="input-username"
                  >
                    Harcama Türü
                  </label>
                  {spendTypes && (
                    <select
                      className={
                        darkMode
                          ? "form-control"
                          : "form-control bg-secondary text-dark"
                      }
                      onChange={(e) => setSpendType(e.target.value)}
                      value={spendType}
                    >
                      {spendTypes.map((spendType) => {
                        return (
                          <option value={spendType.spendTypeNo}>
                            {spendType.spendTypeName}
                          </option>
                        );
                      })}
                    </select>
                  )}
                </div>
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
                    Açıklama
                  </label>
                  <input
                    type="text"
                    id="input-first-name"
                    className={
                      darkMode
                        ? "form-control"
                        : "form-control bg-secondary text-dark"
                    }
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  {!isDescriptionValid && (
                    <label className="text-danger">
                      Açıklama boş bırakılamaz.
                    </label>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                    htmlFor="input-first-name"
                  >
                    Miktar
                  </label>
                  <input
                    value={amount}
                    type="text"
                    id="input-first-name"
                    className={
                      darkMode
                        ? "form-control"
                        : "form-control bg-secondary text-dark"
                    }
                    onChange={handleAmountChange}
                  />
                  {!isAmountValid && (
                    <label className="text-danger">
                      Miktar boş bırakılamaz.
                    </label>
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
                    htmlFor="input-leave-end"
                  >
                    Para Birimi
                  </label>
                  {currencyTypes && (
                    <select
                      className={
                        darkMode
                          ? "form-control"
                          : "form-control bg-secondary text-dark"
                      }
                      onChange={(e) => setCurrency(e.target.value)}
                      value={currency}
                    >
                      {currencyTypes.map((currency) => {
                        return (
                          <option value={currency.currencyTypeNo}>
                            {currency.currencyName}
                          </option>
                        );
                      })}
                    </select>
                  )}
                </div>
              </div>
            </div>
            <div className="row"></div>
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
                    Fatura
                  </label>
                  <input
                    type="file"
                    id="input-first-name"
                    className={
                      darkMode
                        ? "form-control"
                        : "form-control bg-secondary text-dark"
                    }
                    onChange={handleFileChange}
                  />
                  {!isFileValid && (
                    <label className="text-danger">
                      Geçerli bir dosya türü seçin (pdf, jpg, jpeg, png).
                    </label>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="main-content">
            <div className="container">
              <div className="row justify-content-end">
                <div className="col-auto ">
                  <input
                    type="submit"
                    value="Oluştur"
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

export default CreateSpend;
