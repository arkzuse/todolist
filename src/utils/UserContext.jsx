import {createContext, useReducer, useEffect, useContext} from 'react'

const UserContext = createContext(null)
const UserDispatchContext = createContext(null)

const initialUser = {
    cur: "",
    list: []
}

function UserProvider({children}) {
    // from local storage
    const [users, dispatch] = useReducer(userReducer, JSON.parse(localStorage.getItem('users')) || initialUser)

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
    }, [users])

    return (
        <UserContext.Provider value={users}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserContext.Provider>
    )
}

function userReducer(users, action) {
    switch (action.type) {
        case 'login': {
            return {
                ...users,
                cur: action.payload
            }
        }
        case 'logout': {
            return {
                ...users,
                cur: ""
            }
        }
        case 'add': {
            return {
                ...users,
                list: [...users.list, {username: action.payload.username, password: action.payload.password}]
            }
        }
    }
}

function useUser() {
    return useContext(UserContext)
}

function useUserDispatch() {
    return useContext(UserDispatchContext)
}

export {
    UserProvider,
    useUser,
    useUserDispatch
}