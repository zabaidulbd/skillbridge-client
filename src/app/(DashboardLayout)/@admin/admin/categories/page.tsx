"use client";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Plus, Trash2 } from "lucide-react";

const CATEGORIES = ["Web Development", "Physics", "Mathematics", "English"];

export default function AdminCategories() {
  return (
    <div className="max-w-2xl space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Categories</h2>
        <div className="flex gap-2">
          <Input placeholder="New category name" />
          <Button className="gap-2">
            <Plus className="w-4 h-4" /> Add
          </Button>
        </div>
      </div>

      <div className="grid gap-3">
        {CATEGORIES.map((cat) => (
          <div
            key={cat}
            className="flex justify-between items-center p-4 bg-white border rounded-lg"
          >
            <span className="font-medium">{cat}</span>
            <Button
              variant="ghost"
              size="sm"
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
