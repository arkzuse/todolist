import {useState} from "react";
import {useTasks, useTasksDispatch} from "../utils/TaskContext.jsx";
import {useUser} from "../utils/UserContext.jsx";

export default function AddTask() {
    const user = useUser().cur
    const [text, setText] = useState('')
    const dispatch= useTasksDispatch()
    const tasks = useTasks()

    function handleAdd() {
        dispatch({
            type: 'add',
            payload: {
                username: user,
                text: text,
            }
        })

        setText('')
    }

    console.log(tasks, 'add tasks')

    return (
        <div className='addtask'>
            <input
                placeholder="Add task"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={() => handleAdd()}>
                Add
            </button>
        </div>
    )
}