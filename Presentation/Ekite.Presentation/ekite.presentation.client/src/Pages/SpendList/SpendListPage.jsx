import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { SpendContext } from "../../context/SpendContext";
import SpendHeader from "../../Components/SpendHeader/SpendHeader";
import SpendTable from "../../Components/SpendTable/SpendTable";

const SpendListPage = () => {

    const{id, setId, setIsAuthenticated}=useContext(AuthContext);
    const{SpendDatas}= useContext(SpendContext);

    const [spendData, setSpendData]=useState();
    

    useEffect(()=>{
        if (id !==0) {
            (async ()=>{
                try{
                    let data =await SpendDatas(id);

          console.log(data);
          setSpendData(data);
        } catch (error) {}
      })();
    } else {
      const storedEmployeeId = localStorage.getItem("id");
      if (storedEmployeeId) {
        setId(parseInt(storedEmployeeId));
      }
    }
  }, [id]);

  return (
    <>
      <div className="main-content" id="panel">
        <SpendHeader />
        <div className="container-fluid mt--6">
          <div className="row">
            <div className="col">
              <div className="card">
                <SpendTable spendList={spendData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpendListPage;
