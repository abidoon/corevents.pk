import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Building2, GraduationCap, Users2, Presentation, Globe, Trophy, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions — Corevents",
  description:
    "Corevents is built for corporate conferences, internal trainings, workshops, seminars, summits, and certification programs.",
};

const solutions = [
  {
    icon: Building2,
    title: "Corporate Conferences",
    subtitle: "Large-scale multi-track events",
    description:
      "Manage thousands of registrations, multiple tracks and sessions, sponsor visibility, and real-time check-in across large venues. Corevents gives you full operational control from a single dashboard.",
    useCases: [
      "Annual leadership summits",
      "Industry conferences",
      "Multi-day company-wide events",
      "Investor and partner conferences",
    ],
  },
  {
    icon: GraduationCap,
    title: "Internal Trainings",
    subtitle: "HR and L&D programs",
    description:
      "Run structured learning programs with approval workflows, attendance tracking, and automatic certificate generation. Track completion rates and export reports for your HR systems.",
    useCases: [
      "Onboarding programs",
      "Compliance and safety trainings",
      "Leadership development programs",
      "Departmental upskilling sessions",
    ],
  },
  {
    icon: Users2,
    title: "Workshops",
    subtitle: "Interactive small-group sessions",
    description:
      "Manage hands-on workshops with limited-capacity registration, session-level check-in, and real-time participant visibility. Perfect for focused learning and collaboration formats.",
    useCases: [
      "Design thinking workshops",
      "Technical skills workshops",
      "Team-building sessions",
      "Executive coaching workshops",
    ],
  },
  {
    icon: Presentation,
    title: "Seminars",
    subtitle: "Professional knowledge sharing",
    description:
      "Host professional seminars with speaker profiles, session Q&A, and organized participant communications. Maintain a professional experience from registration to post-event follow-up.",
    useCases: [
      "Industry expert panels",
      "Research seminars",
      "Product knowledge sessions",
      "Legal and compliance briefings",
    ],
  },
  {
    icon: Globe,
    title: "Multi-day Summits",
    subtitle: "Complex multi-venue programs",
    description:
      "Coordinate complex multi-day events across multiple venues and rooms. Manage daily programming, track session attendance, handle sponsor visibility, and deliver live analytics throughout.",
    useCases: [
      "Annual summits and retreats",
      "Multi-city event programs",
      "Association conferences",
      "Global team gatherings",
    ],
  },
  {
    icon: Trophy,
    title: "Certification Programs",
    subtitle: "Structured accreditation events",
    description:
      "Run programs where certification is tied to attendance, sessions completed, and survey responses. Corevents automates certificate generation and delivery once participants meet your criteria.",
    useCases: [
      "Professional certification courses",
      "Continuing education programs",
      "Accreditation workshops",
      "Skills assessment events",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0F0825] to-[#4C1D95] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-5">
            Built for every kind of corporate event.
          </h1>
          <p className="text-[#C4B5FD] text-lg max-w-2xl mx-auto mb-8">
            Whether you run conferences, trainings, or certification programs,
            Corevents is designed to handle the complexity with ease.
          </p>
          <Button
            asChild
            className="bg-[#F97316] hover:bg-[#EA6C00] text-white font-semibold px-6 py-3 rounded-lg"
          >
            <Link href="/contact">
              Talk to Sales <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Solutions list */}
      <section className="bg-[#F8F5FF] py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-8">
          {solutions.map((s, i) => (
            <div
              key={s.title}
              className={`bg-white rounded-2xl border border-[#DDD6FE] p-8 shadow-sm grid md:grid-cols-2 gap-8 items-center ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0F0825]/10 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-[#0F0825]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B] font-medium">{s.subtitle}</div>
                    <h2 className="text-[#0F0825] font-bold text-xl">{s.title}</h2>
                  </div>
                </div>
                <p className="text-[#64748B] text-sm leading-relaxed mb-5">{s.description}</p>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#0F0825] text-[#0F0825] hover:bg-[#0F0825] hover:text-white text-sm"
                >
                  <Link href="/contact">Get a Demo</Link>
                </Button>
              </div>
              <div className="bg-[#F8F5FF] rounded-xl border border-[#DDD6FE] p-6">
                <div className="text-xs font-semibold uppercase tracking-widest text-[#64748B] mb-4">
                  Common use cases
                </div>
                <ul className="space-y-3">
                  {s.useCases.map((uc) => (
                    <li key={uc} className="flex items-center gap-2 text-[#0F0825] text-sm">
                      <span className="w-2 h-2 rounded-full bg-[#F97316] shrink-0" />
                      {uc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F0825] py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Not sure which solution fits your event?
        </h2>
        <p className="text-[#C4B5FD] mb-8 max-w-xl mx-auto">
          Talk to our team and we&apos;ll recommend the right setup for your event type and scale.
        </p>
        <Button
          asChild
          className="bg-[#F97316] hover:bg-[#EA6C00] text-white font-semibold px-6 py-3 rounded-lg"
        >
          <Link href="/contact">Contact Sales</Link>
        </Button>
      </section>
    </div>
  );
}
