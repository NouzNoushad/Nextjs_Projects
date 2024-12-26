'use client'

import { createContext, ReactNode, useContext, useState } from "react"

interface GlobalContextType {
    modal: boolean;
    openModal: () => void;
    closeModal: () => void;
}

interface GlobalProviderProps {
    children: ReactNode
}

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {

    const [modal, setModal] = useState(false)

    const openModal = () => setModal(true)
    const closeModal = () => setModal(false)

    return (
        <GlobalContext.Provider value={{
            modal,
            openModal,
            closeModal,
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