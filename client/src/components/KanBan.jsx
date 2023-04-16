import showIcon from "../assets/icon-show-sidebar.svg"

function KanBan({ sidebar, toggleSidebar }){
    return(
        <section id="kanban" className="drk-mode--secondary">
            <div onClick={toggleSidebar} className={sidebar ? "hidden" : "show-sidebar flex-row flex-row--center"}>
                <img src={showIcon} alt="Show Sidebar" />
            </div>
        </section>
    )
}

export default KanBan