import { XCircle, CheckCircle2 } from "lucide-react";

const problems = [
  "Registration spreadsheets that get out of hand",
  "Manual attendee coordination via email and WhatsApp",
  "Printed agendas that go out of date",
  "Long queues at check-in desks",
  "No visibility into attendance or engagement",
  "Post-event reporting done in Excel",
];

const solutions = [
  "Online registration with approval workflows",
  "Automated emails, SMS, and in-app announcements",
  "Live digital agenda accessible on any device",
  "QR code check-in in under 5 seconds",
  "Real-time dashboard with attendance stats",
  "One-click reports and certificate generation",
];

export default function ProblemSolution() {
  return (
    <section className="bg-[#F8F5FF] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0825] mb-4">
            Event operations shouldn&apos;t feel this hard.
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Most organizations manage large events with fragmented tools. Corevents
            replaces the chaos with a single, structured platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Problems */}
          <div className="bg-white rounded-2xl border border-[#DDD6FE] p-8 shadow-sm">
            <h3 className="text-lg font-bold text-[#0F0825] mb-6 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-500" />
              Without Corevents
            </h3>
            <ul className="space-y-4">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[#64748B] text-sm">
                  <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-[#0F0825] rounded-2xl border border-[#0F0825] p-8 shadow-sm">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#F97316]" />
              With Corevents
            </h3>
            <ul className="space-y-4">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-3 text-[#C4B5FD] text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#F97316] mt-0.5 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
