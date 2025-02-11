import React from 'react'
import SettingsPanel from './SettingsPanel'
import SearchPanel from './SearchPanel'
import NotificationPanel from './NotificationPanel'

export default function Panels() {
    return (
        <>
            <NotificationPanel />
            <SearchPanel />
            <SettingsPanel />
        </>
    )
}
