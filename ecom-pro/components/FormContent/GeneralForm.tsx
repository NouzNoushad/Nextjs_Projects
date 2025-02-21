import React from 'react'
import ProductName from './ProductName'
import ProductDescription from './ProductDescription'
import ProductPrice from './ProductPrice'
import Discount from './DiscountType'
import TaxClass from './TaxClass'
import VATAmount from './VATAmount'

export default function GeneralForm() {

    return (
        <div className='my-5 space-y-8'>
            {/* General */}
            <div className="px-8 py-9 bg-white rounded-md ring-1 ring-gray-100 space-y-5 shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)]">
                <h3 className='text-[19px] font-semibold'>General</h3>
                <div className='space-y-6'>
                    <div className="space-y-2">
                        <h6 className='text-[13.5px] font-medium'>Product Name <span className='text-red-500'>*</span></h6>
                        <ProductName />
                        <p className='mt-1 text-[12.5px] text-gray-400'>A product name is required and recommended to be unique.</p>
                    </div>
                    <div className="space-y-2" data-color-mode="light">
                        <h6 className='text-[13.5px] font-medium'>Description</h6>
                        <ProductDescription />
                        <p className='mt-1 text-[12.5px] text-gray-400'>Set a description to the product for better visibility.</p>
                    </div>
                </div>
            </div>
            {/* Media */}
            <div className="px-8 py-9 bg-white rounded-md ring-1 ring-gray-100 space-y-5 shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)]">
                <h3 className='text-[19px] font-semibold'>Media</h3>
                <div className="">
                    <div className="bg-green-50 border border-dashed border-green-500 px-6 py-4 rounded-md">
                        <div className="flex items-center space-x-4">
                            <div className='bg-green-200 p-2 rounded-md'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-green-500">
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
                        <ProductPrice />
                        <p className='mt-1 text-[12.5px] text-gray-400'>Set the product price.</p>
                    </div>
                    {/* Discount Type */}
                    <div className="space-y-2">
                        <div className="flex items-center space-x-1">
                            <h6 className='text-[13.5px] font-medium'>Discount Type</h6>
                            <div className='h-3 w-3 bg-gray-300 rounded-full text-[10px] text-gray-500 flex items-center justify-center'>!</div>
                        </div>
                        <Discount />
                    </div>
                    {/* Tax and Amount */}
                    <div className="grid md:grid-cols-2 grid-cols-1 space-x-4">
                        <div className="space-y-2">
                            <h6 className='text-[13.5px] font-medium'>Tax Class<span className='text-red-500'>*</span></h6>
                            <TaxClass />
                            <p className='mt-1 text-[12.5px] text-gray-400'>Set the product tax class.</p>
                        </div>
                        <div className="space-y-2">
                            <h6 className='text-[13.5px] font-medium'>VAT Amount (%)<span className='text-red-500'>*</span></h6>
                            <VATAmount />
                            <p className='mt-1 text-[12.5px] text-gray-400'>Set the product VAT about.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
