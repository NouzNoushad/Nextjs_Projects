'use client'

import React, { useState } from 'react'

export default function SalesLink() {
    const [showSales, setShowSales] = useState(false)

    const handleSales = () => setShowSales(!showSales)

    return (
        <div>
            <button onClick={handleSales} className="w-full px-2 py-2 transition-colors hover:bg-primary-light rounded-md flex items-center justify-between focus:outline-none focus:ring-0">
                <span className='text-sm font-medium'>Sales</span>
                <span className='ml-auto'>
                    <svg
                        className={`w-4 h-4 transition-transform transform ${showSales ? "rotate-180" : "rotate-0"}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            {/* Sub Nav */}
            <div className={`mt-1 px-4 space-y-1 transition-transform ${showSales ? "overflow-y-auto" : "hidden overflow-y-hidden"}`}>
                <a href="#" className='nav-link group group-transition-colors group-duration-300 focus:bg-primary-light'>
                    <span className='block w-1 h-1 bg-gray-400 group-focus:bg-white group-hover:bg-white rounded-full'></span>
                    <span className='text-[13px] font-normal'>Orders Listing</span>
                </a>
                <a href="#" className='nav-link group group-transition-colors group-duration-300 focus:bg-primary-light'>
                    <span className='block w-1 h-1 bg-gray-400 group-focus:bg-white group-hover:bg-white rounded-full'></span>
                    <span className='text-[13px] font-normal'>Orders Details</span>
                </a>
                <a href="#" className='nav-link group group-transition-colors group-duration-300 focus:bg-primary-light'>
                    <span className='block w-1 h-1 bg-gray-400 group-focus:bg-white group-hover:bg-white rounded-full'></span>
                    <span className='text-[13px] font-normal'>Add Order</span>
                </a>
                <a href="#" className='nav-link group group-transition-colors group-duration-300 focus:bg-primary-light'>
                    <span className='block w-1 h-1 bg-gray-400 group-focus:bg-white group-hover:bg-white rounded-full'></span>
                    <span className='text-[13px] font-normal'>Edit Order</span>
                </a>
            </div>
        </div>
    )
}
