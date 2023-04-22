import KanbanColumn from "./KanbanColumn"
import useLightMode from "../hook/useLightMode"
import useBoardData from "../hook/useBoardData"
import showIcon from "../assets/icon-show-sidebar.svg"
import "../styles/kanban.scss"

function KanbanBoard({ sidebar, toggleSidebar, setModalContent }){
    const { lightModeSecondary, lightModeText } = useLightMode()
    const { columns } = useBoardData()
    const kanbanColumns = [1]


    return(
        <section 
            id="kanban" 
            className={ kanbanColumns
                ? `${lightModeSecondary} kanban-grid`
                : `${lightModeSecondary} flex-row flex-row--center`
            }>
            <div onClick={toggleSidebar} className={sidebar ? "hidden" : "show-sidebar flex-row flex-row--center"}>
                <img src={showIcon} alt="Show Sidebar" />
            </div>

            {
                columns && columns.length > 0
                    ? columns.map( (column, id) => {
                        return(
                            <KanbanColumn 
                                key={id}
                                name={column.name}
                                tasks={column.tasks}
                                setModalContent={setModalContent}
                            />
                        )
                    }) : (
                        <div id="empty-board" className="flex-column flex-column--center gap--2">
                            <h2 className={lightModeText}>This board is empty. Create a new column to get started.</h2>
                            <div className="button button--lg button__primary">
                                <h3>+ Add New Column</h3>
                            </div>
                        </div>
                    )
            }      
        </section>
    )
}

export default KanbanBoard