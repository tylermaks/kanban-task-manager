import useModal from "../hook/useModal"
import "../styles/card-options.scss"

function CardOptions(){
    const {handleModalUpdate} = useModal()

    return(
        <div className="card-options-container">
            <div className= "card-options">
                <p id="edit" onClick={handleModalUpdate} className="body-lg">Edit Task</p>
                <p id="delete" onClick={handleModalUpdate} className="body-lg">Delete Task</p>
            </div>
        </div>
    )
}

export default CardOptions