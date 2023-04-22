import TaskCard from "./TaskCard"
import "../styles/kanban-column.scss"

function KanbanColumn({ name, tasks, setModalContent}) { 
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
                            setModalContent={setModalContent}
                        />
                    )
                })
            }
        </section>
    )
}

export default KanbanColumn