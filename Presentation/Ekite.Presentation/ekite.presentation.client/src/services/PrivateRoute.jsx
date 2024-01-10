import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate } from "react-router-dom"


const PrivateRoute = ({element}) => {

    const {isAuthenticated} = useContext(AuthContext)
    return localStorage.getItem("user") ? element : <Navigate to="/login"/>
}

export default PrivateRoute