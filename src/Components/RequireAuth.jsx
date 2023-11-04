import {useUser} from "../utils/UserContext.jsx";
import {Navigate, useNavigate} from "react-router-dom";

export default function RequireAuth({ children }) {
    const user = useUser()

    if (user.cur === '') {
        return <Navigate to='/' />
    }

    return children
}