import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import LoginPage from "./Pages/Login/LoginPage";
import EditProfilePage from "./Pages/EditProfile/EditProfilePage";
import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import PrivateRoute from "./services/PrivateRoute";
import { ProfileProvider } from "./context/ProfileContext";
import ProfileSumPage from "./Pages/Profile/ProfileSumPage";
import LeaveListPage from "./Pages/LeaveList/LeaveListPage";
import { LeaveProvider } from "./context/LeaveContext";
import AddLeavePage from "./Pages/AddLeave/AddLeavePage";
import UpdateLeavePage from "./Pages/UpdateLeave/UpdateLeavePage";
import AdvanceListPage from "./Pages/Advance/AdvanceListPage";
import ProfilePage from "./Pages/Profile/ProfilePage";
import { AdvanceProvider } from "./context/AdvanceContext";
import AdvanceCreatePage from "./Pages/AdvanceCreate/AdvanceCreatePage";
import AdvanceUpdatePage from "./Pages/AdvanceUpdate/AdvanceUpdatePage";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div>
      <ProfileProvider>
        {isAuthenticated ? (
          <>
            <LeaveProvider>
              <AdvanceProvider>
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
                  </Routes>
                  <Footer />
                </BrowserRouter>
              </AdvanceProvider>
            </LeaveProvider>
          </>
        ) : (
          <LoginPage />
        )}
      </ProfileProvider>
    </div>
  );
}

export default App;
