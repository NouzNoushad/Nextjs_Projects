import React from 'react'
import OrderTable from './OrderTable'

export default function MainFormOrder() {
    return (
        <div className="col-span-2">
            <div className="mb-5 space-y-5">
                {/* Select Products */}
                <div className="px-8 py-9 bg-white rounded-md ring-1 ring-gray-100 space-y-5 shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)]">
                    <h3 className='text-[19px] font-semibold'>Select Products</h3>
                    <div className="space-y-2">
                        <h6 className='text-[13.5px] font-medium'>Add products to this order</h6>
                        <p className='border border-dashed border-gray-300 rounded-md text-gray-400 text-[13px] px-3 py-3'>Select one or more products from the list below by ticking the checkbox.</p>
                    </div>
                    <h3 className='text-md font-semibold'>Total Cost: $0.00</h3>
                    <div className="py-4">
                        <hr className='w-full h-[0.2px] bg-gray-400 block' />
                    </div>
                    <div className="">
                        {/* Search Products */}
                        <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-md px-2 py-2">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-[#888] group-hover:text-blue-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </span>
                            <span>
                                <input type="text" placeholder='Search Products' className='text-sm p-1 bg-transparent focus:outline-none focus:ring-0' />
                            </span>
                        </div>
                        {/* Orders Table */}
                        <OrderTable />
                    </div>
                </div>
                {/* Delivery Details */}
                <div className="px-8 py-9 bg-white rounded-md ring-1 ring-gray-100 space-y-6 shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)]">
                    <h3 className='text-[19px] font-semibold'>Delivery Details</h3>
                    <h4 className='font-semibold'>Billing Address</h4>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                        <div className="space-y-2">
                            <h6 className='text-[13.5px] font-medium'>Address Line 1 <span className='text-red-500'>*</span></h6>
                            <input type="text" className='border w-full px-2 py-3 rounded-md placeholder:text-[13.5px]' placeholder='Address Line 1' />
                        </div>
                        <div className="space-y-2">
                            <h6 className='text-[13.5px] font-medium'>Address Line 2</h6>
                            <input type="text" className='border w-full px-2 py-3 rounded-md placeholder:text-[13.5px]' placeholder='Address Line 2' />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 sm:grid-col-2 grid-cols-1 gap-4">
                        <div className="space-y-2">
                            <h6 className='text-[13.5px] font-medium'>City</h6>
                            <input type="text" className='border w-full px-2 py-3 rounded-md placeholder:text-[13.5px]' placeholder='' />
                        </div>
                        <div className="space-y-2">
                            <h6 className='text-[13.5px] font-medium'>Postcode <span className='text-red-500'>*</span></h6>
                            <input type="text" className='border w-full px-2 py-3 rounded-md placeholder:text-[13.5px]' placeholder='' />
                        </div>
                        <div className="space-y-2">
                            <h6 className='text-[13.5px] font-medium'>State <span className='text-red-500'>*</span></h6>
                            <input type="text" className='border w-full px-2 py-3 rounded-md placeholder:text-[13.5px]' placeholder='' />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h6 className='text-[13.5px] font-medium'>Country <span className='text-red-500'>*</span></h6>
                        <select name="" id="" className='w-full px-2 py-3 rounded-md border focus:outline-none focus:ring-0 text-sm'>
                            <option value="" disabled>Select an option</option>
                            <option value="">America</option>
                            <option value="">China</option>
                            <option value="">India</option>
                        </select>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" className='h-5 w-5 rounded-md bg-blue-500 border-none' />
                        <span className='text-xs text-gray-400'>Shipping address is the same as billing address</span>
                    </div>
                </div>
                {/* Buttons */}
                <div className="pt-2 flex items-center justify-end space-x-4">
                    <button className='bg-transparent px-5 py-3 rounded-md text-sm font-medium focus:outline-none foucs:ring-0 transition-colors hover:bg-gray-200'>Cancel</button>
                    <button className='bg-blue-500 text-white px-5 py-3 rounded-md text-sm font-medium focus:outline-none foucs:ring-0 transition-colors hover:bg-blue-600'>Save Changes</button>
                </div>
            </div>
        </div>
    )
}
