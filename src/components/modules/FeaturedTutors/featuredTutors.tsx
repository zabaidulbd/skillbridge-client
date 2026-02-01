import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { TUTORS_DATA } from "@/src/constants/tutors";
import { Star } from "lucide-react";
import Image from "next/image";

export default function FeaturedTutors() {
  const featuredTutors = TUTORS_DATA.slice(0, 4);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight">
          Our Featured Tutors
        </h2>
        <p className="text-muted-foreground mt-2">
          Learn from the best experts in various fields
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredTutors.map((tutor) => (
          <Card key={tutor.id} className="overflow-hidden flex flex-col">
            <div className="aspect-square relative overflow-hidden bg-muted">
              <Image
                src={tutor.image}
                alt={tutor.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>

            <CardHeader className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{tutor.name}</CardTitle>
                  <CardDescription>{tutor.subject}</CardDescription>
                </div>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-medium text-foreground">
                    {tutor.rating}
                  </span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="px-4 pb-2 flex-grow">
              <p className="text-sm text-muted-foreground line-clamp-2">
                {tutor.description}
              </p>
            </CardContent>

            <CardFooter className="p-4 pt-0 flex justify-between items-center">
              <span className="text-lg font-bold">
                ${tutor.price}
                <small className="text-xs font-normal text-muted-foreground">
                  /hr
                </small>
              </span>
              <Button size="sm" variant="outline">
                View Profile
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
