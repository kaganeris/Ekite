import { createContext } from "react";
import AddressService from '../services/AddressService';

const AddressContext = createContext()

const AddresProvider = ({children}) => {

    const getCities = async () => {
        try {
            const response = await AddressService.getAllCity()
            return response.data.data
        } catch (error) {
            throw error
        }
    }

    const getDistricts = async (city) => {
        try {
            const response = await AddressService.getAllDistrict(city)
            return response.data.data[0].districts
        } catch (error) {
            throw error            
        }
    }




    return <AddressContext.Provider value={{getCities,getDistricts}}>
        {children}
    </AddressContext.Provider>
}

export { AddressContext, AddresProvider };