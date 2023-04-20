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
            <form>
                <div>
                    <label htmlFor="title">Title</label>
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
                    <label htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        placeholder={placeholderText.description} 
                    />
                </div>
                <div>
                    <label htmlFor="">Subtasks</label>
                    { 
                        subtaskList.map( (subtask, id) => {
                            return(
                                <div key={id} className="flex-row flex-row--space">
                                    <input type="text" placeholder={subtask}/> 
                                    <img src={crossIcon} alt="Delete subtask" />
                                </div>
                            )
                        })
                    }
                    <div className="button button--sm button__secondary">
                        + Add New Subtask
                    </div>
                </div>

                <div>
                    <label htmlFor="">Status</label>
                    <select 
                        name="status-dropdown" 
                        id="status-dropdown"
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="todo">Todo</option>
                    </select>
                </div>
                <button  className="">Create Task</button>
            </form>
        </section>
    )
}