'use client'

import React, { useState } from 'react'

export default function Sidebar() {
    const [isDashboardsOpen, setIsDashboardsOpen] = useState(true)
    const [isComponentsOpen, setIsComponentsOpen] = useState(false)
    const [isPagesOpen, setIsPagesOpen] = useState(false)
    const [isAuthenticationOpen, setIsAuthenticationOpen] = useState(false)
    const [isLayoutsOpen, setIsLayoutsOpen] = useState(false)

    const handleDashboardChange = () => {
        setIsDashboardsOpen(!isDashboardsOpen)
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
    const handleLayoutsChange = () => {
        setIsLayoutsOpen(!isLayoutsOpen)
    }

    return (
        <aside className='flex-shrink-0 bg-white w-64 border-r hidden md:block dark:border-primary-darker dark:bg-darker'>
            <div className="flex flex-col h-full">
                <nav className="flex-1 px-2 py-4 overflow-y-hidden hover:overflow-y-auto space-y-2">
                    {/* Dashboards */}
                    <div>
                        <button onClick={handleDashboardChange} className={`w-full flex flex-row items-center hover:bg-primary-100 text-gray-500 rounded-lg p-2 focus:outline-none focus:ring-0 dark:text-light dark:bg-primary ${isDashboardsOpen ? "bg-primary-100" : "bg-transparent"}`}>
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
                                    className={`w-4 h-4 transition-transform transform ${isDashboardsOpen ? "rotate-180" : "rotate-0"}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </button>
                        {/* SubNav */}
                        <div className={`mt-2 space-y-2 px-7 ${isDashboardsOpen ? "block" : "hidden"}`}>
                            <a href="#" className='block p-2 text-sm text-gray-700 transition-colors duration-200 hover:text-gray-700 dark:text-light'>
                                Default
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-700 dark:hover:text-light'>
                                Project Management
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-700 dark:hover:text-light'>
                                E-Commerce
                            </a>
                        </div>
                    </div>
                    {/* Components */}
                    <div>
                        <button onClick={handleComponentChange} className={`w-full flex flex-row items-center hover:bg-primary-100 text-gray-500 rounded-lg p-2 focus:outline-none focus:ring-0 dark:text-light dark:bg-primary ${isComponentsOpen ? "bg-primary-100" : "bg-transparent"}`}>
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
                                    className={`w-4 h-4 transition-transform transform ${isComponentsOpen ? "rotate-180" : "rotate-0"}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </button>
                        {/* SubNav */}
                        <div className={`mt-2 space-y-2 px-7 ${isComponentsOpen ? "block" : "hidden"}`}>
                            <a href="#" className='block p-2 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-700 dark:hover:text-light'>
                                Alerts
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-700 dark:hover:text-light'>
                                Buttons
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-700 dark:hover:text-light'>
                                Cards
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-700 dark:hover:text-light'>
                                Dropdowns
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-700 dark:hover:text-light'>
                                Forms
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-700 dark:hover:text-light'>
                                Lists
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-700 dark:hover:text-light'>
                                Modals
                            </a>
                        </div>
                    </div>
                    {/* Pages */}
                    <div>
                        <button onClick={handlePagesChange} className={`w-full flex flex-row items-center hover:bg-primary-100 text-gray-500 rounded-lg p-2 focus:outline-none focus:ring-0 dark:text-light dark:bg-primary ${isPagesOpen ? "bg-primary-100" : "bg-transparent"}`}>
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
                                    className={`w-4 h-4 transition-transform transform ${isPagesOpen ? "rotate-180" : "rotate-0"}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </button>
                        {/* SubNav */}
                        <div className={`mt-2 space-y-2 px-7 ${isPagesOpen ? "block" : "hidden"}`}>
                            <a href="#" className='block p-2 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-700 dark:hover:text-light'>
                                Blank
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-700 dark:hover:text-light'>
                                404
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-700 dark:hover:text-light'>
                                500
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-700 dark:hover:text-light'>
                                Profile
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-700 dark:hover:text-light'>
                                Pricing
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-700 dark:hover:text-light'>
                                Feed
                            </a>
                        </div>
                    </div>
                    {/* Authentication */}
                    <div>
                        <button onClick={handleAuthenticationChange} className={`w-full flex flex-row items-center hover:bg-primary-100 text-gray-500 rounded-lg p-2 focus:outline-none focus:ring-0 dark:text-light dark:bg-primary ${isAuthenticationOpen ? "bg-primary-100" : "bg-transparent"}`}>
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
                                    className={`w-4 h-4 transition-transform transform ${isAuthenticationOpen ? "rotate-180" : "rotate-0"}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </button>
                        {/* SubNav */}
                        <div className={`mt-2 space-y-2 px-7 ${isAuthenticationOpen ? "block" : "hidden"}`}>
                            <a href={`auth/register`} className='block p-2 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-700 dark:hover:text-light'>
                                Register
                            </a>
                            <a href={`auth/login`} className='block p-2 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-700 dark:hover:text-light'>
                                Login
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-700 dark:hover:text-light'>
                                Forgot Password
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-700 dark:hover:text-light'>
                                Reset Password
                            </a>
                        </div>
                    </div>
                    {/* Layouts */}
                    <div>
                        <button onClick={handleLayoutsChange} className={`w-full flex flex-row items-center hover:bg-primary-100 text-gray-500 rounded-lg p-2 focus:outline-none focus:ring-0 dark:text-light dark:bg-primary ${isLayoutsOpen ? "bg-primary-100" : "bg-transparent"}`}>
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
                                    className={`w-4 h-4 transition-transform transform ${isLayoutsOpen ? "rotate-180" : "rotate-0"}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </button>
                        {/* SubNav */}
                        <div className={`mt-2 space-y-2 px-7 ${isLayoutsOpen ? "block" : "hidden"}`}>
                            <a href="#" className='block p-2 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-700 dark:hover:text-light'>
                                Two Column Sidebar
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-700 dark:hover:text-light'>
                                One Column Sidebar
                            </a>
                            <a href="#" className='block p-2 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-700 dark:hover:text-light'>
                                Mini Column Sidebar
                            </a>
                        </div>
                    </div>
                </nav>
                <div className="flex-shrink-0 px-2 py-4 space-y-2">
                    <button className='bg-primary rounded-md transition-colors duration-200 hover:bg-primary-darker px-4 py-2 text-sm text-white flex items-center justify-center w-full focus:outline-none focus:ring focus:ring-primary-dark focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-dark'>
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
