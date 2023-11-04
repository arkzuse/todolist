import {useUser, useUserDispatch} from "../utils/UserContext.jsx";
import {useNavigate} from "react-router-dom";
import {TasksProvider} from "../utils/TaskContext.jsx";
import AddTask from "../Components/AddTask.jsx";
import TaskList from "../Components/TaskList.jsx";

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
        <>
            <button onClick={e => handleLogout(e)}>Logout</button>
            <TasksProvider>
                <AddTask user={users.cur}/>
                <TaskList user={[users.cur]}/>
            </TasksProvider>
        </>
    )
}