import useBoardData from "../hook/useBoardData"
import "../styles/modal.scss"

function CardDetails({ data, setModal }){
    const { appData, setAppData } = useBoardData()
    
    const handleSubtaskUpdate = (e, subtaskIndex) => {
        const updatedData = { ...appData }
        const taskToUpdate = updatedData.boards.reduce((foundTask, board) => {
            const task = board.columns.flatMap(column => column.tasks).find(task => task.title === data.title)
            return task || foundTask
        }, null)
      
        if (taskToUpdate && taskToUpdate.subtasks[subtaskIndex]) {
            taskToUpdate.subtasks[subtaskIndex].isCompleted = e.target.checked
        }
        
        setAppData(updatedData);
        localStorage.setItem('appData', JSON.stringify(updatedData));
    }

    // const handleStatusUpdate = (e) => { 
    //     const currentStatus = e.target.value
    //     const newColumnID = columns.findIndex((col) => col.name === currentStatus) 
    //     const prevTaskList = columns[newColumnID].tasks
    //     const newTask = { 
    //         title: data.title,
    //         description: data.description,
    //         status: currentStatus, 
    //         subtasks: data.subtasks
    //     }
    //     storedAppData.boards[activeBoard].columns[columnID].tasks.splice(taskID, 1)
    //     storedAppData.boards[activeBoard].columns[newColumnID] = { 
    //         ...columns[newColumnID],
    //         tasks: [...prevTaskList, newTask]
    //     }
    //     storeUpdate()
    //     setModal(false)
    // }

    return(
        <section className="flex-column gap--2">
            { data.description  && <p className="body-lg">{data.description}</p>}
            <div>
                <label>Subtasks</label>
                {
                    data && data?.subtasks.map((subtask, id) => { 
                        return(
                            <div key={id} className="checkbox-container flex-row gap--1">   
                                <input 
                                    id={subtask.title}
                                    name={id} 
                                    onChange={(e) => handleSubtaskUpdate(e, id)} 
                                    checked={subtask.isCompleted} 
                                    className="checkbox" 
                                    type="checkbox" 
                                /> 
                                <label htmlFor={id}>{subtask.title}</label>
                             </div>
                        )
                    })
                }
            </div>
            <div>
                {/* <label htmlFor="status">Current Status</label>
                <select name="status"  defaultValue={data.status} onChange={handleStatusUpdate} id="status">
                    {
                        columns && columns.map((column, id) => { 
                            return(
                                <option key={id} value={column.name}>{column.name}</option>
                            )
                        })
                    }
                </select> */}
            </div>

        </section>
    )
}

export default CardDetails