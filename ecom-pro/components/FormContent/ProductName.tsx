'use client'

import { useGlobalStore } from '@/context/GlobalStore'
import React from 'react'

export default function ProductName() {
    const { selectedName, setSelectedName } = useGlobalStore()

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedName(e.target.value)
    }

    return (
        <input type="text" name="name" value={selectedName} onChange={handleNameChange} className='border w-full px-2 py-3 rounded-md placeholder:text-[13.5px] focus:outline-none focus:ring-0 text-sm' placeholder='Product Name' />
    )
}
