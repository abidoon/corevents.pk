import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Corevents",
  description:
    "Corevents is a corporate event management platform built to help organizations run professional events with less friction and more control.",
};

const values = [
  {
    title: "Built for professionals",
    description:
      "Corevents is designed for corporate teams, not casual event planners. The experience reflects the standards of enterprise operations.",
  },
  {
    title: "Simple without being basic",
    description:
      "We believe software for complex problems doesn't need to be complicated. Corevents is structured, but never overwhelming.",
  },
  {
    title: "Reliable at scale",
    description:
      "Whether you're managing 50 attendees or 5,000, Corevents handles the load without degrading the experience.",
  },
  {
    title: "Attendee-first thinking",
    description:
      "The participant experience is as important as the organizer dashboard. We design for both, not just one.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0F0825] to-[#4C1D95] text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-5">
            The operating system for corporate events.
          </h1>
          <p className="text-[#C4B5FD] text-lg max-w-xl mx-auto">
            Corevents was built to eliminate the operational chaos that
            organizations face when running large-scale events — and replace it
            with structure, visibility, and professionalism.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0F0825] mb-5">Why Corevents exists</h2>
            <p className="text-[#64748B] text-base leading-relaxed mb-4">
              Large organizations spend enormous effort managing events with
              disconnected tools — registration spreadsheets, WhatsApp groups
              for coordination, printed agendas, and manual post-event
              follow-up. The result is operational chaos, poor attendee
              experiences, and zero visibility for organizers.
            </p>
            <p className="text-[#64748B] text-base leading-relaxed mb-4">
              Corevents was built to replace that chaos with a single,
              structured platform that handles every stage of the event
              lifecycle — from the first registration to the final certificate.
            </p>
            <p className="text-[#64748B] text-base leading-relaxed">
              Our goal is to make every corporate event feel organized, premium,
              and easy to manage — regardless of scale.
            </p>
          </div>
          <div className="bg-[#0F0825] rounded-2xl p-8 text-white">
            <blockquote className="text-lg leading-relaxed text-[#C4B5FD] italic mb-6">
              &ldquo;Every event should feel organized, premium, and easy to manage.&rdquo;
            </blockquote>
            <div className="text-sm font-semibold text-[#F97316]">— Corevents Brand Promise</div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F8F5FF] py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0F0825] mb-10 text-center">
            What we stand for
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl border border-[#DDD6FE] p-6 shadow-sm"
              >
                <h3 className="text-[#0F0825] font-bold mb-3">{v.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F0825] py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Interested in running your event on Corevents?
        </h2>
        <p className="text-[#C4B5FD] mb-8 max-w-xl mx-auto">
          Book a demo and see how the platform works for your team and event type.
        </p>
        <Button
          asChild
          className="bg-[#F97316] hover:bg-[#EA6C00] text-white font-semibold px-6 py-3 rounded-lg"
        >
          <Link href="/contact">
            Book a Demo <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </section>
    </div>
  );
}
