import React, { useContext, useState,useEffect } from 'react'
import { SpendContext } from '../../context/SpendContext';
import { AuthContext } from '../../context/AuthContext';
import UpdateSpend from "../../Components/Spend/UpdateSpend"
import { ThemeContext } from '../../context/ThemeContext';
import { PageContext } from "../../context/PageContext";

const UpdateSpendPage = () => {
    const {id,setId,setIsAuthenticated} = useContext(AuthContext);
  const{darkMode} = useContext(ThemeContext)
    const {getSpendType,getCurrencyType} = useContext(SpendContext);
    const [spendTypes, setSpendTypes] = useState(null);
    const [currencyTypes, setCurrencyTypes] = useState(null);
    const { handlePrevPage } = useContext(PageContext)


    useEffect(()=>{
        if (id !==0) {
            (async()=>{
                try {
                    handlePrevPage(location.pathname)
                    let typeData = await getSpendType();
                    setSpendTypes(typeData);

                    let currencyData = await getCurrencyType();
                    setCurrencyTypes(currencyData);
                }catch(error){
                    console.log(error);
                }
            })();
        }else{
            const storedEmployeeId = localStorage.getItem("id");
            if (storedEmployeeId){
              setId(parseInt(storedEmployeeId));
            }
            }
        },[id]
    )


  return (
    <div className={darkMode  ? "main-content" : "main-content bg-dark"}>
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