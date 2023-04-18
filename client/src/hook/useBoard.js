import { useContext } from "react"
import BoardContext from "../context/boardProvider"

const useBoard = () => {
    return useContext(BoardContext)
}

export default useBoard
