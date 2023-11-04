import {useUser, useUserDispatch} from "../utils/UserContext.jsx";
import {useNavigate} from "react-router-dom";
import AddTask from "../Components/AddTask.jsx";
import TaskList from "../Components/TaskList.jsx";
import '/src/App.css'

export default function TaskPage() {
    const users = useUser();
    const userDispatch = useUserDispatch();
    const navigate = useNavigate();

    function handleLogout(e) {
        e.preventDefault()

        userDispatch({type: "logout"})
        navigate('/')
    }

    return (
        <div className='taskpage'>
            <h1>My Tasks</h1>
            <button className='logout' onClick={e => handleLogout(e)}>Logout</button>
            <div className='taskarea'>
                <AddTask user={users.cur}/>
                <TaskList user={[users.cur]}/>
            </div>
        </div>
    )
}