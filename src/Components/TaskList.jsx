import Task from "./Task.jsx";
import {useUser} from "../utils/UserContext.jsx";
import {useTasks} from "../utils/TaskContext.jsx";

export default function TaskList() {
    const user = useUser().cur
    const tasks = useTasks()[user]

    return (
        <div className='tasklist'>
                {tasks.map((task) => (
                    <Task task={task} key={task.id}/>
                ))}
        </div>
    )
}