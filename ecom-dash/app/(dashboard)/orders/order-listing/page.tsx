import OrdersListingCard from '@/components/OrdersListing'
import React from 'react'

export default function OrdersListing() {
    return (
        <main className='px-8 py-5 flex flex-col'>
            <div className="flex-shrink-0">
                <h1 className='text-lg font-semibold'>Orders Listing</h1>
                <p className='text-gray-400 text-xs font-medium'>Home - Sales</p>
            </div>
            <div className="mt-6">
                {/* Orders Listing */}
                <OrdersListingCard />
            </div>
        </main>
    )
}
