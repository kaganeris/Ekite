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
        return response;
      }
    } catch (error) {
      return error.response
    }
  },

  getEnums: async () => {
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
        return response;
      }
    } catch (error) {   
      return error.response  
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
      return response;
    } catch (error) {
      console.error("Avans oluşturulurken bir hata oluştu", error.message);
      return error.response;
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

    return response;

   } catch (error) {
    console.error("Avans bilgileri getirilirken bir hata oluştu", error.message);
    return error.response;
    
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
      return response;

    } catch (error) {   
      return error.response 
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
      return error.response
    }


  }


};

export default AdvanceService;
