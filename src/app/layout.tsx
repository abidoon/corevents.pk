import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Corevents — Run corporate events with confidence.",
  description:
    "Corevents helps organizations run professional conferences, trainings, and corporate events with streamlined registration, check-in, agendas, communication, and reporting.",
  keywords: [
    "corporate event management software",
    "conference registration platform",
    "event check-in system",
    "training event management software",
    "attendee portal",
    "event agenda platform",
    "certificate generation for events",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
