'use client'

import React, { useState } from 'react'

export default function BarcodeNumber() {
    const [selectedBarcodeNumber, setSelectedBarcodeNumber] = useState("")

    const handleBarcodeNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedBarcodeNumber(e.target.value)
    }

    return (
        <input type="text" value={selectedBarcodeNumber} onChange={handleBarcodeNumberChange} className='border w-full px-2 py-3 rounded-md placeholder:text-[13.5px] focus:outline-none focus:ring-0' placeholder='Barcode Number' />
    )
}
