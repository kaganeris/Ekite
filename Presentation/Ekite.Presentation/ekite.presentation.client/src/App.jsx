//import { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Profile from "./Pages/Profile/Profile";
import LoginPage from "./Pages/Login/LoginPage";

import EditProfile from "./Pages/EditProfile/EditProfile";
import "./App.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import PrivateRoute from "./services/PrivateRoute";

function App() {
  const { isAuthenticated,setIsAuthenticated} = useContext(AuthContext);
    console.log("appauth",isAuthenticated);


  return (
    <div>
      {localStorage.getItem("user") ? (
        <>
          <BrowserRouter>
          <Navbar />
          <Sidebar />
            <Routes>
              <Route
                path="/"
                element={<PrivateRoute element={<Profile />} />}
              />
              <Route
                path="/editprofile"
                element={<PrivateRoute element={<EditProfile />} />}
              />
            </Routes>
          <Footer />
          </BrowserRouter>
        </>
      ) : (
        <LoginPage />
      )}
    </div>
  );

  //async function populateWeatherData() {
  //    const response = await fetch("weatherforecast");
  //    const data = await response.json();
  //}
}

export default App;
