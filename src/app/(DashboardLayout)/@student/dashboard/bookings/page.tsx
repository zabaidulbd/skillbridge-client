"use client";

import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";

const BOOKING_HISTORY = [
  {
    id: "BK-101",
    tutor: "Sarah Smith",
    subject: "Next.js",
    date: "Feb 10, 2026",
    status: "Upcoming",
    price: "$40",
  },
  {
    id: "BK-102",
    tutor: "John Doe",
    subject: "Physics",
    date: "Jan 25, 2026",
    status: "Completed",
    price: "$50",
  },
  {
    id: "BK-103",
    tutor: "Jane Wilson",
    subject: "Algebra",
    date: "Jan 15, 2026",
    status: "Completed",
    price: "$30",
  },
];

export default function MyBookingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">My Bookings</h1>
      <div className="bg-white rounded-lg border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Booking ID</TableHead>
              <TableHead>Tutor</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {BOOKING_HISTORY.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-mono text-xs">{item.id}</TableCell>
                <TableCell className="font-medium">{item.tutor}</TableCell>
                <TableCell>{item.subject}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      item.status === "Upcoming" ? "default" : "secondary"
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  {item.status === "Completed" ? (
                    <Button size="sm" variant="outline">
                      Review
                    </Button>
                  ) : (
                    <Button size="sm">Join</Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
