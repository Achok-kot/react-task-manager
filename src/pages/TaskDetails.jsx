import { useParams } from "react-router-dom";

const Tasks = [
    {
        id: 1,
        title: "Study react router",
        desc: "Learn routing basics"
    },
    {
        id: 2,
        title: "Build project",
        desc: "Create SPAapp"
    },
    {
        id: 3,
        title: "Practice useState()",
        desc: "useState() and useEffect()"
    }
];

export default function TaskDetails() {
    const { id } = useParams();

    const task = task.find(tansk => task.id === Number(id));

    if(!task) {
        return <h1>Task not found</h1>
    }

    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.desc}</p>
        </div>
    );
}