import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logo from "@/components/ui/Logo";

export const metadata: Metadata = {
  title: "Join an Event — Corevents",
  description: "Enter your event code or email to access your registered event on Corevents.",
};

export default function JoinPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#F8F5FF] px-4 py-16">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex mb-4 justify-center">
            <Logo size={34} />
          </Link>
          <h1 className="text-2xl font-bold text-[#0F0825]">Access your event</h1>
          <p className="text-[#64748B] text-sm mt-2">
            Enter your registered email and event code to access your event portal.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-[#DDD6FE] p-8 shadow-sm">
          <form className="space-y-5">
            <div>
              <Label htmlFor="email" className="text-[#0F0825] text-sm font-medium mb-1 block">
                Registered email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="The email you used to register"
                className="border-[#DDD6FE] focus-visible:ring-[#F97316]"
              />
            </div>
            <div>
              <Label htmlFor="code" className="text-[#0F0825] text-sm font-medium mb-1 block">
                Event code
              </Label>
              <Input
                id="code"
                placeholder="e.g. SUMMIT2025"
                className="border-[#DDD6FE] focus-visible:ring-[#F97316] uppercase"
              />
              <p className="text-[#64748B] text-xs mt-1">
                Your event code was provided by the event organizer.
              </p>
            </div>
            <Button
              type="submit"
              className="bg-[#F97316] hover:bg-[#EA6C00] text-white font-semibold w-full py-3 rounded-lg"
            >
              Access My Event
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-[#DDD6FE]" />
            </div>
            <div className="relative flex justify-center text-xs text-[#64748B] bg-white px-2">
              or use a magic link
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full border-[#DDD6FE] text-[#0F0825] hover:bg-[#F8F5FF] font-medium"
          >
            Send Magic Link to My Email
          </Button>
        </div>

        <p className="text-center text-sm text-[#64748B] mt-6">
          Not registered yet?{" "}
          <span className="text-[#0F0825] font-medium">
            Ask your event organizer for the registration link.
          </span>
        </p>
        <p className="text-center text-sm text-[#64748B] mt-2">
          Are you an organizer?{" "}
          <Link href="/login" className="text-[#F97316] hover:underline font-medium">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
}
