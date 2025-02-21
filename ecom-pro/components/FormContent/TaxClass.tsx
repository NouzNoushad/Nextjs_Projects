'use client'

import React, { useState } from 'react'

export default function TaxClass() {
    const [selectedTaxClass, setSelectedTaxClass] = useState("tax free")

    const handleTaxClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTaxClass(e.target.value)
    }

    return (
        <select name="taxClass" id="taxClass" value={selectedTaxClass} onChange={handleTaxClassChange} className='select-arrow w-full px-2 py-3 rounded-md border focus:outline-none focus:ring-0 text-sm'>
            <option value="tax free">Tax Free</option>
            <option value="taxable goods">Taxable Goods</option>
            <option value="downloadable product">Downloadable Product</option>
        </select>
    )
}
