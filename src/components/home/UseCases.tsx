import { Building2, GraduationCap, Users2, Presentation, Globe, Trophy } from "lucide-react";

const useCases = [
  {
    icon: Building2,
    title: "Corporate Conferences",
    description:
      "Multi-day, multi-track conferences with thousands of attendees, sponsors, and complex agendas.",
  },
  {
    icon: GraduationCap,
    title: "Internal Trainings",
    description:
      "Company-wide learning programs with registrations, attendance tracking, and certificates.",
  },
  {
    icon: Users2,
    title: "Workshops",
    description:
      "Small-to-medium hands-on sessions with session-level check-in and participant management.",
  },
  {
    icon: Presentation,
    title: "Seminars",
    description:
      "Professional seminars with speaker management, announcements, and post-event follow-up.",
  },
  {
    icon: Globe,
    title: "Multi-day Summits",
    description:
      "Large-scale summits with day-by-day programming, multiple venues, and live analytics.",
  },
  {
    icon: Trophy,
    title: "Certification Programs",
    description:
      "Programs with attendance thresholds, survey requirements, and automated certificate issuance.",
  },
];

export default function UseCases() {
  return (
    <section className="bg-[#F8F5FF] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0825] mb-4">
            Built for every type of corporate event.
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Whether you run a 50-person workshop or a 5,000-person summit,
            Corevents scales with you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc) => (
            <div
              key={uc.title}
              className="bg-white rounded-2xl border border-[#DDD6FE] p-6 shadow-sm hover:shadow-md hover:border-[#F97316] transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#4C1D95]/10 flex items-center justify-center mb-4">
                <uc.icon className="w-5 h-5 text-[#4C1D95]" />
              </div>
              <h3 className="text-[#0F0825] font-semibold mb-2">{uc.title}</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                {uc.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
