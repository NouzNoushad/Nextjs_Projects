'use client'

import { Todo } from "@/app/interface/interface";
import { createContext, useContext, useState } from "react";

interface GlobalContextType {
    id: number | undefined
    todo: Todo | undefined
    setTodoId: (id: number) => void
    resetTodoId: () => void
    setTodoData: (todo: Todo) => void
    resetTodoData: () => void
}

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined)

export const GlobalProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {

    const [id, setId] = useState<number | undefined>()
    const [todo, setTodo] = useState<Todo | undefined>()

    const setTodoId = (id: number) => setId(id)
    const resetTodoId = () => setId(undefined)

    const setTodoData = (todo: Todo) => setTodo(todo)
    const resetTodoData = () => setTodo(undefined)

    return (
        <GlobalContext.Provider value={{
            id,
            todo,
            setTodoId,
            resetTodoId,
            setTodoData,
            resetTodoData,
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