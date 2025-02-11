'use client'

import { useGlobalState } from '@/context/GlobalProvider'
import React from 'react'

export default function SearchPanel() {
    const { isSearchOpen, setIsSearchOpen } = useGlobalState()
    return (
        <>
            {/* Overlay */}
            {
                isSearchOpen && (
                    <div className="fixed inset-0 z-10 bg-primary-darker bg-opacity-30 transition-opacity" onClick={() => setIsSearchOpen(false)} style={{ opacity: '0.5' }}></div>
                )
            }

            {/* Panel */}
            <div className={`fixed inset-y-0 left-0 z-50 w-full max-w-sm sm:max-w-md bg-white shadow-xl transition-all duration-500 ${isSearchOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button onClick={() => setIsSearchOpen(false)} className={`absolute top-2 p-2 rounded-md text-white focus:outline-2 focus:outline-none focus:ring ${isSearchOpen ? "right-[-45px]" : "right-0 focus:ring-0"}`}>
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
                    <div className="relative flex-shrink-0 px-4 py-8 text-gray-400 border-b focus-within:text-gray-700">
                        <span className='absolute inset-y-0 inline-flex items-center px-4'>
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
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </span>
                        <input type="text" placeholder='Search...' className='w-full py-2 pl-10 pr-4 border rounded-full focus:outline-none focus:ring' />
                    </div>

                    {/* Content */}
                    <div className="flex-1 px-4 pb-4 space-y-4 overflow-y-hidden hover:overflow-y-auto">
                        <h3 className='py-2 text-sm font-semibold text-gray-600'>History</h3>
                        <a href="#" className='flex space-x-4'>
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 rounded-lg bg-gray-200"></div>
                            </div>
                            <div className="flex-1 max-w-xs overflow-hidden">
                                <h4 className='text-sm font-semibold text-gray-600'>Header</h4>
                                <p className='text-sm font-normal text-gray-400 truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eos quod numquam nisi sequi tempora tempore? Adipisci quos eos assumenda velit iure? Voluptate dicta totam similique, earum saepe fugiat incidunt.</p>
                                <span className='text-sm font-normal text-gray-400'>Post</span>
                            </div>
                        </a>
                        <a href="#" className='flex space-x-4'>
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 rounded-lg bg-gray-200"></div>
                            </div>
                            <div className="flex-1 max-w-xs overflow-hidden">
                                <h4 className='text-sm font-semibold text-gray-600'>John</h4>
                                <p className='text-sm font-normal text-gray-400 truncate'>Last activity 3h ago</p>
                                <span className='text-sm font-normal text-gray-400'>Offline</span>
                            </div>
                        </a>
                        <a href="#" className='flex space-x-4'>
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 rounded-lg bg-gray-200"></div>
                            </div>
                            <div className="flex-1 max-w-xs overflow-hidden">
                                <h4 className='text-sm font-semibold text-gray-600'>Dashboard</h4>
                                <p className='text-sm font-normal text-gray-400 truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eos quod numquam nisi sequi tempora tempore? Adipisci quos eos assumenda velit iure? Voluptate dicta totam similique, earum saepe fugiat incidunt.</p>
                                <span className='text-sm font-normal text-gray-400'>Updated 3h ago</span>
                            </div>
                        </a>
                        <a href="#" className='flex space-x-4'>
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 rounded-lg bg-gray-200"></div>
                            </div>
                            <div className="flex-1 max-w-xs overflow-hidden">
                                <h4 className='text-sm font-semibold text-gray-600'>Dashboard</h4>
                                <p className='text-sm font-normal text-gray-400 truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eos quod numquam nisi sequi tempora tempore? Adipisci quos eos assumenda velit iure? Voluptate dicta totam similique, earum saepe fugiat incidunt.</p>
                                <span className='text-sm font-normal text-gray-400'>Updated 3h ago</span>
                            </div>
                        </a>
                        <a href="#" className='flex space-x-4'>
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 rounded-lg bg-gray-200"></div>
                            </div>
                            <div className="flex-1 max-w-xs overflow-hidden">
                                <h4 className='text-sm font-semibold text-gray-600'>Dashboard</h4>
                                <p className='text-sm font-normal text-gray-400 truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eos quod numquam nisi sequi tempora tempore? Adipisci quos eos assumenda velit iure? Voluptate dicta totam similique, earum saepe fugiat incidunt.</p>
                                <span className='text-sm font-normal text-gray-400'>Updated 3h ago</span>
                            </div>
                        </a>
                        <a href="#" className='flex space-x-4'>
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 rounded-lg bg-gray-200"></div>
                            </div>
                            <div className="flex-1 max-w-xs overflow-hidden">
                                <h4 className='text-sm font-semibold text-gray-600'>Dashboard</h4>
                                <p className='text-sm font-normal text-gray-400 truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eos quod numquam nisi sequi tempora tempore? Adipisci quos eos assumenda velit iure? Voluptate dicta totam similique, earum saepe fugiat incidunt.</p>
                                <span className='text-sm font-normal text-gray-400'>Updated 3h ago</span>
                            </div>
                        </a>
                        <a href="#" className='flex space-x-4'>
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 rounded-lg bg-gray-200"></div>
                            </div>
                            <div className="flex-1 max-w-xs overflow-hidden">
                                <h4 className='text-sm font-semibold text-gray-600'>Dashboard</h4>
                                <p className='text-sm font-normal text-gray-400 truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eos quod numquam nisi sequi tempora tempore? Adipisci quos eos assumenda velit iure? Voluptate dicta totam similique, earum saepe fugiat incidunt.</p>
                                <span className='text-sm font-normal text-gray-400'>Updated 3h ago</span>
                            </div>
                        </a>
                        <a href="#" className='flex space-x-4'>
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 rounded-lg bg-gray-200"></div>
                            </div>
                            <div className="flex-1 max-w-xs overflow-hidden">
                                <h4 className='text-sm font-semibold text-gray-600'>Dashboard</h4>
                                <p className='text-sm font-normal text-gray-400 truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eos quod numquam nisi sequi tempora tempore? Adipisci quos eos assumenda velit iure? Voluptate dicta totam similique, earum saepe fugiat incidunt.</p>
                                <span className='text-sm font-normal text-gray-400'>Updated 3h ago</span>
                            </div>
                        </a>
                        <a href="#" className='flex space-x-4'>
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 rounded-lg bg-gray-200"></div>
                            </div>
                            <div className="flex-1 max-w-xs overflow-hidden">
                                <h4 className='text-sm font-semibold text-gray-600'>Dashboard</h4>
                                <p className='text-sm font-normal text-gray-400 truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eos quod numquam nisi sequi tempora tempore? Adipisci quos eos assumenda velit iure? Voluptate dicta totam similique, earum saepe fugiat incidunt.</p>
                                <span className='text-sm font-normal text-gray-400'>Updated 3h ago</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
