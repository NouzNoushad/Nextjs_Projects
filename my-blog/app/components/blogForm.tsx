'use client'

import MDEditor from '@uiw/react-md-editor'
import React from 'react'
import { Session } from 'next-auth'
import { BlogFormAction } from '../action/blogFormAction'

export default function BlogForm({ session }: { session: Session | null }) {

    const { category, content, setCategory, setContent, handleFormSubmit, errors, isLoading } = BlogFormAction(session)

    return (
        <form onSubmit={handleFormSubmit} className='py-5 space-y-3'>
            <div className="flex flex-col gap-2">
                <label htmlFor="name" className='blog-text'>Title</label>
                <input type="text" name='title' className='blog-input' placeholder='Choose a title' />
                {errors.title && <p className='form-error'>{errors.title}</p>}
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="name" className='blog-text'>Description</label>
                <textarea rows={4} id="description" className='blog-input' placeholder='Short description of your blog' name='description'></textarea>
                {errors?.description && <p className='form-error'>{errors.description}</p>}
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="name" className='blog-text'>Category</label>
                <select id="category" name='category' className={`blog-input`} value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="" hidden disabled>Choose a category</option>
                    <option value="latest">Latest</option>
                    <option value="notionHq">Notion HQ</option>
                    <option value="forTeams">For Teams</option>
                    <option value="tech">Tech</option>
                    <option value="inspiration">Inspiration</option>
                    <option value="pioneers">Pioneers</option>
                    <option value="first">First Blog</option>
                </select>
                {errors?.category && <p className='form-error'>{errors.category}</p>}
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="name" className='blog-text'>Image Url</label>
                <input type="text" name='image' className='blog-input' placeholder='Choose an image' />
                {errors?.image && <p className='form-error'>{errors.image}</p>}
            </div>
            <div className="flex flex-col gap-2" data-color-mode="light">
                <label htmlFor="name" className='blog-text'>Content</label>
                <MDEditor value={content} onChange={(value) => setContent(value as string)} height={300} preview='edit' style={{ borderRadius: 8, overflow: "hidden" }} textareaProps={{
                    placeholder: 'Enter blog content'
                }} previewOptions={{
                    disallowedElements: ['style']
                }} />
                {errors?.content && <p className='form-error'>{errors.content}</p>}
            </div>
            <div className="pt-5">
                <button type='submit' className='w-full bg-black rounded-md text-white py-2'>
                    {
                        isLoading ? 'Saving...' : 'Save Blog'
                    }
                </button>
            </div>
        </form>
    )
}
