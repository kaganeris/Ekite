import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { SpendContext } from "../../context/SpendContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ThemeContext } from "../../context/ThemeContext";

const UpdateSpend = ({ spendTypes, currencyTypes }) => {
  const { updateSpend, updateSpendId, getSpend } = useContext(SpendContext);
  const { id } = useContext(AuthContext);
  const navigate = useNavigate();

  const [spendType, setSpendType] = useState(1);
  const [description, setDescription] = useState("");
  const [currency, setCurrency] = useState(1);
  const [amount, setAmount] = useState(0);
  const [imagePath, setImagePath] = useState("");
  const [uploadPath, setUploadPath] = useState("");
  const [isDescriptionValid, setDescriptionValid] = useState(true);
  const [isAmountValid, setAmountValid] = useState(true);
  const [isFileValid, setFileValid] = useState(true);
  const { darkMode } = useContext(ThemeContext);
  const handleUpdateFile = (event) => {
    const file = event.target.files[0];
    console.log(event.target.files[0]);

    const allowedFileTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "application/pdf",
    ];

    if (file && !allowedFileTypes.includes(file.type)) {
      setFileValid(false);
      setUploadPath(null);
    } else {
      setFileValid(true);
      setUploadPath(file);
    }
  };

  const handleUpdateSpend = async (e) => {
    e.preventDefault();

    if (
      spendType &&
      description &&
      amount &&
      uploadPath &&
      currency &&
      isFileValid
    ) {
      const formData = new FormData();
      formData.append("id", updateSpendId);
      formData.append("description", description);
      formData.append("spendType", spendType);
      formData.append("currency", currency);
      formData.append("amount", amount);
      formData.append("imagePath", imagePath);
      formData.append("uploadPath", uploadPath);
      formData.append("employeeId", id);

      try {
        let data = await updateSpend(formData);
        console.log(data);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Harcama Başarıyla Güncellendi",
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
      if (!spendType) setDescriptionValid(false);
      if (!description) setDescriptionValid(false);
      if (!amount) setAmountValid(false);
      if (!uploadPath || !isFileValid) setFileValid(false);

      Swal.fire({
        icon: "error",
        title: "Güncelleme İşlemi Başarısız",
        text: "Tüm Bilgileri Eksiksiz Doldurun",
      });
    }
  };

  useEffect(() => {
    (async () => {
      try {
        let updateSpendData = await getSpend(updateSpendId);
        console.log(updateSpendData);
        setSpendType(updateSpendData.spendType);
        setDescription(updateSpendData.description);
        setCurrency(updateSpendData.currency);
        setAmount(updateSpendData.amount);
        setImagePath(updateSpendData.imagePath);
        console.log(currency);
      } catch (error) {
        console.error("Hata:", error);
      }
    })();
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
              Harcama Güncelle{" "}
            </h3>
          </div>
        </div>
      </div>
      <div className="card-body">
        <form onSubmit={handleUpdateSpend} encType="multipart/form-data">
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
                    }                      onChange={(e) => setSpendType(e.target.value)}
                      value={spendType}
                    >
                      {spendTypes.map((spendType) => (
                        <option
                          value={spendType.spendTypeNo}
                          key={spendType.spendTypeNo}
                        >
                          {spendType.spendTypeName}
                        </option>
                      ))}
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
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                      setDescriptionValid(true);
                    }}
                  />
                  {!isDescriptionValid && (
                    <span className="help-block text-danger">
                      Açıklama boş bırakılamaz.
                    </span>
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
                      onChange={(e) => setCurrency(parseInt(e.target.value))}
                      value={currency}
                    >
                      {currencyTypes.map((currency) => (
                        <option
                          key={currency.currencyTypeNo}
                          value={currency.currencyTypeNo}
                        >
                          {currency.currencyName}
                        </option>
                      ))}
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
                    className={`${
                      darkMode
                        ? "form-control"
                        : "form-control bg-secondary text-dark"
                    } ${isFileValid ? "" : "is-invalid"}`}
                    accept="image/*,application/pdf"
                    onChange={handleUpdateFile}
                  />
                  {!isFileValid && (
                    <span className="help-block text-danger">
                      Geçerli bir dosya türü seçin. (pdf, jpg, jpeg, png)
                    </span>
                  )}
                  <br />
                  <div>
                    <embed
                      src={imagePath}
                      type="application/pdf"
                      width="100%"
                      height="250px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="main-content">
            <div className="container">
              <div className="row justify-content-end">
                <div className="col-auto">
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

export default UpdateSpend;
