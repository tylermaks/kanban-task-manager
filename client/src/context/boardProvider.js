import { createContext, useState } from "react"

const BoardContext = createContext({})

export const BoardProvider = ({ children }) => {
    const [selectedBoard, setSelectedBoard] = useState(0)
    
    const handleBoardToggle = (id) => { 
        setSelectedBoard(id)
    }

    return (
        <BoardContext.Provider value = {{ selectedBoard, handleBoardToggle }}>
            {children}
        </BoardContext.Provider>
    )
}

export default BoardContext