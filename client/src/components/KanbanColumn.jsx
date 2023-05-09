import TaskCard from "./TaskCard"
import "../styles/kanban-column.scss"

function KanbanColumn({ name, tasks, toggleModal }) { 
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
                            task={task}
                            subtasks={task.subtasks}
                            toggleModal={toggleModal}
                        />
                    )
                })
            }
        </section>
    )
}

export default KanbanColumn