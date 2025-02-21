'use client'

import { useGlobalStore } from '@/context/GlobalStore'
import React from 'react'

export default function SKUNumber() {
    const { selectedSKUNumber, setSelectedSKUNumber } = useGlobalStore()

    const handleSKUNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedSKUNumber(e.target.value)
    }

    return (
        <input type="text" value={selectedSKUNumber} onChange={handleSKUNumberChange} className='border w-full px-2 py-3 rounded-md placeholder:text-[13.5px] focus:outline-none focus:ring-0 text-sm' placeholder='SKU Number' />
    )
}
