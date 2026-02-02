import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function StudentDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Dashboard Overview
          </h1>
          <p className="text-muted-foreground">
            Welcome back! Keep track of your learning progress.
          </p>
        </div>
        <Button asChild variant="outline">
          <Link href="/tutors" className="gap-2">
            Book New Session <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-blue-50/50 border-blue-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Lessons</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-700">12</div>
          </CardContent>
        </Card>
        <Card className="bg-green-50/50 border-green-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-700">08</div>
          </CardContent>
        </Card>
        <Card className="bg-orange-50/50 border-orange-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Upcoming</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-700">04</div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white border rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Bookings Summary</h3>
        <p className="text-sm text-muted-foreground">
          You have a session tomorrow at 10:00 AM with Dr. John Doe.
        </p>
        <Button variant="link" asChild className="p-0 mt-2 text-blue-600">
          <Link href="/dashboard/bookings">View all bookings</Link>
        </Button>
      </div>
    </div>
  );
}
