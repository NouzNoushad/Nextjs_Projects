import React from 'react'
import MainHeader from './MainHeader'
import SideFormContent from './SideFormContent'
import MainFormContent from './MainFormContent'

export default function MainSection() {
    return (
        <div className='flex-1 w-full overflow-x-hidden overflow-y-auto'>
            {/* Main Header */}
            <MainHeader />
            {/* Main Content */}
            <main className='px-8 py-5 flex flex-col'>
                <div className="flex-shrink-0">
                    <h1 className='text-lg font-semibold'>Product Form</h1>
                    <p className='text-gray-400 text-xs font-medium'>Catalog</p>
                </div>
                <div className="flex-1 mt-6 grid md:grid-cols-3 grid-cols-1 gap-4">
                    {/* Side Form Content */}
                    <SideFormContent />
                    {/* Main Form Content */}
                    <MainFormContent />
                </div>
            </main>
        </div>
    )
}
