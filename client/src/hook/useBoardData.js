import { useContext } from "react"
import BoardContext from "../context/boardProvider"

const useBoardData = () => {
    return useContext(BoardContext)
}

export default useBoardData
