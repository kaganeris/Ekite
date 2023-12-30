import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Profile from "./Pages/Profile/Profile";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <AuthProvider>
              {/*<LoginPage />*/}



              <Navbar/>
              <Sidebar />
              <Profile/>
              <BrowserRouter>
                  <Routes>
                      <Route path="/Profile" element={<Profile />} />
                  
                  </Routes>
              </BrowserRouter>

              <Footer />

          </AuthProvider>

    </div>
  );

  async function populateWeatherData() {
    const response = await fetch("weatherforecast");
    const data = await response.json();
  }
}

export default App;
