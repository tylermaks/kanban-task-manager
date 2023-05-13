import useLightMode from "../hook/useLightMode"
import "../styles/task-card.scss"

function TaskCard({ task, subtasks, toggleModal }){
    const { lightModePrimary, lightModeText } = useLightMode()
    const subtaskCount = subtasks.length
    const completedsubtasksCount = subtasks.reduce((acc, curr) => {
        return acc + (curr.isCompleted ? 1 : 0)
    }, 0)

    return(
        <div 
            onClick={() => toggleModal("taskDetails", task)} 
            className={`${lightModePrimary} task-card flex-column`}
        >
            <h3 className={lightModeText}>{task.title}</h3 >
            <p className="body-lg">{`${completedsubtasksCount} of ${subtaskCount} subtask complete`}</p>           
        </div>
    )
}

export default TaskCard