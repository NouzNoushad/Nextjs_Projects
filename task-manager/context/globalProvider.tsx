'use client'

import { createContext, ReactNode, useContext, useState } from "react"

interface GlobalContextType {
    modal: boolean;
    id: string;
    openModal: () => void;
    closeModal: () => void;
    setTaskId: (id: string) => void;
    resetTaskId: () => void;
}

interface GlobalProviderProps {
    children: ReactNode
}

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {

    const [modal, setModal] = useState(false)
    const [id, setId] = useState('')

    const openModal = () => setModal(true)
    const closeModal = () => setModal(false)

    const setTaskId = (id: string) => setId(id)
    const resetTaskId = () => setId('')

    return (
        <GlobalContext.Provider value={{
            modal,
            id,
            openModal,
            closeModal,
            setTaskId,
            resetTaskId,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalState = (): GlobalContextType => {
    const context = useContext(GlobalContext)
    if (!context) {
        throw new Error('')
    }
    return context
}