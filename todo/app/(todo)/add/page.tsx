import React from 'react'

export default function AddTodo() {
    return (
        <main className='mt-[10vh]'>
            <div className="max-w-[500px] mx-auto px-5 xl:px-0">
                <div className="border-2 border-[#751aba] rounded-lg px-5 py-5 bg-white h-[450px]">
                    <div className="flex flex-col justify-between h-full">
                        <div className="space-y-4 flex-1">
                            <div className="space-y-1">
                                <label htmlFor="title" className='text-[0.95rem] font-bold'>Title</label>
                                <input type="text" placeholder='Enter the title' className='border-2 border-[#e7d2f7] w-full rounded-md px-2 py-2 outline-[#751aba]' />
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="description" className='text-[0.95rem] font-bold'>Description</label>
                                <textarea rows={4} placeholder='Enter the description' className='border-2 border-[#e7d2f7] w-full rounded-md px-2 py-2 outline-[#751aba]' ></textarea>
                            </div>
                        </div>
                        <button className='mt-5 inline-block w-full rounded-md bg-[#751aba] py-2 px-3 text-white font-[500] text-[0.98rem]'>
                            Create Todo
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}
