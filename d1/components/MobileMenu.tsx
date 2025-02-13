import React from 'react'
import DashboardsLink from './SidebarLinks/Dashboards'
import ComponentsLink from './SidebarLinks/Components'
import PagesLink from './SidebarLinks/Pages'
import AuthenticationLink from './SidebarLinks/Authentication'
import LayoutsLink from './SidebarLinks/Layouts'

export default function MobileMenu({ menuOpen }: { menuOpen: boolean }) {

    return (
        <>
            {
                menuOpen ?
                    <div className='border-b md:hidden mt-1'>
                        <nav className='px-2 py-3 space-y-2'>
                            {/* Dashboards Links */}
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
                    </div> : null}
        </>
    )
}
