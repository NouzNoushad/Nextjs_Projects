'use client'

import React, { createContext, useContext, useState } from 'react'

interface GlobalContextType {
    isSettingsOpen: boolean
    setIsSettingsOpen: (settings: boolean) => void
}

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined)

export default function GlobalProvider({ children }: Readonly<{ children: React.ReactNode }>) {
    const [isSettingsOpen, setSettingsOpen] = useState(false)

    const setIsSettingsOpen = (settings: boolean) => setSettingsOpen(settings)

    return (
        <GlobalContext.Provider value={{
            isSettingsOpen,
            setIsSettingsOpen
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
