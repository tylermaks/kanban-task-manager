import { createContext, useState, useEffect } from "react"
import data from "../data.json"

const BoardContext = createContext({})

export const BoardProvider = ({ children }) => {
    const [refreshApp, setRefreshApp] = useState(0)
    const [activeBoard, setActiveBoard] = useState(0)
    const [appData, setAppData] = useState()
    // const [boardList, setBoardList] = useState([])
    // const [columns, setColumns] = useState([])
    const boards = appData?.boards
    const columns = appData?.boards[activeBoard].columns
   
    useEffect(() => { 
        localStorage.getItem('appData') === null && localStorage.setItem("appData", JSON.stringify(data))
    }, [])

    useEffect(() => {
        const storedAppData = JSON.parse(localStorage.getItem('appData'))
        // setBoardList(storedAppData.boards)
        // setColumns(storedAppData.boards[activeBoard].columns)
        setAppData(storedAppData)
    }, [activeBoard, refreshApp])


    const handleBoardToggle = (id) => { 
        setActiveBoard(id)
    }

    const handleRefresh = () => {
        localStorage.setItem('appData', JSON.stringify(appData))
        setRefreshApp(refreshApp + 1)
    }

    return (
        <BoardContext.Provider value = {{ 
            handleRefresh,
            activeBoard, 
            boards,
            columns,
            appData, 
            setAppData,
            // setColumns,
            handleBoardToggle 
        }}>
            {children}
        </BoardContext.Provider>
    )
}

export default BoardContext