'use client'

import React, { useState } from 'react'
import GeneralForm from './GeneralForm'
import AdvancedForm from './AdvancedForm'
import { TabState } from '@/utils/Constants'

export default function MainFormContent() {
    const [selectedTab, setSelectedTab] = useState<TabState>(TabState.General)

    const handleTabChange = (selectedTab: TabState) => setSelectedTab(selectedTab)

    return (
        <div className="col-span-2">
            {/* Tabs */}
            <div className="space-x-6">
                <button onClick={() => handleTabChange(TabState.General)} className={`relative inline-block focus:outline-none focus:ring-0 py-4 before:absolute before:bottom-0 before:h-[2px] before:w-full transition-colors ${selectedTab == TabState.General ? "before:bg-blue-500 text-blue-500" : "before:bg-transparent text-gray-400"} `}>General</button>
                <button onClick={() => handleTabChange(TabState.Advanced)} className={`relative inline-block focus:outline-none focus:ring-0 py-4 before:absolute before:bottom-0 before:h-[2px] before:w-full transition-colors ${selectedTab == TabState.Advanced ? "before:bg-blue-500 text-blue-500" : "before:bg-transparent text-gray-400"}`}>Advanced</button>
            </div>
            {/* Tab View */}
            <div className="">
                {
                    selectedTab == TabState.General ? (
                        // General Form
                        <GeneralForm />
                    ) : (
                        // Advanced Form
                        <AdvancedForm />
                    )
                }
            </div>
        </div>
    )
}
