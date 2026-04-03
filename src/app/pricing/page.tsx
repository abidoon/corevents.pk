import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing — Corevents",
  description:
    "Corevents pricing is tailored to your organization and event scale. Request a quote for your next event.",
};

const included = [
  "Event creation and publishing",
  "Custom registration forms",
  "Approval workflows and waitlist",
  "Participant portal access",
  "Agenda and session management",
  "Speaker and sponsor management",
  "QR code check-in",
  "Announcements and notifications",
  "Certificate generation",
  "Reports and exports",
  "Admin roles and permissions",
  "Dedicated onboarding support",
];

export default function PricingPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0F0825] to-[#4C1D95] text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-5">
            Pricing built for corporate teams.
          </h1>
          <p className="text-[#C4B5FD] text-lg max-w-xl mx-auto">
            Corevents is priced based on your event scale and usage. Get in
            touch and we&apos;ll put together the right plan for your
            organization.
          </p>
        </div>
      </section>

      {/* Quote card */}
      <section className="bg-[#F8F5FF] py-20 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div className="bg-white rounded-2xl border border-[#DDD6FE] p-8 shadow-sm">
            <div className="inline-block bg-[#EDE9FE] text-[#0F0825] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
              Custom Pricing
            </div>
            <h2 className="text-2xl font-bold text-[#0F0825] mb-3">
              Request a quote
            </h2>
            <p className="text-[#64748B] text-sm leading-relaxed mb-6">
              Tell us about your event and team. We&apos;ll follow up within one
              business day with a tailored proposal.
            </p>
            <Button
              asChild
              className="bg-[#F97316] hover:bg-[#EA6C00] text-white font-semibold w-full py-3 rounded-lg"
            >
              <Link href="/contact">
                Get a Quote <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <p className="text-[#64748B] text-xs text-center mt-4">
              No credit card required. Response within 1 business day.
            </p>
          </div>

          <div>
            <h3 className="text-[#0F0825] font-bold text-lg mb-5">
              Everything included in every plan
            </h3>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#0F0825] text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ pricing */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0F0825] mb-8 text-center">
            Common pricing questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Is there a per-attendee fee?",
                a: "Pricing is based on event volume and attendee scale. We offer packages that work for both single large events and recurring event programs.",
              },
              {
                q: "Can I use Corevents for multiple events?",
                a: "Yes. Corevents supports multiple events under one organization account. Volume pricing is available for teams running frequent events.",
              },
              {
                q: "Is there a free trial?",
                a: "We offer a guided demo and a limited pilot setup for qualifying organizations. Contact us to discuss options.",
              },
              {
                q: "What support is included?",
                a: "All plans include onboarding support and access to our help documentation. Premium support tiers with dedicated account managers are available.",
              },
            ].map((item) => (
              <div key={item.q} className="border-b border-[#DDD6FE] pb-5">
                <h3 className="text-[#0F0825] font-semibold text-sm mb-2">{item.q}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
