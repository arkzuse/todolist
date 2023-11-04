import {useUser, useUserDispatch} from "../utils/UserContext.jsx";
import {useState} from "react";
import {useTasks, useTasksDispatch} from "../utils/TaskContext.jsx";
import {useNavigate} from "react-router-dom";

export default function Signup() {
    const users = useUser();
    const userDispatch = useUserDispatch();
    const taskDispatch = useTasksDispatch();
    const navigate = useNavigate();

    const [username, setUserName] = useState('')
    const [password, serPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        const user = users.list.find(user => user.username === username)

        if (user) {
            alert("Username already exists")
            return
        }

        taskDispatch({type: "addUser", payload: {username: username}})
        userDispatch({type: "add", payload: {username: username, password: password}})
        navigate('/', { replace: true })
    }

    return (
        <div>
            <h1>Signup</h1>
            <button onClick={() => {
                navigate('/', {replace: true})
            }}>
                go to login
            </button>

            <form>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={username} onChange={(e) => setUserName(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => serPassword(e.target.value)} />
                <button type="submit" onClick={e => handleSubmit(e)}>Signup</button>
            </form>
        </div>
    )
}