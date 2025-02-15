import React from 'react'
import Sidebar from "@/components/Sidebar";
import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex h-screen text-gray-900 bg-secondary">
            {/* Sidebar */}
            <Sidebar />
            {/* MainSection */}
            <div className="flex-1 h-full overflow-x-hidden overflow-y-auto">
                <MainHeader />
                {children}
                <MainFooter />
            </div>
        </div>
    )
}
