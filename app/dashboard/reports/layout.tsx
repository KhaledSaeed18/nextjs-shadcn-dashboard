import type React from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Reports | Dashboard',
    description: 'View and manage your reports and analytics',
}

export default function ReportsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="space-y-6">
            {children}
        </div>
    )
}
