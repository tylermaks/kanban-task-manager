import useBoardData from "../hook/useBoardData"
import "../styles/modal.scss"

function CardDetails({ data, setModal }){
    const { columns, activeBoard, handleRefresh } = useBoardData()
    const storedAppData = JSON.parse(localStorage.getItem('appData'))
    const columnID = columns.findIndex((col) => col.name === data.status) 
    const taskID = columns[columnID].tasks.findIndex(task => task.title === data.title)

 
    const storeUpdate = () => { 
        localStorage.setItem('appData', JSON.stringify(storedAppData))
        handleRefresh()
    }

    const handleSubtaskUpdate = (e) => {
        const currentIsCompleted = data.subtasks[e.target.name].isCompleted
        storedAppData.boards[activeBoard].columns[columnID].tasks[taskID].subtasks[e.target.name].isCompleted = !currentIsCompleted
        storeUpdate()
    }

    const handleStatusUpdate = (e) => { 
        const currentStatus = e.target.value
        const newColumnID = columns.findIndex((col) => col.name === currentStatus) 
        const prevTaskList = columns[newColumnID].tasks
        const newTask = { 
            title: data.title,
            description: data.description,
            status: currentStatus, 
            subtasks: data.subtasks
        }
        storedAppData.boards[activeBoard].columns[columnID].tasks.splice(taskID, 1)
        storedAppData.boards[activeBoard].columns[newColumnID] = { 
            ...columns[newColumnID],
            tasks: [...prevTaskList, newTask]
        }
        storeUpdate()
        setModal(false)
    }


    return(
        <section className="flex-column gap--2">
            { data.description  && <p className="body-lg">{data.description}</p>}
            <div>
                <label>Subtasks </label>
                {
                    data.subtasks.map((subtask, id) => { 
                        return(
                            <div key={id} className="checkbox-container flex-row gap--1">   
                                <input name={id} onChange={handleSubtaskUpdate} checked={subtask.isCompleted} className="checkbox" type="checkbox" /> 
                                <label htmlFor={id}>{subtask.title}</label>
                             </div>
                        )
                    })
                }
            </div>
            <div>
                <label htmlFor="status">Current Status</label>
                <select name="status"  defaultValue={data.status} onChange={handleStatusUpdate} id="status">
                    {
                        columns && columns.map((column, id) => { 
                            return(
                                <option key={id} value={column.name}>{column.name}</option>
                            )
                        })
                    }
                </select>
            </div>

        </section>
    )
}

export default CardDetails