import React, { useContext, useEffect, useState } from 'react'
import {AuthContext} from "../../context/AuthContext"
import {  SpendContext } from "../../context/SpendContext"
import SpendHeader from "../../Components/SpendHeader/SpendHeader"
import SpendTable from "../../Components/SpendTable/SpendTable"
import axios from 'axios';


const SpendListPage = () => {
    const{employeeId, setEmployeeId, setIsAuthenticated}=useContext(AuthContext);
    const{SpendDatas}= useContext(SpendContext);

    const [spendData, setSpendData]=useState([]);
    

    useEffect(()=>{
        if (employeeId !==0) {
            (async ()=>{
                try{
                    let data =await SpendDatas(employeeId);
                    console.log(data);
                    setSpendData(data);
                }catch(error){

                }
            })();
        }else{
            const storedEmployeeId = localStorage.getItem("employeeId");
            if (storedEmployeeId) {
                setEmployeeId(parseInt(storedEmployeeId));
                setIsAuthenticated(true);
            }
        }
    },[employeeId]);

      

        // useEffect(()=>{

        //   const getEnum=async()=>{
        //     try{
        //       const response = await axios.get("https://localhost:7152/api/Spend/GetSpendTypeDisplay");
        //       setSpendData(response.data);
        //     }catch{
        //       console.error("API İstek Hatası !");
        //     }
        //   }
        //   getEnum();
        // }, []);
    

    
  return (
    <>
      <div className="main-content" id="panel">
        <SpendHeader/>
        <div className="container-fluid mt--6">
          <div className="row">
            <div className="col">
              <div className="card">
                <SpendTable spendList={spendData}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SpendListPage