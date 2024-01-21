import axios from "axios";

//const url = "https://ekite.azurewebsites.net"

const url = "https://localhost:7152"

const LeaveService = {
  getLeaveById: async (id) => {
    try {
      const token = localStorage.getItem("user");
      const response = await axios.get(
        `${url}/api/Leave/GetUpdateLeaveById?id=${id}`,
        {
          headers: {
            Authorization: "Bearer " + token.replace(/"/g, ""),
          },
        }
      );
      return response;
    } catch (error) {
      console.error("İzin bilgisi çekilirken bir hata oluştu", error.message);

      return error.response;
    }
  },

  getLeaveListByEmployeeId: async (employeeId) => {
    try {
      const token = localStorage.getItem("user");
      const response = await axios.get(
        `${url}/api/Leave?employeeId=${employeeId}`,
        {
          headers: {
            Authorization: "Bearer " + token.replace(/"/g, ""),
          },
        }
      );
      console.log(response.data);
      return response;
    } catch (error) {
      console.error("İzin bilgisi çekilirken bir hata oluştu", error.message);

      return error.response;
    }
  },

  getLeaveTypes: async () => {
    try {
      const token = localStorage.getItem("user");
      const response = await axios.get(
        `${url}/api/Leave/GetLeaveTypes`,
        {
          headers: {
            Authorization: "Bearer " + token.replace(/"/g, ""),
          },
        }
      );
      return response;
    } catch (error) {
      console.error("İzin türleri çekilirken bir hata oluştu", error.message);

      return error.response;
    }
  },

  postLeave: async (leaveData) => {
    try {
      const token = localStorage.getItem("user");
      console.log("Leave data", leaveData);
      const response = await axios.post(
        `${url}/api/Leave`,
        leaveData,
        {
          headers: {
            Authorization: "Bearer " + token.replace(/"/g, ""),
          },
        }
      );
      return response;
    } catch (error) {
      console.error("İzin oluşturulurken bir hata oluştu", error.message);
      return error.response;
    }
  },

  deleteLeaveByData: async (id) => {
    try {
      const token = localStorage.getItem("user");
      const response = await axios.delete(
        `${url}/api/Leave?id=${id}`,
        {
          headers: {
            Authorization: "Bearer " + token.replace(/"/g, ""),
          },
        }
      );
      return response;
    } catch (error) {
        console.error("İzin silinirken bir hata oluştu", error.message);
        return error.response;
    }
  },


  updateLeaveByData: async (updateLeaveData) => {
    try {
      const token = localStorage.getItem("user");
      const response = await axios.put(
        `${url}/api/Leave`,
        updateLeaveData,
        {
          headers: {
            Authorization: "Bearer " + token.replace(/"/g, ""),
          },
        }
      );
      return response;
    } catch (error) {
      console.error("İzin güncellenirken bir hata oluştu", error.message);
      return erro.response;
    }
  },

  getPendingLeaveList : async () => {
    try {
      const token = localStorage.getItem("user");
      const response = await axios.get(
        `${url}/api/Leave/GetPendingList`,
        {
          headers: {
            Authorization: "Bearer " + token.replace(/"/g, ""),
          },
        }
      );
      console.log(response.data);
      return response;
    } catch (error) {
      console.error("Bekleyen izin bilgileri çekilirken bir hata oluştu", error.message);

      return error.response;
    }  
    
  },

  getApprovedLeaveList : async () => {
    try {
      console.log("getapproved servis çalıştı");
      const token = localStorage.getItem("user");
      const response = await axios.get(
        `${url}/api/Leave/GetApprovedList`,
        {
          headers: {
            Authorization: "Bearer " + token.replace(/"/g, ""),
          },
        }
      );
      console.log(response.data);
      return response;
    } catch (error) {
      console.error("Bekleyen izin bilgileri çekilirken bir hata oluştu", error.message);

      return error.response;
    }  
    
  },
  getRejectLeaveList : async () => {
    try {
      console.log("get reject servis çalıştı");
      const token = localStorage.getItem("user");
      const response = await axios.get(
        `${url}/api/Leave/GetRejectList`,
        {
          headers: {
            Authorization: "Bearer " + token.replace(/"/g, ""),
          },
        }
      );
      console.log(response.data);
      return response;
    } catch (error) {
      console.error("Bekleyen izin bilgileri çekilirken bir hata oluştu", error.message);

      return error.response;
    }  
    
  },


  approveLeave: async (id) => {
    console.log("ONAYLAMA ÇALIŞTI" , id);
    try {
      const token = localStorage.getItem("user");
      const response = await axios.get(
        `${url}/api/Leave/ApproveLeave?id=${id}`, 
        {
          headers: {
            Authorization: "Bearer " + token.replace(/"/g, ""),
          },
        }
      );
      console.log(response.data);
      return response;
    } catch (error) {
      console.error("Onaylama işlemi yapılırken hata oluştu", error.message);
      return error.response;
    } 
},

  
rejectLeave: async (id) => {
  console.log("Reddetme ÇALIŞTI" , id);
  try {
    const token = localStorage.getItem("user");
    const response = await axios.get(
      `${url}/api/Leave/RejectLeave?id=${id}`, 
      {
        headers: {
          Authorization: "Bearer " + token.replace(/"/g, ""),
        },
      }
    );
    console.log(response.data);
    return response;
  } 
  catch (error) {
    console.error("Reddetme işlemi yapılırken hata oluştu.", error.message);
    return error.response;
  }
},

  


}

export default LeaveService;
