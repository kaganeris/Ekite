//import { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import LeaveListPage from "./pages/LeaveList/LeaveListPage";
import { LeaveProvider } from "./context/LeaveContext";
import AddLeavePage from "./pages/AddLeave/AddLeavePage";
import UpdateLeavePage from "./pages/UpdateLeave/UpdateLeavePage";
import SpendListPage from "./Pages/SpendList/SpendListPage";
import { SpendProvider } from "./context/SpendContext";
import CreateSpendPage from "./Pages/CreateSpend/CreateSpendPage";
import UpdateSpendPage from "./Pages/UpdateSpend/UpdateSpendPage";
import { AdvanceProvider } from "./context/AdvanceContext";
import AdvanceCreatePage from "./Pages/AdvanceCreate/AdvanceCreatePage";
import AdvanceUpdatePage from "./Pages/AdvanceUpdate/AdvanceUpdatePage";
import AdvanceListPage from "./Pages/Advance/AdvanceListPage";
import PendingLeaveListPage from "./Pages/PendingLeaveList/PendingLeaveListPage";
import ProfilePage from "./Pages/Profile/ProfilePage";
import ApprovedLeaveListPage from "./Pages/ApprovedLeaveList/ApprovedLeaveListPage";
import RejectLeaveListPage from "./Pages/RejectLeaveList/RejectLeaveListPage";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const { isAuthenticated, setIsAuthenticated, employeeId, token, setToken } =
    useContext(AuthContext);

  useEffect(() => {}, [isAuthenticated]);

  return (
    <div>
      <>
        <BrowserRouter>
          <ProfileProvider>
            <LeaveProvider>
              <AdvanceProvider>
                <SpendProvider>
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
                      element={<PrivateRoute element={<AdvanceCreatePage />} />}
                    />
                    <Route
                      path="/updateAdvance"
                      element={<PrivateRoute element={<AdvanceUpdatePage />} />}
                    />
                    <Route
                      path="/pendingLeaveList"
                      element={<PrivateRoute element={<PendingLeaveListPage />} />}
                    />
                    <Route
                      path="/approvedLeaveList"
                      element={<PrivateRoute element={<ApprovedLeaveListPage />} />}
                    />
                      <Route
                      path="/rejectLeaveList"
                      element={<PrivateRoute element={<RejectLeaveListPage />} />}
                    />
                  </Routes>
                  <Footer />
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
