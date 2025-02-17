import React from 'react'

export default function SideFormOrder() {
    return (
        <div className="col-span-1">
            {/* Product Details */}
            <div className="px-8 py-9 bg-white rounded-md ring-1 ring-gray-100 space-y-8 shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)]">
                <h3 className='text-[19px] font-semibold'>Order Details</h3>
                <div className="space-y-1">
                    <h4 className='text-[13.5px] font-semibold'>Order ID</h4>
                    <h3 className='text-lg font-semibold'>#12345</h3>
                </div>
                <div className="space-y-2">
                    <h6 className='text-[13.5px] font-medium'>Payment Method<span className='text-red-500'>*</span></h6>
                    <select name="" id="" className='w-full px-2 py-3 rounded-md border focus:outline-none focus:ring-0 text-sm'>
                        <option value="">Cash on Delivery</option>
                        <option value="">Credit Card (Visa)</option>
                        <option value="">Credit Card (Mastercard)</option>
                        <option value="">Paypal</option>
                    </select>
                    <p className='mt-1 text-[12.5px] text-gray-400'>Set the date of the order to process.</p>
                </div>
                <div className="space-y-2">
                    <h6 className='text-[13.5px] font-medium'>Shipping Method<span className='text-red-500'>*</span></h6>
                    <select name="" id="" className='w-full px-2 py-3 rounded-md border focus:outline-none focus:ring-0 text-sm'>
                        <option value="">N/A Virtual Product</option>
                        <option value="">Standard Rate</option>
                        <option value="">Express Rate</option>
                        <option value="">Speed Overnight Rate</option>
                    </select>
                    <p className='mt-1 text-[12.5px] text-gray-400'>Set the date of the order to process.</p>
                </div>
                <div className="space-y-2">
                    <h6 className='text-[13.5px] font-medium'>Order Date<span className='text-red-500'>*</span></h6>
                    <input type="text" className='border w-full px-2 py-3 rounded-md' placeholder='' />
                    <p className='mt-1 text-[12.5px] text-gray-400'>Set the date of the order to process.</p>
                </div>
            </div>
        </div>
    )
}
