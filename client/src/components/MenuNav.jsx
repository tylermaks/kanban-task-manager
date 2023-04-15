import AllBoards from "./AllBoards"
import LightModeToggle from "./LightModeToggle"
import useLightMode from "../hook/useLightMode"
import logoDark from "../assets/logo-light.svg"
import logoLight from "../assets/logo-dark.svg"
import "../styles/menu-nav.scss"

function MenuNav(){
    const { lightMode, lightModePrimary } = useLightMode()

    const logoSource = lightMode ? logoLight : logoDark

    return(
        <section id="menu-nav" className={`${lightModePrimary} flex-column flex-column--space`}>
            <div>
                <img src={logoSource} alt="Kanban Logo" />
                <AllBoards />
            </div>
            <div>
                <LightModeToggle />
            </div>
        </section>  
    )
}

export default MenuNav