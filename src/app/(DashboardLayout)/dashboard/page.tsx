import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { CalendarCheck, Clock, Star } from "lucide-react";

export default function StudentDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Welcome back, Student!</h1>
        <p className="text-muted-foreground mt-1">
          Here is what is happening with your learning journey.
        </p>
      </div>

      {/* status cars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Bookings
            </CardTitle>
            <CalendarCheck className="w-4 h-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Upcoming Sessions
            </CardTitle>
            <Clock className="w-4 h-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Reviews Left</CardTitle>
            <Star className="w-4 h-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
          </CardContent>
        </Card>
      </div>

      {/* if we want we can add a upcoming session in here */}
      <div className="bg-white p-6 rounded-xl border">
        <h3 className="text-lg font-semibold mb-4">Upcoming Next Session</h3>
        <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg flex justify-between items-center">
          <div>
            <p className="font-bold text-blue-900">Mathematics with John Doe</p>
            <p className="text-sm text-blue-700">Tomorrow at 10:00 AM</p>
          </div>
          <button className="text-sm bg-blue-600 text-white px-4 py-2 rounded-md">
            Join Link
          </button>
        </div>
      </div>
    </div>
  );
}
