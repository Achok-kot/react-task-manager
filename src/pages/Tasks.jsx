import { Link } from "react-router-dom";

const task = [
    {id: 1, title: "study React Router" },
    {id: 2, title: "Build project" },
    {id: 3, title: "practice useState()" },
];


export default function Task() {
    return (
        <div>
            <h1>Tasks</h1>

            <ul>
                {
                    Tasks.map(task => (
                      <li key={task.id}>
                        <Link
                            to={`/tasks/${task.id}`}
                            >
                                {task.title}
                            </Link>
                      </li>  
                    ))
                }
            </ul>
        </div>
    );
}