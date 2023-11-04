import {Navigate} from "react-router-dom";
import {useUser} from "../utils/UserContext.jsx";

export default function Auth({children}) {
    const users = useUser();

    if (users.cur !== '') {
        return <Navigate to='/tasks'/>
    }

    return children
}