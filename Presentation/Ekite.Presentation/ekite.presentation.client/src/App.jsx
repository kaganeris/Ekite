import { useEffect, useState } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
    </div>
  );

  async function populateWeatherData() {
    const response = await fetch("weatherforecast");
    const data = await response.json();
  }
}

export default App;
