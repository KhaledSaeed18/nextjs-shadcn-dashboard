import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { salesData } from "@/constants/salesData"

export function RecentSales() {
    return (
        <div className="space-y-8 overflow-hidden">
            {salesData.map((sale) => (
                <div key={sale.id} className="flex items-center">
                    <Avatar className="h-9 w-9">
                        <AvatarImage src={sale.avatarUrl} alt="Avatar" />
                        <AvatarFallback>{sale.initials}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium">{sale.name}</p>
                        <p className="text-sm text-muted-foreground">
                            {sale.email}
                        </p>
                    </div>
                    <div className="ml-auto font-medium">{sale.amount}</div>
                </div>
            ))}
        </div>
    )
}