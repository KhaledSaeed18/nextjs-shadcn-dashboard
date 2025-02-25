import { StatsCard } from "@/components/dashboard/StatsCard"
import { statsData } from "@/constants/statsData"

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Dashboard Overview</h1>

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {statsData.map((stat, index) => (
                    <StatsCard
                        key={index}
                        title={stat.title}
                        value={stat.value}
                        change={stat.change}
                        icon={stat.icon}
                    />
                ))}
            </div>
        </div>
    )
}