import useLightMode from "../hook/useLightMode"
import "../styles/modal.scss"

function Modal() {
    const { lightModePrimary, lightModeText } = useLightMode()

    return(
        <section className="modal-container flex-row flex-row--center">
            <div className={`${lightModePrimary} modal-inner`}>
                <h2 className={lightModeText}>Modal content</h2>
            </div>
        </section>
    )
}

export default Modal