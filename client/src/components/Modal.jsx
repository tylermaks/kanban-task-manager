import useModal from "../hook/useModal"
import CardDetails from "./CardDetails"
import AddNewTask from "./AddNewTask"
import useLightMode from "../hook/useLightMode"
import "../styles/modal.scss"

function Modal({ toggleModal, modalContent, data, setModal }) {
    const { lightModeModal } = useLightMode()
    const { modalInner } = useModal()
    const modalComponents = {
        "cardDetail": <CardDetails data={data} setModal={setModal} />,
        "add": <AddNewTask content={modalContent.componentType}/>
    }

    console.log(modalContent.formType)

    return(
        <section onClick={toggleModal} className="modal-container flex-row flex-row--center">
            <div className={lightModeModal} onClick={e => e.stopPropagation()}>
                {modalComponents[modalContent.formType]}
            </div>
        </section>
    )
}

export default Modal