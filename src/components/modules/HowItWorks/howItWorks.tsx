import { CalendarCheck, GraduationCap, Search } from "lucide-react";

const steps = [
  {
    title: "Find the Perfect Tutor",
    description:
      "Browse our expert tutors by subject, price, or rating to find the best match for your needs.",
    icon: Search,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "Book a Session",
    description:
      "Check the tutor's availability and book your session instantly with our easy-to-use calendar.",
    icon: CalendarCheck,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    title: "Start Learning",
    description:
      "Connect with your tutor and start achieving your goals with personalized 1-on-1 sessions.",
    icon: GraduationCap,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How SkillBridge Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get started in just three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div
                className={`w-20 h-20 rounded-2xl ${step.bg} flex items-center justify-center mb-6 transition-transform group-hover:rotate-6 duration-300`}
              >
                <step.icon className={`w-10 h-10 ${step.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[30%] w-[15%] border-t-2 border-dashed border-slate-200 -z-10" />
              )}
              {index === 1 && (
                <div className="hidden lg:block absolute top-10 left-[63%] w-[15%] border-t-2 border-dashed border-slate-200 -z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
