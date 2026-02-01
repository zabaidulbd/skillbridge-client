import {
  Calculator,
  Code,
  Languages,
  Microscope,
  Music,
  Palette,
} from "lucide-react";

export const CATEGORIES = [
  {
    id: "1",
    name: "Mathematics",
    icon: Calculator,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "2",
    name: "Programming",
    icon: Code,
    color: "bg-green-100 text-green-600",
  },
  {
    id: "3",
    name: "Science",
    icon: Microscope,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: "4",
    name: "Languages",
    icon: Languages,
    color: "bg-orange-100 text-orange-600",
  },
  { id: "5", name: "Arts", icon: Palette, color: "bg-pink-100 text-pink-600" },
  {
    id: "6",
    name: "Music",
    icon: Music,
    color: "bg-yellow-100 text-yellow-600",
  },
];
