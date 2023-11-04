import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from "./Router.jsx";
import {UserProvider} from "./utils/UserContext.jsx";
import {TasksProvider} from "./utils/TaskContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <UserProvider>
            <TasksProvider>
            <Router/>
            </TasksProvider>
        </UserProvider>
    </React.StrictMode>,
)
