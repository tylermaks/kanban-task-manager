import { useState } from "react"
import BoardForm from "./FormComponents/BoardForm"
import CardOptions from "./CardOptions"
import TaskForm from "./FormComponents/TaskForm"
import CardDetails from "./CardDetails"
import useLightMode from "../hook/useLightMode"
import ellipsis from "../assets/icon-vertical-ellipsis.svg"
import "../styles/modal.scss"

function Modal({ toggleModal, modalType, data }) {
    const { lightModeModal, lightModeText } = useLightMode()
    const [useModalType, setUseModalType] = useState(modalType)
    const [cardOptions, setCardOptions] = useState(false)

    const modalComponents = {
        "taskDetails": [data?.title, <CardDetails data={data} toggleModal={toggleModal}/>],
        "addTask": ['Add New Task', <TaskForm />],
        "editTask": ['Edit New Task', <TaskForm data={data}/>],
        "addBoard": ['Add New Board',  <BoardForm />],
        "editBoard": [],
        "delete": []
    }

    const toggleOptions = () => { 
        setCardOptions(!cardOptions)
    }

    const updateModal = (modalType) => {
        setUseModalType(modalType)
        setCardOptions(false)
    }

    return(
        <section onClick={toggleModal} className="modal-container flex-row flex-row--center">
            <div className={lightModeModal} onClick={e => e.stopPropagation()}>
                <div className="flex-row flex-row--space"> 
                    <h2 className={lightModeText}>{modalComponents[useModalType][0]}</h2>
                    {modalType==="taskDetails" &&  <img onClick={toggleOptions} src={ellipsis} alt="Open task options" /> }
                    {cardOptions && <CardOptions data={data} updateModal={updateModal}/>}
                </div> 
                {modalComponents[useModalType][1]}
            </div>
        </section>
    )
}

export default Modal