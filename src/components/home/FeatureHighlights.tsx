import {
  ClipboardList,
  Users,
  CalendarDays,
  QrCode,
  Bell,
  Award,
  Mic2,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: ClipboardList,
    title: "Registration & Approvals",
    description:
      "Custom registration forms with conditional fields, approval workflows, capacity limits, and waitlist support.",
  },
  {
    icon: Users,
    title: "Attendee Portal",
    description:
      "A clean, mobile-first portal where participants access their event, agenda, QR pass, and downloads.",
  },
  {
    icon: CalendarDays,
    title: "Agenda & Sessions",
    description:
      "Multi-day, multi-track agendas with session bookmarks, calendar sync, and real-time updates.",
  },
  {
    icon: QrCode,
    title: "QR Check-In",
    description:
      "Fast QR scanning and manual check-in with live attendance tracking and badge printing support.",
  },
  {
    icon: Bell,
    title: "Announcements",
    description:
      "Email, SMS, and in-app notifications segmented by attendee type, session, or registration status.",
  },
  {
    icon: Award,
    title: "Certificates",
    description:
      "Auto-generated PDF certificates with participant name, event details, and completion logic.",
  },
  {
    icon: Mic2,
    title: "Speaker Management",
    description:
      "Speaker profiles, session assignments, file uploads, and audience Q&A management.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description:
      "Real-time dashboards with attendance rates, session engagement, and one-click CSV/PDF exports.",
  },
];

export default function FeatureHighlights() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0825] mb-4">
            Everything you need to run a great event.
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            From registration to post-event certificates — Corevents covers every
            stage of the event lifecycle.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-[#F8F5FF] rounded-2xl p-6 border border-[#DDD6FE] hover:border-[#F97316] hover:shadow-md transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#EDE9FE] flex items-center justify-center mb-4 group-hover:bg-[#F97316] transition-colors">
                <f.icon className="w-5 h-5 text-[#F97316] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-[#0F0825] font-semibold text-sm mb-2">{f.title}</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
