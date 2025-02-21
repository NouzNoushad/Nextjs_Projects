'use client'

import { useGlobalStore } from '@/context/GlobalStore'
import React from 'react'

export default function ProductPrice() {
    const { selectedPrice, setSelectedPrice } = useGlobalStore()

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedPrice(e.target.value)
    }

    return (
        <input type="text" value={selectedPrice} onChange={handlePriceChange} className='border w-full px-2 py-3 rounded-md placeholder:text-[13.5px] focus:outline-none focus:ring-0 text-sm' placeholder='Product Price' />
    )
}
