import { useState } from "react"
import useBoardData from "../hook/useBoardData"
import BoardForm from "./FormComponents/BoardForm"
import TaskForm from "./FormComponents/TaskForm"
import DeleteForm from "./FormComponents/DeleteForm"
import CardOptions from "./CardOptions"
import CardDetails from "./CardDetails"
import useLightMode from "../hook/useLightMode"
import ellipsis from "../assets/icon-vertical-ellipsis.svg"
import "../styles/modal.scss"

function Modal({ toggleModal, data }) {
    const { lightModeModal, lightModeText } = useLightMode()
    const { modalType, modalData } = useBoardData()
    const [cardOptions, setCardOptions] = useState(false)

    const modalComponents = {
        "taskDetails": [modalData.title, <CardDetails />],
        "addTask": ['Add New Task', <TaskForm />],
        "editTask": ['Edit New Task', <TaskForm data={data}/>],
        "addBoard": ['Add New Board',  <BoardForm />],
        "editBoard": [],
        "delete": [data ? "Delete this task?" : "Delete this board? ", <DeleteForm data={data} toggleModal={toggleModal}/>],
    }

    const toggleOptions = () => { 
        setCardOptions(!cardOptions)
    }

    const updateModal = (modalType) => {
        setCardOptions(false)
    }

    return(
        <section onClick={toggleModal} className="modal-container flex-row flex-row--center">
            <div className={lightModeModal} onClick={e => e.stopPropagation()}>
                <div className="flex-row flex-row--space modal-title"> 
                    <h2 className={lightModeText}>{modalComponents[modalType][0]}</h2>
                    {modalType==="taskDetails" &&  <img onClick={toggleOptions} src={ellipsis} alt="Open task options" /> }
                    {cardOptions && <CardOptions data={data} updateModal={updateModal}/>}
                </div> 
                {modalComponents[modalType][1]}
            </div>
        </section>
    )
}

export default Modal