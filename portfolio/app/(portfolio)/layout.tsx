import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'

export default function layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
