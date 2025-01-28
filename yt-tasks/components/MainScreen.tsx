'use client'

import React from 'react'
import { Task } from '@/interface/task_interface';
import Link from 'next/link';
import Tasks from './Tasks';
import { AddIcon, MenuIcon } from './Icons';
import Search from './Search';
import { useGlobalState } from '@/context/globalProvider';

export default function MainScreen({ tasks }: { tasks: Task[] }) {

    const { setShowMenu } = useGlobalState()
    return (
        <div className="lg:w-4/5 w-full min-h-svh py-8 px-4 flex flex-col lg:ml-[20%]">
            <div className="flex flex-row items-start gap-3 justify-between">
                <div className="w-full flex md:flex-row flex-col items-start justify-between gap-3">
                    <Search tasks={tasks} />
                    <Link href={'/add'} className='bg-green rounded-md px-3 py-2 flex flex-row items-center gap-3'>
                        <AddIcon className='size-5' />
                        <span>New Task</span>
                    </Link>
                </div>
                <button onClick={setShowMenu} className="lg:hidden primary-color px-2 py-2 rounded-md">
                    <MenuIcon className='size-6' />
                </button>
            </div>
            <div className="mt-8 primary-color rounded-lg px-2 py-5 flex-1">
                <Tasks tasks={tasks} />
            </div>
        </div>
    )
}
