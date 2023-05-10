import { useState } from "react"
import { ModeProvider } from '../context/modeProvider'
import { BoardProvider } from '../context/boardProvider'
import Modal from "./Modal"
import MenuNav from './MenuNav'
import TopNav from './TopNav'
import KanbanBoard from './KanbanBoard'
import "../styles/layout.scss"

function Layout(){
    const [sidebar, setSidebar] = useState(true)
    const [modalType, setModalType] = useState('')
    const [modalData, setModalData] = useState({})
    const [modal, setModal] = useState(false)

    const toggleSidebar = () => {
        setSidebar(!sidebar)
    }
    
    const toggleModal = (modalType, data) => {
        setModalType(modalType)
        setModalData(data) 
        setModal(!modal)
    }

    return(
        <BoardProvider>
            <ModeProvider>
                <main className={sidebar ? "layout layout--show-sidebar" : "layout layout--hide-sidebar"}>
                    {sidebar && <MenuNav toggleSidebar={toggleSidebar} toggleModal={toggleModal}/>}
                    {modal && <Modal toggleModal={toggleModal} modalType={modalType} data={modalData}/>}
                    <TopNav 
                        toggleModal={toggleModal}
                    />
                    <KanbanBoard 
                        sidebar={sidebar}
                        toggleSidebar={toggleSidebar}
                        toggleModal={toggleModal}
                    />
                </main> 
            </ModeProvider>
        </BoardProvider>
    )
}

export default Layout