import React, { createContext, useContext, useState } from 'react'
import SpendService from "../services/SpendService"
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router';

const SpendContext=createContext();

const SpendProvider=({children}) =>{
    const [updateSpendId,setUpdateSpendId] = useState(0);
    const { setIsAuthenticated, setToken, token } = useContext(AuthContext);
    const navigate = useNavigate();

    const getSpend = async(leaveId)=>{
        try{
            const data=await SpendService.getSpendById(leaveId)
            if (data.status !== 401) {
                return data.data;
              } else {
                if (token === "") {
                  setIsAuthenticated(false);
                }
                setToken("");
                navigate("/login");
              }
        }catch(error){}
    }

    const SpendDatas = async(employeeId)=>{
        try{
            const data = await SpendService.getSpendListByEmployeeId(employeeId)
            console.log(data);
            if (data.status !== 401) {
                return data.data;
              } else {
                if (token === "") {
                  setIsAuthenticated(false);
                }
                setToken("");
                navigate("/login");
              }
        }catch(error){

        }
    };

    const getSpendType = async () => {
        try {
          const data = await SpendService.getSpendTypes();
          if (data.status !== 401) {
            return data.data;
          } else {
            if (token === "") {
              setIsAuthenticated(false);
            }
            setToken("");
            navigate("/login");
          }
        } catch (error) {}
      };
    
      const getCurrencyType = async () => {
        try {
          const data = await SpendService.getCurrency();
          if (data.status !== 401) {
            return data.data;
          } else {
            if (token === "") {
              setIsAuthenticated(false);
            }
            setToken("");
            navigate("/login");
          }
        } catch (error) {}
      };

    const addSpend = async (spendData) =>{
        try{
            const data = await SpendService.postSpend(spendData);
            if (data.status !== 401) {
                return data.data;
              } else {
                if (token === "") {
                  setIsAuthenticated(false);
                }
                setToken("");
                navigate("/login");
              }
        } catch(error) {}
    };

    const deleteSpend = async (id) =>{
        try{
            const data = await SpendService.deleteSpendByData(id);
            if (data.status !== 401) {
                return data.data;
              } else {
                if (token === "") {
                  setIsAuthenticated(false);
                }
                setToken("");
                navigate("/login");
              }
        } catch(error) {}
    };
    

    const updateSpend = async (updateSpendData) =>{
        try{
            const data = await SpendService.updateSpendByData(updateSpendData);
            if (data.status !== 401) {
                return data.data;
              } else {
                if (token === "") {
                  setIsAuthenticated(false);
                }
                setToken("");
                navigate("/login");
              }
        } catch(error) {}
    };





    return (
        <SpendContext.Provider value={{SpendDatas, addSpend, deleteSpend,updateSpend,getSpendType,getCurrencyType,updateSpendId,setUpdateSpendId,getSpend}}>
            {children}
        </SpendContext.Provider>
    )
}
export  {SpendProvider,SpendContext}