import "../styles/card-options.scss"

function CardOptions({ updateModal, data }){
    return(
        <div className="card-options-container">
            <div className= "card-options">
                <p onClick={() => updateModal('editTask')} className="body-lg">Edit Task</p>
                <p id="delete" className="body-lg">Delete Task</p>
            </div>
        </div>
    )
}

export default CardOptions