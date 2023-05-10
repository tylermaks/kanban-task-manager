import BoardMenu from "./BoardMenu"
import LightModeToggle from "./LightModeToggle"
import useLightMode from "../hook/useLightMode"
import logoDark from "../assets/logo-light.svg"
import logoLight from "../assets/logo-dark.svg"
import hideIcon from "../assets/icon-hide-sidebar.svg"
import "../styles/menu-nav.scss"

function MenuNav({ toggleSidebar, toggleModal }){
    const { lightMode, lightModePrimary } = useLightMode()
    const logoSource = lightMode ? logoLight : logoDark

    return(
        <section id="menu-nav" className={`${lightModePrimary} flex-column flex-column--space`}>  
            <div>
                <img src={logoSource} alt="Kanban Logo" />
                <BoardMenu toggleModal={toggleModal} />
            </div>
            <div>
                <LightModeToggle />
                <div onClick={toggleSidebar} className="toggle-sidebar flex-row flex-row--cente gap--1">
                    <img src={hideIcon} alt="Hide sidebar" />
                    <h3>Hide Sidebar</h3>
                </div>
            </div>
        </section>
    )
}

export default MenuNav