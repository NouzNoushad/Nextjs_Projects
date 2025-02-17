'use client'

import { DiscountType } from '@/lib/Constants'
import MDEditor from '@uiw/react-md-editor'
import React, { useState } from 'react'

export default function GeneralForm() {
    const [description, setDescription] = useState("")
    const [discountType, setDiscountType] = useState<DiscountType>(DiscountType.NoDiscount)

    return (
        <div className='my-5 space-y-5'>
            {/* General */}
            <div className="px-8 py-9 bg-white rounded-md ring-1 ring-gray-100 space-y-5 shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)]">
                <h3 className='text-[19px] font-semibold'>General</h3>
                <div className='space-y-6'>
                    <div className="space-y-2">
                        <h6 className='text-[13.5px] font-medium'>Product Name <span className='text-red-500'>*</span></h6>
                        <input type="text" className='border w-full px-2 py-3 rounded-md placeholder:text-[13.5px]' placeholder='Product Name' />
                        <p className='mt-1 text-[12.5px] text-gray-400'>A product name is required and recommended to be unique.</p>
                    </div>
                    <div className="space-y-2" data-color-mode="light">
                        <h6 className='text-[13.5px] font-medium'>Description</h6>
                        <MDEditor value={description} onChange={(value) => setDescription(value as string)} height={300} preview='edit' style={{ borderRadius: 8, overflow: "hidden" }} textareaProps={{
                            placeholder: 'Type your text here...'
                        }} previewOptions={{
                            disallowedElements: ['style']
                        }} />
                        <p className='mt-1 text-[12.5px] text-gray-400'>Set a description to the product for better visibility.</p>
                    </div>
                </div>
            </div>
            {/* Media */}
            <div className="px-8 py-9 bg-white rounded-md ring-1 ring-gray-100 space-y-5 shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)]">
                <h3 className='text-[19px] font-semibold'>Media</h3>
                <div className="">
                    <div className="bg-blue-50 border border-dashed border-blue-500 px-6 py-4 rounded-md">
                        <div className="flex items-center space-x-4">
                            <div className='bg-blue-200 p-2 rounded-md'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-primary-light">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                </svg>
                            </div>
                            <span className='space-y-1'>
                                <h4 className='text-[15px] font-medium'>Drop files here or click to upload.</h4>
                                <p className='text-[12.5px] text-gray-400'>Upload up to 10 files</p>
                            </span>
                        </div>
                    </div>
                    <p className='mt-2 text-[12.5px] text-gray-400'>Set the product media gallery.</p>
                </div>
            </div>
            {/* Pricing */}
            <div className="px-8 py-9 bg-white rounded-md ring-1 ring-gray-100 space-y-5 shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)]">
                <h3 className='text-[19px] font-semibold'>Pricing</h3>
                <div className='space-y-6'>
                    {/* Base Price */}
                    <div className="space-y-2">
                        <h6 className='text-[13.5px] font-medium'>Base Price<span className='text-red-500'>*</span></h6>
                        <input type="text" className='border w-full px-2 py-3 rounded-md placeholder:text-[13.5px]' placeholder='Product Price' />
                        <p className='mt-1 text-[12.5px] text-gray-400'>Set the product price.</p>
                    </div>
                    {/* Discount Type */}
                    <div className="space-y-2">
                        <div className="flex items-center space-x-1">
                            <h6 className='text-[13.5px] font-medium'>Discount Type</h6>
                            <div className='h-3 w-3 bg-gray-300 rounded-full text-[10px] text-gray-500 flex items-center justify-center'>!</div>
                        </div>
                        <div className="grid md:grid-cols-3 grid-cols-1 space-x-4">
                            {/* No Discount */}
                            <button type='button' onClick={() => setDiscountType(DiscountType.NoDiscount)} className={` border border-dashed px-6 py-5 rounded-md focus:outline-none focus:ring-0 ${discountType == DiscountType.NoDiscount ? "bg-blue-50 border-blue-500" : "bg-transparent border-gray-200"}`}>
                                <div className="flex items-center space-x-2">
                                    <span>
                                        <input type="radio" checked={discountType == DiscountType.NoDiscount} readOnly className='size-4' />
                                    </span>
                                    <span>
                                        <h2 className='text-base font-semibold'>No Discount</h2>
                                    </span>
                                </div>
                            </button>
                            {/* Percentage */}
                            <button type='button' onClick={() => setDiscountType(DiscountType.Percentage)} className={` border border-dashed px-6 py-5 rounded-md focus:outline-none focus:ring-0 ${discountType == DiscountType.Percentage ? "bg-blue-50 border-blue-500" : "bg-transparent border-gray-200"}`}>
                                <div className="flex items-center space-x-2">
                                    <span>
                                        <input type="radio" checked={discountType == DiscountType.Percentage} readOnly className='size-4' />
                                    </span>
                                    <span>
                                        <h2 className='text-base font-semibold'>Percentage %</h2>
                                    </span>
                                </div>
                            </button>
                            {/* Fixed Price */}
                            <button type='button' onClick={() => setDiscountType(DiscountType.FixedPrice)} className={` border border-dashed px-6 py-5 rounded-md focus:outline-none focus:ring-0 ${discountType == DiscountType.FixedPrice ? "bg-blue-50 border-blue-500" : "bg-transparent border-gray-200"}`}>
                                <div className="flex items-center space-x-2">
                                    <span>
                                        <input type="radio" checked={discountType == DiscountType.FixedPrice} readOnly className='size-4' />
                                    </span>
                                    <span>
                                        <h2 className='text-base font-semibold'>Fixed Price</h2>
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>
                    {/* Tax and Amount */}
                    <div className="grid md:grid-cols-2 grid-cols-1 space-x-4">
                        <div className="space-y-2">
                            <h6 className='text-[13.5px] font-medium'>Tax Class<span className='text-red-500'>*</span></h6>
                            <select name="" id="" className='w-full px-2 py-3 rounded-md border focus:outline-none focus:ring-0 text-sm'>
                                <option value="">Tax Free</option>
                                <option value="">Taxable Goods</option>
                                <option value="">Downloadable Product</option>
                            </select>
                            <p className='mt-1 text-[12.5px] text-gray-400'>Set the product tax class.</p>
                        </div>
                        <div className="space-y-2">
                            <h6 className='text-[13.5px] font-medium'>VAT Amount (%)<span className='text-red-500'>*</span></h6>
                            <input type="text" className='border w-full px-2 py-3 rounded-md placeholder:text-[13.5px]' placeholder='' />
                            <p className='mt-1 text-[12.5px] text-gray-400'>Set the product VAT about.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Buttons */}
            <div className="pt-2 flex items-center justify-end space-x-4">
                <button className='bg-transparent px-5 py-3 rounded-md text-sm font-medium focus:outline-none foucs:ring-0 transition-colors hover:bg-gray-200'>Cancel</button>
                <button className='bg-blue-500 text-white px-5 py-3 rounded-md text-sm font-medium focus:outline-none foucs:ring-0 transition-colors hover:bg-blue-600'>Save Changes</button>
            </div>
        </div>
    )
}
