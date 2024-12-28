'use client'

import { useGlobalState } from '@/context/globalProvider'
import { AddIcon } from './svgs'
import { ModalAction } from '@/action/modalAction'

export default function Model() {

    const { closeModal } = useGlobalState()
    const { handleFormSubmit, errors, setCompleted, setImportant, completed, important } = ModalAction()

    return (
        <main className='fixed top-0 left-0 w-full h-screen z-[100]'>
            <div className="absolute top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.45)] backdrop-blur-sm flex items-center justify-center z-[10]" onClick={closeModal}>
                <div className="relative max-w-[630px] w-full px-[2rem] py-[2rem] bg-card z-[101] rounded-lg shadow-[0_0_1rem_rgba(0,0,0,0.3)]" onClick={(e) => e.stopPropagation()}>
                    <h1 className='font-bold mb-5'>Create a Task</h1>
                    <form onSubmit={handleFormSubmit} className='space-y-2'>
                        <div className="space-y-1">
                            <label htmlFor="title" className='text-[0.9rem] font-[500]'>Title</label>
                            <input type="text" name='title' className='w-full bg-[#181818] px-3 py-2 rounded-md' placeholder='Enter Title' />
                            {errors.title && <p className='form-error'>{errors.title}</p>}
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="description" className='text-[0.9rem] font-[500]'>Description</label>
                            <textarea rows={4} name='description' className='w-full bg-[#181818] px-3 py-2 rounded-md' placeholder='eg. Watch a video'></textarea>
                            {errors.description && <p className='form-error'>{errors.description}</p>}
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="date" className='text-[0.9rem] font-[500]'>Date</label>
                            <input type="date" name='date' className='w-full bg-[#181818] px-3 py-2 rounded-md text-gray-400' />
                            {errors.date && <p className='form-error'>{errors.date}</p>}
                        </div>
                        <div className="pt-3 flex flex-row items-center justify-between">
                            <label className='text-[0.95rem] font-[500]'>Completed</label>
                            <input type="checkbox" value={completed.toString()} onChange={(e) => setCompleted(e.target.checked)} />
                            {errors.compeleted && <p className='form-error'>{errors.compeleted}</p>}
                        </div>
                        <div className="pt-3 pb-5 flex flex-row items-center justify-between">
                            <label className='text-[0.95rem] font-[500]'>Important</label>
                            <input type="checkbox" value={important.toString()} onChange={(e) => setImportant(e.target.checked)} />
                            {errors.important && <p className='form-error'>{errors.important}</p>}
                        </div>
                        <button type='submit' className='ms-auto bg-blue-400 rounded-md px-2 py-2 flex flex-row items-center gap-2'>
                            <AddIcon className='size-5' />
                            <span className='text-[0.9rem]'>Create Task</span>
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}
