import TaskCard from "./TaskCard"
import "../styles/kanban-column.scss"

function KanbanColumn() { 
    return(
        <section className="flex-column gap--1">
            <div>
                <h4>ToDo</h4>
            </div>
            <TaskCard />
        </section>
    )
}

export default KanbanColumn