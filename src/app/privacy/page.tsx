import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Corevents",
  description: "Privacy policy for the Corevents platform.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#F8F5FF] py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-[#0F0825] mb-3">Privacy Policy</h1>
          <p className="text-[#64748B] text-sm">Last updated: April 2025</p>
        </div>

        <div className="bg-white rounded-2xl border border-[#DDD6FE] p-8 shadow-sm prose prose-sm max-w-none text-[#0F0825]">
          <h2 className="text-[#0F0825] font-bold text-lg mt-0">1. Information We Collect</h2>
          <p className="text-[#64748B] leading-relaxed">
            We collect information you provide directly to us when using the Corevents platform,
            including name, email address, organization details, and event-related information
            submitted through registration forms.
          </p>

          <h2 className="text-[#0F0825] font-bold text-lg">2. How We Use Your Information</h2>
          <p className="text-[#64748B] leading-relaxed">
            We use the information we collect to provide and improve the Corevents platform,
            process event registrations, send notifications related to events you are registered
            for, and respond to your inquiries.
          </p>

          <h2 className="text-[#0F0825] font-bold text-lg">3. Data Sharing</h2>
          <p className="text-[#64748B] leading-relaxed">
            We do not sell your personal information. We may share your information with event
            organizers for the specific events you are registered for. We may also share
            information with service providers who assist us in delivering the platform.
          </p>

          <h2 className="text-[#0F0825] font-bold text-lg">4. Data Security</h2>
          <p className="text-[#64748B] leading-relaxed">
            We implement appropriate security measures to protect your personal information against
            unauthorized access, alteration, disclosure, or destruction. This includes role-based
            access controls, audit logging, and secure authentication.
          </p>

          <h2 className="text-[#0F0825] font-bold text-lg">5. Data Retention</h2>
          <p className="text-[#64748B] leading-relaxed">
            We retain your personal information for as long as necessary to provide the Corevents
            service and comply with our legal obligations. Event data is isolated by organization
            and retained according to the terms agreed with your event organizer.
          </p>

          <h2 className="text-[#0F0825] font-bold text-lg">6. Your Rights</h2>
          <p className="text-[#64748B] leading-relaxed">
            You have the right to access, correct, or request deletion of your personal
            information. To exercise these rights, please contact us at privacy@corevents.pk.
          </p>

          <h2 className="text-[#0F0825] font-bold text-lg">7. Contact</h2>
          <p className="text-[#64748B] leading-relaxed">
            If you have questions about this privacy policy, please contact us at{" "}
            <a href="mailto:privacy@corevents.pk" className="text-[#F97316]">
              privacy@corevents.pk
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
