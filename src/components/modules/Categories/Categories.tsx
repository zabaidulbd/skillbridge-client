import { CATEGORIES } from "@/src/constants/categories";
import Link from "next/link";

export default function Categories() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            Browse by Category
          </h2>
          <p className="text-muted-foreground mt-2">
            Find the perfect tutor based on your interest
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/tutors?category=${category.name.toLowerCase()}`}
              className="group flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-primary/20"
            >
              <div
                className={`p-4 rounded-full mb-4 transition-transform group-hover:scale-110 ${category.color}`}
              >
                <category.icon className="w-8 h-8" />
              </div>
              <span className="font-medium text-slate-700 group-hover:text-primary transition-colors">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
