import React, { createContext, useState, useEffect, useContext } from 'react';
import ProfileService from '../services/ProfileService';
import { AuthContext } from './AuthContext';

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);
    

    const fetchData = async (employeeId) => {
        try {

            const data = await ProfileService(employeeId);
            setLoading(false);
            return data

        } catch (error) {
            setLoading(false);

        }
    };

    return (
        <ProfileContext.Provider value={{ profileData, loading,fetchData }}>
            {children}
        </ProfileContext.Provider>
    );
};

export { ProfileContext, ProfileProvider };