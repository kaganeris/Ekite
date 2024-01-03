import React, { createContext, useState, useEffect, useContext } from 'react';
import ProfileService from '../services/ProfileService';
import { AuthContext } from './AuthContext';

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    

    const fetchData = async (employeeId) => {
        try {

            const data = await ProfileService.getDetailPersonelById(employeeId);

            setLoading(false);
            return data

        } catch (error) {
            setLoading(false);

        }
    };

    const updatePersonelData = async (employeeId) => {
        try {

            const data = await ProfileService.getUpdatePersonelByID(employeeId);
            setLoading(false);
            return data

        } catch (error) {
            setLoading(false);

        }
    };


    const putPersonelData = async (employeeId,updateData) => {
        try {
            console.log("putpersonaldata çalıştı",employeeId,updateData)
            const data = await ProfileService.putUpdatePersonelById(employeeId,updateData);
            setLoading(false);
            return data

        } catch (error) {
            setLoading(false);
        }
    };


    return (
        <ProfileContext.Provider value={{ loading,fetchData , updatePersonelData , putPersonelData }}>
            {children}
        </ProfileContext.Provider>
    );
};

export { ProfileContext, ProfileProvider };