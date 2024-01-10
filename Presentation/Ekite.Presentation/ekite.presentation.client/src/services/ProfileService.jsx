import axios from "axios";
//https://localhost:7152
//https://ekite.azurewebsites.net
const ProfileService = {
  getDetailPersonelById: async (id) => {
    try {
      console.log("getdetailpersonelbyid çalıştı");
      const token = localStorage.getItem("user");
      if(token){
        const response = await axios.get(
          `https://localhost:7152/api/Employee/GetDetailPersonel?id=${id}`,
          {
            headers: {
              Authorization: "Bearer " + token.replace(/"/g, ""),
            },
          }
        );
        return response;
      }
    } catch (error) {
      console.error("Profil verisi çekilirken bir hata oluştu", error.message);

      return error.response;
    }
  },

  getUpdatePersonelByID: async (id) => {
    try {
      const token = localStorage.getItem("user");
      const response = await axios.get(
        `https://localhost:7152/api/Employee/GetUpdatePersonel?id=${id}`,
        {
          headers: {
            Authorization: "Bearer " + token.replace(/"/g, ""),
          },
        }
        );
        console.log(response);
      return response;
    } catch (error) {
      console.error("Profil verisi çekilirken bir hata oluştu", error.message);

      return error.response;
    }
  },

  putUpdatePersonelById: async (id, data) => {
    console.log(data, id);
    try {
      const token = localStorage.getItem("user");
      const response = await axios.put(
        `https://localhost:7152/api/Employee/PutUpdatePersonel?id=${id}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + token.replace(/"/g, ""),
          },
        }
      );

      return response;
    } catch (error) {
      return error.response;
    }
  },
};

export default ProfileService;
