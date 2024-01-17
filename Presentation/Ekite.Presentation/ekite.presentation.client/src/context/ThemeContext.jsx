import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const storedDarkMode = localStorage.getItem("darkMode");
  const initialDarkMode = storedDarkMode ? storedDarkMode === "true" : true;
  const [darkMode, setDarkMode] = useState(initialDarkMode);
  
  const toggleTheme = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
