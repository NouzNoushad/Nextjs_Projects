'use client'

import { Task } from "@/interface/task_interface";
import { categories, copyWith, priorities, statusList } from "@/lib/TaskHelpers";
import { createContext, useContext, useState } from "react";

interface GlobalContextType {
    gTasks: Task[]
    gTask: Task | undefined
    sidebarStatus: string
    showMenu: boolean
    setGTask: (task: Task) => void
    setGTasks: (tasks: Task[]) => void
    setGCategory: (category: string) => void
    setGPriority: (priority: string) => void
    setGStatus: (status: string) => void
    setSidebarStatus: (status: string) => void
    setGDueDate: (date: string) => void
    resetGTask: () => void
    setShowMenu: () => void
    resetShowMenu: () => void
}

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined)

export const GlobalProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const [gTask, setTask] = useState<Task>()
    const [gTasks, setTasks] = useState<Task[]>([])
    const [sidebarStatus, setSideStatus] = useState<string>('tasks')
    const [showMenu, setMenu] = useState(false)

    const due_date = new Date().toISOString().split('T')[0]

    const initialTask: Task = {
        name: '',
        description: '',
        category: categories[0],
        priority: priorities[0],
        status: statusList[0],
        assignee: {
            username: '',
            image: {
                filename: '',
                file_path: '',
            }
        },
        due_date: due_date
    }

    const setGTask = (task: Task) => setTask(task)
    const setGTasks = (tasks: Task[]) => setTasks(tasks)
    const setGCategory = (category: string) => setTask(copyWith(initialTask, { category: category }))
    const setGPriority = (priority: string) => setTask(copyWith(initialTask, { priority: priority }))
    const setGStatus = (status: string) => setTask(copyWith(initialTask, { status: status }))
    const setGDueDate = (date: string) => setTask(copyWith(initialTask, { due_date: date }))

    const resetGTask = () => setTask(copyWith(initialTask, {
        category: categories[0],
        priority: priorities[0],
        status: statusList[0],
    }))

    const setSidebarStatus = (status: string) => setSideStatus(status)

    const setShowMenu = () => setMenu(!showMenu)
    const resetShowMenu = () => setMenu(false)

    return (
        <GlobalContext.Provider value={{
            gTask,
            gTasks,
            sidebarStatus,
            showMenu,
            setShowMenu,
            setSidebarStatus,
            setGTask,
            setGTasks,
            setGCategory,
            setGPriority,
            setGStatus,
            setGDueDate,
            resetGTask,
            resetShowMenu,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalState = () => {
    const context = useContext(GlobalContext)
    if (!context) {
        throw new Error("")
    }
    return context
}