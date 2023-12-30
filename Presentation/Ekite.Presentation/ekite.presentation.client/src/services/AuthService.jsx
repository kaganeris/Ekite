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
          if(response.token){
            localStorage.setItem("user",JSON.stringify(response.token))
          }
          console.log(response);
          return response.data
    }
}