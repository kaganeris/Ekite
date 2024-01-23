//import { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Sidebar from "./Components/Sidebar/Sidebar";
import LoginPage from "./Pages/Login/LoginPage";

import EditProfilePage from "./Pages/Profile/EditProfilePage";
import "./App.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import PrivateRoute from "./services/PrivateRoute";
import { ProfileProvider } from "./context/ProfileContext";
import ProfileSumPage from "./Pages/Profile/ProfileSumPage";
import LeaveListPage from "./Pages/Leave/LeaveListPage";
import { LeaveProvider } from "./context/LeaveContext";
import AddLeavePage from "./Pages/Leave/AddLeavePage";
import UpdateLeavePage from "./Pages/Leave/UpdateLeavePage";
import SpendListPage from "./Pages/Spend/SpendListPage";
import { SpendProvider } from "./context/SpendContext";
import CreateSpendPage from "./Pages/Spend/CreateSpendPage";
import UpdateSpendPage from "./Pages/Spend/UpdateSpendPage";
import { AdvanceProvider } from "./context/AdvanceContext";
import AdvanceCreatePage from "./Pages/Advance/AdvanceCreatePage";
import AdvanceUpdatePage from "./Pages/Advance/AdvanceUpdatePage";
import AdvanceListPage from "./Pages/Advance/AdvanceListPage";
import { AddresProvider } from "./context/AddressContext";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar/Navbar";
import PendingLeaveListPage from "./Pages/PendingLeaveList/PendingLeaveListPage";
import ProfilePage from "./Pages/Profile/ProfilePage";
import ApprovedLeaveListPage from "./Pages/ApprovedLeaveList/ApprovedLeaveListPage";
import RejectLeaveListPage from "./Pages/RejectLeaveList/RejectLeaveListPage";
import { EmployeeProvider } from "./context/EmployeeContext";

import ApprovedSpendListPage from "./Pages/ApprovedSpendList/ApprovedSpendListPage";
import PendingSpendListPage from "./Pages/PendingSpendList/PendingSpendListPage";
import RejectSpendListPage from "./Pages/RejectSpendList/RejectSpendListPage";
import CreateEmployeePage from "./Pages/Employee/CreateEmployeePage";
function App() {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const { isAuthenticated, setIsAuthenticated, employeeId, token, setToken } =
        useContext(AuthContext);
    const { darkMode } = useContext(ThemeContext);
    useEffect(() => { }, [isAuthenticated]);

    return (
        <div className={darkMode ? "" : "bg-dark"} style={{ height: "100dvh" }}>
            <>
                <BrowserRouter>
                    <ProfileProvider>
                        <LeaveProvider>
                            <AdvanceProvider>
                                <SpendProvider>
                                    <AddresProvider>
                                        <EmployeeProvider>
                                            {isAuthenticated && (
                                                <>
                                                    <Navbar
                                                        isSidebarOpen={isSidebarOpen}
                                                        setSidebarOpen={setSidebarOpen}
                                                    />
                                                    {isSidebarOpen && <Sidebar />}
                                                </>
                                            )}

                                            <Routes>
                                                {isAuthenticated ? (
                                                    <Route path="/" element={<Navigate to="/home" />} />
                                                ) : (
                                                    <Route path="/" element={<Navigate to="/login" />} />
                                                )}
                                                <Route path="/login" element={<LoginPage />} />
                                                <Route
                                                    path="/home"
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
                                                    path="/leaves"
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
                                                <Route
                                                    path="/advanceList"
                                                    element={<PrivateRoute element={<AdvanceListPage />} />}
                                                />
                                                <Route
                                                    path="/createAdvance"
                                                    element={
                                                        <PrivateRoute element={<AdvanceCreatePage />} />
                                                    }
                                                />
                                                <Route
                                                    path="/updateAdvance"
                                                    element={
                                                        <PrivateRoute element={<AdvanceUpdatePage />} />
                                                    }
                                                />
                                                <Route
                                                    path="/pendingLeaveList"
                                                    element={
                                                        <PrivateRoute element={<PendingLeaveListPage />} />
                                                    }
                                                />
                                                <Route
                                                    path="/approvedLeaveList"
                                                    element={
                                                        <PrivateRoute element={<ApprovedLeaveListPage />} />
                                                    }
                                                />
                                                <Route
                                                    path="/rejectLeaveList"
                                                    element={
                                                        <PrivateRoute element={<RejectLeaveListPage />} />
                                                    }
                                                />
                                                <Route
                                                    path="/pendingSpendList"
                                                    element={
                                                        <PrivateRoute element={<PendingSpendListPage />} />
                                                    }
                                                />
                                                <Route
                                                    path="/approvedSpendList"
                                                    element={
                                                        <PrivateRoute element={<ApprovedSpendListPage />} />
                                                    }
                                                />
                                                <Route
                                                    path="/rejectSpendList"
                                                    element={
                                                        <PrivateRoute element={<RejectSpendListPage />} />
                                                    }
                                                />
                                                  <Route
                                                    path="/createEmployee"
                                                    element={
                                                        <PrivateRoute element={<CreateEmployeePage />} />
                                                    }
                                                />
                                            </Routes>
                                            {/* <Footer /> */}
                                        </EmployeeProvider>
                                    </AddresProvider>
                                </SpendProvider>
                            </AdvanceProvider>
                        </LeaveProvider>
                    </ProfileProvider>
                </BrowserRouter>
            </>
        </div>
    );

    //async function populateWeatherData() {
    //    const response = await fetch("weatherforecast");
    //    const data = await response.json();
    //}
}

export default App;
