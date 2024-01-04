import axios from 'axios'

const AuthService = {
    login: async (email,password) => {
        const response = await axios.post(
            "https://ekite.azurewebsites.net/api/Auth/Login",
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