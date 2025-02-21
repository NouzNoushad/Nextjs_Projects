'use client'

import React, { useState } from 'react'

export default function Quantity() {
    const [selectedOnShelf, setSelectedOnShelf] = useState<number | undefined>(undefined)
    const [selectedInWarehouse, setSelectedInWarehouse] = useState<number | undefined>(undefined)

    const handleOnShelfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (typeof (selectedOnShelf) === 'number') {
            setSelectedOnShelf(Number(e.target.value))
        }
    }

    const handleInWarehouseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (typeof (selectedInWarehouse) === 'number') {
            setSelectedInWarehouse(Number(e.target.value))
        }
    }

    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="">
                <input type="number" value={selectedOnShelf} onChange={handleOnShelfChange} className='border w-full px-2 py-3 rounded-md placeholder:text-[13.5px] focus:outline-none focus:ring-0' placeholder='On self' />
                <p className='mt-1 text-[12.5px] text-gray-400'>Enter the product quantity.</p>
            </div>
            <div className="">
                <input type="number" value={selectedInWarehouse} onChange={handleInWarehouseChange} className='border w-full px-2 py-3 rounded-md placeholder:text-[13.5px] focus:outline-none focus:ring-0' placeholder='In warehouse' />
            </div>
        </div>
    )
}
