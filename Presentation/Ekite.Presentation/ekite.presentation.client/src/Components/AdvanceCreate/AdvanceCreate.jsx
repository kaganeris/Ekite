import React, { useContext, useEffect, useState, useTransition } from "react";
import { AuthContext } from "../../context/AuthContext";
import { AdvanceContext } from "../../context/AdvanceContext";
import { useNavigate } from "react-router-dom";

const AdvanceCreate = ({ enumsType }) => {
  const [advanceType, setAdvanceType] = useState(1);
  const [currency, setCurrency] = useState(1);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const { employeeId } = useContext(AuthContext);
  const { addAdvance } = useContext(AdvanceContext);
  const navigate = useNavigate();

  const handleAmountChange = (e) => {
    const sanitizedValue = e.target.value.replace(/[^\d]/g, "");
    const formattedValue = new Intl.NumberFormat().format(sanitizedValue);
    setAmount(formattedValue);
  };

  const handleAddCreate = async (e) => {
    e.preventDefault();

    const formData = {
      advanceType,
      currency,
      amount: parseInt(amount.replace(/\D/g, ""), 10),
      description,
      employeeId,
    };

    console.log(formData.amount);

    const response = await addAdvance(formData);

    // TODOO : TESTİNİ YAP NULL VEYA BOŞ STRİNG GELİRSE LİSTEYE DÖNECEK Mİ
    if (response !== null || response !== "") {
      navigate("/advanceList");
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="row align-items-center">
          <div className="col-8">
            <h3 className="mb-0">Avans Oluştur </h3>
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
                    className="form-control-label"
                    htmlFor="input-username"
                  >
                    Avans Türü
                  </label>
                  {enumsType && (
                    <select
                      className="form-control"
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
                    className="form-control-label"
                    htmlFor="input-first-name"
                  >
                    Açıklama
                  </label>
                  <textarea
                    value={description}
                    id="input-first-name"
                    className="form-control"
                    onChange={(e) => setDescription(e.target.value)}
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
                    Miktar
                  </label>
                  <input
                    value={amount}
                    type="text"
                    id="input-first-name"
                    className="form-control"
                    onChange={handleAmountChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label
                    className="form-control-label"
                    htmlFor="input-username"
                  >
                    Para Birimi
                  </label>
                  {enumsType && (
                    <select
                      className="form-control"
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
          </div>
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
};

export default AdvanceCreate;