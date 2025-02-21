'use client'

import React, { useState } from 'react'

export default function SKUNumber() {
    const [selectedSKUNumber, setSelectedSKUNumber] = useState("")

    const handleSKUNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedSKUNumber(e.target.value)
    }

    return (
        <input type="text" value={selectedSKUNumber} onChange={handleSKUNumberChange} className='border w-full px-2 py-3 rounded-md placeholder:text-[13.5px] focus:outline-none focus:ring-0' placeholder='SKU Number' />
    )
}
