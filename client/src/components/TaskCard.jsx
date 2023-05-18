import useLightMode from "../hook/useLightMode"
import useBoardData from "../hook/useBoardData"
import "../styles/task-card.scss"

function TaskCard({ columnID, task, taskID }){
    const { lightModePrimary, lightModeText } = useLightMode()
    const { toggleModal } = useBoardData()
    const subtaskCount = task.subtasks.length
    const completedsubtasksCount = task.subtasks.reduce((acc, curr) => {
        return acc + (curr.isCompleted ? 1 : 0)
    }, 0)

    return(
        <div 
            onClick={() => toggleModal("taskDetails", taskID, columnID)} 
            className={`${lightModePrimary} task-card flex-column`}
        >
            <h3 className={lightModeText}>{task.title}</h3 >
            <p className="body-lg">{`${completedsubtasksCount} of ${subtaskCount} subtask complete`}</p>           
        </div>
    )
}

export default TaskCard