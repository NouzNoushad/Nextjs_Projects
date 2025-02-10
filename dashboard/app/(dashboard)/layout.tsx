import React from 'react'
import "../../public/css/tailwind.css"

export default function layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>{children}</div>
    )
}
