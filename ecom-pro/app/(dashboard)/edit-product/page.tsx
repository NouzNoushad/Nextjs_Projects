import MainFormContent from '@/components/FormContent/MainFormContent'
import SideFormContent from '@/components/FormContent/SideFormContent'
import React from 'react'

export default function EditProduct() {
    return (
        <main className='px-8 py-5 flex flex-col'>
            <div className="flex-shrink-0">
                <h1 className='text-lg font-semibold'>Edit Product</h1>
                <p className='text-gray-400 text-xs font-medium'>Home</p>
            </div>
            <div className="flex-1 mt-6 grid md:grid-cols-3 grid-cols-1 gap-6">
                {/* Side Form Content */}
                <SideFormContent />
                {/* Main Form Content */}
                <MainFormContent />
            </div>
        </main>
    )
}
