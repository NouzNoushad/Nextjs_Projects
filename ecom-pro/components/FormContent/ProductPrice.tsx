'use client'

import React, { useState } from 'react'

export default function ProductPrice() {
    const [selectedPrice, setSelectedPrice] = useState("")

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedPrice(e.target.value)
    }

    return (
        <input type="text" value={selectedPrice} onChange={handlePriceChange} className='border w-full px-2 py-3 rounded-md placeholder:text-[13.5px] focus:outline-none focus:ring-0' placeholder='Product Price' />
    )
}
