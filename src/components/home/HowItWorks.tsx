const steps = [
  {
    number: "01",
    title: "Create your event",
    description:
      "Set up event details, dates, venue, agenda, and branding in minutes.",
  },
  {
    number: "02",
    title: "Publish registration",
    description:
      "Configure your registration form and share the link with your audience.",
  },
  {
    number: "03",
    title: "Participants register and access the portal",
    description:
      "Attendees complete registration and get instant access to their event portal.",
  },
  {
    number: "04",
    title: "Manage attendance and communication",
    description:
      "Check in attendees via QR, send announcements, and track sessions in real time.",
  },
  {
    number: "05",
    title: "Post-event reports and certificates",
    description:
      "Generate attendance reports and issue certificates automatically after the event.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#0F0825] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How it works
          </h2>
          <p className="text-[#C4B5FD] text-lg max-w-2xl mx-auto">
            From setup to post-event, Corevents handles the full operational
            lifecycle in five simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-full w-full h-px bg-[#1A0F3E] z-0 -translate-x-1/2" />
              )}
              <div className="relative z-10 bg-white/5 border border-white/10 rounded-2xl p-5 h-full hover:border-[#F97316]/50 transition-colors">
                <div className="text-3xl font-bold text-[#F97316] mb-3">
                  {step.number}
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">
                  {step.title}
                </h3>
                <p className="text-[#C4B5FD] text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
