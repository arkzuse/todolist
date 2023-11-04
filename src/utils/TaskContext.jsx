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

function tasksReducer(tasks, action) {
    const user = action.payload.username

    switch (action.type) {
        case 'addUser': {
            return {
                ...tasks,
                [user]: []
            }
        }
        case 'add': {
            return {
                ...tasks,
                [user]: [
                    ...tasks[user],
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
                ...tasks,
                [user]: tasks[user].filter(task => task.id !== action.payload.id)
            }
        }
        case 'toggleDone': {
            return {
                ...tasks,
                [user]: tasks[user].map(task => {
                    if (task.id === action.payload.id) {
                        console.log(task.id)
                        console.log(action.payload.id)
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
                ...tasks,
                [user]: tasks[user].map(task => {
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
    }
}

export {
    TasksProvider,
    useTasks,
    useTasksDispatch
}