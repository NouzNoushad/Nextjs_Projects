'use client'

import MDEditor from '@uiw/react-md-editor'
import React, { useState } from 'react'

export default function AdvancedForm() {
    const [tagDescription, setTagDescription] = useState("")

    return (
        <div className='my-5 space-y-5'>
            {/* Inventory */}
            <div className="px-8 py-9 bg-white rounded-md ring-1 ring-gray-100 space-y-5 shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)]">
                <h3 className='text-[19px] font-semibold'>Inventory</h3>
                <div className='space-y-6'>
                    <div className="space-y-2">
                        <h6 className='text-[13.5px] font-medium'>SKU <span className='text-red-500'>*</span></h6>
                        <input type="text" className='border w-full px-2 py-3 rounded-md placeholder:text-[13.5px]' placeholder='SKU Number' />
                        <p className='mt-1 text-[12.5px] text-gray-400'>Enter the product SKU.</p>
                    </div>
                    <div className="space-y-2">
                        <h6 className='text-[13.5px] font-medium'>Barcode <span className='text-red-500'>*</span></h6>
                        <input type="text" className='border w-full px-2 py-3 rounded-md placeholder:text-[13.5px]' placeholder='Barcode Number' />
                        <p className='mt-1 text-[12.5px] text-gray-400'>Enter the product barcode number.</p>
                    </div>
                    <div className="space-y-2">
                        <h6 className='text-[13.5px] font-medium'>Quantity <span className='text-red-500'>*</span></h6>
                        <div className="grid md:grid-cols-2 grid-cols-1 space-x-4">
                            <div className="">
                                <input type="text" className='border w-full px-2 py-3 rounded-md placeholder:text-[13.5px]' placeholder='On self' />
                                <p className='mt-1 text-[12.5px] text-gray-400'>Enter the product quantity.</p>
                            </div>
                            <div className="">
                                <input type="text" className='border w-full px-2 py-3 rounded-md placeholder:text-[13.5px]' placeholder='In warehouse' />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h6 className='text-[13.5px] font-medium'>Allow Backorders <span className='text-red-500'>*</span></h6>
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" className='h-5 w-5 rounded-md bg-green-500 border-none' />
                            <span className='text-xs text-gray-400'>Yes</span>
                        </div>
                        <p className='mt-1 text-[12.5px] text-gray-400'>Allow customers to purchase products that are out of stock.</p>
                    </div>
                </div>
            </div>
            {/* Variations */}
            <div className="px-8 py-9 bg-white rounded-md ring-1 ring-gray-100 space-y-5 shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)]">
                <h3 className='text-[19px] font-semibold'>Variations</h3>
                <div className="space-y-2">
                    <h6 className='text-[13.5px] font-medium'>Add Product Variations </h6>
                    <div className="flex items-center space-x-3">
                        <select name="" id="" className='w-1/3 px-2 py-3 rounded-md border focus:outline-none focus:ring-0 text-sm'>
                            <option value="">Color</option>
                            <option value="">Size</option>
                            <option value="">Material</option>
                            <option value="">Style</option>
                        </select>
                        <input type="text" className='w-1/3 border px-2 py-3 rounded-md placeholder:text-[13.5px]' placeholder='Variation' />
                        <div className="bg-red-50 px-2 py-2 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-red-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                        </div>
                    </div>
                </div>
                <div className="px-3 py-2 bg-blue-50 rounded-md inline-block">
                    <div className="flex items-center space-x-1">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 text-primary-light-dark">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </span>
                        <small className='text-xs text-primary-light-dark font-semibold'>Add another variation</small>
                    </div>
                </div>
            </div>
            {/* Shipping */}
            <div className="px-8 py-9 bg-white rounded-md ring-1 ring-gray-100 space-y-5 shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)]">
                <h3 className='text-[19px] font-semibold'>Shipping</h3>
                <div className="">
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" className='h-5 w-5 rounded-md bg-green-500 border-none' />
                        <span className='text-xs text-gray-400'>This is a physical product</span>
                    </div>
                    <p className='mt-2 text-[12.5px] text-gray-400'>Set if the product is a physical or digital item. Physical products may require shipping.</p>
                </div>
            </div>
            {/* Meta Options */}
            <div className="px-8 py-9 bg-white rounded-md ring-1 ring-gray-100 space-y-5 shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)]">
                <h3 className='text-[19px] font-semibold'>Meta Options</h3>
                <div className='space-y-6'>
                    <div className="space-y-2">
                        <h6 className='text-[13.5px] font-medium'>Meta Tag Title</h6>
                        <input type="text" className='border w-full px-2 py-3 rounded-md placeholder:text-[13.5px]' placeholder='Meta tag name' />
                        <p className='mt-1 text-[12.5px] text-gray-400'>Set a meta tag title. Recommended to be simple and precise keywords</p>
                    </div>
                    <div className="space-y-2" data-color-mode="light">
                        <h6 className='text-[13.5px] font-medium'>Description</h6>
                        <MDEditor value={tagDescription} onChange={(value) => setTagDescription(value as string)} height={150} preview='edit' style={{ borderRadius: 8, overflow: "hidden" }} textareaProps={{
                            placeholder: 'Type your text here...'
                        }} previewOptions={{
                            disallowedElements: ['style']
                        }} />
                        <p className='mt-1 text-[12.5px] text-gray-400'>Set a meta tag description to the product for increased SEO ranking.</p>
                    </div>
                    <div className="space-y-2">
                        <h6 className='text-[13.5px] font-medium'>Meta Tag Keywords</h6>
                        <input type="text" className='border w-full px-2 py-3 rounded-md placeholder:text-[13.5px]' placeholder='' />
                        <p className='mt-1 text-[12.5px] text-gray-400'>Set a list of keywords that the product is related to. Separate the keywords by adding a comma , between each keyword.</p>
                    </div>
                </div>
            </div>
            {/* Buttons */}
            <div className="pt-2 flex items-center justify-end space-x-4">
                <button className='bg-transparent px-5 py-3 rounded-md text-sm font-medium focus:outline-none foucs:ring-0 transition-colors hover:bg-gray-200'>Cancel</button>
                <button className='bg-primary-light text-white px-5 py-3 rounded-md text-sm font-medium focus:outline-none foucs:ring-0'>Save Changes</button>
            </div>
        </div>
    )
}
