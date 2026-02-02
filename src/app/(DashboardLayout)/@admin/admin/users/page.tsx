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

const ALL_USERS = [
  {
    id: "1",
    name: "Rahim Ali",
    email: "rahim@test.com",
    role: "Tutor",
    status: "Active",
  },
  {
    id: "2",
    name: "Sadiya Khan",
    email: "sadiya@test.com",
    role: "Student",
    status: "Banned",
  },
];

export default function AdminUsersPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Manage Users</h2>
      <div className="border rounded-lg bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ALL_USERS.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="font-medium">{user.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {user.email}
                  </div>
                </TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      user.status === "Active" ? "default" : "destructive"
                    }
                  >
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="outline"
                    size="sm"
                    className={
                      user.status === "Active"
                        ? "text-red-600"
                        : "text-green-600"
                    }
                  >
                    {user.status === "Active" ? "Ban User" : "Unban"}
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
