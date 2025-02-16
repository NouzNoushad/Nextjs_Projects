'use client'

import { LinksType } from "@/lib/Constants";
import { createContext, useContext, useState } from "react";

interface GlobalContextType {
    selectedLink: LinksType
    setSelectedLink: (link: LinksType) => void
}

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined)

export const GlobalProvider = ({children}: Readonly<{children: React.ReactNode}>) => {
    const [selectedLink, setLink] = useState<LinksType>(LinksType.Products)

    const setSelectedLink = (link: LinksType) => setLink(link)

    return (
        <GlobalContext.Provider value={{
            selectedLink,
            setSelectedLink,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalState = (): GlobalContextType => {
    const context = useContext(GlobalContext)
    if(!context) {
        throw new Error("Invalid context")
    }
    return context
}
