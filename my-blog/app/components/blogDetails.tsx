import Link from 'next/link'
import React from 'react'
import { ArrowLeft } from './svgs'
import { convertCategory, convertDate } from '../lib/converter'
import Image from 'next/image'
import SharePost from './sharePost'
import ReactMarkdown from "react-markdown"
import { Blog } from '@prisma/client'

export default function BlogDetails({blog}: {blog: Blog}) {
  return (
      <>
          <div className="container-sm">
              <div className="w-full mb-5 lg:absolute lg:left-0 lg:top-[4rem]">
                  <Link href={'/'} className='w-fit flex flex-row items-center border lg:border-none rounded-md gap-2 px-3 py-1 lg:transition-all lg:duration-300 group'>
                      <ArrowLeft className='size-4 group-hover:lg:text-blue-500' />
                      <span className='font-[600] lg:font-thin group-hover:lg:text-blue-500'>All posts</span>
                  </Link>
              </div>
              <div className="w-full space-y-3">
                  <p className='text-gray-400 text-[0.95rem]'>{`Published ${convertDate(blog.updatedAt)} in`} <span className='underline'>{convertCategory(blog.category)}</span></p>
                  <h1 className='text-[3.2rem] font-bold leading-[3.3rem] tracking-tight'>{blog.title}</h1>
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
          </div>
          <div className="my-10 min-h-[400px] w-full bg-gray-200">
              <Image src={blog.image} height={450} width={450} alt='' className='object-cover rounded-lg w-full h-full' />
          </div>
          <div className="container-sm">
              <div className="space-y-4">
                  <h4>6 min read</h4>
                  <SharePost />
              </div>
              <div className="my-10 h-[0.05rem] w-[60px] bg-gray-300"></div>
              <ReactMarkdown className='mb-8 text-[1.2rem] leading-8'>
                  {blog.content}
              </ReactMarkdown>
              <SharePost />
          </div>
      </>
  )
}
