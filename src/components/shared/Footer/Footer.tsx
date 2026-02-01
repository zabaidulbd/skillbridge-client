import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Skill<span className="text-primary text-blue-500">Bridge</span>
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Connecting learners with expert tutors worldwide. Empowering
              students to achieve their academic and professional goals through
              personalized 1-on-1 learning.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-blue-500 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-pink-500 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="/tutors"
                  className="hover:text-white transition-colors"
                >
                  Find a Tutor
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/become-tutor"
                  className="hover:text-white transition-colors"
                >
                  Become a Tutor
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Popular Subjects
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="/tutors?category=mathematics"
                  className="hover:text-white transition-colors"
                >
                  Mathematics
                </Link>
              </li>
              <li>
                <Link
                  href="/tutors?category=programming"
                  className="hover:text-white transition-colors"
                >
                  Programming
                </Link>
              </li>
              <li>
                <Link
                  href="/tutors?category=languages"
                  className="hover:text-white transition-colors"
                >
                  Languages
                </Link>
              </li>
              <li>
                <Link
                  href="/tutors?category=science"
                  className="hover:text-white transition-colors"
                >
                  Science
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 shrink-0" />
                <span>123 Learning Lane, EdTech City, 1207</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500 shrink-0" />
                <span>+880 1234 567 890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <span>support@skillbridge.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} SkillBridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
