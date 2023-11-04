import Task from "./Task.jsx";
import {useUser} from "../utils/UserContext.jsx";
import {useTasks} from "../utils/TaskContext.jsx";

export default function TaskList() {
    const user = useUser().cur
    const tasks = useTasks()[user]

    return (
        <div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <Task task={task} />
                    </li>
                ))}
            </ul>
        </div>
    )
}