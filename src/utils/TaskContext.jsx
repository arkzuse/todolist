import {createContext, useContext, useEffect, useReducer} from "react";

const TaskContext = createContext(null)
const TaskDispatchContext = createContext(null)

function TasksProvider({children}) {
    const [tasks, dispatch] = useReducer(
        tasksReducer,
        JSON.parse(localStorage.getItem('tasks')) || {}
    )

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
        console.log(tasks, 'useEffect')
    }, [tasks])

    return (
        <TaskContext.Provider value={tasks}>
            <TaskDispatchContext.Provider value={dispatch}>
                {children}
            </TaskDispatchContext.Provider>
        </TaskContext.Provider>
    )
}

function useTasks() {
    return useContext(TaskContext)
}

function useTasksDispatch() {
    return useContext(TaskDispatchContext)
}

function tasksReducer(state, action) {
    const user = action.payload.username

    switch (action.type) {
        case 'addUser': {
            return {
                // spread everything from state
                ...state,
                // add new user
                [action.payload.username]: []
            }
        }
        case 'add': {
            return {
                ...state,
                [user]: [
                    ...state[user],
                    {
                        id: Date.now(),
                        text: action.payload.text,
                        done: false
                    }
                ]
            }
        }
        case 'delete': {
            return {
                ...state,
                [user]: state[user].filter(task => task.id !== action.payload.id)
            }
        }
        case 'toggleDone': {
            return {
                ...state,
                [user]: state[user].map(task => {
                    if (task.id === action.payload.id) {
                        return {
                            ...task,
                            done: !task.done
                        }
                    }
                    return task
                })
            }
        }
        case 'rename': {
            return {
                ...state,
                [user]: state[user].map(task => {
                    if (task.id === action.payload.id) {
                        return {
                            ...task,
                            text: action.payload.text
                        }
                    }
                    return task
                })
            }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

export {
    TasksProvider,
    useTasks,
    useTasksDispatch
}