import { createContext, useState, useEffect } from "react"
import data from "../data.json"

const BoardContext = createContext({})

export const BoardProvider = ({ children }) => {
    const boardData = data?.boards
    const [activeBoard, setActiveBoard] = useState(0)
    const [boardList, setBoardList] = useState(boardData)
    const [columns, setColumns] = useState(boardData[activeBoard].columns)



    useEffect(() => { 
        localStorage.setItem("boardList", JSON.stringify(boardList))
        localStorage.setItem("columns", JSON.stringify(columns))
        console.log(columns)
    }, [boardList, columns])

    useEffect(() => {
        const storedBoardList = JSON.parse(localStorage.getItem('boardList'))
        const storedColumns = JSON.parse(localStorage.getItem('columns'))

        storedBoardList && setBoardList(storedBoardList)
        storedColumns && setColumns(storedColumns)
    }, [])

    useEffect(() => {
        setColumns(boardData[activeBoard].columns)
    }, [activeBoard, boardData])

    const handleBoardToggle = (id) => { 
        setActiveBoard(id)
    }

    return (
        <BoardContext.Provider value = {{ 
            activeBoard, 
            boardList,
            columns,
            setColumns,
            handleBoardToggle 
        }}>
            {children}
        </BoardContext.Provider>
    )
}

export default BoardContext