import axios from "axios";

//const url = "https://ekite.azurewebsites.net"

const url = "https://localhost:7152"

const EmployeeService = {

    postEmailAddress: async (email) => {
        try {
          const response = await axios.post(
            `${url}/api/Auth/RenewPassword?email=${email}`
          );
          return response;
        } catch (error) {
          console.error("Mail adresi gönderilirken hata oluştu", error.message);
    
          return error.response;
        }
      },

      postCode: async (codeAndappUserId) => {
        try {
          const response = await axios.post(
            `${url}/api/Auth/CheckCode`,codeAndappUserId
          );
          return response;
        } catch (error) {
          console.error("Kod gönderilirken hata oluştu", error.message);
          return error.response;
        }
      },


      postNewPassword : async (passAndAppUserID) => {
        try {
          const response = await axios.post(
            `${url}/api/Auth/NewPassword`,passAndAppUserID
          );
          return response;
        } catch (error) {
          console.error("Şifre gönderilirken hata oluştu", error.message);
          return error.response;
        }

      }
}

export default EmployeeService