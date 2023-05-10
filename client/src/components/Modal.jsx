import BoardForm from "./FormComponents/BoardForm"
import AddNewTask from "./AddNewTask"
import CardDetails from "./CardDetails"
import useLightMode from "../hook/useLightMode"
import "../styles/modal.scss"

function Modal({ toggleModal, modalType, data }) {
    const { lightModeModal, lightModeText } = useLightMode()
    const modalComponents = {
        "taskDetails": ['Need to double-check this one', <CardDetails data={data} />],
        "addNewTask": ['Add New Task', <AddNewTask />],
        "addBoard": ['Add New Board',  <BoardForm />]
    }

    return(
        <section onClick={toggleModal} className="modal-container flex-row flex-row--center">
            <div className={lightModeModal} onClick={e => e.stopPropagation()}>
                <h2 className={lightModeText}>{modalComponents[modalType][0]}</h2>
                {modalComponents[modalType][1]}
            </div>
        </section>
    )
}

export default Modal