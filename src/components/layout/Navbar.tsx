"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/Logo";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#DDD6FE] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <Logo size={34} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#64748B] hover:text-[#0F0825] text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-[#64748B] hover:text-[#0F0825] transition-colors"
            >
              Log in
            </Link>
            <Button
              asChild
              className="bg-[#F97316] hover:bg-[#EA6C00] text-white text-sm font-semibold px-4 py-2 rounded-lg"
            >
              <Link href="/contact">Book a Demo</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#0F0825]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#DDD6FE] bg-white px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[#0F0825] font-medium text-sm py-1"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t border-[#DDD6FE]">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-[#64748B]"
              >
                Log in
              </Link>
              <Button
                asChild
                className="bg-[#F97316] hover:bg-[#EA6C00] text-white w-full"
              >
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Book a Demo
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
