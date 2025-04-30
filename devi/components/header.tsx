'use client'

import React, { useEffect, useState } from 'react'

export default function Header() {
    const [stickyHeader, setStickyHeader] = useState("bg-transparent h-[12vh]")

    const handleScroll = () => {
        const windowHeight = window.scrollY;

        setStickyHeader(
            windowHeight > 500 ? "bg-[#000910] opacity-80 h-[13vh]" : "bg-transparent h-[12vh]"
        )
    }

    useEffect(() => {
        handleScroll()

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`fixed top-0 left-0 w-full z-50 py-8 transition-all duration-200 ${stickyHeader}`}>
            <div className="container-width text-white flex flex-row items-center justify-between h-full">
                <a href="#">
                    <h1 className="text-3xl font-bold">Dewi</h1>
                </a>
                <nav className="flex flex-row items-center gap-[35px]">
                    <ul className="hidden lg:flex flex-row items-center justify-center gap-[35px] uppercase font-semibold text-sm">
                        <li><a className="relative inline-block after:absolute after:bottom-[-6px] after:left-0 after:h-[0.13rem] after:bg-[#FF4A17] after:w-full" href="#">Home</a></li>
                        <li><a className="nav-link" href="#about">About</a></li>
                        <li><a className="nav-link" href="#services">Services</a></li>
                        <li><a className="nav-link" href="#portfolio">Portfolio</a></li>
                        <li><a className="nav-link" href="#team">Team</a></li>
                        <li><a className="nav-link" href="#">Dropdown</a></li>
                        <li><a className="nav-link" href="#contact">Contact</a></li>
                    </ul>
                    <div className="flex flex-row items-center space-x-[20px]">
                        <button className="border-2 border-white px-2 py-2 rounded-sm uppercase text-xs min-w-[8rem] font-medium cursor-pointer transition-colors duration-150 hover:bg-[#FF4A17] hover:text-white hover:border-[#FF4A17]">
                            Get Started
                        </button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 inline-block lg:hidden">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                </nav>
            </div>
        </header>
    )
}
