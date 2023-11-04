import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import TaskPage from "./Pages/TaskPage.jsx";

export default function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Login />,
        },
        {
            path: '/signup',
            element: <Signup />
        },
        {
            path: '/tasks',
            element: <TaskPage />
        }
    ])

    return <RouterProvider router={router} />
}
