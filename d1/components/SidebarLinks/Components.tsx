'use client'

import React, { useState } from 'react'

export default function ComponentsLink() {
    const [isComponentsOpen, setIsComponentsOpen] = useState(false)

    const handleComponentChange = () => {
        setIsComponentsOpen(!isComponentsOpen)
    }
    return (
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
    )
}
