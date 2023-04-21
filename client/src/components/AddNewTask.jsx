import { useState } from "react"
import useLightMode from "../hook/useLightMode"
import crossIcon from "../assets/icon-cross.svg"

function AddNewTask() {
    const { lightModeText } = useLightMode()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [subtaskList, setSubtaskList] = useState(["e.g. Make coffee", "e.g. Drink coffee"])
    const [status, setStatus] = useState('')

    const placeholderText = {
        title: "e.g. Take coffee break",
        description: "e.g. It's always good to teak a break. This 15 minute break will recharge the batteries"
    }

    const handleNewSubtask = () => {
        setSubtaskList([...subtaskList, "Add new substask"])
    }

    const setSubtasks = (e, index) => {
        const { value } = e.target
        const subtaskValues = [...subtaskList]
        subtaskValues[index] = value
        setSubtaskList(subtaskValues)
    }

    // const deleteSubTask = () => {

    // }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newTask = { 
            title: title,
            description: description, 
            subtasks: subtaskList,
            status: status,
        }

    }

    return(
        <section>
            <h2 className={lightModeText}>Add New Task</h2>
            <form className="flex-column gap--1">
                <div>
                    <label className={lightModeText} htmlFor="title">Title</label>
                    <input 
                        name="title" 
                        type="text" 
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        placeholder={placeholderText.title} 
                        required
                    />
                </div>
                <div>
                    <label className={lightModeText} htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        placeholder={placeholderText.description} 
                    />
                </div>
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
                                    /> 
                                    <img src={crossIcon} alt="Delete subtask" />
                                </div>
                            )
                        })
                    }
                    <div onClick={handleNewSubtask} className="button button--sm button__secondary button__secondary--dk">
                        + Add New Subtask
                    </div>
                </div>

                <div>
                    <label className={lightModeText} htmlFor="">Status</label>
                    <select 
                        name="status-dropdown" 
                        id="status-dropdown"
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="todo">Todo</option>
                    </select>
                </div>
                <button  className="button button--sm button__primary">Create Task</button>
            </form>
        </section>
    )
}

export default AddNewTask