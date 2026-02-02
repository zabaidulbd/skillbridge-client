import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { CalendarDays, Star } from "lucide-react";

export default function TutorDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Tutor Overview</h1>
        <p className="text-muted-foreground">
          Monitor your sessions, earnings, and student feedback.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2 text-sm font-medium text-muted-foreground">
            Total Earnings
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,450</div>
            <p className="text-xs text-green-600">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2 text-sm font-medium text-muted-foreground">
            Total Sessions
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2 text-sm font-medium text-muted-foreground">
            Average Rating
          </CardHeader>
          <CardContent className="flex items-center gap-2">
            <div className="text-2xl font-bold">4.9</div>
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2 text-sm font-medium text-muted-foreground">
            Active Students
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10</div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white p-6 rounded-xl border">
        <h3 className="font-semibold mb-4">Upcoming Sessions Today</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
            <div className="flex items-center gap-4">
              <CalendarDays className="w-8 h-8 text-blue-600" />
              <div>
                <p className="font-medium">Mathematics with Rahim</p>
                <p className="text-sm text-muted-foreground">
                  04:00 PM - 05:00 PM
                </p>
              </div>
            </div>
            <button className="text-sm font-medium text-blue-600 hover:underline">
              Launch Class
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
