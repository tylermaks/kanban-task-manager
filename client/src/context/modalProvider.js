import { createContext, useState } from "react"

const ModalContext = createContext({})

export const ModalProvider = ({ children }) => {
    const [options, setOptions] = useState(false)
    const [modalInner, setModalInner] = useState('cardDetail')

    const toggleOptions = () => {
        setOptions(!options)
    }

    const handleModalUpdate = (e) => { 
        setModalInner(e.target.id)
    }

    return (
        <ModalContext.Provider value = {{ 
            options, 
            toggleOptions,
            modalInner, 
            setModalInner,
            handleModalUpdate,
        }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContext