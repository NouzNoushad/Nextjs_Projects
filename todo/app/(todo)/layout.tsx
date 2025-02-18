import Navbar from '@/components/navbar'
import React from 'react'

export default function TodoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}
