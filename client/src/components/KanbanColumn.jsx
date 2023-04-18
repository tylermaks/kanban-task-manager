import TaskCard from "./TaskCard"
import "../styles/kanban-column.scss"

function KanbanColumn() { 
    return(
        <section className="flex-column gap--1">
            <div>
                <h4 className="column-header">ToDo (1)</h4>
            </div>
            <TaskCard />
        </section>
    )
}

export default KanbanColumn