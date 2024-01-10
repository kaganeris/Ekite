import axios from 'axios'
// "https://ekite.azurewebsites.net/api/Auth/Login"
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
            localStorage.setItem("user",response.data.token)
            localStorage.setItem("employeeId", response.data.employeeId);
          }
          console.log(response);
          return response.data
    },

    logout: () => {
      localStorage.clear()
    },
}

export default AuthService