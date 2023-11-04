import {createContext, useEffect, useContext} from 'react'
import {useImmerReducer} from "use-immer";

const UserContext = createContext(null)
const UserDispatchContext = createContext(null)

const initialUser = {
    cur: "",
    list: []
}

function UserProvider({children}) {
    // from local storage
    const [users, dispatch] = useImmerReducer(userReducer, JSON.parse(localStorage.getItem('users')) || initialUser)

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

function userReducer(draft, action) {
    switch (action.type) {
        case 'login': {
            draft.cur = action.payload
            return
        }
        case 'logout': {
            draft.cur = ''
            return
        }
        case 'add': {
            draft.list.push({username: action.payload.username, password: action.payload.password})
            return
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