import React, { useContext, useEffect,useState} from 'react'
import { AuthContext } from '../../context/AuthContext';
import { SpendContext } from '../../context/SpendContext';
import CreateSpend from '../../Components/CreateSpend/CreateSpend'


const CreateSpendPage = () => {
    const {employeeId,setEmployeeId,setIsAuthenticated} = useContext(AuthContext);
    const [spendTypes, setSpendTypes] = useState(null);
    const [currencyTypes, setCurrencyTypes] = useState(null);
    const {getSpendType,getCurrencyType} = useContext(SpendContext);

    useEffect(()=>{
      if(employeeId !==0){
        (async()=>{
          try{
            let typeData =await getSpendType();
            setSpendTypes(typeData);

            let currencyData = await getCurrencyType();
            
            setCurrencyTypes(currencyData);

            console.log(typeData, currencyData)
          }catch(error) {
            console.log(error);
          }
        })()
      }else{
        const storedEmployeeId= localStorage.getItem("employeeId");
        if (storedEmployeeId) {
          setEmployeeId(parseInt(storedEmployeeId));
          setIsAuthenticated(true);
        }
      }
    },[employeeId])




  return (
    <div className="main-content">
      <div className="container mt-5  ">
        <div className="row ">
          <div className="col ">
            <CreateSpend spendTypes={spendTypes} currencyTypes={currencyTypes} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateSpendPage