import React, { createContext, useState, useEffect } from 'react';
import ProfileService from '../services/ProfileService'; 

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await ProfileService(13); 
                setProfileData(data);
            } catch (error) {
                console.error('Profil verisi çekilirken bir hata oluþtu', error);
            }
        };

        fetchData();
    }, []); 
    return (
        <ProfileContext.Provider value={profileData}>
            {children}
        </ProfileContext.Provider>
    );
};

export { ProfileContext, ProfileProvider };