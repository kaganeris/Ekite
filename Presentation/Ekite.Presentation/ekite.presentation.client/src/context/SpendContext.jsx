import React, { createContext, useState } from 'react'
import SpendService from "../services/SpendService"

const SpendContext=createContext();

const SpendProvider=({children}) =>{
    const [updateSpendId,setUpdateSpendId] = useState(0);


    const getSpend = async(leaveId)=>{
        try{
            const data=await SpendService.getSpendById(leaveId)
            return data
        }catch(error){}
    }

    const SpendDatas = async(employeeId)=>{
        try{
            const data = await SpendService.getSpendListByEmployeeId(employeeId)
            console.log(data);
            return data
        }catch(error){

        }
    };

    const getSpendType = async () => {
        try {
          const data = await SpendService.getSpendTypes();
          return data;
        } catch (error) {}
      };
    
      const getCurrencyType = async () => {
        try {
          const data = await SpendService.getCurrency();
          return data;
        } catch (error) {}
      };

    const addSpend = async (spendData) =>{
        try{
            const data = await SpendService.postSpend(spendData);
            return data;
        } catch(error) {}
    };

    const deleteSpend = async (id) =>{
        try{
            const data = await SpendService.deleteSpendByData(id);
            return data;
        } catch(error) {}
    };
    

    const updateSpend = async (updateSpendData) =>{
        try{
            const data = await SpendService.updateSpendByData(updateSpendData);
            return data;
        } catch(error) {}
    };





    return (
        <SpendContext.Provider value={{SpendDatas, addSpend, deleteSpend,updateSpend,getSpendType,getCurrencyType,updateSpendId,setUpdateSpendId,getSpend}}>
            {children}
        </SpendContext.Provider>
    )
}
export  {SpendProvider,SpendContext}