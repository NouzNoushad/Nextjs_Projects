import BlogDetails from '@/app/components/blogDetails'
import { Blog } from '@prisma/client'
import React from 'react'

const BlogPage = async ({ params }: { params: Promise<{ id: number }> }) => {

    const id = (await params).id
    const response = await fetch(`http://localhost:3000/api/blog/${id}`)
    const data = await response.json()
    const blog: Blog = data.blog

    return (
        <main className='pt-[10vh]'>
            <div className="container-md py-[4rem] relative">
                {
                    blog ? (
                        <BlogDetails blog={blog} />
                    ) : <div className="">No Blog Found</div>
                }
            </div>
        </main>
    )
}

export default BlogPage