'use client'

import React, { useState } from 'react'

export default function DashboardsLink() {
    const [isDashboardsOpen, setIsDashboardsOpen] = useState(true)
    const handleDashboardChange = () => {
        setIsDashboardsOpen(!isDashboardsOpen)
    }

    return (
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
    )
}
