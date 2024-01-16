import axios from "axios";

const AddressService = {
    getAllCity: async () => {
        try {
            const response = await axios.get("https://turkiyeapi.dev/api/v1/provinces")
            console.log("İller",response);
            return response
        } catch (error) {
            console.log("Şehir bilgisi çekilirken hata oluştu",error.message);
            return error.response
        }
    },
    getAllDistrict: async (city) => {
       try {
        const response = await axios.get(`https://turkiyeapi.dev/api/v1/provinces?name=${city}`)
        return response
       } catch (error) {
        return error.response
       }
    }
}

export default AddressService;