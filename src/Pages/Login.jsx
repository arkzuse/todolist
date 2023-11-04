import {useState} from "react";
import {useUser, useUserDispatch} from "../utils/UserContext.jsx";
import {useNavigate} from "react-router-dom";

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
            navigate('/tasks', { replace: true })
        } else {
            alert("Invalid credentials")
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <button onClick={() => {
                window.location.reload()
                navigate('/signup', { replace: true })
            }}>Signup</button>
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={username} onChange={(e) => setUserName(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => serPassword(e.target.value)} />
                <button type="submit" onClick={e => handleLogIn(e)}>Login</button>
            </form>
        </div>
    )
}