import React from 'react'
import SKUNumber from './SKUNumber'
import BarcodeNumber from './BarcodeNumber'
import Quantity from './Quantity'
import AllowBackorder from './AllowBackorder'
import PhysicalProduct from './PhysicalProduct'
import MetaTitle from './MetaTitle'
import MetaDescription from './MetaDescription'
import MetaKeywords from './MetaKeywords'

export default function AdvancedForm() {

    return (
        <div className='my-5 space-y-8'>
            {/* Inventory */}
            <div className="px-8 py-9 bg-white rounded-md ring-1 ring-gray-100 space-y-5 shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)]">
                <h3 className='text-[19px] font-semibold'>Inventory</h3>
                <div className='space-y-6'>
                    <div className="space-y-2">
                        <h6 className='text-[13.5px] font-medium'>SKU <span className='text-red-500'>*</span></h6>
                        <SKUNumber />
                        <p className='mt-1 text-[12.5px] text-gray-400'>Enter the product SKU.</p>
                    </div>
                    <div className="space-y-2">
                        <h6 className='text-[13.5px] font-medium'>Barcode <span className='text-red-500'>*</span></h6>
                        <BarcodeNumber />
                        <p className='mt-1 text-[12.5px] text-gray-400'>Enter the product barcode number.</p>
                    </div>
                    <div className="space-y-2">
                        <h6 className='text-[13.5px] font-medium'>Quantity <span className='text-red-500'>*</span></h6>
                        <Quantity />
                    </div>
                    <div className="space-y-2">
                        <h6 className='text-[13.5px] font-medium'>Allow Backorders <span className='text-red-500'>*</span></h6>
                        <div className="flex items-center space-x-2">
                            <AllowBackorder />
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
                        <select name="" id="" className='select-arrow md:w-1/3 px-2 py-3 rounded-md border focus:outline-none focus:ring-0 text-sm'>
                            <option value="">Color</option>
                            <option value="">Size</option>
                            <option value="">Material</option>
                            <option value="">Style</option>
                        </select>
                        <input type="text" className='md:w-1/3 border px-2 py-3 rounded-md placeholder:text-[13.5px] focus:outline-none focus:ring-0' placeholder='Variation' />
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
                        <PhysicalProduct />
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
                        <MetaTitle />
                        <p className='mt-1 text-[12.5px] text-gray-400'>Set a meta tag title. Recommended to be simple and precise keywords</p>
                    </div>
                    <div className="space-y-2" data-color-mode="light">
                        <h6 className='text-[13.5px] font-medium'>Description</h6>
                        <MetaDescription />
                        <p className='mt-1 text-[12.5px] text-gray-400'>Set a meta tag description to the product for increased SEO ranking.</p>
                    </div>
                    <div className="space-y-2">
                        <h6 className='text-[13.5px] font-medium'>Meta Tag Keywords</h6>
                        <MetaKeywords />
                        <p className='mt-1 text-[12.5px] text-gray-400'>Set a list of keywords that the product is related to. Separate the keywords by adding a comma , between each keyword.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
