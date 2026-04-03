import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ClipboardList, Users, CalendarDays, QrCode, Bell, Award,
  Mic2, BarChart3, Shield, Globe, ArrowRight, CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features — Corevents",
  description:
    "Explore every feature of the Corevents platform — from registration and check-in to certificates and analytics.",
};

const featureGroups = [
  {
    category: "Registration",
    icon: ClipboardList,
    color: "bg-blue-50 text-blue-700",
    features: [
      "Custom registration forms with conditional fields",
      "Open, invite-only, and approval-based registration",
      "Capacity limits and waitlist support",
      "Paid and free registration options",
      "Duplicate detection",
      "Confirmation emails and QR code generation",
    ],
  },
  {
    category: "Attendee Portal",
    icon: Users,
    color: "bg-teal-50 text-teal-700",
    features: [
      "Mobile-first event portal",
      "Registration status and QR entry pass",
      "Agenda, speakers, and venue access",
      "Downloads, announcements, and certificates",
      "Feedback submission",
      "Session bookmarks and reminders",
    ],
  },
  {
    category: "Agenda & Sessions",
    icon: CalendarDays,
    color: "bg-purple-50 text-purple-700",
    features: [
      "Multi-day, multi-track agenda builder",
      "Session bookmarks and calendar sync",
      "Conflict detection",
      "Live agenda updates",
      "Session-level check-in",
      "Q&A and polls per session",
    ],
  },
  {
    category: "Check-In",
    icon: QrCode,
    color: "bg-orange-50 text-orange-700",
    features: [
      "QR code scanning for fast check-in",
      "Search by name or email",
      "Manual check-in override",
      "Session-level attendance logging",
      "Undo check-in",
      "Badge printing support",
    ],
  },
  {
    category: "Communication",
    icon: Bell,
    color: "bg-yellow-50 text-yellow-700",
    features: [
      "Email, SMS, and in-app notifications",
      "Segment by attendee type or status",
      "Schedule announcements in advance",
      "Approval and rejection emails",
      "Pre-event reminders",
      "Post-event follow-up messages",
    ],
  },
  {
    category: "Certificates",
    icon: Award,
    color: "bg-green-50 text-green-700",
    features: [
      "Custom certificate templates",
      "Dynamic participant name and event details",
      "Unique certificate number per attendee",
      "PDF download",
      "Auto-email after completion",
      "Admin approval option",
    ],
  },
  {
    category: "Speakers",
    icon: Mic2,
    color: "bg-indigo-50 text-indigo-700",
    features: [
      "Speaker profile with bio and photo",
      "Session assignments and schedule view",
      "Presentation file uploads",
      "Audience Q&A management",
      "Organizer message delivery",
    ],
  },
  {
    category: "Reports & Analytics",
    icon: BarChart3,
    color: "bg-red-50 text-red-700",
    features: [
      "Registration, approval, and attendance stats",
      "Session popularity and engagement metrics",
      "Certificate completion reports",
      "Survey results",
      "CSV, Excel, and PDF exports",
      "Filtered reports by role, day, or session",
    ],
  },
  {
    category: "Security & Reliability",
    icon: Shield,
    color: "bg-gray-100 text-gray-700",
    features: [
      "Role-based access control",
      "Audit logs for admin actions",
      "Rate limiting on login and registration",
      "Sanitized file uploads",
      "Event data isolation by organization",
      "Secure authentication with OTP and magic links",
    ],
  },
  {
    category: "Localization & Customization",
    icon: Globe,
    color: "bg-sky-50 text-sky-700",
    features: [
      "Custom event branding and theme colors",
      "Organizer name and cover image",
      "Custom registration form fields",
      "Badge template customization",
      "Language support (coming soon)",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0F0825] to-[#4C1D95] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-5">
            Every feature your event team needs.
          </h1>
          <p className="text-[#C4B5FD] text-lg max-w-2xl mx-auto mb-8">
            From registration to post-event certificates, Corevents gives you
            the tools to manage corporate events with complete control and
            visibility.
          </p>
          <Button
            asChild
            className="bg-[#F97316] hover:bg-[#EA6C00] text-white font-semibold px-6 py-3 rounded-lg"
          >
            <Link href="/contact">
              Book a Demo <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Feature groups */}
      <section className="bg-[#F8F5FF] py-20 px-4">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2">
          {featureGroups.map((group) => (
            <div
              key={group.category}
              className="bg-white rounded-2xl border border-[#DDD6FE] p-7 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${group.color}`}>
                  <group.icon className="w-5 h-5" />
                </div>
                <h2 className="text-[#0F0825] font-bold text-lg">{group.category}</h2>
              </div>
              <ul className="space-y-2">
                {group.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[#64748B] text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#F97316] mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F0825] py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Ready to see Corevents in action?
        </h2>
        <p className="text-[#C4B5FD] mb-8 max-w-xl mx-auto">
          Book a demo and we&apos;ll walk you through the full platform tailored to your event type.
        </p>
        <Button
          asChild
          className="bg-[#F97316] hover:bg-[#EA6C00] text-white font-semibold px-6 py-3 rounded-lg"
        >
          <Link href="/contact">Book a Demo</Link>
        </Button>
      </section>
    </div>
  );
}
