import { createContext, useState, useEffect } from "react"
import data from "../data.json"

const BoardContext = createContext({})

export const BoardProvider = ({ children }) => {
    const boardData = data?.boards
    const [activeBoard, setActiveBoard] = useState(0)
    const [boardList, setBoardList] = useState(boardData)
    const [columns, setColumns] = useState(boardData[0].columns)

    useEffect(() => {
        setColumns(boardData[activeBoard].columns)
    }, [activeBoard, boardData])

    useEffect(() => {
        const storedData = localStorage.getItem('boardList');
      }, []);

    useEffect(() => { 
        localStorage.setItem('boardList', JSON.stringify('boardList'))
        localStorage.setItem('columns', JSON.stringify('columns'))
    }, [boardList, columns])

    const handleBoardToggle = (id) => { 
        setActiveBoard(id)
    }

    return (
        <BoardContext.Provider value = {{ 
            activeBoard, 
            boardList,
            columns,
            handleBoardToggle 
        }}>
            {children}
        </BoardContext.Provider>
    )
}

export default BoardContext