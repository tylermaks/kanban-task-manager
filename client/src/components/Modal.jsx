// import useModal from "../hook/useModal"
import AddNewTask from "./AddNewTask"
import CardDetails from "./CardDetails"
import useLightMode from "../hook/useLightMode"
import "../styles/modal.scss"

function Modal({ toggleModal, modalType, data }) {
    const { lightModeModal } = useLightMode()
    const modalComponents = {
        "taskDetails": <CardDetails data={data} />,
        "addNewTask": <AddNewTask />
    }

    return(
        <section onClick={toggleModal} className="modal-container flex-row flex-row--center">
            <div className={lightModeModal} onClick={e => e.stopPropagation()}>
                {modalComponents[modalType]}
            </div>
        </section>
    )
}

export default Modal