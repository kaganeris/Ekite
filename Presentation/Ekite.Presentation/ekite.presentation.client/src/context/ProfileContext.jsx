import React, { createContext, useState, useEffect } from 'react';
import ProfileService from '../services/ProfileService';

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await ProfileService(1);
                console.log("context", data);
                setProfileData(data);
                setLoading(false);

            } catch (error) {
                console.error('Profil verisi �ekilirken bir hata olu�tu', error);
                setLoading(false);

            }
        };

        fetchData();
    }, []);

    if (loading) {
        console.log(loading);
    }

    return (
        <ProfileContext.Provider value={{ profileData, loading }}>
            {children}
        </ProfileContext.Provider>
    );
};

export { ProfileContext, ProfileProvider };