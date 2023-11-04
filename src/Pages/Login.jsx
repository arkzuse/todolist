import {useState} from "react";
import {useUser, useUserDispatch} from "../utils/UserContext.jsx";
import {useNavigate} from "react-router-dom";
import '/src/App.css'

export default function Login() {
    const users = useUser();
    const dispatch = useUserDispatch();
    const navigate = useNavigate();

    const [username, setUserName] = useState('')
    const [password, serPassword] = useState('')

    function handleLogIn(e) {
        e.preventDefault()

        const user = users.list.find(user => user.username === username && user.password === password)

        if (user) {
            dispatch({type: "login", payload: user.username})
            navigate('/tasks', {replace: true})
        } else {
            alert("Invalid credentials")
        }
    }

    return (
        <div className='login'>
            <h1>Todo App</h1>
            <button className='signup-button' onClick={() => {
                navigate('/signup', {replace: true})
                window.location.reload()
            }}>Sign up
            </button>
            <form className='login-form'>
                <input placeholder='username' type="text" id="username" value={username} onChange={(e) => setUserName(e.target.value)}/>
                <input placeholder='password' type="password" id="password" value={password}
                       onChange={(e) => serPassword(e.target.value)}/>
                <button type="submit" onClick={e => handleLogIn(e)}>Log in</button>
            </form>
        </div>
    )
}