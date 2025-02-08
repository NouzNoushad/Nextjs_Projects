import React from 'react'

export default function Sidebar() {
    return (
        <aside className="flex-shrink-0 w-64 bg-white border-r hidden md:block">
            <div className="flex flex-col h-full">
                <nav aria-label='main' className='flex-1 px-2 py-4 space-y-2'>
                    <div className="">
                        <a href="#" className='flex flex-row items-center p-2 rounded-md text-gray-500'>
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
                            <span>
                                Dashboard
                            </span>
                            <span className='ml-auto'>
                                <svg
                                    className="w-4 h-4 transition-transform transform"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </nav>
                <button>

                </button>
            </div>
        </aside>
    )
}
