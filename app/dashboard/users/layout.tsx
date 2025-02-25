import type React from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Users | Dashboard',
    description: 'Manage your users and permissions',
}

export default function UsersLayout({
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
