import React from 'react'
import { AddIcon, CalendarIcon, MenuIcon } from './Icons'
import Image from 'next/image';
import { Task } from '@/interface/task_interface';
import { formatDate } from '@/lib/TaskHelpers';
import Link from 'next/link';

// const items = ["item1", "item2", "item3", "item4", "item5", "item6", "item1", "item2", "item3", "item4", "item5", "item6", "item1", "item2", "item3", "item4", "item5", "item6"]

export default async function MainScreen() {
    const response = await fetch('http://localhost:8020/get_tasks')
    const responseJson = await response.json()
    const tasks: Task[] = responseJson.data
    return (
        <div className="lg:w-4/5 w-full min-h-svh py-8 px-4 flex flex-col lg:ml-[20%]">
            <div className="flex flex-row items-start gap-3 justify-between">
                <div className="w-full flex md:flex-row flex-col items-start justify-between gap-3">
                    <input type="text" placeholder='Search' className='px-3 py-2 rounded-md primary-color sm:min-w-[500px] min-w-full' />
                    <Link href={'/add'} className='bg-green rounded-md px-3 py-2 flex flex-row items-center gap-3'>
                        <AddIcon className='size-5' />
                        <span>New Task</span>
                    </Link>
                </div>
                <div className="lg:hidden primary-color px-2 py-2 rounded-md">
                    <MenuIcon className='size-6' />
                </div>
            </div>
            <div className="mt-8 primary-color rounded-lg px-2 py-5 flex-1">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 ">
                    {
                        tasks && tasks.map((task, index) => (
                            <div key={index} className='bg-color rounded-md px-2 py-2 space-y-2'>
                                <h1>{task.name}</h1>
                                <p className='text-[0.7rem]'>{task.description}</p>
                                <div className="flex flex-row items-center gap-2">
                                    <div className="text-[0.6rem] px-2 py-1 rounded-md text-green bg-[#20cf8918] inline-block">
                                        {task.category}
                                    </div>
                                    <div className="text-[0.6rem] px-2 py-1 rounded-md text-white bg-[#ffffff0e] inline-block">
                                        {task.priority}
                                    </div>
                                </div>
                                <div className="flex flex-row items-center justify-between">
                                    <div className="text-[0.65rem] px-2 py-1 rounded-md primary-color flex flex-row items-center gap-1">
                                        <CalendarIcon className='size-3' />
                                        {formatDate(task.due_date)}</div>
                                    <div className="h-[30px] w-[30px] rounded-full bg-slate-500">
                                        {task.assignee.image.filename ? <Image src={`http://localhost:8020/uploads/${task.assignee.image.filename}`} height={30} width={30} alt='profile' /> : null}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
