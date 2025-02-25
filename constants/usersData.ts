export interface User {
    id: string
    name: string
    email: string
    role: string
    status: "active" | "inactive" | "pending"
    joinedDate: string
}

export const users: User[] = [
    {
        id: "1",
        name: "John Doe",
        email: "john@example.com",
        role: "Admin",
        status: "active",
        joinedDate: "2024-01-15",
    },
    {
        id: "2",
        name: "Jane Smexport ith",
        email: "jane@example.com",
        role: "User",
        status: "active",
        joinedDate: "2024-02-01",
    },
    {
        id: "3",
        name: "Bob Johnson",
        email: "bob@example.com",
        role: "Editor",
        status: "inactive",
        joinedDate: "2023-12-10",
    },
    {
        id: "4",
        name: "Sarah Wilson",
        email: "sarah@example.com",
        role: "User",
        status: "pending",
        joinedDate: "2024-02-20",
    },
]