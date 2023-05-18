import { createContext, useState, useEffect } from "react"
import data from "../data.json"

const BoardContext = createContext({})

export const BoardProvider = ({ children }) => {
    const [activeBoard, setActiveBoard] = useState(0)
    const [appData, setAppData] = useState()
    const [modalType, setModalType] = useState('')
    const [modalData, setModalData] = useState({})
    const [modal, setModal] = useState(false)

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

    const toggleModal = (modalType, taskID, columnID) => {
   
        const data = updatedData.boards[activeBoard].columns[columnID].tasks[taskID]
            

        console.log(data)

        setModalType(modalType)
        setModalData(data) 
        setModal(!modal)
    }

 
    const addTask = (status, newTask) => {
        const columnID = status ? columns.findIndex((col) => col.name === status) : 0
        const columnToUpdate = updatedData.boards[activeBoard].columns[columnID]
        const prevTaskList = columnToUpdate.tasks
        
        updatedData.boards[activeBoard].columns[columnID] = {
            ...columnToUpdate,
            tasks: [...prevTaskList, newTask]
        }

        setAppData(updatedData);
        localStorage.setItem('appData', JSON.stringify(updatedData));
    }


    const deleteTask = (data) => {
        const columnID = updatedData.boards[activeBoard].columns.find(col => col.name === data.status)
        const taskIndex = updatedData.boards[activeBoard].columns[columnID].tasks.findIndex(task => task.title === data.title)
       
        updatedData.boards[activeBoard].columns[columnID].tasks.splice(taskIndex, 1)

        setAppData(updatedData)
        localStorage.setItem('appData', JSON.stringify(updatedData))
    }

    return (
        <BoardContext.Provider value = {{ 
            activeBoard,
            addTask,
            boards,
            columns,
            deleteTask,
            modal,
            modalType,
            modalData, 
            toggleModal, 
            handleBoardToggle 
        }}>
            {children}
        </BoardContext.Provider>
    )
}

export default BoardContext