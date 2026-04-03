import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Corevents",
  description: "Terms of service for the Corevents platform.",
};

export default function TermsPage() {
  return (
    <div className="bg-[#F8F5FF] py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-[#0F0825] mb-3">Terms of Service</h1>
          <p className="text-[#64748B] text-sm">Last updated: April 2025</p>
        </div>

        <div className="bg-white rounded-2xl border border-[#DDD6FE] p-8 shadow-sm text-[#0F0825]">
          {[
            {
              title: "1. Acceptance of Terms",
              content:
                "By accessing or using the Corevents platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use the platform.",
            },
            {
              title: "2. Use of the Platform",
              content:
                "Corevents is a corporate event management platform. You agree to use the platform only for lawful purposes and in accordance with these terms. You are responsible for ensuring that your use of the platform complies with applicable laws and regulations.",
            },
            {
              title: "3. Account Responsibilities",
              content:
                "You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use of your account. Corevents is not liable for any loss resulting from unauthorized use of your account.",
            },
            {
              title: "4. Event Data",
              content:
                "Event organizers are responsible for the accuracy of event information and participant data entered into the platform. Corevents provides the platform as a tool — the responsibility for event operations remains with the organizing team.",
            },
            {
              title: "5. Intellectual Property",
              content:
                "The Corevents platform, including its design, code, and content, is owned by Corevents and protected by applicable intellectual property laws. You may not copy, reproduce, or distribute any part of the platform without prior written permission.",
            },
            {
              title: "6. Limitation of Liability",
              content:
                "Corevents is provided on an 'as is' basis. We do not warrant that the platform will be uninterrupted or error-free. In no event shall Corevents be liable for any indirect, incidental, or consequential damages arising from your use of the platform.",
            },
            {
              title: "7. Modifications",
              content:
                "We reserve the right to modify these Terms of Service at any time. Changes will be communicated through the platform or by email. Your continued use of the platform after changes constitutes acceptance of the revised terms.",
            },
            {
              title: "8. Contact",
              content:
                "If you have questions about these terms, contact us at legal@corevents.pk.",
            },
          ].map((section) => (
            <div key={section.title} className="mb-7">
              <h2 className="text-[#0F0825] font-bold text-base mb-2">{section.title}</h2>
              <p className="text-[#64748B] text-sm leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
