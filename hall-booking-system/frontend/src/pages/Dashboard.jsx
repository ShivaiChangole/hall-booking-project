export default function Dashboard() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-gray-800">
        Dashboard
      </h2>

import { Card } from "@/components/ui/card"
import { Calendar, CheckCircle2, Clock, XCircle } from "lucide-react"

const stats = [
  {
    name: "Total Bookings",
    value: "248",
    icon: Calendar,
  },
  {
    name: "Upcoming Bookings",
    value: "42",
    icon: Clock,
  },
  {
    name: "Confirmed Bookings",
    value: "186",
    icon: CheckCircle2,
  },
  {
    name: "Cancelled Bookings",
    value: "20",
    icon: XCircle,
  },
]

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name} className="bg-card p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">{stat.name}</p>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              </div>
              <stat.icon className="h-8 w-8 text-muted-foreground/60" />
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground text-center py-8">
            Connect your backend API to display recent booking activity
          </p>
        </div>
      </Card>
    </div>
  )
}

      
    </div>
  );
}
