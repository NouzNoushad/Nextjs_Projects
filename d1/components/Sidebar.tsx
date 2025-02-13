import React from 'react'
import DashboardsLink from './SidebarLinks/Dashboards'
import ComponentsLink from './SidebarLinks/Components'
import PagesLink from './SidebarLinks/Pages'
import AuthenticationLink from './SidebarLinks/Authentication'
import LayoutsLink from './SidebarLinks/Layouts'

export default function Sidebar() {

    return (
        <aside className='flex-shrink-0 bg-white w-64 border-r hidden md:block dark:border-primary-darker dark:bg-darker'>
            <div className="flex flex-col h-full">
                <nav className="flex-1 px-2 py-4 overflow-y-hidden hover:overflow-y-auto space-y-2">
                    {/* Dashboards */}
                    <DashboardsLink />
                    {/* Components */}
                    <ComponentsLink />
                    {/* Pages */}
                    <PagesLink />
                    {/* Authentication */}
                    <AuthenticationLink />
                    {/* Layouts */}
                    <LayoutsLink />
                </nav>
                <div className="flex-shrink-0 px-2 py-4 space-y-2">
                    <button className='bg-primary rounded-md transition-colors duration-200 hover:bg-primary-darker px-4 py-2 text-sm text-white flex items-center justify-center w-full focus:outline-none focus:ring focus:ring-primary-dark focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-dark'>
                        <span>
                            <svg
                                className="w-4 h-4 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                />
                            </svg>
                        </span>
                        <span>Customize</span>
                    </button>
                </div>
            </div>
        </aside>
    )
}
