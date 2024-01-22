import axios from "axios";

//const url = "https://ekite.azurewebsites.net"

const url = "https://localhost:7152"

const ProfileService = {
  getDetailPersonelById: async (id) => {
    try {
      console.log("getdetailpersonelbyid çalıştı",id);
      const token = localStorage.getItem("user");
      if(token){
        const response = await axios.get(
          `${url}/api/Employee/GetDetailPersonel?id=${id}`,
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
  getDetailDirectorById: async (id) => {
    try {
      const token = localStorage.getItem("user");
      if(token){
        const response = await axios.get(
          `${url}/api/Director/GetDetailDirector?id=${id}`,
          {
            headers: {
              Authorization: "Bearer " + token.replace(/"/g, ""),
            },
          }
        );
        console.log("profileservice getdetaildirector",response);
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
        `${url}/api/Employee/GetUpdatePersonel?id=${id}`,
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
  getUpdateDirectorByID: async (id) => {
    try {
      const token = localStorage.getItem("user");
      const response = await axios.get(
        `${url}/api/Director/GetUpdateDirector?id=${id}`,
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
        `${url}/api/Employee/PutUpdatePersonel?id=${id}`,
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

  putUpdateDirectorById: async (id,data) => {
    try {
      const token = localStorage.getItem("user");
      const response = await axios.put(
        `${url}/api/Director/PutUpdateDirector?id=${id}`,
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

  getDetailSiteOwnerById : async (id) => {
    try {
      const token = localStorage.getItem("user");
      if(token){
        const response = await axios.get(
          `${url}/api/SiteOwner/GetDetailSiteOwner?id=${id}`,
          {
            headers: {
              Authorization: "Bearer " + token.replace(/"/g, ""),
            },
          }
        );
        console.log("profileservice getdetailowner",response);
        return response;
      }
    } catch (error) {
      console.error("Profil verisi çekilirken bir hata oluştu", error.message);

      return error.response;
    }
  },



};

export default ProfileService;
