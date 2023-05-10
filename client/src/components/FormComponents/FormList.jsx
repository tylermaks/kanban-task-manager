import { useState } from "react"
import useLightMode from "../../hook/useLightMode"
import crossIcon from "../../assets/icon-cross.svg"

function FormList(){
    const { lightModeText } = useLightMode()
    const [subtaskList, setSubtaskList] = useState(["e.g. Make coffee", "e.g. Drink coffee"])

    const handleNewSubtask = () => {
        setSubtaskList([...subtaskList, "Add new substask"])
    }

    const setSubtasks = (e, index) => {
        const { value } = e.target
        const subtaskValues = [...subtaskList]
        subtaskValues[index] = value
        setSubtaskList(subtaskValues)
    }

    const deleteSubTask = (id) => {
        const updatedSubtasklist = [...subtaskList]
        updatedSubtasklist.splice(id, 1)
        setSubtaskList(updatedSubtasklist)
    }

    return(
        <div className="subtask-container">
            <label className={lightModeText} htmlFor="">Subtasks</label>
            { 
                subtaskList.map( (subtask, id) => {
                    return(
                        <div key={id} className="subtask flex-row flex-row--space gap--1">
                            <input 
                                type="text" 
                                placeholder={subtask}
                                onChange={(e) => setSubtasks(e, id)}
                                required
                            /> 
                            <img 
                                src={crossIcon} 
                                alt="Delete subtask" 
                                onClick={() => deleteSubTask(id)}
                            />
                        </div>
                    )
                })
            }
            <div onClick={handleNewSubtask} className="button button--sm button__secondary button__secondary--dk">
                + Add New Subtask
            </div>
        </div>
    )
}

export default FormList