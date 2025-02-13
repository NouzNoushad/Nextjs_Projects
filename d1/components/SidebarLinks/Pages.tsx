'use client'

import React, { useState } from 'react'

export default function PagesLink() {
    const [isPagesOpen, setIsPagesOpen] = useState(false)

    const handlePagesChange = () => {
        setIsPagesOpen(!isPagesOpen)
    }

    return (
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
    )
}
