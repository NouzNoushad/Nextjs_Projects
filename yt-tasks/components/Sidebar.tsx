import React from 'react'
import Categories from './Categories'
import { Task } from '@/interface/task_interface'

export default function Sidebar({tasks}: {tasks: Task[]}) {

    return (
        <div className="hidden lg:block lg:w-1/5 h-full primary-color fixed">
            <div className="px-5 py-5">
                <h1 className='lg:text-green text-white text-[1.4rem] font-[500]'>Task Manager</h1>
                <Categories tasks={tasks}/>
            </div>
        </div>
    )
}
