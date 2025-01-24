import { GlobalProvider } from '@/context/globalProvider'
import React from 'react'

export default function layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <GlobalProvider>
                {children}
            </GlobalProvider>
        </div>
    )
}
