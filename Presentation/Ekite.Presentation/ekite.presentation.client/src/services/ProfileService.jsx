import axios from "axios";
// `https://ekite.azurewebsites.net/api/Employee/GetDetailPersonel?id=${id}`
const ProfileService = {
  getDetailPersonelById: async (id) => {
    try {
      const token = localStorage.getItem("user");
      const response = await axios.get(
        `https://localhost:7152/api/Employee/GetDetailPersonel?id=${id}`,
        {
          headers: {
            Authorization: "Bearer " + token.replace(/"/g, ""),
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Profil verisi çekilirken bir hata oluştu", error.message);

      throw error;
    }
  },

  getUpdatePersonelByID: async (id) => {
    try {
      const token = localStorage.getItem("user");
      const response = await axios.get(
        `https://ekite.azurewebsites.net/api/Employee/GetUpdatePersonel?id=${id}`,
        {
          headers: {
            Authorization: "Bearer " + token.replace(/"/g, ""),
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Profil verisi çekilirken bir hata oluştu", error.message);

      throw error;
    }
  },

  putUpdatePersonelById: async (id, data) => {
    console.log(data, id);
    try {
      const token = localStorage.getItem("user");
      const response = await axios.put(
        `https://ekite.azurewebsites.net/api/Employee/PutUpdatePersonel?id=${id}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + token.replace(/"/g, ""),
          },
        }
      );

      return response.data;
    } catch (error) {}
  },
};

export default ProfileService;
