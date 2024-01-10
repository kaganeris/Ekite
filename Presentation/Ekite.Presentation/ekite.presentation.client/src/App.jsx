//import { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import LoginPage from "./Pages/Login/LoginPage";

import EditProfilePage from "./Pages/EditProfile/EditProfilePage";
import "./App.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import PrivateRoute from "./services/PrivateRoute";
import { ProfileProvider } from "./context/ProfileContext";
import ProfilePage from "./pages/Profile/ProfilePage";
import ProfileSumPage from "./Pages/Profile/ProfileSumPage";
import SpendListPage from "./Pages/SpendList/SpendListPage";
import { SpendProvider } from "./context/SpendContext"
import CreateSpendPage from "./Pages/CreateSpend/CreateSpendPage";
import UpdateSpendPage from "./Pages/UpdateSpend/UpdateSpendPage";


function App() {
  const { isAuthenticated, setIsAuthenticated,employeeId } = useContext(AuthContext);

  return (
    <div>
      <ProfileProvider>
        {localStorage.getItem("user") ? (
          <>
          <SpendProvider>
            <BrowserRouter>
              <Navbar />
              <Sidebar />
              <Routes>
                <Route
                  path="/"
                  element={<PrivateRoute element={<ProfilePage />} />}
                />
                  <Route
                  path="/profilesum"
                  element={<PrivateRoute element={<ProfileSumPage />} />}
                />
                <Route
                  path="/editprofile"
                  element={<PrivateRoute element={<EditProfilePage />} />}
                />

                <Route
                    path="/spend"
                    element={<PrivateRoute element={<SpendListPage />} />}
                  />

                  <Route
                    path="/createspend"
                    element={<PrivateRoute element={<CreateSpendPage />} />}
                    />

                    <Route
                    path="/updatespend"
                    element={<PrivateRoute element={<UpdateSpendPage />} />}
                    />
              </Routes>
              <Footer />
            </BrowserRouter>
            </SpendProvider>
          </>
        ) : (
          <LoginPage />
        )}
      </ProfileProvider>
    </div>
  );

  //async function populateWeatherData() {
  //    const response = await fetch("weatherforecast");
  //    const data = await response.json();
  //}
}

export default App;
