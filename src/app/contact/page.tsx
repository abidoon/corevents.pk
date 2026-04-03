"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setErrorMsg(json.error || "Something went wrong.");
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0F0825] to-[#4C1D95] text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-5">
            Let&apos;s talk about your event.
          </h1>
          <p className="text-[#C4B5FD] text-lg max-w-xl mx-auto">
            Book a demo, request a quote, or ask us anything. Our team will
            respond within one business day.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="bg-[#F8F5FF] py-20 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-2xl border border-[#DDD6FE] p-8 shadow-sm">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <CheckCircle2 className="w-12 h-12 text-[#F97316] mb-4" />
                <h2 className="text-xl font-bold text-[#0F0825] mb-2">Message received.</h2>
                <p className="text-[#64748B] text-sm">
                  Thank you for reaching out. We&apos;ll get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-xl font-bold text-[#0F0825] mb-2">Send us a message</h2>
                <div>
                  <Label htmlFor="name" className="text-[#0F0825] text-sm font-medium mb-1 block">
                    Full name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="border-[#DDD6FE] focus-visible:ring-[#F97316]"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-[#0F0825] text-sm font-medium mb-1 block">
                    Work email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="border-[#DDD6FE] focus-visible:ring-[#F97316]"
                  />
                </div>
                <div>
                  <Label htmlFor="company" className="text-[#0F0825] text-sm font-medium mb-1 block">
                    Company / Organization
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your organization"
                    className="border-[#DDD6FE] focus-visible:ring-[#F97316]"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-[#0F0825] text-sm font-medium mb-1 block">
                    Message <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your event, team size, or what you'd like to see in a demo..."
                    className="border-[#DDD6FE] focus-visible:ring-[#F97316] resize-none"
                  />
                </div>
                {status === "error" && (
                  <p className="text-red-600 text-sm">{errorMsg}</p>
                )}
                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-[#F97316] hover:bg-[#EA6C00] text-white font-semibold w-full py-3 rounded-lg"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#0F0825] mb-4">
                We&apos;d love to hear from you.
              </h2>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Whether you&apos;re planning your first event on Corevents or
                managing an ongoing program, our team is here to help you get
                set up and running.
              </p>
            </div>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#EDE9FE] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#F97316]" />
                </div>
                <div>
                  <div className="text-[#0F0825] font-semibold text-sm">Email</div>
                  <div className="text-[#64748B] text-sm">hello@corevents.pk</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#EDE9FE] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#F97316]" />
                </div>
                <div>
                  <div className="text-[#0F0825] font-semibold text-sm">Phone</div>
                  <div className="text-[#64748B] text-sm">+92 300 000 0000</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#EDE9FE] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#F97316]" />
                </div>
                <div>
                  <div className="text-[#0F0825] font-semibold text-sm">Location</div>
                  <div className="text-[#64748B] text-sm">Karachi, Pakistan</div>
                </div>
              </div>
            </div>
            <div className="bg-[#0F0825] rounded-2xl p-6 text-white">
              <div className="text-sm font-semibold mb-2 text-[#F97316]">Response time</div>
              <p className="text-[#C4B5FD] text-sm">
                We respond to all demo requests and inquiries within one business
                day. For urgent event support, include your event date in the
                message.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
