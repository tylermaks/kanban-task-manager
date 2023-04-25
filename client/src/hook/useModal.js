import { useContext } from "react"
import ModalContext from "../context/modalProvider"

const useModal = () => {
    return useContext(ModalContext)
}

export default useModal
