"use client";

import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Slider } from "@/src/components/ui/slider";
import { TUTORS_DATA } from "@/src/constants/tutors";
import { FilterX, Search, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TutorsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([100]);
  const filteredTutors = TUTORS_DATA.filter((tutor) => {
    const matchesSearch =
      tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutor.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      category === "all" ||
      tutor.category.toLowerCase() === category.toLowerCase();
    const matchesPrice = tutor.price <= priceRange[0];

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const resetFilters = () => {
    setSearchQuery("");
    setCategory("all");
    setPriceRange([100]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Find Your Perfect Tutor</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="space-y-8 bg-slate-50 p-6 rounded-xl h-fit">
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Search className="w-4 h-4" /> Search
            </h3>
            <Input
              placeholder="Search by name or subject..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white"
            />
          </div>

          <div>
            <h3 className="font-semibold mb-4">Category</h3>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="science">Science</SelectItem>
                <SelectItem value="mathematics">Mathematics</SelectItem>
                <SelectItem value="programming">Programming</SelectItem>
                <SelectItem value="arts">Arts</SelectItem>
                <SelectItem value="languages">Languages</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <h3 className="font-semibold mb-4 flex justify-between">
              Max Price: <span>${priceRange[0]}</span>
            </h3>
            <Slider
              defaultValue={[100]}
              max={100}
              step={5}
              value={priceRange}
              onValueChange={setPriceRange}
            />
          </div>

          <Button
            variant="outline"
            className="w-full gap-2"
            onClick={resetFilters}
          >
            <FilterX className="w-4 h-4" /> Reset Filters
          </Button>
        </aside>

        <main className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTutors.length > 0 ? (
              filteredTutors.map((tutor) => (
                <Card key={tutor.id} className="flex flex-col overflow-hidden">
                  <div className="flex p-4 gap-4">
                    <div className="relative w-24 h-24 shrink-0">
                      <Image
                        src={tutor.image}
                        alt={tutor.name}
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{tutor.name}</CardTitle>
                        <div className="flex items-center text-yellow-500 text-sm">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="ml-1 text-foreground font-medium">
                            {tutor.rating}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-blue-600 font-medium">
                        {tutor.subject}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                        {tutor.category}
                      </p>
                    </div>
                  </div>

                  <CardContent className="px-4 pb-2">
                    <p className="text-sm text-muted-foreground line-clamp-2 italic">
                      {`"${tutor.description}"`}
                    </p>
                  </CardContent>

                  <CardFooter className="p-4 pt-2 mt-auto border-t flex justify-between items-center bg-slate-50/50">
                    <div className="text-lg font-bold">
                      ${tutor.price}
                      <span className="text-xs font-normal text-muted-foreground">
                        /hr
                      </span>
                    </div>
                    <Button size="sm" asChild>
                      <Link href={`/tutors/${tutor.id}`}>View Profile</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-xl text-muted-foreground">
                  No tutors found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
