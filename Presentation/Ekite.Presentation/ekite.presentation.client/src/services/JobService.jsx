import axios from "axios";

const url = "https://ekite.azurewebsites.net"

//const url = "https://localhost:7152";

const JobService = {
  getJobs: async () => {
    try {
      const response = await axios.get(`${url}/api/Job/GetJobs`);
      console.log(response.data);
      return response;
    } catch (error) {
      console.error("Meslek bilgisi çekilirken bir hata oluştu", error.message);

      return error.response;
    }
  },
};

export default JobService
