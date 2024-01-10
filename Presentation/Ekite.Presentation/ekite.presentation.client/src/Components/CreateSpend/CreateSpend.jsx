import React, { useContext, useEffect, useState } from "react";
import {SpendContext} from "../../context/SpendContext"
import {AuthContext} from "../../context/AuthContext"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"

const CreateSpend = ({spendTypes,currencyTypes}) => {
  const navigate = useNavigate()
  const [spendType, setSpendType] = useState(1);
  const [description, setDescription] = useState('');
  const [currency, setCurrency] = useState(1);
  const [amount, setAmount] = useState(0);
  const [imagePath, setImagePath] = useState(null);


  const { addSpend } = useContext(SpendContext);
  const {employeeId} = useContext(AuthContext);

  const handleAddSpend = async(e)=>{
    e.preventDefault()

      if (description && amount && imagePath) {
      const spendData = {
        description: description,
        spendType: spendType,
        currency: currency,
        amount: amount,
        imagePath: imagePath,
        employeeId:employeeId
      };

      console.log(spendData)
      console.log('currency',currencyTypes)
      const formData= new FormData();
      formData.append('description', description)
      formData.append('spendType', spendType)
      formData.append('currency',currency)
      formData.append('amount',amount)
      formData.append('imagePath',imagePath)
      formData.append('employeeId',employeeId)
      try{
        let data =await addSpend(formData);
          Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Harcama Talebi Oluşturuldu",
              showConfirmButton: false,
              timer: 2000
          });
          setTimeout(() => {

              navigate("/spend")
          }, 2000)
      }catch(error){
        console.error("Hata:", error);
      }
      
      
    }else{
        Swal.fire({
            icon: "error",
            title: "Avans Talebi Başarısız",
            text: "Tüm Bilgileri Eksiksiz Doldurun",
        });
    }
  }

  useEffect(()=>{
    console.log('SpendType', spendTypes);
  },[])

  return (
      <div className="card">
        <div className="card-header">
          <div className="row align-items-center">
            <div className="col-8">
              <h3 className="mb-0">Harcama Oluştur </h3>
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
                      className="form-control-label"
                      htmlFor="input-username"
                    >
                      Harcama Türü
                    </label>
                    {spendTypes && (
                      <select
                        className="form-control"
                        onChange={(e) => setSpendType(e.target.value)}
                        value={spendType}
                      >
                        {spendTypes.map((spendType) => {
                          return (
                            <option value={spendType.spendTypeNo} >
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
                      className="form-control-label"
                      htmlFor="input-first-name"
                    >
                     Açıklama
                    </label>
                    <input
                      type="text"
                      id="input-first-name"
                      className="form-control"
                      onChange={(e)=>setDescription(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label
                      className="form-control-label"
                      htmlFor="input-leave-end"
                    >
                      Para Birimi
                    </label>
                    {currencyTypes && (
                      <select
                        className="form-control"
                        onChange={(e) => setCurrency(e.target.value)}
                        value={currency}
                      >
                        {currencyTypes.map((currency) => {
                          return (
                            <option value={currency.currencyTypeNo} >
                              {currency.currencyName}
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
                      className="form-control-label"
                      htmlFor="input-first-name"
                    >
                     Tutar
                    </label>
                    <input
                      type="text"
                      id="input-first-name"
                      className="form-control"
                      onChange={(e)=>setAmount(e.target.value)}
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
                     Fatura
                    </label>
                    <input
                      type="text"
                      id="input-first-name"
                      className="form-control"
                      onChange={(e)=>setImagePath(e.target.value)}
                    />
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
}

export default CreateSpend





