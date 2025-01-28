'use client'

import { Task } from '@/interface/task_interface'
import SidebarStatus from './SidebarStatus'
import { useGlobalState } from '@/context/globalProvider'
import { CloseIcon } from './Icons'

export default function Sidebar({ tasks }: { tasks: Task[] }) {
    const { showMenu, setShowMenu } = useGlobalState()

    return (
        <div className={`lg:block lg:w-1/5 lg:left-0 h-full primary-color fixed transition-all duration-300 ${showMenu ? 'right-0' : 'right-[-200px]'}`}>
            <div className="px-5 py-5">
                <div className="lg:hidden text-end mb-3">
                    <button onClick={setShowMenu} className="bg-color px-2 py-2 rounded-md">
                        <CloseIcon className='size-6' />
                    </button>
                </div>
                <h1 className='lg:text-green text-white text-[1.4rem] font-[500]'>Task Manager</h1>
                <SidebarStatus tasks={tasks} />
            </div>
        </div>
    )
}
