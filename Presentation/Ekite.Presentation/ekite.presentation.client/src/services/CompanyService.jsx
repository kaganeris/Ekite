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
  getCompanyLeaves: async (id) => {
    try {
      const response = await axios.get(`${url}/api/Company/GetCompanyLeaves?companyID=${id}`);
      console.log(response.data);
      return response;
    } catch (error) {
      console.error("Şirket İzin bilgisi çekilirken bir hata oluştu", error.message);

      return error.response;
    }
  },
  getCompanyAdvances: async (id) => {
    try {
      const response = await axios.get(`${url}/api/Company/GetCompanyAdvances?companyID=${id}`);
      console.log(response.data);
      return response;
    } catch (error) {
      console.error("Şirket Avans bilgisi çekilirken bir hata oluştu", error.message);

      return error.response;
    }
  },
  getCompanySpends: async (id) => {
    try {
      const response = await axios.get(`${url}/api/Company/GetCompanySpends?companyID=${id}`);
      console.log(response.data);
      return response;
    } catch (error) {
      console.error("Şirket Harcama bilgisi çekilirken bir hata oluştu", error.message);

      return error.response;
    }
  }

};

export default CompanyService
