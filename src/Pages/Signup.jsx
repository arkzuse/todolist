import {useUser, useUserDispatch} from "../utils/UserContext.jsx";
import {useState} from "react";
import {useTasksDispatch} from "../utils/TaskContext.jsx";
import {useNavigate} from "react-router-dom";
import '/src/App.css'

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
        navigate('/', {replace: true})
    }

    return (
        <div className='signup'>
            <h1>Sign up</h1>
            <button className='signup-button' onClick={() => {
                navigate('/', {replace: true})
            }}>
                Log in
            </button>

            <form className='signup-form'>
                <input placeholder='username' type="text" id="username" value={username}
                       onChange={(e) => setUserName(e.target.value)}/>
                <input placeholder='password' type="password" id="password" value={password}
                       onChange={(e) => serPassword(e.target.value)}/>
                <button type="submit" onClick={e => handleSubmit(e)}>Sign up</button>
            </form>
        </div>
    )
}