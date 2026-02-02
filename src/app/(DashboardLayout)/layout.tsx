import DashboardSidebar from "@/src/components/DashboardSidebar";

export default function DashboardLayout({
  student,
  admin,
  tutor,
}: {
  student: React.ReactNode;
  admin: React.ReactNode;
  tutor: React.ReactNode;
}) {
  // user role type
  type UserRole = "student" | "admin" | "tutor";

  const role = "admin" as UserRole;

  return (
    <div className="flex min-h-screen">
      <DashboardSidebar role={role} />
      <div className="flex-1 bg-slate-50 p-8">
        {role === "student" && student}
        {role === "admin" && admin}
        {role === "tutor" && tutor}
      </div>
    </div>
  );
}
