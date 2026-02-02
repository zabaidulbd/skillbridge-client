"use client";

import { Badge } from "@/src/components/ui/badge"; // পাথ তোমার প্রজেক্ট অনুযায়ী @/src/.. হতে পারে
import { Button } from "@/src/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { Eye } from "lucide-react";

const ALL_PLATFORM_BOOKINGS = [
  {
    id: "BK-101",
    student: "Ariful Islam",
    tutor: "Sarah Smith",
    subject: "Next.js",
    date: "Feb 10, 2026",
    status: "Upcoming",
    price: "$40",
  },
  {
    id: "BK-102",
    student: "Tanvir Ahmed",
    tutor: "John Doe",
    subject: "Physics",
    date: "Jan 25, 2026",
    status: "Completed",
    price: "$50",
  },
  {
    id: "BK-103",
    student: "Mehedi Hasan",
    tutor: "Jane Wilson",
    subject: "Algebra",
    date: "Jan 15, 2026",
    status: "Cancelled",
    price: "$30",
  },
];

export default function AdminBookingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">All Platform Bookings</h1>
        <p className="text-sm text-muted-foreground">
          Total: {ALL_PLATFORM_BOOKINGS.length} bookings found
        </p>
      </div>

      <div className="bg-white rounded-lg border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Booking ID</TableHead>
              <TableHead>Student</TableHead>
              <TableHead>Tutor</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ALL_PLATFORM_BOOKINGS.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-mono text-xs">{item.id}</TableCell>
                <TableCell className="font-medium">{item.student}</TableCell>
                <TableCell className="font-medium">{item.tutor}</TableCell>
                <TableCell>{item.subject}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      item.status === "Upcoming"
                        ? "default"
                        : item.status === "Completed"
                          ? "secondary"
                          : "destructive"
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell className="font-semibold">{item.price}</TableCell>
                <TableCell className="text-right">
                  <Button size="sm" variant="ghost">
                    <Eye className="w-4 h-4 mr-1" /> Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
