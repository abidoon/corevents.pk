export default function TrustBar() {
  const metrics = [
    { value: "50+", label: "Events Managed" },
    { value: "10,000+", label: "Attendees Served" },
    { value: "99.9%", label: "Uptime Reliability" },
    { value: "< 5 min", label: "Average Check-in Time" },
  ];

  return (
    <section className="bg-white border-b border-[#DDD6FE] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-[#64748B] mb-10">
          Trusted by corporate teams, training departments, and event agencies
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-3xl font-bold text-[#0F0825]">{m.value}</div>
              <div className="text-sm text-[#64748B] mt-1">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Placeholder logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
          {["Nexatech", "Meridian Corp", "AlphaGroup", "TerraHoldings", "Summit Labs", "Vantage Co"].map(
            (name) => (
              <span
                key={name}
                className="text-[#0F0825] font-semibold text-sm tracking-tight"
              >
                {name}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
