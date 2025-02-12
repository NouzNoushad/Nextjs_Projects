'use client'

import React, { useState } from 'react'

export default function NavButtons() {

    const [showProfile, setShowProfile] = useState(false)

    return (
        <nav className='hidden space-x-2 md:flex md:items-center'>
            {/* Dark theme button */}
            <button className='relative focus:outline-none'>
                <div className="relative w-12 h-6 bg-primary-100 outline-none rounded-full dark:bg-primary-lighter"></div>
                <div className="absolute top-0 left-0 h-6 w-6 rounded-full bg-white inline-flex items-center justify-center shadow-sm text-primary-dark scale-110 transition-all duration-150 translate-x-0 -translate-y-px text-primary-dark">
                    <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                    </svg>
                </div>
            </button>
            {/* Notification */}
            <button className='p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 focus:outline-none focus:bg-primary-100'>
                <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                </svg>
            </button>
            {/* Search */}
            <button className='p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 focus:outline-none focus:bg-primary-100'>
                <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </button>
            {/* Settings */}
            <button className='p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 focus:outline-none focus:bg-primary-100'>
                <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
            </button>
            {/* User Profile */}
            <div className="relative">
                <button onClick={() => setShowProfile(!showProfile)} className={`focus:outline-none transition-opacity rounded-full ${showProfile ? "focus:ring-0" : "focus:ring"}`}>
                    <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                </button>
                <div className={`absolute right-0 w-48 bg-white rounded-md shadow-lg top-15 py-1 ring-1 ring-opacity-5 ring-black transition-all transform ease-out ${showProfile ? "translate-y-0 opacity-100" : "translate-y-1/2 opacity-0"}`}>
                    <a href="#" className='block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100'>
                        Your Profile
                    </a>
                    <a href="#" className='block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100'>
                        Settings
                    </a>
                    <a href="#" className='block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100'>
                        Logout
                    </a>
                </div>
            </div>
        </nav>
    )
}
