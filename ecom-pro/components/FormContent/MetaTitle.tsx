'use client'

import React, { useState } from 'react'

export default function MetaTitle() {
    const [selectedMetaTitle, setSelectedMetaTitle] = useState("")

    const handleMetaTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedMetaTitle(e.target.value)
    }

    return (
        <input type="text" value={selectedMetaTitle} onChange={handleMetaTitleChange} className='border w-full px-2 py-3 rounded-md placeholder:text-[13.5px] focus:outline-none focus:ring-0' placeholder='Meta tag name' />
    )
}
