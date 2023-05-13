import { createContext, useState, useEffect } from "react"
import data from "../data.json"

const BoardContext = createContext({})

export const BoardProvider = ({ children }) => {
    const [activeBoard, setActiveBoard] = useState(0)
    const [appData, setAppData] = useState()
    const boards = appData?.boards
    const columns = appData?.boards[activeBoard].columns
   
    useEffect(() => { 
        localStorage.getItem('appData') === null && localStorage.setItem("appData", JSON.stringify(data))
    }, [])

    useEffect(() => {
        const storedAppData = JSON.parse(localStorage.getItem('appData'))
        setAppData(storedAppData)
    }, [appData])


    const handleBoardToggle = (id) => { 
        setActiveBoard(id)
    }

    return (
        <BoardContext.Provider value = {{ 
            activeBoard, 
            boards,
            columns,
            appData, 
            setAppData,
            handleBoardToggle 
        }}>
            {children}
        </BoardContext.Provider>
    )
}

export default BoardContext