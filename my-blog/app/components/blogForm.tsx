'use client'

import MDEditor from '@uiw/react-md-editor'
import React, { useState } from 'react'
import { BlogFormError, BlogFormState, BlogValidationSchema } from '../lib/validationSchema'

export default function BlogForm() {

    const [content, setContent] = useState('')
    const [category, setCategory] = useState('')
    const [errors, setErrors] = useState<Partial<Record<keyof BlogFormError, string[]>>>({})

    const BlogFormValidation = async (state: BlogFormState, formData: FormData) => {
        const validationFields = await BlogValidationSchema.safeParseAsync({
            title: formData.get('title') as string,
            description: formData.get('description') as string,
            category: formData.get('category') as string,
            image: formData.get('image') as string,
            content: content,
        })

        if (!validationFields.success) {
            return {
                errors: validationFields.error.flatten().fieldErrors,
            }
        }
    }

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const response = await BlogFormValidation({}, formData)

        if (response?.errors) {
            setErrors(response.errors)
            return
        }

        
    }

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
                <button type='submit' className='w-full bg-black rounded-md text-white py-2'>Save Blog</button>
            </div>
        </form>
    )
}
