"use client";

import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Checkbox } from "@/src/components/ui/checkbox";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function AvailabilityPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Set Your Availability</h1>
      <Card>
        <CardHeader>
          <CardTitle>Select Available Days</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {DAYS.map((day) => (
              <div
                key={day}
                className="flex items-center space-x-2 border p-3 rounded-lg"
              >
                <Checkbox id={day} />
                <label
                  htmlFor={day}
                  className="text-sm font-medium leading-none"
                >
                  {day}
                </label>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t">
            <h4 className="font-medium mb-3">Default Time Slots</h4>
            <div className="flex gap-3">
              <Button variant="outline">09:00 AM - 12:00 PM</Button>
              <Button variant="outline">02:00 PM - 05:00 PM</Button>
              <Button variant="outline">07:00 PM - 10:00 PM</Button>
            </div>
          </div>

          <Button className="mt-4">Update Slots</Button>
        </CardContent>
      </Card>
    </div>
  );
}
