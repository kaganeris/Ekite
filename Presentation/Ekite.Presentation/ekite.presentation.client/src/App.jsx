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
import LeaveListPage from "./pages/LeaveList/LeaveListPage";
import { LeaveProvider } from "./context/LeaveContext";
import AddLeavePage from "./pages/AddLeave/AddLeavePage";
import UpdateLeavePage from "./pages/UpdateLeave/UpdateLeavePage";

function App() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const { isAuthenticated, setIsAuthenticated, employeeId } =
        useContext(AuthContext);

    return (
        <div>
            <ProfileProvider>
                {localStorage.getItem("user") ? (
                    <>
                        <LeaveProvider>
                            <BrowserRouter>
                                <Navbar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
                                {isSidebarOpen && <Sidebar />}
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
                                        path="/leave"
                                        element={<PrivateRoute element={<LeaveListPage />} />}
                                    />
                                    <Route
                                        path="/addLeave"
                                        element={<PrivateRoute element={<AddLeavePage />} />}
                                    />
                                    <Route
                                        path="/updateLeave"
                                        element={<PrivateRoute element={<UpdateLeavePage />} />}
                                    />
                                </Routes>
                                <Footer />
                            </BrowserRouter>
                        </LeaveProvider>
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
