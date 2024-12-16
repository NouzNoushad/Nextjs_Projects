/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { Blog } from '@prisma/client'
import React, { useEffect, useState } from 'react'
import { categories, LIMIT } from '../lib/constants'
import Pagination from './pagination'
import Link from 'next/link'
import Image from 'next/image'
import { convertCategory } from '../lib/converter'
import { SidebarAction } from '../action/sidebarAction'

export default function BlogSection({ blogs }: { blogs: Blog[] }) {
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [paginatedItems, setPaginatedItems] = useState<Blog[]>([])
    const [category, setCategory] = useState("all")

    const setBlogPages = (currentBlogs: Blog[]) => {
        const totalPages = Math.ceil(currentBlogs.length / LIMIT)
        setTotalPages(totalPages)
    }

    const setBlogPaginatedItems = (currentBlogs: Blog[]) => {
        const paginatedItems: Blog[] = currentBlogs.slice(
            (currentPage - 1) * LIMIT,
            currentPage * LIMIT
        )
        setPaginatedItems(paginatedItems)
    }

    const handleCategoryChange = (category: string) => {
        setCategory(category)
        setCurrentPage(1)
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    useEffect(() => {
        const filterCategory = category ? category === 'all' ? blogs : blogs.filter((blog) => blog.category === category) : blogs
        setBlogPages(filterCategory)
        setBlogPaginatedItems(filterCategory)

    }, [category])

    const { sidebarStyle, isFullScreen } = SidebarAction()

    return (

        <div className="flex lg:flex-row flex-col h-auto">
            {/* Left Section */}
            <div id='sidebar' className={`lg:w-1/5 w-full pt-8 ${isFullScreen ? "" : "static"
                }`} style={{ ...sidebarStyle }}>
                <div className="max-w-[300px]">
                    <h1 className="text-[3rem] font-bold leading-[3rem]">Tools <span className="italic font-[300]"><br />& Craft</span></h1>
                    <p className="mt-4 text-gray-500">Thoughts on the future of work,
                        from the people and teams creating it.</p>
                </div>
                <div className="h-[0.02rem] w-full lg:w-[4rem] bg-gray-300 my-5"></div>
                <ul className="flex flex-row lg:flex-col gap-8 lg:gap-2 overflow-x-auto whitespace-nowrap pb-4">{
                    categories.map((cat, index) => (
                        <li key={index}><button className={`${category === cat ? 'text-black' : 'text-gray-500'}`} onClick={() => handleCategoryChange(cat)}>{convertCategory(cat)}</button></li>
                    ))
                }
                </ul>
            </div>
            {/* Right Section */}
            <div className="mt-8 flex-1 lg:ml-[25%]">
                {paginatedItems.length !== 0 ?
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                        {
                            paginatedItems.map((blog) => (
                                <div className="space-y-2" key={blog.id}>
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
                    </div> : <div className="h-[500px] w-full flex flex-col items-center justify-center ">No Blog Found</div>}
                {/* pagination */}
                <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
            </div>
        </div>
    )
}
