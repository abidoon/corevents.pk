import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-gradient-to-br from-[#0F0825] to-[#4C1D95] py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
          Ready to run your next event with Corevents?
        </h2>
        <p className="text-[#C4B5FD] text-lg mb-10 max-w-xl mx-auto">
          Book a demo and see how Corevents can simplify your event operations —
          from registration to reporting.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="bg-[#F97316] hover:bg-[#EA6C00] text-white font-semibold px-6 py-3 text-base rounded-lg"
          >
            <Link href="/contact">
              Book a Demo <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold px-6 py-3 text-base rounded-lg bg-transparent"
          >
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
