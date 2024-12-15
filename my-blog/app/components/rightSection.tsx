'use client'

import React, { useState } from 'react'
import Pagination from './pagination'
import Link from 'next/link'
import { Blog } from '@prisma/client'
import Image from 'next/image'
import { convertCategory } from '../lib/converter'

export default function RightSection({ blogs }: { blogs: Blog[] }) {
    const [currentPage, setCurrentPage] = useState(1)

    const limit = 8
    const totalPages = Math.ceil(blogs.length / limit)

    const paginatedItems: Blog[] = blogs.slice(
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
                    paginatedItems.map((blog, index) => (
                        <div className="space-y-2" key={index}>
                            <div className="h-[300px] w-full border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 block">
                                <Image src={blog.image} height={450} width={450} alt='' className='object-cover rounded-lg w-full h-full' />
                            </div>
                            <p className="text-[0.8rem] text-gray-500">{convertCategory(blog.category)}</p>
                            <h2 className="font-bold text-[1.5rem] transition-all duration-300 hover:text-blue-500"><Link href={`/${blog.id}`}>{blog.title}</Link></h2>
                            <p className="text-gray-500"><Link href={`/${blog.id}`}>{blog.description}</Link></p>
                            <figure className="flex flex-row gap-2">
                                <div className="h-auto w-[50px] flex items-center justify-center">
                                    <div className="h-[40px] w-[40px] rounded-full bg-gray-400">
                                        <Image src={blog.userImage} height={50} width={50} alt='user_image' className='rounded-full h-full w-full' />
                                    </div>
                                </div>
                                <div className="author">
                                    <h4 className="font-[600]">{blog.user}</h4>
                                    <small className="text-gray-500">Blogger</small>
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
