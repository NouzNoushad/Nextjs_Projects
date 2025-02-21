'use client'

import React, { useState } from 'react'

export default function Tags() {
    const [selectedTag, setSelectedTag] = useState("")

    const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedTag(e.target.value)
    }

    return (
        <input type="text" value={selectedTag} onChange={handleTagChange} className='border w-full px-2 py-3 rounded-md focus:outline-none focus:ring-0' placeholder='' />
    )
}
