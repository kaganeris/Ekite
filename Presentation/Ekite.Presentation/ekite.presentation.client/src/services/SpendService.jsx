import axios from "axios";
// ilgili verileri backend'den çekmek ve bu verileri uygulamanın ilgili bölümlerinde göstermek işine yarar.

//const url = "https://ekite.azurewebsites.net"

const url = "https://localhost:7152"

const SpendService={
    
    getSpendById: async(id) =>{
        try{
            const token=localStorage.getItem("user");
            const response = await axios.get(`${url}/api/Spend/UpdateSpend?id=${id}`,
            {
              headers: {
                Authorization: "Bearer " + token.replace(/"/g, ""),
              },
            }
            );
            return response;
        }catch (error){
         console.error("Harcama Bilgisi Çekilirken Bir Hata Oluştu!",error.message);
         return error.response;
        }

    },

    getSpendListByEmployeeId: async(employeeId) =>{
        try{
            const token=localStorage.getItem("user");

            const response=await axios.get(`${url}/api/Spend/GetListSpend/${employeeId}`,
            {
                headers:{
                    Authorization: "Bearer " + token.replace(/"/g, ""), 
                },
            }
            
            )
            console.log(response.data);
            return response
        } catch(error){
            console.error("Harcama Bilgisi Çekilirken Bir Hata Oluştu!", error.message);
            return error.response;
        }

    },

    getSpendTypes: async()=>{
        try{
            const token = localStorage.getItem("user");
            const response = await axios.get(
                `${url}/api/Spend/GetSpendTypeDisplay`,
                {
                    headers : {
                        Authorization: "Bearer " + token.replace(/"/g, ""),  
                    },
                }
            );
            return response;
        }catch(error) {
            console.error("Harcama Türleri Çekilirken Bir Hata Oluştu!", error.message);
            return error.response;
        }
    },

    getCurrency: async()=>{
        try{
            const token = localStorage.getItem("user");
            const response = await axios.get(
                `${url}/api/Spend/GetCurrencyDisplay`,
                {
                    headers : {
                        Authorization: "Bearer " + token.replace(/"/g, ""),  
                    },
                }
            );
            return response;
        }catch(error) {
            console.error("Para Birimi Çekilirken Bir Hata Oluştu!", error.message);
            return error.response;
        }
    },

    postSpend: async(spendData) => {
        try{
            const token =localStorage.getItem("user");
            const response=await axios.post(`${url}/api/Spend/CreateSpend`,spendData,
            {
                headers: {
                
                    Authorization: "Bearer " + token.replace(/"/g, "")
                  },
                  
            }
            );

            return response;

        }catch(error){
            console.error("Harcama oluşturulurken bir hata oluştu!",error.message);
            return error.response;
        }
            
    },

    deleteSpendByData: async(id)=>{
        try{
            const token = localStorage.getItem("user");
            const response = await axios.delete(
                `${url}/api/Spend/DeleteSpend?id=${id}`,
                {
                    headers: {
                      Authorization: "Bearer " + token.replace(/"/g, ""),
                    },
            
                  }
                
            );
            return response;
        }catch(error){
            console.error("Harcama Silinirken Hata Oluştu!",error.message);
            return error.response;

        }

    },


    updateSpendByData: async(updateSpendData)=>{
        try{
            const token =localStorage.getItem("user");
            const response = await axios.put(
                `${url}/api/Spend/UpdateSpend`,updateSpendData,
                {
                    headers: {
                        Authorization: "Bearer " + token.replace(/"/g, ""),
                    },
                }
            );
            return response;

        }catch(error){
            console.error("Harcama Güncellenirken Hata Oluştu!",error.message);
            return error.response;
        }
    }
            
}
export default SpendService;
            



     