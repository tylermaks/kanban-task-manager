import { createContext, useState } from "react"

const ModeContext = createContext({})

export const ModeProvider = ({ children }) => {
    const [lightMode, setLightMode] = useState(false)

    const toggleLightMode = () => {
        setLightMode(!lightMode)
    }

    const lightModePrimary = lightMode ? "lt-mode--primary" : "drk-mode--primary"
    const lightModeSecondary = lightMode ? "lt-mode--secondary" : "drk-mode--secondary"
    //Add buttons, inputs, and select

    return (
        <ModeContext.Provider value = {{ lightMode, lightModePrimary, lightModeSecondary, toggleLightMode }}>
            {children}
        </ModeContext.Provider>
    )
}

export default ModeContext