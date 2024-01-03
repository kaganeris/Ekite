import axios from "axios";

const ProfileService = async (id) => {
  try {
    const token = localStorage.getItem("user");
    console.log("Bearer " + token.replace(/"/g, ""));
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
};

export default ProfileService;
