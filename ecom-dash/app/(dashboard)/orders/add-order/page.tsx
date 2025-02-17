import MainFormOrder from '@/components/OrderForm/MainFormOrder'
import SideFormOrder from '@/components/OrderForm/SideFormOrder'
import React from 'react'

export default function AddOrder() {
    return (
        <main className='px-8 py-5 flex flex-col'>
            <div className="flex-shrink-0">
                <h1 className='text-lg font-semibold'>Add Order</h1>
                <p className='text-gray-400 text-xs font-medium'>Home - Sales</p>
            </div>
            <div className="flex-1 mt-6 grid md:grid-cols-3 grid-cols-1 gap-6">
                {/* Side Form Order */}
                <SideFormOrder />
                {/* Main Form Order */}
                <MainFormOrder />
            </div>
        </main>
    )
}
