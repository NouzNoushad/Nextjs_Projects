'use client'

import React, { useState } from 'react'
import Pagination from './pagination'
import Link from 'next/link'

const items: { id: number }[] = Array.from({ length: 48 }, (_, i) => ({
    id: i + 1
}))

export default function RightSection() {
    const [currentPage, setCurrentPage] = useState(1)

    const limit = 8
    const totalPages = Math.ceil(items.length / limit)

    const paginatedItems: { id: number }[] = items.slice(
        (currentPage - 1) * limit,
        currentPage * limit
    )

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    return (
        <div className="mt-8 flex-1 lg:ml-[25%]">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                {
                    paginatedItems.map((item, index) => (
                        <div className="space-y-2" key={index}>
                            <div className="h-[300px] w-full border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300"><Link href={`/${item.id}`} className='w-full h-full block'></Link>
                            </div>
                            <p className="text-[0.8rem] text-gray-500">Notion HQ</p>
                            <h2 className="font-bold text-[1.5rem] transition-all duration-300 hover:text-blue-500"><Link href={`/${item.id}`}>{`Clippy Walked So Notion AI Could Run ${item.id}`}</Link></h2>
                            <p className="text-gray-500"><Link href={`/${item.id}`}>We asked former Microsoft exec, Steven Sinofsky, about the iconic paperclip and how it paved the way for the future of AI helpers.</Link></p>
                            <figure className="flex flex-row gap-2">
                                <div className="h-auto w-[50px] flex items-center justify-center">
                                    <div className="h-[40px] w-[40px] rounded-full bg-gray-400"></div>
                                </div>
                                <div className="author">
                                    <h4 className="font-[600]">Grace Nguyen, Xiaoya He</h4>
                                    <small className="text-gray-500">Engineering</small>
                                </div>
                            </figure>
                        </div>
                    ))
                }
            </div>
            {/* pagination */}
            <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
        </div>
    )
}
