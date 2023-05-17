import { createContext, useState, useEffect } from "react"
import data from "../data.json"

const BoardContext = createContext({})

export const BoardProvider = ({ children }) => {
    const [activeBoard, setActiveBoard] = useState(0)
    const [appData, setAppData] = useState()
    const boards = appData?.boards
    const columns = appData?.boards[activeBoard].columns
    const updatedData = {...appData}
   
    useEffect(() => { 
        localStorage.getItem('appData') === null && localStorage.setItem("appData", JSON.stringify(data))
    }, [])

    useEffect(() => {
        const storedAppData = JSON.parse(localStorage.getItem('appData'))
        setAppData(storedAppData)
    }, [])


    const handleBoardToggle = (id) => { 
        setActiveBoard(id)
    }

    const getColumnData = (columnID, taskName) => { 
        const columnToUpdate = updatedData.boards[activeBoard].columns[columnID]
        const prevTaskList = columnToUpdate.tasks
        const taskID = prevTaskList.findIndex(task => task.name === taskName)
        // const taskToUpdate = prevTaskList[taskID]

        return {columnToUpdate, prevTaskList,  taskID}
    }

    const addTask = (columnID, newTask) => {
        // const columnToUpdate = updatedData.boards[activeBoard].columns[columnID]
        // const prevTaskList = columnToUpdate.tasks
        const { columnToUpdate, prevTaskList } = getColumnData(columnID)

        updatedData.boards[activeBoard].columns[columnID] = {
            ...columnToUpdate,
            tasks: [...prevTaskList, newTask]
        }

        setAppData(updatedData);
        localStorage.setItem('appData', JSON.stringify(updatedData));
    }

    //NEED TO FIX HOW THE COLUMN ID IS PASSED FROM THE DELETE MODAL -- MAYBE CREATE STATE TO PASS DATA HERE
    const deleteTask = (columnID, taskName) => {
        const { prevTaskList, taskID } = getColumnData(columnID, taskName)
        prevTaskList.filter(task => task !== taskID)
        console.log(updatedData)

        // setAppData(updatedData);
        // localStorage.setItem('appData', JSON.stringify(updatedData));
    }

    return (
        <BoardContext.Provider value = {{ 
            activeBoard,
            addTask,
            deleteTask, 
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