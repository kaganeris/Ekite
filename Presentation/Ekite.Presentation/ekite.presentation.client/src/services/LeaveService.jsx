import axios from "axios";

const LeaveService = {
  getLeaveById: async (id) => {
    try {
      const token = localStorage.getItem("user");
      const response = await axios.get(
        `https://localhost:7152/api/Leave/GetUpdateLeaveById?id=${id}`,
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
        `https://localhost:7152/api/Leave?employeeId=${employeeId}`,
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
        `https://localhost:7152/api/Leave/GetLeaveTypes`,
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
        `https://localhost:7152/api/Leave`,
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
        `https://localhost:7152/api/Leave?id=${id}`,
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
        `https://localhost:7152/api/Leave`,
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
  }
};

export default LeaveService;
