import axios from "axios";

const url = "https://ekite.azurewebsites.net"

//const url = "https://localhost:7152";

const DepartmentService = {
  getDepartments: async () => {
    try {
      const response = await axios.get(`${url}/api/Department/GetDepartments`);
      console.log(response.data);
      return response;
    } catch (error) {
      console.error("Departman bilgisi çekilirken bir hata oluştu", error.message);

      return error.response;
    }
  },
};

export default DepartmentService
