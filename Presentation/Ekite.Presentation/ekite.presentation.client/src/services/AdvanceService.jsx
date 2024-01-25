import axios from "axios";

//const url = "https://ekite.azurewebsites.net"

const url = "https://localhost:7152"

const AdvanceService = {
  getAdvanceList: async (employeeId) => {
    try {
      const token = localStorage.getItem("user");
      const response = await axios.get(
        `${url}/api/Advance/GetListAdvance?employeeId=${employeeId}`,
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
        `${url}/api/Advance/GetEnums`,
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
    console.log("🚀 ~ createAdvance: ~ createData:", createData)
    try {

      const token = localStorage.getItem("user");
      const response = await axios.post(`${url}/api/Advance/CreateAdvance`,createData,
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
    const response = await axios.get(`${url}/api/Advance/GetUpdateById?id=${id}`,
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
      const response = await axios.put(`${url}/api/Advance/UpdateAdvance?id=${id}`,updateData,
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
      
      const response = await axios.delete(`${url}/api/Advance/DeleteAdvance?id=${id}`,
      {
        headers : {
          Authorization: "Bearer " + token.replace(/"/g, ""),
        }
      });
      return response
    } catch (error) {
      return error.response
    }


  },

  getPendingAdvanceList: async ()=>{
    try{
      const token = localStorage.getItem("user");
      const response = await axios.get(`${url}/api/Advance/GetPendingList`,
      {
        headers: {
          Authorization: "Bearer " + token.replace(/"/g, ""),
        }
       
      });
      return response
    }catch(error){
      return error.response
    }
  },

  getApprovedAdvanceList: async () =>{
    try {
      const token= localStorage.getItem("user");
      const response =await axios.get(`${url}/api/Advance/GetApprovedList`,
      {
        headers:{
          Authorization: "Bearer " + token.replace(/"/g, ""),
        }
      }
      
      )
      return response
    } catch (error) {
      return error.response
    }
  },

  getRejectAdvanceList: async () =>{
    try {
      const token=localStorage.getItem("user");
      const response= await axios.get(`${url}/api/Advance/GetRejectList`,
      {
        headers:{
          Authorization: "Bearer " + token.replace(/"/g, ""),
        }
      }
      )
      return response
    } catch (error) {
      return error.response
    }
  },


  approvedAdvance: async (id)=>{
    try {
      //backend'deki http protokolü ile eşleşmesi gerekiyor orda get ise buradada get olmalı!
      const token=localStorage.getItem("user");
      const response = await axios.get(`${url}/api/Advance/ApprovedAdvance?id=${id}`,
      {
        headers: {
            Authorization: "Bearer " + token.replace(/"/g, ""),
        },
      }
      )
      return response;
    } catch (error) {
      console.error("Onaylama işlemi yapılırken hata oluştu.", error.message);
            return error.response;
    }

  },


  rejectAdvance: async (id)=>{
    try {
      const token=localStorage.getItem("user");
      const response = await axios.get(`${url}/api/Advance/RejectAdvance?id=${id}`,
      {
        headers: {
            Authorization: "Bearer " + token.replace(/"/g, ""),
        },
      }
      );
      return response;
    } catch (error) {
      console.error("Reddetme işlemi yapılırken hata oluştu.", error.message);
            return error.response;
    }
  }
      
    




};

export default AdvanceService;
