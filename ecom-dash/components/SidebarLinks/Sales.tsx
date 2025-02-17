'use client'

import { useGlobalState } from '@/context/GlobalContext'
import { LinksType } from '@/lib/Constants'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function SalesLink() {
    const [showSales, setShowSales] = useState(false)
    const { selectedLink, setSelectedLink } = useGlobalState()

    const handleSales = () => setShowSales(!showSales)

    const router = useRouter()

    const handleCatalogChange = (sales: LinksType, path: string) => {
        setSelectedLink(sales)
        router.push(path)
    }

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
                {/* Orders Listing */}
                <button onClick={() => handleCatalogChange(LinksType.OrdersListing, "/orders/order-listing")} className={`nav-link group group-transition-colors group-duration-300 focus:outline-none focus:ring-0 w-full ${selectedLink == LinksType.OrdersListing ? "bg-primary-light" : "bg-transparent"}`}>
                    <span className={`block w-1 h-1 group-hover:bg-white rounded-full ${selectedLink == LinksType.OrdersListing ? "bg-white" : "bg-gray-400"}`}></span>
                    <span className={`text-[13px] font-normal group-hover:text-white ${selectedLink == LinksType.OrdersListing ? "text-white" : "text-gray-400"}`}>Orders Listing</span>
                </button>
                <a href="#" className='nav-link group group-transition-colors group-duration-300 focus:bg-primary-light'>
                    <span className='block w-1 h-1 bg-gray-400 group-focus:bg-white group-hover:bg-white rounded-full'></span>
                    <span className='text-[13px] font-normal'>Orders Details</span>
                </a>
                {/* Add Order */}
                <button onClick={() => handleCatalogChange(LinksType.AddOrder, "/orders/add-order")} className={`nav-link group group-transition-colors group-duration-300 focus:outline-none focus:ring-0 w-full ${selectedLink == LinksType.AddOrder ? "bg-primary-light" : "bg-transparent"}`}>
                    <span className={`block w-1 h-1 group-hover:bg-white rounded-full ${selectedLink == LinksType.AddOrder ? "bg-white" : "bg-gray-400"}`}></span>
                    <span className={`text-[13px] font-normal group-hover:text-white ${selectedLink == LinksType.AddOrder ? "text-white" : "text-gray-400"}`}>Add Order</span>
                </button>
                <a href="#" className='nav-link group group-transition-colors group-duration-300 focus:bg-primary-light'>
                    <span className='block w-1 h-1 bg-gray-400 group-focus:bg-white group-hover:bg-white rounded-full'></span>
                    <span className='text-[13px] font-normal'>Edit Order</span>
                </a>
            </div>
        </div>
    )
}
