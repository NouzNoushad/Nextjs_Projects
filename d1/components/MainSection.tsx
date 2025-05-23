import React from 'react'
import Navbar from './Navbar'
import MainContent from './MainContent'
import Footer from './Footer'

export default function MainSection() {
    return (
        <div className='flex-1 h-full overflow-x-hidden overflow-y-auto'>
            <Navbar />
            <MainContent />
            <Footer />
        </div>
    )
}
