import { createContext, useState } from "react"

const ModeContext = createContext({})

export const ModeProvider = ({ children }) => {
    const [lightMode, setLightMode] = useState(false)

    const toggleLightMode = () => {
        setLightMode(!lightMode)
    }

    const lightModePrimary = lightMode ? "lt-mode--primary" : "drk-mode--primary"
    const lightModeSecondary = lightMode ? "lt-mode--secondary" : "drk-mode--secondary"
    const lightModeText = lightMode ? "lt-mode--text" : "drk-mode--text"
    //Add buttons, inputs, and select

    return (
        <ModeContext.Provider value = {{ 
            lightMode, 
            lightModePrimary, 
            lightModeSecondary, 
            lightModeText,
            toggleLightMode 
        }}>
            {children}
        </ModeContext.Provider>
    )
}

export default ModeContext