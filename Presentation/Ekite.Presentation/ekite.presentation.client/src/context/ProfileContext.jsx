import React, { createContext, useState, useEffect, useContext } from 'react';
import ProfileService from '../services/ProfileService';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const {setToken,token,setIsAuthenticated} = useContext(AuthContext)
    const navigate = useNavigate()

    const fetchData = async (employeeId) => {
        try {

            const data = await ProfileService.getDetailPersonelById(employeeId);
            console.log(data);
            if(data.status === 200){
                setLoading(false);
                return data.data
            }
            else{
                console.log("data.status else çalıştı");
                console.log(token);
                if(token === ""){
                    setIsAuthenticated(false)
                }
                setToken("")
                navigate("/login")
            }
            

        } catch (error) {
            console.log("fetchdata",error);
            setLoading(false);
            setToken("")
        }
    };

    const updatePersonelData = async (employeeId) => {
        try {

            const data = await ProfileService.getUpdatePersonelByID(employeeId);
            if(data.status === 200){
                console.log("updatePersoneldata çalıştı");
                setLoading(false);
                return data.data
            }
            else{
                console.log("updatePersoneldata data status else çalıştı");
                if(token === ""){
                    setIsAuthenticated(false)
                }
                setToken("")
                navigate("/login")
            }

        } catch (error) {
            setLoading(false);

        }
    };


    const putPersonelData = async (employeeId,updateData) => {
        try {
            console.log("putpersonaldata çalıştı",employeeId,updateData)
            const data = await ProfileService.putUpdatePersonelById(employeeId,updateData);
            if(data.status === 200){
                setLoading(false);
                return data.data
            }
            else{
                if(token === ""){
                    setIsAuthenticated(false)
                }
                setToken("")
                navigate("/login")
            }

        } catch (error) {
            setLoading(false);
            throw error
        }
    };


    return (
        <ProfileContext.Provider value={{ loading,fetchData , updatePersonelData , putPersonelData }}>
            {children}
        </ProfileContext.Provider>
    );
};

export { ProfileContext, ProfileProvider };