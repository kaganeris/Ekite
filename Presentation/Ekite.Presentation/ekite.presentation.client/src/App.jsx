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
import ProfileSumPage from "./Pages/Profile/ProfileSumPage";
import AdvanceListPage from "./Pages/Advance/AdvanceListPage";
import ProfilePage from "./Pages/Profile/ProfilePage";
import {AdvanceProvider} from "./context/AdvanceContext";
import AdvanceCreatePage from "./Pages/AdvanceCreate/AdvanceCreatePage";
import AdvanceUpdatePage from "./Pages/AdvanceUpdate/AdvanceUpdatePage";

function App() {
  const { isAuthenticated, setIsAuthenticated, employeeId } =
    useContext(AuthContext);

  return (
    <div>
      <ProfileProvider>
        {localStorage.getItem("user") ? (
          <>
            <AdvanceProvider>
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
                    path="/advanceList"
                    element={<PrivateRoute element={<AdvanceListPage />} />}
                  />
                     <Route
                    path="/createAdvance"
                    element={<PrivateRoute element={<AdvanceCreatePage />} />}
                  />
                     <Route
                    path="/updateAdvance"
                    element={<PrivateRoute element={<AdvanceUpdatePage />} />}
                  />
                </Routes>
                <Footer />
              </BrowserRouter>
            </AdvanceProvider>
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
