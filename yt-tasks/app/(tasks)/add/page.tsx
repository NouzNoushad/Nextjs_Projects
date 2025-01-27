'use client'

import { TaskFormAction } from '@/actions/TaskFormAction'
import { categories } from '@/lib/TaskHelpers'
export default function AddTask() {

    const { handleTaskSubmit, handleImageUpload, file, errors, task, gTask, setGCategory, setGPriority, setGStatus, setGDueDate } = TaskFormAction()

    return (
        <main className='py-[3rem]'>
            <div className="max-w-[500px] mx-auto px-5 xl:px-0">
                <div className="rounded-lg primary-color px-4 py-4 shadow-lg">
                    <h1>Add Task</h1>
                    <form onSubmit={handleTaskSubmit} className='mt-5 space-y-3'>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="name" className='text-[0.8rem]'>Name</label>
                            <input type="text" name='name' placeholder='Task name' className='w-full rounded-md px-2 py-2 bg-color placeholder:text-[0.9rem]' defaultValue={task?.name} />
                            {errors?.name && <p className="text-[0.8rem] text-red-500 mt-2">{errors.name}</p>}
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="category" className='text-[0.8rem]'>Category</label>
                            <div className="">
                                {
                                    categories.map((category, index) => (
                                        <button type='button' onClick={() => setGCategory(category)} className={`rounded-lg px-3 py-2 bg-color inline-block text-[0.8rem] mx-1 my-1 ${(task ? (task?.category == category) : (gTask?.category == category)) ? 'border-2 border-white' : 'border-2 border-transparent'}`} key={index} >{category}</button>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-3">
                            <div className="flex flex-col gap-1 w-[50%]">
                                <label htmlFor="priority" className='text-[0.8rem]'>Priority</label>
                                <select name="priority" id="priority" className='bg-color px-1 py-2 rounded-lg text-[0.9rem]' value={task?.priority} onChange={(e) => setGPriority(e.target.value)}>
                                    <option value="high">High</option>
                                    <option value="medium">Medium</option>
                                    <option value="low">Low</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-1 w-[50%]">
                                <label htmlFor="priority" className='text-[0.8rem]'>Status</label>
                                <select name="status" id="status" className='bg-color px-1 py-2 rounded-lg text-[0.9rem]' value={task?.status} onChange={(e) => setGStatus(e.target.value)}>
                                    <option value="completed">Completed</option>
                                    <option value="on review">On review</option>
                                    <option value="on hold">On hold</option>
                                    <option value="in progress">In progress</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="dueDate" className='text-[0.8rem]'>Due date</label>
                            <input type="date" value={task ? task.due_date.toString().split('T')[0] : gTask?.due_date} onChange={(e) => setGDueDate(e.target.value)} className='w-[50%] rounded-lg px-2 py-2 bg-color text-[0.9rem]' style={{ colorScheme: 'dark' }} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="assignee" className='text-[0.8rem]'>Assignee</label>
                            <div className="flex flex-row items-center gap-3">
                                <input type="text" name='username' placeholder='Assignee name' className='w-[50%] rounded-lg px-2 py-2 bg-color text-[0.9rem] placeholder:text-[0.9rem]' defaultValue={task?.assignee.username} />
                                <div className="flex flex-row items-center justify-between gap-2 w-[50%] rounded-lg px-2 py-2 bg-color text-[0.8rem]">
                                    <h4 className={`overflow-hidden text-ellipsis whitespace-nowrap ${file ? 'text-white' : 'text-gray-400'}`}>{file ? file.name : 'Upload image'}</h4>
                                    <label>
                                        <span className='primary-color px-5 py-1 text-white rounded-md text-[0.8rem] cursor-pointer'>Upload</span>
                                        <input type="file" id='name' onChange={handleImageUpload} accept="image/*" className='hidden' />
                                    </label>
                                </div>
                            </div>
                            {errors?.username && <p className="text-[0.8rem] text-red-500 mt-2">{errors.username}</p>}
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="description" className='text-[0.8rem]'>Description</label>
                            <textarea rows={4} name='description' placeholder='Task description' className='w-full rounded-md px-2 py-2 bg-color placeholder:text-[0.9rem]' defaultValue={task?.description}></textarea>
                        </div>
                        <div className="pt-5 pb-2">
                            <button type='submit' className='px-2 py-2 rounded-lg bg-green text-[0.9rem] w-full'>
                                {
                                    task ? 'Edit Task' : 'Add Task'
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}
