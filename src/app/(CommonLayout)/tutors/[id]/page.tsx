"use client";

import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { TUTORS_DATA } from "@/src/constants/tutors";
import { ArrowLeft, CheckCircle2, Clock, DollarSign, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function TutorProfilePage() {
  const params = useParams();
  const tutorId = params.id;

  const tutor = TUTORS_DATA.find((t) => t.id === tutorId);

  if (!tutor) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold">Tutor Not Found</h2>
        <Button asChild className="mt-4">
          <Link href="/tutors">Back to Tutors</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Link
        href="/tutors"
        className="flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Search
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card className="overflow-hidden border-none shadow-lg">
            <div className="relative aspect-square">
              <Image
                src={tutor.image}
                alt={tutor.name}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6 text-center">
              <h1 className="text-2xl font-bold">{tutor.name}</h1>
              <p className="text-blue-600 font-medium mb-4">{tutor.subject}</p>
              <div className="flex justify-center items-center gap-1 mb-6">
                <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                <span className="font-bold text-lg">{tutor.rating}</span>
                <span className="text-muted-foreground">
                  ({tutor.reviews} reviews)
                </span>
              </div>
              <Button className="w-full py-6 text-lg font-semibold">
                Book a Session
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {tutor.description}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                <DollarSign className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-xs text-muted-foreground leading-none">
                    Price
                  </p>
                  <p className="font-semibold">${tutor.price}/hr</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-xs text-muted-foreground leading-none">
                    Category
                  </p>
                  <p className="font-semibold">{tutor.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                <Clock className="w-5 h-5 text-orange-600" />
                <div>
                  <p className="text-xs text-muted-foreground leading-none">
                    Response
                  </p>
                  <p className="font-semibold">Fast</p>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-6 border-t">
            <h2 className="text-2xl font-bold mb-6">Student Reviews</h2>
            <div className="space-y-6">
              {[1, 2].map((review) => (
                <div key={review} className="border-b pb-6 last:border-0">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-0.5 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-medium">
                      Verified Student
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {`"Great teacher! The session was very helpful and everything was explained clearly."`}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
