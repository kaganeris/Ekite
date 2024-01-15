import React, { useContext, useState,useEffect } from 'react'
import { SpendContext } from '../../context/SpendContext';
import { AuthContext } from '../../context/AuthContext';
import UpdateSpend from "../../Components/UpdateSpend/UpdateSpend"

const UpdateSpendPage = () => {
    const {employeeId,setEmployeeId,setIsAuthenticated} = useContext(AuthContext);

    const {getSpendType,getCurrencyType} = useContext(SpendContext);
    const [spendTypes, setSpendTypes] = useState(null);
    const [currencyTypes, setCurrencyTypes] = useState(null);


    useEffect(()=>{
        if (employeeId !==0) {
            (async()=>{
                try{
                    let typeData = await getSpendType();
                    setSpendTypes(typeData);

                    let currencyData = await getCurrencyType();
                    setCurrencyTypes(currencyData);
                }catch(error){
                    console.log(error);
                }
            })();
        }else{
            const storedEmployeeId = localStorage.getItem("employeeId");
            if (storedEmployeeId){
                setEmployeeId(parseInt(storedEmployeeId));
            }
            }
        },[employeeId]
    )


  return (
    <div className="main-content">
      <div className="container mt-4  ">
        <div className="row ">
          <div className="col ">
            <UpdateSpend  spendTypes={spendTypes} currencyTypes={currencyTypes}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateSpendPage