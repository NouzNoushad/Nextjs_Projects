'use client'

import React, { useState } from 'react'
import NavButtons from './NavButtons'
import MobileMenu from './MobileMenu'

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const handleMobileMenuOpen = () => setIsMobileMenuOpen(!isMobileMenuOpen)

    return (
        <header className='relative bg-white'>
            <div className="flex items-center justify-between p-2 border-b">
                {/* Mobile menu button */}
                <button onClick={handleMobileMenuOpen} className='p-1 bg-primary-50 rounded-md transition-colors duration-200 text-primary-lighter hover:text-primary hover:bg-primary-100 focus:outline-none focus:ring md:hidden'>
                    <span aria-hidden="true">
                        <svg
                            className="w-8 h-8"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </span>
                </button>
                <a href="#" className='inline-block text-2xl font-bold tracking-wider uppercase text-primary-dark'>
                    Dashboard
                </a>
                {/* Mobile submenu button */}
                <button className='p-1 bg-primary-50 rounded-md transition-colors text-primary-lighter duration-200 hover:text-primary hover:bg-primary-100 focus:outline-none focus:ring md:hidden'>
                    <span aria-hidden="true">
                        <svg
                            className="w-8 h-8"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                            />
                        </svg>
                    </span>
                </button>
                {/* Nav Section */}
                <NavButtons />
            </div>
            {/* Mobile Main menu */}
            <MobileMenu menuOpen={isMobileMenuOpen} />
        </header>
    )
}
