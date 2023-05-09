import "../styles/card-options.scss"

function CardOptions(){
    return(
        <div className="card-options-container">
            <div className= "card-options">
                <p id="edit" className="body-lg">Edit Task</p>
                <p id="delete" className="body-lg">Delete Task</p>
            </div>
        </div>
    )
}

export default CardOptions