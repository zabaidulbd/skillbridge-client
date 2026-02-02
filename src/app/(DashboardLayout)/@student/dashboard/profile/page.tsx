"use client";

import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";

export default function ProfilePage() {
  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="text-2xl font-bold">Profile Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" defaultValue="Student User" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" defaultValue="student@skillbridge.com" disabled />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="bio">Learning Interest</Label>
            <Input id="bio" placeholder="e.g. Web Development, Physics" />
          </div>
          <Button className="w-fit">Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  );
}
