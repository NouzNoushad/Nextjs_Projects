'use client'

import React, { useState } from 'react'

export default function Sidebar() {
    const [isDashboardOpen, setIsDashboardOpen] = useState(true)
    const [isComponentsOpen, setIsComponentsOpen] = useState(false)
    const [isPagesOpen, setIsPagesOpen] = useState(false)
    const [isAuthenticationOpen, setIsAuthenticationOpen] = useState(false)
    const [isLayoutOpen, setIsLayoutOpen] = useState(false)

    const handleDashboardChange = () => {
        setIsDashboardOpen(!isDashboardOpen)
    }
    const handleComponentChange = () => {
        setIsComponentsOpen(!isComponentsOpen)
    }
    const handlePagesChange = () => {
        setIsPagesOpen(!isPagesOpen)
    }
    const handleAuthenticationChange = () => {
        setIsAuthenticationOpen(!isAuthenticationOpen)
    }
    const handleLayoutChange = () => {
        setIsLayoutOpen(!isLayoutOpen)
    }

    return (
        <aside className="flex-shrink-0 w-64 bg-white border-r hidden md:block">
            <div className="flex flex-col h-full">
                <nav aria-label='main' className='flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto'>
                    <div className="">
                        <button onClick={handleDashboardChange} className='w-full flex flex-row items-center p-2 rounded-md text-gray-500 bg-primary-100 focus:outline-none focus:ring-0'>
                            <span>
                                <svg
                                    className="w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                </svg>
                            </span>
                            <span className='ml-2 text-sm'>
                                Dashboards
                            </span>
                            <span className='ml-auto'>
                                <svg
                                    className={`w-4 h-4 transition-transform transform ${isDashboardOpen ? "rotate-180": "rotate-0"}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </button>
                        <div role='menu' className={`mt-2 space-y-2 px-7 ${isDashboardOpen ? "block" : "hidden"}`} aria-label='dashboard'>
                            <a href="#" className='block p-2 text-sm text-gray-700 transition-colors duration-200 hover:text-gray-700'>
                                Default
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-400 transition-colors duration-200 hover:text-gray-700'>
                                Project Management
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-400 transition-colors duration-200 hover:text-gray-700'>
                                E-Commerce
                            </a>
                        </div>
                    </div>
                    <div className="">
                        <button onClick={handleComponentChange} className='w-full flex flex-row items-center p-2 rounded-md text-gray-500 bg-primary-100 focus:outline-none focus:ring-0'>
                            <span>
                                <svg
                                    className="w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                    />
                                </svg>
                            </span>
                            <span className='ml-2 text-sm'>
                                Components
                            </span>
                            <span className='ml-auto'>
                                <svg
                                    className={`w-4 h-4 transition-transform transform ${isComponentsOpen ? "rotate-180": "rotate-0"}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </button>
                        <div role='menu' className={`mt-2 space-y-2 px-7 ${isComponentsOpen ? "block" : "hidden"}`} aria-label='dashboard'>
                            <a href="#" className='block p-2 text-sm text-gray-400 transition-colors duration-200 hover:text-gray-700'>
                                Alerts
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-400 transition-colors duration-200 hover:text-gray-700'>
                                Button
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-400 transition-colors duration-200 hover:text-gray-700'>
                                Cards
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-400 transition-colors duration-200 hover:text-gray-700'>
                                Dropdowns
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-400 transition-colors duration-200 hover:text-gray-700'>
                                Forms
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-400 transition-colors duration-200 hover:text-gray-700'>
                                Lists
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-400 transition-colors duration-200 hover:text-gray-700'>
                                Alert
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-400 transition-colors duration-200 hover:text-gray-700'>
                                Modals
                            </a>
                        </div>
                    </div>
                    <div className="">
                        <button onClick={handlePagesChange} className='w-full flex flex-row items-center p-2 rounded-md text-gray-500 bg-primary-100 focus:outline-none focus:ring-0'>
                            <span>
                                <svg
                                    className="w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                    />
                                </svg>
                            </span>
                            <span className='ml-2 text-sm'>
                                Pages
                            </span>
                            <span className='ml-auto'>
                                <svg
                                    className={`w-4 h-4 transition-transform transform ${isPagesOpen ? "rotate-180": "rotate-0"}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </button>
                        <div role='menu' className={`mt-2 space-y-2 px-7 ${isPagesOpen ? "block" : "hidden"}`} aria-label='dashboard'>
                            <a href="#" className='block p-2 text-sm text-gray-400 transition-colors duration-200 hover:text-gray-700'>
                                Blank
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-400 transition-colors duration-200 hover:text-gray-700'>
                                404
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-400 transition-colors duration-200 hover:text-gray-700'>
                                500
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-400 transition-colors duration-200 hover:text-gray-700'>
                                Profile
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-400 transition-colors duration-200 hover:text-gray-700'>
                                Pricing
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-400 transition-colors duration-200 hover:text-gray-700'>
                                Feed
                            </a>
                        </div>
                    </div>
                    <div className="">
                        <button onClick={handleAuthenticationChange} className='w-full flex flex-row items-center p-2 rounded-md text-gray-500 bg-primary-100 focus:outline-none focus:ring-0'>
                            <span>
                                <svg
                                    className="w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </span>
                            <span className='ml-2 text-sm'>
                                Authentication
                            </span>
                            <span className='ml-auto'>
                                <svg
                                    className={`w-4 h-4 transition-transform transform ${isAuthenticationOpen ? "rotate-180": "rotate-0"}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </button>
                        <div role='menu' className={`mt-2 space-y-2 px-7 ${isAuthenticationOpen ? "block" : "hidden"}`} aria-label='dashboard'>
                            <a href="#" className='block p-2 text-sm text-gray-400 transition-colors duration-200 hover:text-gray-700'>
                                Register
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-400 transition-colors duration-200 hover:text-gray-700'>
                                Login
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-400 transition-colors duration-200 hover:text-gray-700'>
                                Forgot Password
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-400 transition-colors duration-200 hover:text-gray-700'>
                                Reset Password
                            </a>
                        </div>
                    </div>
                    <div className="">
                        <button onClick={handleLayoutChange} className='w-full flex flex-row items-center p-2 rounded-md text-gray-500 bg-primary-100 focus:outline-none focus:ring-0'>
                            <span>
                                <svg
                                    className="w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                                    />
                                </svg>
                            </span>
                            <span className='ml-2 text-sm'>
                                Layouts
                            </span>
                            <span className='ml-auto'>
                                <svg
                                    className={`w-4 h-4 transition-transform transform ${isLayoutOpen ? "rotate-180" : "rotate-0"}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </button>
                        <div role='menu' className={`mt-2 space-y-2 px-7 ${isLayoutOpen ? "block" : "hidden"}`} aria-label='dashboard'>
                            <a href="#" className='block p-2 text-sm text-gray-400 transition-colors duration-200 hover:text-gray-700'>
                                Two Column Sidebar
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-400 transition-colors duration-200 hover:text-gray-700'>
                                One Column Sidebar
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-400 transition-colors duration-200 hover:text-gray-700'>
                                Mini Column Sidebar
                            </a>
                        </div>
                    </div>
                </nav>
                <div className="flex-shrink-0 px-2 py-4 space-y-2">
                    <button className='flex items-center justify-center w-full px-4 py-2 text-sm text-white bg-primary rounded-md transition-color duration-200 hover:bg-primary-darker'>
                        <span>
                            <svg
                                className="w-4 h-4 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                />
                            </svg>
                        </span>
                        <span>Customize</span>
                    </button>
                </div>
            </div>
        </aside>
    )
}
