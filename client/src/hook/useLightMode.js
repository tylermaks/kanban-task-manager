import { useContext } from "react"
import ModeContext from "../context/modeProvider"

const useLightMode = () => {
    return useContext(ModeContext)
}

export default useLightMode
