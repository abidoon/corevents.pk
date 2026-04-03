"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do participants access the event after registering?",
    answer:
      "After registering, participants receive a confirmation email with a magic link or can log in using their registered email and a one-time OTP. They are taken directly to their event portal.",
  },
  {
    question: "Is registration required for participants to access the app?",
    answer:
      "Yes. Participants must complete the registration form for a specific event before they can access the event portal. This ensures only approved attendees gain access.",
  },
  {
    question: "Does Corevents support QR codes and badge printing?",
    answer:
      "Yes. Each registered attendee receives a unique QR code that can be scanned at check-in. Corevents also supports badge template creation with QR codes for print-ready badge formats.",
  },
  {
    question: "Can I automatically generate certificates for attendees?",
    answer:
      "Yes. Corevents supports custom certificate templates that are automatically generated as PDF files once an attendee meets the completion criteria — such as event attendance, session attendance, or survey submission.",
  },
  {
    question: "Can the platform handle large-scale events with thousands of attendees?",
    answer:
      "Absolutely. Corevents is designed for corporate-scale events. The platform handles multi-day, multi-track events with thousands of registrations, concurrent sessions, and real-time check-in across multiple entry points.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-[#F8F5FF] py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0825] mb-4">
            Frequently asked questions
          </h2>
          <p className="text-[#64748B] text-lg">
            Common questions about how Corevents works.
          </p>
        </div>

        <Accordion className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={i}
              className="bg-white border border-[#DDD6FE] rounded-xl px-5 shadow-sm data-open:border-[#F97316]"
            >
              <AccordionTrigger className="text-[#0F0825] font-semibold text-sm text-left py-4 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#64748B] text-sm leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
