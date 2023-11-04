import {useUser, useUserDispatch} from "../utils/UserContext.jsx";
import {useNavigate} from "react-router-dom";

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
        </>
    )
}