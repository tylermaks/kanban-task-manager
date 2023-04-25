import CardOptions from "./CardOptions"
import useBoardData from "../hook/useBoardData"
import "../styles/modal.scss"


//1. onClick on card to pass specific data -- COMPLETE
//2. Map data to card detail modal -- COMPLETE
//3. Create a function that updates the json data when checkbox === true -- COMPLETE
//4. Open the right modal based on element clicked 
//5. Add Edit and Delete
//6. Consider making dropdown into it's own component -- set default option set to the column name


function CardDetails({ data, setModal, toggleOptions, options }){
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
            <div className="flex-row flex-row--space"> 
                <h2>{data.title}</h2>
            </div> 
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