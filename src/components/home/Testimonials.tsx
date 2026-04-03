const testimonials = [
  {
    quote:
      "Corevents completely transformed how we manage our annual leadership conference. Registration used to take weeks of manual coordination — now it runs itself.",
    name: "Aisha Raza",
    title: "Head of Learning & Development",
    company: "Meridian Corp",
  },
  {
    quote:
      "We checked in 800 attendees in under 30 minutes using the QR system. Our team was amazed. The real-time dashboard kept everyone aligned throughout the day.",
    name: "Tariq Mahmood",
    title: "Event Operations Manager",
    company: "Nexatech",
  },
  {
    quote:
      "The certificate generation feature alone saved us two full days of work. Participants received their certificates automatically — no manual follow-up needed.",
    name: "Sana Javed",
    title: "Training Coordinator",
    company: "AlphaGroup",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0825] mb-4">
            Trusted by teams who run serious events.
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Organizations across industries rely on Corevents to deliver
            professional, well-run events at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#F8F5FF] rounded-2xl border border-[#DDD6FE] p-7 shadow-sm"
            >
              <div className="text-[#F97316] text-3xl mb-4 leading-none">&ldquo;</div>
              <p className="text-[#0F0825] text-sm leading-relaxed mb-6">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0F0825] flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-[#0F0825] font-semibold text-sm">{t.name}</div>
                  <div className="text-[#64748B] text-xs">
                    {t.title}, {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
