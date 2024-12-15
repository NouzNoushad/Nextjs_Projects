import BlogForm from '@/app/components/blogForm'
import { auth } from '@/auth'
import React from 'react'

export default async function CreateBlog() {
    const session = await auth()
    return (
        <main className='pt-[10vh]'>
            <div className="py-[4rem]">
                <div className="container-sm px-5 xl:px-0">
                    <div className="border px-8 py-8 rounded-md shadow-md">
                        <h2 className='text-center uppercase font-bold text-[0.98rem] mb-3'>
                            Create Blog
                        </h2>
                        <BlogForm session={session}/>
                    </div>
                </div>
            </div>
        </main>
    )
}
