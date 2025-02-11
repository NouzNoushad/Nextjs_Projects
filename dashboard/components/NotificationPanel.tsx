'use client'

import { useGlobalState } from '@/context/GlobalProvider'
import React from 'react'

export default function NotificationPanel() {
    const { isNotificationOpen, setIsNotificationOpen, activeTab, onChangeActiveTab } = useGlobalState()
    return (
        <>
            {/* Overlay */}
            {
                isNotificationOpen && (
                    <div className="fixed inset-0 z-10 bg-primary-darker bg-opacity-30 transition-opacity" style={{ opacity: '0.5' }} onClick={() => setIsNotificationOpen(false)}></div>
                )
            }

            {/* Panel */}

            <div className={`fixed inset-y-0 left-0 z-30 w-full max-w-sm sm:max-w-md bg-white shadow-xl transition-all duration-300 ${isNotificationOpen ? "translate-x-0" : "-translate-x-full"}`}>
                {/* Close Button */}
                <button onClick={() => setIsNotificationOpen(false)} className={`absolute top-0 p-2 rounded-md text-white focus:outline-none focus:ring ${isNotificationOpen ? "right-[-45px]" : "right-0 focus:ring-0"}`}>
                    <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="flex flex-col h-screen">
                    {/* Panel Header */}
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-between px-4 pt-4 border-b">
                            <h2 className='pb-4 font-semibold'>Notifications</h2>
                            <div className="space-x-2">
                                <button onClick={() => onChangeActiveTab("action")} className={`px-px pb-4 transition-all duration-200 transform translate-y-px border-b focus:outline-none ${activeTab == "action" ? "border-primary-dark" : "border-transparent"}`}>
                                    Action
                                </button>
                                <button onClick={() => onChangeActiveTab("user")} className={`px-px pb-4 transition-all duration-200 transform translate-y-px border-b focus:outline-none ${activeTab == "user" ? "border-primary-dark" : "border-transparent"}`}>
                                    User
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Panel content */}
                    <div className="flex-1 pt-4 overflow-y-hidden hover:overflow-y-auto">
                        {/* Action tab */}
                        {
                            activeTab == "action" ? (
                                <div className="space-y-4">
                                    <a href="#" className='block'>
                                        <div className="flex px-4 space-x-4">
                                            <div className="relative flex-shrink-0">
                                                <span className='z-10 inline-block p-2 overflow-visible rounded-full bg-primary-50 text-primary-light'>
                                                    <svg
                                                        className="w-7 h-7"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                                        />
                                                    </svg>
                                                </span>
                                                <div className="absolute h-24 p-px -mt-3 -ml-px bg-primary-50 left-1/2"></div>
                                            </div>
                                            <div className="flex-1 overflow-hidden">
                                                <h5 className='text-sm font-semibold text-gray-600'>
                                                   {` New project "Dashboard" created`}
                                                </h5>
                                                <p className='text-sm font-normal text-gray-400 truncate'>Looks like there might be  a new theme soon</p>
                                                <span className='text-sm font-normal text-gray-400'>9h ago</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className='block'>
                                        <div className="flex px-4 space-x-4">
                                            <div className="relative flex-shrink-0">
                                                <span className='z-10 inline-block p-2 overflow-visible rounded-full bg-primary-50 text-primary-light'>
                                                    <svg
                                                        className="w-7 h-7"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                                        />
                                                    </svg>
                                                </span>
                                                <div className="absolute h-24 p-px -mt-3 -ml-px bg-primary-50 left-1/2"></div>
                                            </div>
                                            <div className="flex-1 overflow-hidden">
                                                <h5 className='text-sm font-semibold text-gray-600'>
                                                    Dashboard v0.0.2 was released
                                                </h5>
                                                <p className='text-sm font-normal text-gray-400 truncate'>New version was released</p>
                                                <span className='text-sm font-normal text-gray-400'>2d ago</span>
                                            </div>
                                        </div>
                                    </a>
                                    {
                                        Array.from({length: 8}).map((value, index) => (
                                            <a key={index} href="#" className='block'>
                                                <div className="flex px-4 space-x-4">
                                                    <div className="relative flex-shrink-0">
                                                        <span className='z-10 inline-block p-2 overflow-visible rounded-full bg-primary-50 text-primary-light'>
                                                            <svg
                                                                className="w-7 h-7"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <div className="absolute h-24 p-px -mt-3 -ml-px bg-primary-50 left-1/2"></div>
                                                    </div>
                                                    <div className="flex-1 overflow-hidden">
                                                        <h5 className='text-sm font-semibold text-gray-600'>
                                                            {` New project "Dashboard" created`}
                                                        </h5>
                                                        <p className='text-sm font-normal text-gray-400 truncate'>Looks like there might be  a new theme soon</p>
                                                        <span className='text-sm font-normal text-gray-400'>9h ago</span>
                                                    </div>
                                                </div>
                                            </a>
                                        ))
                                    }
                                </div>
                            ) : null
                        }
                        {/* User tab */}
                        {
                            activeTab == "user" ? (
                                <div className="space-y-4">
                                    <a href="#" className='block'>
                                        <div className="flex px-4 space-x-4">
                                            <div className="relative flex-shrink-0">
                                                <span className='relative z-10 inline-block overflow-visible rounded-full'>
                                                    <div className="w-9 h-9 rounded-full bg-slate-300"></div>
                                                </span>
                                                <div className="absolute h-24 p-px -mt-3 -ml-px bg-primary-50 left-1/2"></div>
                                            </div>
                                            <div className="flex-1 overflow-hidden">
                                                <h5 className='text-sm font-semibold text-gray-600'>John Doe</h5>
                                                <p className='text-sm font-normal text-gray-400'>Shared new project Dashboard</p>
                                                <span className='text-sm font-normal text-gray-400'>1d ago</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className='block'>
                                        <div className="flex px-4 space-x-4">
                                            <div className="relative flex-shrink-0">
                                                <span className='relative z-10 inline-block overflow-visible rounded-full'>
                                                    <div className="w-9 h-9 rounded-full bg-slate-300"></div>
                                                </span>
                                                <div className="absolute h-24 p-px -mt-3 -ml-px bg-primary-50 left-1/2"></div>
                                            </div>
                                            <div className="flex-1 overflow-hidden">
                                                <h5 className='text-sm font-semibold text-gray-600'>Jane Doe</h5>
                                                <p className='text-sm font-normal text-gray-400'>Commit new changes to Dashboard project</p>
                                                <span className='text-sm font-normal text-gray-400'>10h ago</span>
                                            </div>
                                        </div>
                                    </a>
                                    {
                                        Array.from({length: 8}).map((value, index) => (
                                            <a key={index} href="#" className='block'>
                                                <div className="flex px-4 space-x-4">
                                                    <div className="relative flex-shrink-0">
                                                        <span className='relative z-10 inline-block overflow-visible rounded-full'>
                                                            <div className="w-9 h-9 rounded-full bg-slate-300"></div>
                                                        </span>
                                                        <div className="absolute h-24 p-px -mt-3 -ml-px bg-primary-50 left-1/2"></div>
                                                    </div>
                                                    <div className="flex-1 overflow-hidden">
                                                        <h5 className='text-sm font-semibold text-gray-600'>John Doe</h5>
                                                        <p className='text-sm font-normal text-gray-400'>Released new version Dashboard</p>
                                                        <span className='text-sm font-normal text-gray-400'>10h ago</span>
                                                    </div>
                                                </div>
                                            </a>
                                        ))
                                    }
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
