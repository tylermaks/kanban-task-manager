// import AddNewTask from "./AddNewTask"
import useModal from "../hook/useModal"
import CardDetails from "./CardDetails"
import useLightMode from "../hook/useLightMode"
import "../styles/modal.scss"
import AddNewTask from "./AddNewTask"

function Modal({ toggleModal, data, setModal }) {
    const { lightModeModal } = useLightMode()
    const { modalInner } = useModal()
    const modalComponents = {
        "cardDetail": <CardDetails data={data} setModal={setModal} />,
   
    }

    return(
        <section onClick={toggleModal} className="modal-container flex-row flex-row--center">
            <div className={lightModeModal} onClick={e => e.stopPropagation()}>
                {modalComponents[modalInner]}
            </div>
        </section>
    )
}

export default Modal