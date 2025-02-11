'use client'

import React, { createContext, useContext, useState } from 'react'

interface GlobalContextType {
    isSettingsOpen: boolean
    isSearchOpen: boolean
    isNotificationOpen: boolean
    activeTab: string
    setIsSettingsOpen: (settings: boolean) => void
    setIsSearchOpen: (search: boolean) => void
    setIsNotificationOpen: (notification: boolean) => void
    onChangeActiveTab: (active: string) => void
}

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined)

export default function GlobalProvider({ children }: Readonly<{ children: React.ReactNode }>) {
    const [isSettingsOpen, setSettingsOpen] = useState(false)
    const [isSearchOpen, setSearchOpen] = useState(false)
    const [isNotificationOpen, setNotificationOpen] = useState(false)
    const [activeTab, setActiveTab] = useState("action")

    const setIsSettingsOpen = (showSettings: boolean) => setSettingsOpen(showSettings)

    const setIsSearchOpen = (showSearch: boolean) => setSearchOpen(showSearch)

    const setIsNotificationOpen = (showNotification: boolean) => setNotificationOpen(showNotification)

    const onChangeActiveTab = (active: string) => setActiveTab(active)

    return (
        <GlobalContext.Provider value={{
            isSettingsOpen,
            isSearchOpen,
            isNotificationOpen,
            activeTab,
            setIsSettingsOpen,
            setIsSearchOpen,
            setIsNotificationOpen,
            onChangeActiveTab,
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
