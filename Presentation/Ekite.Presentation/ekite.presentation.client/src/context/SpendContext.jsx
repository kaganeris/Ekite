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

    const pendingSpendDatas = async () => {
        try {
            console.log("context çalýþtý")
            const data = await SpendService.getPendingSpendList();
            if (data.status === 200) {
                console.log("context gelen veri:", data.data)
                return data.data;
            } else {
                if (token === "") {
                    setIsAuthenticated(false);
                }
                setToken("");
                navigate("/login");
            }
          
        } catch (error) { }
    };

    const approvedSpendDatas = async () => {
        try {
            const data = await SpendService.getApprovedSpendList();
            if (data.status === 200) {
                return data.data;
            } else {
                if (token === "") {
                    setIsAuthenticated(false);
                }
                setToken("");
                navigate("/login");
            }
        } catch (error) { }
    };

    const rejectSpendDatas = async () => {
        try {
            const data = await SpendService.getRejectSpendList();
            if (data.status === 200) {
                return data.data;
            } else {
                if (token === "") {
                    setIsAuthenticated(false);
                }
                setToken("");
                navigate("/login");
            }
        } catch (error) { }
    };

    const approveSpendProcess = async (id) => {
        try {
            const data = await SpendService.approveSpend(id);
            if (data.status === 200) {
                return data.data;
            } else {
                if (token === "") {
                    setIsAuthenticated(false);
                }
                setToken("");
                navigate("/login");
            }
        } catch (error) { }
    }

    const rejectSpendProcess = async (id) => {
        try {
            const data = await SpendService.rejectSpend(id);
            if (data.status === 200) {
                return data.data;
            } else {
                if (token === "") {
                    setIsAuthenticated(false);
                }
                setToken("");
                navigate("/login");
            }
        } catch (error) { }
    }


    return (
        <SpendContext.Provider value={{ SpendDatas, addSpend, deleteSpend, updateSpend, getSpendType, getCurrencyType, updateSpendId, setUpdateSpendId, getSpend, pendingSpendDatas, rejectSpendProcess, approveSpendProcess, approvedSpendDatas, rejectSpendDatas }}>
            {children}
        </SpendContext.Provider>
    )
}
export  {SpendProvider,SpendContext}