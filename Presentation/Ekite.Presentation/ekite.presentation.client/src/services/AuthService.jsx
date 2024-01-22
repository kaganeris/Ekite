import axios from 'axios'
// "https://ekite.azurewebsites.net/api/Auth/Login"

//const url = "https://ekite.azurewebsites.net/"

const url = "https://localhost:7152/"

const AuthService = {
    login: async (email,password) => {
        const response = await axios.post(
            `${url}api/Auth/Login`,
            {
              "email": email,
              "password": password,
            }
          );
          if(response.data.token){
            console.log(response.data);
            localStorage.setItem("user",response.data.token)
            localStorage.setItem("id", response.data.id);
            localStorage.setItem("userRole",response.data.role)
          }
        console.log(response);
          return response.data
    },

    logout: () => {
      localStorage.clear()
    },
}

export default AuthService

