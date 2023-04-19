import TaskCard from "./TaskCard"
import "../styles/kanban-column.scss"

function KanbanColumn({ name, tasks}) { 
    return(
        <section className="flex-column gap--1">
            <div>
                <h4 className="column-header">{`${name} (${tasks.length})`}</h4>
            </div>
            {
                tasks && tasks.map( (task, id) => {
                    return(
                        <TaskCard 
                            key={id}
                            title={task.title}
                            description={task.description}
                            status={task.status}
                            subtasks={task.subtasks}
                        />
                    )
                })
            }
        </section>
    )
}

export default KanbanColumn