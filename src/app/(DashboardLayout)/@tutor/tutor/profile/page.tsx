"use client";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Textarea } from "@/src/components/ui/textarea";

export default function TutorProfileEdit() {
  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="text-2xl font-bold">Update Tutor Profile</h1>
      <div className="bg-white p-6 rounded-xl border space-y-4">
        <div className="grid gap-2">
          <Label>Professional Title</Label>
          <Input placeholder="e.g. Senior Math Teacher / Full Stack Developer" />
        </div>
        <div className="grid gap-2">
          <Label>Hourly Rate ($)</Label>
          <Input type="number" placeholder="25" />
        </div>
        <div className="grid gap-2">
          <Label>Expertise & Skills</Label>
          <Input placeholder="React, Node.js, TypeScript" />
        </div>
        <div className="grid gap-2">
          <Label>About / Bio</Label>
          <Textarea
            placeholder="Describe your teaching experience..."
            className="min-h-[150px]"
          />
        </div>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}
