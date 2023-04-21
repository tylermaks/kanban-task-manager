import { createContext, useState } from "react"

const ModeContext = createContext({})

export const ModeProvider = ({ children }) => {
    const [lightMode, setLightMode] = useState(false)

    const toggleLightMode = () => {
        setLightMode(!lightMode)
    }

    //might want to consider components rather than elements - return later to fix
    const lightModePrimary = lightMode ? "lt-mode--primary" : "drk-mode--primary"
    const lightModeSecondary = lightMode ? "lt-mode--secondary" : "drk-mode--secondary"
    const lightModeText = lightMode ? "lt-mode--text" : "drk-mode--text"
    const lightModeModal = lightMode ? "modal modal--lt" : "modal modal--dk"

    return (
        <ModeContext.Provider value = {{ 
            lightMode, 
            lightModePrimary, 
            lightModeSecondary, 
            lightModeText,
            lightModeModal,
            toggleLightMode 
        }}>
            {children}
        </ModeContext.Provider>
    )
}

export default ModeContext