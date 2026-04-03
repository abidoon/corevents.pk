import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, LayoutDashboard } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0F0825] text-white py-24 px-4">
      {/* Background orbs */}
      <div className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full bg-[#7C3AED]/30 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-60px] right-[-60px] w-[350px] h-[350px] rounded-full bg-[#F97316]/20 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#4C1D95]/20 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block bg-[#F97316]/20 text-[#F97316] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#F97316]/40">
            Corporate Event Management
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Run corporate events{" "}
            <span className="bg-gradient-to-r from-[#F97316] to-[#A78BFA] bg-clip-text text-transparent">
              with confidence.
            </span>
          </h1>
          <p className="text-[#C4B5FD] text-lg leading-relaxed mb-8 max-w-xl">
            Corevents helps organizers run conferences, trainings, and corporate
            events with streamlined registration, check-in, agendas,
            communication, and reporting — all in one platform.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              className="bg-[#F97316] hover:bg-[#EA6C00] text-white font-semibold px-6 py-3 text-base rounded-lg shadow-lg shadow-orange-500/25"
            >
              <Link href="/contact">
                Book a Demo <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 hover:text-white font-semibold px-6 py-3 text-base rounded-lg bg-transparent"
            >
              <Link href="/features">View Features</Link>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-[#C4B5FD]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
              Setup in minutes
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
              Scales to thousands
            </span>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="relative hidden lg:block">
          {/* Glow behind card */}
          <div className="absolute inset-0 bg-[#7C3AED]/20 blur-3xl rounded-3xl" />
          <div className="relative bg-white/[0.07] backdrop-blur-sm rounded-2xl border border-white/10 p-6 shadow-2xl">
            <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/10">
              <div className="w-7 h-7 rounded-lg bg-[#F97316] flex items-center justify-center">
                <LayoutDashboard className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold text-white">
                Organizer Dashboard
              </span>
              <span className="ml-auto text-xs text-[#C4B5FD] bg-white/10 px-2 py-0.5 rounded-full">
                Live
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                { label: "Registered", value: "1,248", color: "text-[#A78BFA]" },
                { label: "Approved", value: "986", color: "text-emerald-400" },
                { label: "Checked In", value: "743", color: "text-[#F97316]" },
                { label: "Sessions", value: "24", color: "text-yellow-400" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/[0.06] rounded-xl p-3 border border-white/[0.08]"
                >
                  <div className={`text-2xl font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#C4B5FD] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              {[
                { name: "Sarah Ahmed", action: "Checked in 09:14 AM", dot: "bg-emerald-400" },
                { name: "Ibrahim Khan", action: "Registered", dot: "bg-[#A78BFA]" },
                { name: "Zara Malik", action: "Approved", dot: "bg-[#F97316]" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/[0.04] rounded-lg px-3 py-2 text-xs text-[#DDD6FE]"
                >
                  <span className={`w-2 h-2 rounded-full ${item.dot} shrink-0`} />
                  <span className="font-medium text-white">{item.name}</span>
                  <span className="text-[#C4B5FD]">— {item.action}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
