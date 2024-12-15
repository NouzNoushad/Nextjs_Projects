import SharePost from '@/app/components/sharePost'
import { ArrowLeft } from '@/app/components/svgs'
import Link from 'next/link'
import React from 'react'

const BlogPage = async ({ params }: { params: Promise<{ id: number }> }) => {

    const id = (await params).id
    return (
        <main className='pt-[10vh]'>
            <div className="container-md py-[4rem] relative">
                <div className="container-sm">
                    <div className="w-full mb-5 lg:absolute lg:left-0 lg:top-[4rem]">
                        <Link href={'/'} className='w-fit flex flex-row items-center border lg:border-none rounded-md gap-2 px-3 py-1 lg:transition-all lg:duration-300 group'>
                            <ArrowLeft className='size-4 group-hover:lg:text-blue-500' />
                            <span className='font-[600] lg:font-thin hover:lg:text-blue-500'>All posts</span>
                        </Link>
                    </div>
                    <div className="w-full space-y-3">
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
                <div className="container-sm">
                    <div className="space-y-4">
                        <h4>6 min read</h4>
                        <SharePost />
                    </div>
                    <div className="my-10 h-[0.05rem] w-[60px] bg-gray-300"></div>
                    <p className='text-[1.2rem] leading-8 mb-8'>
                        Students,<br />

                        We have a lot to thank you for.<br />

                        We’re blown away by the creativity you bring to Notion, in the classroom and beyond.<br />

                        From your beautifully customized personal websites and planners (we see those Spotify playlists) to the systems you’ve built to stay on top of your to-dos to the homepages you create to run your student organizations—you make Notion colorful.<br />

                        We’re endlessly grateful for all the love you’ve shown through your @-mentions on social media, hype you share with your friends, and campus events and meetups you’ve organized sharing Notion with peers and classmates.<br />

                        It’s been inspiring to see what you have accomplished. And to match your energy, we’re throwing our biggest back to school campaign yet!
                    </p>
                    <SharePost />
                </div>
            </div>
        </main>
    )
}

export default BlogPage