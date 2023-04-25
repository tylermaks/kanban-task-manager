import { useState } from "react"
import { ModeProvider } from '../context/modeProvider'
import { BoardProvider } from '../context/boardProvider'
import { ModalProvider } from "../context/modalProvider"
import MenuNav from './MenuNav'
import TopNav from './TopNav'
import KanbanBoard from './KanbanBoard'
import Modal from "./Modal"
import "../styles/layout.scss"

function Layout(){
    const [sidebar, setSidebar] = useState(true)
    const [modal, setModal] = useState(false)
    const [modalContent, setModalContent] = useState()

    const toggleSidebar = () => {
        setSidebar(!sidebar)
    }

    const toggleModal = (e) => {
        const formType = e.target.getAttribute('data-form-type')
        const componentType = e.target.getAttribute('data-component-type')
        setModalContent({formType:formType, componentType:componentType})
        setModal(!modal)
    }

    return(
        <BoardProvider>
            <ModeProvider>
                <ModalProvider>
                    <main className={sidebar ? "layout layout--show-sidebar" : "layout layout--hide-sidebar"}>
                        {sidebar && <MenuNav toggleSidebar={toggleSidebar}/>}
                        {modal && <Modal toggleModal={toggleModal} modalContent={modalContent}/> }
                        <TopNav 
                            toggleModal={toggleModal}
                        />
                        <KanbanBoard 
                            sidebar={sidebar}
                            toggleSidebar={toggleSidebar}
                            setModalContent={setModalContent}
                        />
                    </main>
                </ModalProvider>    
            </ModeProvider>
        </BoardProvider>
    )
}

export default Layout