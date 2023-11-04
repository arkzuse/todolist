import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from "./Router.jsx";
import {UserProvider} from "./utils/UserContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <UserProvider>
            <Router/>
        </UserProvider>
    </React.StrictMode>,
)
