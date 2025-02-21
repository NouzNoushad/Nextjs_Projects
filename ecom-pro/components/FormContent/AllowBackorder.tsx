'use client'

import React, { useState } from 'react'

export default function AllowBackorder() {
    const [isBackorder, setIsBackorder] = useState<boolean>(false)

    const handleBackOrderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsBackorder(Boolean(e.target.checked))
    }

    return (
        <input type="checkbox" checked={isBackorder} onChange={handleBackOrderChange} className='h-5 w-5 rounded-md accent-black border-none' />
    )
}
