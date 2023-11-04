import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import TaskPage from "./Pages/TaskPage.jsx";
import RequireAuth from "./Components/RequireAuth.jsx";
import Auth from "./Components/Auth.jsx";

export default function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Auth><Login /></Auth>,
        },
        {
            path: '/signup',
            element: <Auth><Signup /></Auth>
        },
        {
            path: '/tasks',
            // if not logged in, redirect to login page
            element: <RequireAuth><TaskPage /></RequireAuth>

        }
    ])

    return <RouterProvider router={router} />
}
