import Link from "next/link";
import Logo from "@/components/ui/Logo";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Solutions", href: "/solutions" },
    { label: "Pricing", href: "/pricing" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0F0825] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-1">
            <div className="mb-3">
              <Logo size={34} variant="white" />
            </div>
            <p className="text-[#C4B5FD] text-sm leading-relaxed">
              Run corporate events with confidence. The complete platform for
              conferences, trainings, and workshops.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#C4B5FD] hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-[#1A0F3E] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#64748B] text-sm">
            © {new Date().getFullYear()} Corevents. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-[#C4B5FD] hover:text-white text-sm transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/join"
              className="text-[#C4B5FD] hover:text-white text-sm transition-colors"
            >
              Join an Event
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
