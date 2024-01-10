import axios from "axios";

const AdvanceService = {
  getAdvanceList: async (employeeId) => {
    try {
      const token = localStorage.getItem("user");
      const response = await axios.get(
        `https://localhost:7152/api/Advance/GetListAdvance?employeeId=${employeeId}`,
        {
          headers: {
            Authorization: "Bearer " + token.replace(/"/g, ""),
          },
        }
      );
      if (response !== null) {
        return response.data;
      }
    } catch (error) {}
  },

  getEnums: async () => {
    console.log("metot çalıştı")
    try {
      const token = localStorage.getItem("user");

      const response = await axios.get(
        `https://localhost:7152/api/Advance/GetEnums`,
        {
          headers: {
            Authorization: "Bearer " + token.replace(/"/g, ""),
          },
        }
      );
      if (response !== null) {
        return response.data;
      }
    } catch (error) {     
    }
  },

  createAdvance: async (createData) => {
    try {

      const token = localStorage.getItem("user");
      const response = await axios.post(`https://localhost:7152/api/Advance/CreateAdvance`,createData,
      {
        headers : {
          Authorization: "Bearer " + token.replace(/"/g, ""),
        }
      });
      return response.data;
    } catch (error) {
      console.error("Avans oluşturulurken bir hata oluştu", error.message);
      throw error;
    }
  },

  getAdvanceById : async (id) => {
   try {
    const token = localStorage.getItem("user");
    const response = await axios.get(`https://localhost:7152/api/Advance/GetUpdateById?id=${id}`,
    {
      headers: {
        Authorization: "Bearer " + token.replace(/"/g, ""),
      },
    });

    return response.data;

   } catch (error) {
    console.error("Avans bilgileri getirilirken bir hata oluştu", error.message);
    throw error;
    
   }


  },



  updateAdvance : async (id,updateData) => {
    try {
      const token = localStorage.getItem("user");
      const response = await axios.put(`https://localhost:7152/api/Advance/UpdateAdvance?id=${id}`,updateData,
      {
        headers : {
          Authorization: "Bearer " + token.replace(/"/g, ""),
        }
      });
      return response.data;

    } catch (error) {    
    }
  },


  deleteAdvance : async (id) => {
    try {
      const token = localStorage.getItem("user");
      
      const response = await axios.delete(`https://localhost:7152/api/Advance/DeleteAdvance?id=${id}`,
      {
        headers : {
          Authorization: "Bearer " + token.replace(/"/g, ""),
        }
      });
    } catch (error) {
      
    }


  }


};

export default AdvanceService;
