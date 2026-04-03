import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logo from "@/components/ui/Logo";

export const metadata: Metadata = {
  title: "Log In — Corevents",
  description: "Log in to your Corevents organizer account.",
};

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#F8F5FF] px-4 py-16">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex mb-4 justify-center">
            <Logo size={34} />
          </Link>
          <h1 className="text-2xl font-bold text-[#0F0825]">Log in to your account</h1>
          <p className="text-[#64748B] text-sm mt-2">
            Organizer access. Participants use the{" "}
            <Link href="/join" className="text-[#F97316] hover:underline">
              Join Event
            </Link>{" "}
            page.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-[#DDD6FE] p-8 shadow-sm">
          <form className="space-y-5">
            <div>
              <Label htmlFor="email" className="text-[#0F0825] text-sm font-medium mb-1 block">
                Work email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                className="border-[#DDD6FE] focus-visible:ring-[#F97316]"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <Label htmlFor="password" className="text-[#0F0825] text-sm font-medium">
                  Password
                </Label>
                <Link href="#" className="text-xs text-[#F97316] hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="border-[#DDD6FE] focus-visible:ring-[#F97316]"
              />
            </div>
            <Button
              type="submit"
              className="bg-[#0F0825] hover:bg-[#4C1D95] text-white font-semibold w-full py-3 rounded-lg"
            >
              Log In
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-[#DDD6FE]" />
            </div>
            <div className="relative flex justify-center text-xs text-[#64748B] bg-white px-2">
              or
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full border-[#DDD6FE] text-[#0F0825] hover:bg-[#F8F5FF] font-medium"
          >
            Continue with Magic Link
          </Button>
        </div>

        <p className="text-center text-sm text-[#64748B] mt-6">
          New to Corevents?{" "}
          <Link href="/contact" className="text-[#F97316] hover:underline font-medium">
            Request access
          </Link>
        </p>
      </div>
    </div>
  );
}
