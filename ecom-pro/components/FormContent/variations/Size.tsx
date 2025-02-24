'use client'

import { useGlobalStore } from '@/context/GlobalStore'
import React from 'react'

export default function VariationSize() {

    const { variationSize, setVariationSize } = useGlobalStore()

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVariationSize(e.target.value)
    }
    return (
        <input type="text" value={variationSize} onChange={handleColorChange} className='md:w-[calc(100%-(100%/3))] border px-2 py-3 rounded-md placeholder:text-[13.5px] focus:outline-none focus:ring-0' placeholder='eg: S, M' />
    )
}
