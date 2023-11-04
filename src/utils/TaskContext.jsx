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
    switch (action.type) {
        case 'add':
            return {
                ...tasks,

            }
    }
}

export {
    TasksProvider,
    useTasks,
    useTasksDispatch
}