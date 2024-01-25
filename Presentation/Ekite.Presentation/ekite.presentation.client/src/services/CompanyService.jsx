import axios from "axios";

//const url = "https://ekite.azurewebsites.net"

const url = "https://localhost:7152";

const CompanyService = {
  getCompanies: async () => {
    try {
      const response = await axios.get(`${url}/api/Company/GetCompanies`);
      console.log(response.data);
      return response;
    } catch (error) {
      console.error("Şirket bilgisi çekilirken bir hata oluştu", error.message);

      return error.response;
    }
  },
};

export default CompanyService
