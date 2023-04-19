import useLightMode from "../hook/useLightMode"
import "../styles/task-card.scss"

function TaskCard({ title, description, status, subtasks }){
    const { lightModePrimary, lightModeText } = useLightMode()
    const subtaskCount = subtasks.length
    const completedsubtasksCount = subtasks.reduce((acc, curr) => {
        return acc + (curr.isCompleted ? 1 : 0)
    }, 0)
 
    
    return(
        <div className={`${lightModePrimary} task-card flex-column`}>
            <h3 className={lightModeText}>{title}</h3 >
            <p className="body-lg">{`${completedsubtasksCount} of ${subtaskCount} subtask complete`}</p>           
        </div>
    )
}

export default TaskCard