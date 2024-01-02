import axios from 'axios';

const ProfileService = async (id)=>{
    try {
        const response = await axios.get(`https://localhost:7152/api/Employee/GetDetailPersonel?id=${id}`);
        return response.data;
    } catch(error) {
        console.error('Profil verisi �ekilirken bir hata olu�tu', error);
        throw error;
    }
}

export default ProfileService;


