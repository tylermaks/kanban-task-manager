import useBoardData from "../../hook/useBoardData"
import useLightMode from "../../hook/useLightMode"

function TaskStatus({ setStatus }){ 
    const { lightModeText } = useLightMode()
    const { columns } = useBoardData()

    const handleDropdown = (e) => { 
        setStatus(e.target.value)
    }

    return(
        <div>
            <label className={lightModeText} htmlFor="">Status</label>
            <select 
                name="status-dropdown" 
                id="status-dropdown"
                onChange={(e) => handleDropdown(e)}
            >
                {columns && columns.map((column, id) => { 
                    return(
                        <option key={id}>{column.name}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default TaskStatus