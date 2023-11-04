import {useTasksDispatch} from "../utils/TaskContext.jsx";
import {useState} from "react";
import {useUser} from "../utils/UserContext.jsx";

export default function Task({task}) {
    const user = useUser().cur
    const dispatch = useTasksDispatch()

    const [isEditing, setIsEditing] = useState()
    const [text, setText] = useState(task.text)
    let taskContent;

    function handleDone() {
        dispatch({type: 'toggleDone', payload: {id: task.id, username: user}})
    }

    function handleSave() {
        dispatch({type: 'rename', payload: {id: task.id, text: text, username: user}})
        setIsEditing(false)
    }

    function handleDelete() {
        dispatch({type: 'delete', payload: {id: task.id, username: user}})
    }

    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <button onClick={() => handleSave()}>Save</button>
            </>
        )
    } else {
        taskContent = (
            <>
                <div>
                    {task.text}
                </div>
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        )
    }

    return (
        <div className='task'>
            <label>
                <input
                    type='checkbox'
                    checked={task.done}
                    onChange={() => handleDone()}
                />
                {taskContent}
            </label>
            <button onClick={() => handleDelete()}>Delete</button>
        </div>
    )
}