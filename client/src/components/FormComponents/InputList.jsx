import { useState, useEffect } from "react"
import useLightMode from "../../hook/useLightMode"
import crossIcon from "../../assets/icon-cross.svg"

function InputList({ listData, setListData }){
    const { lightModeText } = useLightMode()
    const [inputList, setInputList] = useState([])

    useEffect(() => { 
        listData
            ? setInputList(listData)
            : setInputList(["eg. Make Coffee", "eg. Drink Coffee"])
    },[listData])

    const handleNewInput = () => {
        setListData([...inputList, "Add new substask"])
    }

    const updateInput = (e, index) => {
        const { value } = e.target
        const inputValues = [...inputList]
        inputValues[index] = value
        setListData(inputValues)
    }

    const deleteInput = (id) => {
        const updatedInputList = [...inputList]
        updatedInputList.splice(id, 1)
        setListData(updatedInputList)
    }

    return(
        <div className="subtask-container">
            <label className={lightModeText} htmlFor="">Subtasks</label>
            { 
                inputList.map( (listData, id) => {
                    return(
                        <div key={id} className="subtask flex-row flex-row--space gap--1">
                            <input 
                                type="text" 
                                placeholder="Add"
                                onChange={(e) => updateInput(e, id)}
                                value={listData?.title}
                                required
                            /> 
                            <img 
                                src={crossIcon} 
                                alt="Delete subtask" 
                                onClick={() => deleteInput(id)}
                            />
                        </div>
                    )
                })
            }
            <div onClick={handleNewInput} className="button button--sm button__secondary button__secondary--dk">
                + Add New Subtask
            </div>
        </div>
    )
}

export default InputList