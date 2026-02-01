// "use client"

// import { Avatar, AvatarFallback } from "@/src/components/ui/avatar";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/src/components/ui/dropdown-menu";
// import { CircleX, LayoutDashboard, LogOut, Menu } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "../../ui/button";

// import { useEffect, useState } from "react";

// export default function Navbar() {
//   const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const handleLogOut = () => {
//     // logout();
//     // setIsLoading(true);
//     // if (protectedRoutes.some((route) => pathname.match(route))) {
//     //   router.push("/");
//     // }
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (isMegaMenuOpen) {
//         setIsMegaMenuOpen(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [isMegaMenuOpen]);

//   return (
//     <header className="border-b bg-secondary w-full sticky top-0 z-50">
//       <div className="container mx-auto px-4">
//         {/* Top Bar */}
//         <div className="flex justify-between items-center h-16">
//           {/* Logo and Mobile Menu Button */}
//           <div className="flex items-center gap-4">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="md:hidden p-2 rounded-md hover:bg-gray-100"
//             >
//               {isMobileMenuOpen ? (
//                 <CircleX className="text-primary" size={20} />
//               ) : (
//                 <Menu className="text-primary" size={20} />
//               )}
//             </button>

//             <Link href="/" className="shrink-0">
//               <div className="relative w-30 h-10 md:w-40 md:h-16">
//                 <Image
//                   src="/logo.png"
//                   alt="skillbridge Logo"
//                   fill
//                   className="object-contain"
//                   sizes="(max-width: 768px) 7rem, (max-width: 1024px) 10rem, 12rem"
//                 />
//               </div>
//             </Link>
//           </div>
//           <div className="hidden md:flex items-center gap-6">
//             <Link href="/" className="text-primary font-medium  ">
//               Home
//             </Link>

//             <Link href="/tutors" className="text-primary font-medium ">
//               Tutors
//             </Link>

//             <Link href="/about" className="text-primary font-medium ">
//               About Us
//             </Link>
//           </div>

//           {/* Right Side Navigation */}
//           <nav className="flex items-center gap-2">
//             <div>
//               <DropdownMenu>
//                 <DropdownMenuTrigger>
//                   <Avatar>
//                     <AvatarFallback className="text-2xl font-bold bg-indigo-500 text-white cursor-pointer">
//                       X
//                     </AvatarFallback>
//                   </Avatar>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent className="min-w-[200px]">
//                   <DropdownMenuLabel>My Account</DropdownMenuLabel>
//                   <DropdownMenuSeparator />
//                   <DropdownMenuItem>
//                     <Link href="/profile">Profile</Link>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem>
//                     <Link href="/orders-details">Order Details</Link>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem>
//                     <Link href="/delivery">Delivery Address</Link>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem>
//                     <Link href="/wishlist">Wishlist</Link>
//                   </DropdownMenuItem>
//                   <DropdownMenuSeparator />
//                   <DropdownMenuItem
//                     className=" cursor-pointer focus:bg-red-50"
//                     onClick={handleLogOut}
//                   >
//                     <LayoutDashboard className="mr-2 h-4 w-4" />
//                     <span>Dashboard</span>
//                   </DropdownMenuItem>

//                   <DropdownMenuSeparator />
//                   <DropdownMenuItem
//                     className="text-red-500 cursor-pointer focus:bg-red-50"
//                     onClick={handleLogOut}
//                   >
//                     <LogOut className="mr-2 h-4 w-4" />
//                     <span>Log Out</span>
//                   </DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </div>

//             <div>
//               <Link href="/login">
//                 <Button
//                   className="rounded-full bg-primary text-secondary font-semibold hover:text-primary hover:bg-secondary hover:border-primary"
//                   variant="outline"
//                 >
//                   Login
//                 </Button>
//               </Link>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// }

"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";
import { GraduationCap, Menu } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { Button } from "../../ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Find Tutors", href: "/tutors" },
  { name: "About Us", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Skill<span className="text-primary">Bridge</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-3 border-l pl-6">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/register">Sign Up</Link>
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left flex items-center gap-2">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    SkillBridge
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-10">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <hr className="my-2" />
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      Login
                    </Link>
                  </Button>
                  <Button className="w-full" asChild>
                    <Link href="/register" onClick={() => setIsOpen(false)}>
                      Sign Up
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
