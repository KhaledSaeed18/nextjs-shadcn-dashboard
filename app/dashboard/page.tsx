import { StatsCard } from "@/components/dashboard/StatsCard"
import { statsData } from "@/constants/statsData"
import { Card } from "@/components/ui/card"
import { RecentSales } from "@/components/dashboard/RecentSales"
import { Overview } from "@/components/dashboard/overview"

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

            {/* Charts and Recent Sales Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-1 md:col-span-4">
                    <div className="p-6">
                        <h2 className="text-lg font-medium mb-2">Overview</h2>
                        <Overview />
                    </div>
                </Card>
                <Card className="col-span-1 md:col-span-3">
                    <div className="p-6">
                        <h2 className="text-lg font-medium mb-2">Recent Sales</h2>
                        <RecentSales />
                    </div>
                </Card>
            </div>
        </div>
    )
}