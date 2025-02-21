'use client'

import MDEditor from '@uiw/react-md-editor'
import React, { useState } from 'react'

export default function MetaDescription() {
    const [tagDescription, setTagDescription] = useState("")
    return (
        <MDEditor value={tagDescription} onChange={(value) => setTagDescription(value as string)} height={150} preview='edit' style={{ borderRadius: 8, overflow: "hidden" }} textareaProps={{
            placeholder: 'Type your text here...'
        }} previewOptions={{
            disallowedElements: ['style']
        }} />
    )
}
