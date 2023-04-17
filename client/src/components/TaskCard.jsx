import useLightMode from "../hook/useLightMode"
import "../styles/task-card.scss"

function TaskCard(){
    const { lightModePrimary, lightModeText } = useLightMode()

    return(
        <div className={`${lightModePrimary} ${lightModeText} task-card`}>
            <h3>Build UI for onboarding flow</h3 >
            <p>0 of 3 subtaks complete</p>
        </div>
    )
}

export default TaskCard