import { createContext, useState } from "react";


const ThemeContext = createContext()

const ThemeProvider = ({children}) => {

    const [darkMode,setDarkMode] = useState(false)

    const toggleTheme = () => {
        if(darkMode){
            setDarkMode(false)
        }
        else{
            setDarkMode(true)
        }
    }


    return <ThemeContext.Provider value={{darkMode,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
}

export {ThemeContext,ThemeProvider} 