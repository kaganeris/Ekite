import React, { useContext, useEffect, useState, useTransition } from "react";
import { AuthContext } from "../../context/AuthContext";
import { AdvanceContext } from "../../context/AdvanceContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ThemeContext } from "../../context/ThemeContext";

const AdvanceCreate = ({ enumsType }) => {
  const [advanceType, setAdvanceType] = useState(1);
  const [currency, setCurrency] = useState(1);
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const { darkMode } = useContext(ThemeContext);
  const [isDescriptionValid, setDescriptionValid] = useState(true);
  const [isAmountValid, setAmountValid] = useState(true);

  const { id } = useContext(AuthContext);
  const { addAdvance } = useContext(AdvanceContext);
  const navigate = useNavigate();

  const handleAmountChange = (e) => {
    const sanitizedValue = e.target.value.replace(/[^\d]/g, "");
    const formattedValue = new Intl.NumberFormat().format(sanitizedValue);
    setAmount(formattedValue);
  };

  const handleAddCreate = async (e) => {
    e.preventDefault();

    if (advanceType && currency && amount && description) {
      const formData = {
        advanceType,
        currency,
        amount: parseInt(amount.toString().replace(/\D/g, ""), 10),
        description,
        employeeId: id,
      };

      console.log(formData);

      const response = await addAdvance(formData);
      console.log("response advance:", response);

      if (response === "Avans oluşturuldu.") {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Avans Talebi Oluşturuldu",
          showConfirmButton: false,
          timer: 2000,
        });

        setTimeout(() => {
          navigate("/advanceList");
        }, 2000);
      } else {
        let errorsArray = response.map((element, index) => {
          return element + (index < response.length - 1 ? "<br/>" : "");
        });

        let errors = errorsArray.join("");

        console.log(errors);
        Swal.fire({
          icon: "error",
          title: "Avans Talebi Başarısız",
          html: errors,
        });
      }
    } else {
      if (!description) setDescriptionValid(false);
      if (!amount) setAmountValid(false);

      Swal.fire({
        icon: "error",
        title: "Avans Talebi Başarısız",
        text: "Tüm Bilgileri Eksiksiz Doldurun",
      });
    }
  };

  return (
    <div className={darkMode ? "card" : "card bg-dark"}>
      <div className={darkMode ? "card-header" : "card-header bg-dark"}>
        <div className="row align-items-center">
          <div className="col-8">
            <h3 className={darkMode ? "mb-0" : "mb-0 text-white"}>
              Avans Oluştur{" "}
            </h3>
          </div>
        </div>
      </div>
      <div className="card-body">
        <form onSubmit={handleAddCreate} encType="multipart/form-data">
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
                    Avans Türü
                  </label>
                  {enumsType && (
                    <select
                      className={
                        darkMode
                          ? "form-control"
                          : "form-control bg-secondary text-dark"
                      }
                      onChange={(e) => setAdvanceType(parseInt(e.target.value))}
                      value={advanceType}
                    >
                      {Object.keys(enumsType.advanceType).map((key) => (
                        <option key={key} value={key}>
                          {enumsType.advanceType[key]}
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
                  <textarea
                    value={description}
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
                    htmlFor="input-username"
                  >
                    Para Birimi
                  </label>
                  {enumsType && (
                    <select
                      className={
                        darkMode
                          ? "form-control"
                          : "form-control bg-secondary text-dark"
                      }
                      onChange={(e) => setCurrency(parseInt(e.target.value))}
                      value={currency}
                    >
                      {Object.keys(enumsType.currency).map((key) => (
                        <option key={key} value={key}>
                          {enumsType.currency[key]}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              </div>
            </div>
            <div className="row"></div>
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

export default AdvanceCreate;
