import TaskCard from "./TaskCard";

export default function TaskList({ task }) {
    return(
        <div>
            {
                task.map(task => (
                    <TaskCard
                    key={task.id}
                    task={task}
                    />
                ))
            }
        </div>
    );
}