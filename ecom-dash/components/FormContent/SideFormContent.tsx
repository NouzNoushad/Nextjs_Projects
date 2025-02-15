import React from 'react'

export default function SideFormContent() {
    return (
        <div className="col-span-1 space-y-8">
            {/* Thumbnail */}
            <div className="px-8 py-8 bg-white rounded-md ring-1 ring-gray-100 space-y-4 shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)]">
                <h3 className='text-lg font-semibold'>Thumbnail</h3>
                <div className="flex items-center justify-center">
                    <div className="relative h-[10rem] w-[10rem]">
                        <div className="h-full w-full bg-white rounded-md shadow-[0_0.5rem_1.5rem_0.5rem_rgba(0,0,0,0.075)]"></div>
                        <div className="absolute top-[-10px] right-[-10px] h-7 w-7 bg-white rounded-full shadow-[0_0.5rem_1.5rem_0.5rem_rgba(0,0,0,0.075)]"></div>
                    </div>
                </div>
                <p className='px-2 text-[12.5px] text-gray-400 text-center'>Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image files are accepted</p>
            </div>
            {/* Status */}
            <div className="px-8 py-8 bg-white rounded-md ring-1 ring-gray-100 space-y-4 shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)]">
                <div className="flex items-center justify-between">
                    <h3 className='text-lg font-semibold'>Status</h3>
                    <div className="h-4 w-4 bg-green-500 rounded-full"></div>
                </div>
                <div className="">
                    <select name="" id="" className='w-full px-2 py-3 rounded-md border focus:outline-none focus:ring-0 text-sm'>
                        <option value="">Published</option>
                        <option value="">Draft</option>
                        <option value="">Scheduled</option>
                        <option value="">Inactive</option>
                    </select>
                    <p className='mt-1 text-[12.5px] text-gray-400'>Set the product status.</p>
                </div>
                <div className="space-y-2 pt-5 hidden">
                    <h6 className='text-[13.5px] font-medium'>Select publishing date and time</h6>
                    <input type="text" className='w-full px-2 py-3 rounded-md border focus:outline-none focus:ring-0 text-sm' placeholder='Pick date and time' />
                </div>
            </div>
            {/* Product Details */}
            <div className="px-8 py-8 bg-white rounded-md ring-1 ring-gray-100 space-y-5 shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)]">
                <h3 className='text-lg font-semibold'>Product Details</h3>
                <div className="space-y-2">
                    <h6 className='text-[13.5px] font-medium'>Categories</h6>
                    <select name="" id="" className='w-full px-2 py-3 rounded-md border focus:outline-none focus:ring-0 text-sm'>
                        <option value="">Computers</option>
                        <option value="">Watches</option>
                        <option value="">Headphones</option>
                        <option value="">Footwear</option>
                        <option value="">Camera</option>
                        <option value="">Shirts</option>
                        <option value="">Households</option>
                        <option value="">Handbags</option>
                        <option value="">Wines</option>
                        <option value="">Sandals</option>
                    </select>
                    <p className='mt-1 text-[12.5px] text-gray-400'>Add product to a category.</p>
                </div>
                <div className="px-3 py-2 bg-blue-50 rounded-md inline-block">
                    <div className="flex items-center space-x-1">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 text-primary-light-dark">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </span>
                        <small className='text-xs text-primary-light-dark font-semibold'>Create new category</small>
                    </div>
                </div>
                <div className="space-y-2">
                    <h6 className='text-[13.5px] font-medium'>Tags</h6>
                    <input type="text" className='border w-full px-2 py-3 rounded-md' placeholder='' />
                    <p className='mt-1 text-[12.5px] text-gray-400'>Add tags to a product.</p>
                </div>
            </div>
            {/* Product Template */}
            <div className="px-8 py-8 bg-white rounded-md ring-1 ring-gray-100 space-y-5 shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)]">
                <h3 className='text-lg font-semibold'>Product Template</h3>
                <div className="space-y-2">
                    <h6 className='text-[13.5px] font-medium'>Select a product template</h6>
                    <select name="" id="" className='w-full px-2 py-3 rounded-md border focus:outline-none focus:ring-0 text-sm'>
                        <option value="">Default Template</option>
                        <option value="">Electronics</option>
                        <option value="">Office Stationary</option>
                        <option value="">Fashion</option>
                    </select>
                    <p className='mt-1 text-[12.5px] text-gray-400 text-center'>Assign a template from your current theme to define how a single product is displayed.</p>
                </div>
            </div>
        </div>
    )
}
