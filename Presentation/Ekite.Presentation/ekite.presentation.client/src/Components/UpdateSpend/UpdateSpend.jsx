import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { SpendContext } from '../../context/SpendContext';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateSpend = ({spendTypes,currencyTypes}) => {

    const [spendType, setSpendType] = useState(1);
  const [description, setDescription] = useState('');
  const [currency, setCurrency] = useState(1);
  const [amount, setAmount] = useState(0);
  const [imagePath, setImagePath] =useState(null)
  const { updateSpend,updateSpendId, getSpend } = useContext(SpendContext);
  const {employeeId} = useContext(AuthContext);
    const navigate = useNavigate();


  const handleUpdateSpend = async (e)=>{
      e.preventDefault();
      if (spendType && description && amount && imagePath && currency) {
      //const spendData = {
      //  description: description,
      //  spendType: spendType,
      //  currency: currency,
      //  amount: amount,
      //  imagePath: imagePath,
      //  employeeId:employeeId
      //};
      //console.log(spendData);
    const formData= new FormData();
      formData.append('id',updateSpendId)
      formData.append('description', description)
      formData.append('spendType', spendType)
      formData.append('currency',currency)
      formData.append('amount',amount)
      formData.append('imagePath',imagePath)
      formData.append('employeeId',employeeId)

          let data = await updateSpend(formData); 
          console.log(data);

          Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Harcama Başarıyla Güncellendi",
              showConfirmButton: false,
              timer: 2000
          });
          setTimeout(() => {

              navigate("/spend")
          }, 2000)
    }else{
          Swal.fire({
              icon: "error",
              title: "Güncelleme İşlemi Başarısız",
              text: "Tüm Bilgileri Eksiksiz Doldurun",
          });
    }
  }


  useEffect(()=>{
    (async()=>{
        try{
            let updateSpendData= await getSpend(updateSpendId);
            console.log(updateSpendData);
            setSpendType(updateSpendData.spendType)
            setDescription(updateSpendData.description);
            setCurrency(updateSpendData.currency);
            setAmount(updateSpendData.amount);
            setImagePath(updateSpendData.imagePath);
            console.log(currency);
        }catch(error){
        
        }
    })();
  },[]);



    return (
        <div className="card">
          <div className="card-header">
            <div className="row align-items-center">
              <div className="col-8">
                <h3 className="mb-0">Harcama Güncelle </h3>
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
                        value={description}
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
                          onChange={(e) => setCurrency(parseInt(e.target.value))}
                          value={currency}
                        >
                          {currencyTypes.map((currency) => {
                            return (
                              <option key={currency.currencyTypeNo} value={currency.currencyTypeNo} >
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
                        value={amount}
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
                        value={imagePath}
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
                        value="Güncelle"
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

export default UpdateSpend