'use client'

import React, { useState } from 'react'

export default function LayoutsLink() {
    const [isLayoutsOpen, setIsLayoutsOpen] = useState(false)

    const handleLayoutsChange = () => {
        setIsLayoutsOpen(!isLayoutsOpen)
    }
    return (
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
    )
}
