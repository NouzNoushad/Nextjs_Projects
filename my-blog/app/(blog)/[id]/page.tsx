import { ArrowLeft } from '@/app/lib/svgs'
import React from 'react'

const BlogPage = async ({ params }: { params: { id: number } }) => {

    const { id } = await params
    return (
        <main className='pt-[10vh]'>
            <div className="container-md py-[4rem]">
                <div className="flex lg:flex-row flex-col items-start gap-3">
                    <div className="lg:w-1/5 w-full block">
                        <button className='flex flex-row items-center border lg:border-none rounded-md gap-2 px-3 py-1 lg:transition-all lg:duration-300 group'>
                            <ArrowLeft className='size-4 group-hover:lg:text-blue-500' />
                            <span className='font-[600] lg:font-thin hover:lg:text-blue-500'>All posts</span>
                        </button>
                    </div>
                    <div className="lg:w-4/5 w-full space-y-3">
                        <p className='text-gray-400 text-[0.95rem]'>Published August 13, 2024 in <span className='underline'>Notion HQ</span></p>
                        <h1 className='text-[3.2rem] font-bold leading-[3.3rem] tracking-tight'>We’re so back, to school {id}</h1>
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
                </div>
                <div className="my-10 min-h-[400px] w-full bg-gray-200"></div>
            </div>
        </main>
    )
}

export default BlogPage