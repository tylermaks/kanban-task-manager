import AddNewTask from "./AddNewTask"
import useLightMode from "../hook/useLightMode"
import "../styles/modal.scss"

function Modal() {
    const { lightModeModal } = useLightMode()

    return(
        <section className="modal-container flex-row flex-row--center">
            <div className={lightModeModal}>
               <AddNewTask/>
            </div>
        </section>
    )
}

export default Modal