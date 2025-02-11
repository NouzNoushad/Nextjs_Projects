'use client'

import { useGlobalState } from '@/context/GlobalProvider'
import React from 'react'

export default function SettingsPanel() {
    const { isSettingsOpen, setIsSettingsOpen } = useGlobalState()
    return (
        <div>
            {/* Overlay */}
            {
                isSettingsOpen && (
                    <div className="fixed inset-0 z-10 bg-primary-darker bg-opacity-30 transition-opacity" onClick={() => setIsSettingsOpen(false)} style={{opacity: "0.5"}}></div>
                )
            }

            {/* Panel */}
            <div className={`fixed inset-y-0 right-[-50px] z-20 w-full max-w-sm sm:max-w-md bg-white shadow-xl transition-all duration-500 ${isSettingsOpen ? "translate-x-0" : "translate-x-full"}`}>
                <button onClick={() => setIsSettingsOpen(false)} className='absolute top-2 left-[-45px] p-2 rounded-md text-white focus:outline-2 focus:outline-none focus:ring'>
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

                {/* Panel Header */}
                <div className="p-6 border-b border-gray-300">
                    <h2 className='text-xl font-semibold'>Settings</h2>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    {/* Light Dark mode */}
                    <h3 className='text-lg font-medium'>Mode</h3>
                    <div className="flex gap-4 mt-2">
                        <button className='px-4 py-2 border rounded-md'>Light</button>
                        <button className='px-4 py-2 border rounded-md'>Dark</button>
                    </div>
                </div>

                <div className="p-6 space-y-6">
                    <h3 className='text-lg font-medium'>Colors</h3>
                    <div className="flex gap-2 mt-2">
                        {
                            ["cyan", "teal", "green", "fuchsia", "blue", "violet"].map(
                                (color) => (
                                    <button key={color} className={`w-10 h-10 rounded-full`} style={{ backgroundColor: color }}>
                                    </button>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
