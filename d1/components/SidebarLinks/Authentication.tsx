'use client'

import React, { useState } from 'react'

export default function AuthenticationLink() {
    const [isAuthenticationOpen, setIsAuthenticationOpen] = useState(false)

    const handleAuthenticationChange = () => {
        setIsAuthenticationOpen(!isAuthenticationOpen)
    }

    return (
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
                <a href={`auth/forgot_password`} className='block p-2 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-700 dark:hover:text-light'>
                    Forgot Password
                </a>
                <a href={`auth/reset_password`} className='block p-2 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-700 dark:hover:text-light'>
                    Reset Password
                </a>
            </div>
        </div>
    )
}
