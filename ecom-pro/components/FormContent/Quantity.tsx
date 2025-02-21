'use client'

import { useGlobalStore } from '@/context/GlobalStore'
import React from 'react'

export default function Quantity() {

    const { selectedOnShelf, selectedInWarehouse, setSelectedOnShelf, setSelectedInWarehouse } = useGlobalStore()

    const handleOnShelfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOnShelf(e.target.value)
    }

    const handleInWarehouseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedInWarehouse(e.target.value)
    }

    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="">
                <input type="number" defaultValue={selectedOnShelf} onChange={handleOnShelfChange} className='border w-full px-2 py-3 rounded-md placeholder:text-[13.5px] focus:outline-none focus:ring-0 text-sm' placeholder='On self' />
                <p className='mt-1 text-[12.5px] text-gray-400'>Enter the product quantity.</p>
            </div>
            <div className="">
                <input type="number" defaultValue={selectedInWarehouse} onChange={handleInWarehouseChange} className='border w-full px-2 py-3 rounded-md placeholder:text-[13.5px] focus:outline-none focus:ring-0 text-sm' placeholder='In warehouse' />
            </div>
        </div>
    )
}
