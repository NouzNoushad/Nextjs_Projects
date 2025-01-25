'use client'

import { Task } from "@/interface/task_interface";
import { categories, copyWith, priorities, statusList } from "@/lib/TaskHelpers";
import { createContext, useContext, useState } from "react";

interface GlobalContextType {
    gTask: Task | undefined
    setGTask: (task: Task) => void
    setGCategory: (category: string) => void
    setGPriority: (priority: string) => void
    setGStatus: (status: string) => void 
    setGDueDate: (date: string) => void
    resetGTask: () => void
}

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined)

export const GlobalProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const [gTask, setTask] = useState<Task>()
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
    const setGCategory = (category: string) => setTask(copyWith(initialTask, { category: category }))
    const setGPriority = (priority: string) => setTask(copyWith(initialTask, {priority: priority}))
    const setGStatus = (status: string) => setTask(copyWith(initialTask, {status: status}))
    const setGDueDate = (date: string) => setTask(copyWith(initialTask, { due_date: date }))

    const resetGTask = () => setTask(copyWith(initialTask, {
        category: categories[0],
        priority: priorities[0],
        status: statusList[0],
    }))

    return (
        <GlobalContext.Provider value={{
            gTask,
            setGTask,
            setGCategory,
            setGPriority,
            setGStatus,
            setGDueDate,
            resetGTask,
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