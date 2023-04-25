import useLightMode from "../hook/useLightMode"
import "../styles/top-nav.scss"

function TopNav({ toggleModal }){
    const { lightModePrimary, lightModeText } = useLightMode()

    return(
        <section id="top-nav" className={`${lightModePrimary} flex-row flex-row--space`}>
            <h1 className={lightModeText}>Placeholder Project</h1>
            <div>
                <div onClick={toggleModal} data-form-type="add" data-component-type="task" className="button button--lg button__primary">
                    <h3>+ Add New Task</h3>
                </div>
            </div>
        </section>
    )
}

export default TopNav