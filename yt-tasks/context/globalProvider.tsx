'use client'

import { Task } from "@/interface/task_interface";
import { createContext, useContext, useState } from "react";

interface GlobalContextType {
    gTasks: Task[]
    sidebarStatus: string
    showMenu: boolean
    setGTasks: (tasks: Task[]) => void
    setSidebarStatus: (status: string) => void
    setShowMenu: () => void
    resetShowMenu: () => void
}

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined)

export const GlobalProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const [gTasks, setTasks] = useState<Task[]>([])
    const [sidebarStatus, setSideStatus] = useState<string>('tasks')
    const [showMenu, setMenu] = useState(false)

    const setGTasks = (tasks: Task[]) => setTasks(tasks)

    const setSidebarStatus = (status: string) => setSideStatus(status)

    const setShowMenu = () => setMenu(!showMenu)
    const resetShowMenu = () => setMenu(false)

    return (
        <GlobalContext.Provider value={{
            gTasks,
            sidebarStatus,
            showMenu,
            setShowMenu,
            setSidebarStatus,
            setGTasks,
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