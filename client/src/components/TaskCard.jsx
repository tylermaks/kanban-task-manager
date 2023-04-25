import { useState } from "react"
import CardOptions from "./CardOptions"
import Modal from "./Modal"
import useLightMode from "../hook/useLightMode"
import "../styles/task-card.scss"

function TaskCard({ task, subtasks }){
    const { lightModePrimary, lightModeText } = useLightMode()
    const [modal, setModal] = useState(false)
    const subtaskCount = subtasks.length
    const completedsubtasksCount = subtasks.reduce((acc, curr) => {
        return acc + (curr.isCompleted ? 1 : 0)
    }, 0)
 
    const toggleModal = () => {
        setModal(!modal)
    }


    return(
        <div onClick={toggleModal} className={`${lightModePrimary} task-card flex-column`}>
            {modal && <Modal modalType="cardDetail" data={task} setModal={setModal} />}
            <h3 className={lightModeText}>{task.title}</h3 >
            <p className="body-lg">{`${completedsubtasksCount} of ${subtaskCount} subtask complete`}</p>           
        </div>
    )
}

export default TaskCard