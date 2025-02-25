"use client"

import type React from "react"

import { Suspense } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardHeader } from "@/components/dashboard/header"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SidebarProvider defaultOpen={true}>
            <div className="flex h-screen flex-1 overflow-hidden">
                <DashboardSidebar />
                <div className="flex flex-col flex-1 overflow-hidden">
                    <DashboardHeader />
                    <Suspense fallback={<div className="p-4">Loading...</div>}>
                        <main className="flex-1 overflow-y-auto p-4">{children}</main>
                    </Suspense>
                </div>
            </div>
        </SidebarProvider>
    )
}

