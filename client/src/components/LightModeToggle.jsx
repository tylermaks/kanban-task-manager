import useLightMode from "../hook/useLightMode"
import lightIcon from "../assets/icon-light-theme.svg"
import darkIcon from "../assets/icon-dark-theme.svg"
import "../styles/light-mode-toggle.scss"

function LightModeToggle () {
    const { toggleLightMode, lightModeSecondary } = useLightMode()

    return(
        <div id="toggle-container" className={`${lightModeSecondary} flex-row flex-row--center gap--1`}>
            <img src={lightIcon} alt="Set app to light mode" />
            <label className="switch">
                <input onClick={toggleLightMode} type="checkbox"/>
                <span className="slider round"></span>
            </label>
            <img src={darkIcon} alt="Set app to dark mode" />
        </div>
    )
}

export default LightModeToggle