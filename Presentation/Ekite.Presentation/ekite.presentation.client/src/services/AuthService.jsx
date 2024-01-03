import axios from 'axios'

const AuthService = {
    login: async (email,password) => {
        const response = await axios.post(
            "https://localhost:7152/api/Auth/Login",
            {
              "email": email,
              "password": password,
            }
          );
          if(response.data.token){
            localStorage.setItem("user",JSON.stringify(response.data.token))
            localStorage.setItem("employeeId", response.data.employeeId);
          }
          console.log(response);
          return response.data
    },

    logout: () => {
      localStorage.removeItem("user")
      localStorage.removeItem("employeeId")
    },
}

export default AuthService