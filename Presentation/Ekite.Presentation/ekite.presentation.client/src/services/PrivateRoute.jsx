import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate } from "react-router-dom"


const PrivateRoute = ({element}) => {

    const {isAuthenticated} = useContext(AuthContext)

    console.log("Authenticate mi?",isAuthenticated);
    return localStorage.getItem("user") ? element : <Navigate to="/login"/>
}

export default PrivateRoute