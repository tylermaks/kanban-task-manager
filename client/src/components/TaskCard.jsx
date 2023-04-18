import useLightMode from "../hook/useLightMode"
import "../styles/task-card.scss"

function TaskCard(){
    const { lightModePrimary, lightModeText } = useLightMode()

    return(
        <div className={`${lightModePrimary} ${lightModeText} task-card flex-column gap--1`}>
            <h3>Build UI for onboarding flow</h3 >
            <p className="body-lg">0 of 3 subtask complete</p>
        </div>
    )
}

export default TaskCard