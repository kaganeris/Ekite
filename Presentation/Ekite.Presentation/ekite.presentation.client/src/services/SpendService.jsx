import axios from "axios";
// ilgili verileri backend'den çekmek ve bu verileri uygulamanın ilgili bölümlerinde göstermek işine yarar.
const SpendService={
    
    getSpendById: async(id) =>{
        try{
            const token=localStorage.getItem("user");
            const response = await axios.get(`https://localhost:7152/api/Spend/UpdateSpend?id=${id}`,
            {
              headers: {
                Authorization: "Bearer " + token.replace(/"/g, ""),
              },
            }
            );
            return response.data;
        }catch (error){
         console.error("Harcama Bilgisi Çekilirken Bir Hata Oluştu!",error.message);
         throw error;
        }

    },

    getSpendListByEmployeeId: async(employeeId) =>{
        try{
            const token=localStorage.getItem("user");

            const response=await axios.get(`https://localhost:7152/api/Spend/GetListSpend/${employeeId}`,
            {
                headers:{
                    Authorization: "Bearer " + token.replace(/"/g, ""), 
                },
            }
            
            )
            console.log(response.data);
            return response.data
        } catch(error){
            console.error("Harcama Bilgisi Çekilirken Bir Hata Oluştu!", error.message);
            throw error;
        }

    },

    getSpendTypes: async()=>{
        try{
            const token = localStorage.getItem("user");
            const response = await axios.get(
                `https://localhost:7152/api/Spend/GetSpendTypeDisplay`,
                {
                    headers : {
                        Authorization: "Bearer " + token.replace(/"/g, ""),  
                    },
                }
            );
            return response.data;
        }catch(error) {
            console.error("Harcama Türleri Çekilirken Bir Hata Oluştu!", error.message);
            throw error;
        }
    },

    getCurrency: async()=>{
        try{
            const token = localStorage.getItem("user");
            const response = await axios.get(
                `https://localhost:7152/api/Spend/GetCurrencyDisplay`,
                {
                    headers : {
                        Authorization: "Bearer " + token.replace(/"/g, ""),  
                    },
                }
            );
            return response.data;
        }catch(error) {
            console.error("Para Birimi Çekilirken Bir Hata Oluştu!", error.message);
            throw error;
        }
    },

    postSpend: async(spendData) => {
        try{
            const token =localStorage.getItem("user");
            const response=await axios.post(`https://localhost:7152/api/Spend/CreateSpend`,spendData,
            {
                headers: {
                
                    Authorization: "Bearer " + token.replace(/"/g, "")
                  },
                  
            }
            );

            return response.data;

        }catch(error){
            console.error("Harcama oluşturulurken bir hata oluştu!",error.message);
            throw error;
        }
            
    },

    deleteSpendByData: async(id)=>{
        try{
            const token = localStorage.getItem("user");
            const response = await axios.delete(
                `https://localhost:7152/api/Spend/DeleteSpend?id=${id}`,
                {
                    headers: {
                      Authorization: "Bearer " + token.replace(/"/g, ""),
                    },
            
                  }
                
            );
            return response.data;
        }catch(error){
            console.error("Harcama Silinirken Hata Oluştu!",error.message);
            throw error;

        }

    },


    updateSpendByData: async(updateSpendData)=>{
        try{
            const token =localStorage.getItem("user");
            const response = await axios.put(
                `https://localhost:7152/api/Spend/UpdateSpend`,updateSpendData,
                {
                    headers: {
                        Authorization: "Bearer " + token.replace(/"/g, ""),
                    },
                }
            );
            return response.data;

        }catch(error){
            console.error("Harcama Güncellenirken Hata Oluştu!",error.message);
            throw error;
        }
    }
            
}
export default SpendService;
            



     