'use client'

import React, { useState } from 'react'
import Pagination from './Pagination'

export default function OrdersListingCard() {
    const [currentPage, setCurrentPage] = useState(1)

    const items = Array.from({ length: 100 }, (_, i) => i + 1)

    const limit = 10
    const totalPages = Math.ceil(items.length / limit)
    const paginatedItems = items.slice(
        (currentPage - 1) * limit,
        currentPage * limit
    )

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    return (
        <div className="px-8 py-9 w-full bg-white rounded-md ring-1 ring-gray-100 space-y-5 shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)]">
            {/* Orders Listing Header */}
            <div className="flex items-center justify-between mb-10 space-x-4">
                <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-md px-2 py-2">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-[#888] group-hover:text-blue-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </span>
                    <span>
                        <input type="text" placeholder='Search Order' className='text-sm p-1 bg-transparent focus:outline-none focus:ring-0' />
                    </span>
                </div>
                <div className="flex w-full items-center justify-end space-x-3">
                    <input type="text" className='text-sm bg-gray-100 rounded-md px-3 py-3 focus:outline-none focus:ring-0' placeholder='Pick date range' />
                    <div className="relative w-[20%]">
                        <select name="" id="" className='w-full px-2 py-3 appearance-none rounded-md bg-gray-100 focus:outline-none focus:ring-0 text-sm'>
                            <option value="">All</option>
                            <option value="">Cancelled</option>
                            <option value="">Completed</option>
                            <option value="">Denied</option>
                            <option value="">Expired</option>
                            <option value="">Failed</option>
                            <option value="">Pending</option>
                            <option value="">Processing</option>
                            <option value="">Delivered</option>
                            <option value="">Delivering</option>
                        </select>
                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <button className='bg-blue-500 text-white px-5 py-3 rounded-md text-sm font-medium focus:outline-none foucs:ring-0 transition-colors hover:bg-blue-600'>Add Order</button>
                </div>
            </div>
            {/* Orders Listing Table */}
            <div className="w-full overflow-x-auto">
                <table className='w-full border-collapse'>
                    <thead>
                        <tr className='border-b-[1px] border-dashed'>
                            <th className='min-w-[100px] text-start font-semibold text-[13px] uppercase py-4 text-gray-400'><span>Order Id</span></th>
                            <th className='min-w-[175px] text-end font-semibold text-[13px] uppercase py-4 text-gray-400'><span>Customer</span></th>
                            <th className='min-w-[70px] text-end font-semibold text-[13px] uppercase py-4 text-gray-400'><span>Status</span></th>
                            <th className='min-w-[100px] text-end font-semibold text-[13px] uppercase py-4 text-gray-400'><span>Total</span></th>
                            <th className='min-w-[100px] text-end font-semibold text-[13px] uppercase py-4 text-gray-400'><span>Date Added</span></th>
                            <th className='min-w-[100px] text-end font-semibold text-[13px] uppercase py-4 text-gray-400'><span>Date Modified</span></th>
                            <th className='min-w-[100px] text-end font-semibold text-[13px] uppercase py-4 text-gray-400'><span>Actions</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Products */}
                        {
                            paginatedItems.map((item, index) => (
                                <tr key={index} className={`${index !== 9 ? "border-b-[1px] border-dashed" : ""}`}>
                                    <td className='py-4'>
                                        <div className='text-sm font-semibold'>12545</div>
                                    </td>
                                    <td className='py-4 flex items-center space-x-4'>
                                        <div className='h-12 w-12 bg-gray-100 rounded-full'></div>
                                        <div className='text-sm font-semibold'>{`User ${item}`}</div>
                                    </td>
                                    <td className='py-4 text-end'>
                                        <div className='text-[11px] font-semibold bg-green-100 text-green-500 inline-block p-1 rounded-md'>Completed</div>
                                    </td>
                                    <td className='py-4 text-end'>
                                        <div className='text-sm font-semibold text-gray-500'>$327.00</div>
                                    </td>
                                    <td className='py- text-end'>
                                        <div className='text-sm font-semibold text-gray-500'>09/02/2025</div>
                                    </td>
                                    <td className='py-4 text-end'>
                                        <div className='text-sm font-semibold text-gray-500'>15/02/2025</div>
                                    </td>
                                    <td className='py-4 text-end'>
                                        <div className='inline-flex items-center justify-end space-x-2 bg-gray-100 px-3 py-2 rounded-md'>
                                            <span className='text-xs font-medium'>Actions</span>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {/* Page & Pagination */}
            <div className="flex items-center justify-between gap-2">
                <div className="relative w-[10%]">
                    <select name="" id="" className='w-full px-2 py-3 appearance-none rounded-md bg-gray-100 focus:outline-none focus:ring-0 text-sm'>
                        <option value="">10</option>
                        <option value="">25</option>
                        <option value="">50</option>
                        <option value="">100</option>
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div className="">
                    <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
                </div>
            </div>
        </div>
    )
}
