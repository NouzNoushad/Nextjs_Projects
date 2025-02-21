'use client'

import MDEditor from '@uiw/react-md-editor'
import React, { useState } from 'react'

export default function ProductDescription() {
    const [description, setDescription] = useState("")
    return (
        <MDEditor value={description} onChange={(value) => setDescription(value as string)} height={300} preview='edit' style={{ borderRadius: 8, overflow: "hidden" }} textareaProps={{
            placeholder: 'Type your text here...'
        }} previewOptions={{
            disallowedElements: ['style']
        }} />
    )
}
