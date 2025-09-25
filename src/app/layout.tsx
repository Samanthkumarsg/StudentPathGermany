import { Header } from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope, Inter } from "next/font/google";
import Script from "next/script"; // ✅ Import Next.js Script
import "./globals.css";
import "./theme.css";
import ClientProvider from "@/components/ClientProvider"; // Import the new Client Component
import LenisProvider from "@/components/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Move to Germany Stress-free",
  description:
    "All in one platform for Housing, legal registration, bank account, airport pickup, insurance, and jobs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${inter.variable} antialiased mx-auto w-full bg-gray-50 relative`}
      >
        <LenisProvider>  <ClientProvider>{children}</ClientProvider> </LenisProvider>

        {/* ✅ Botpress Chat Widget */}
        <Script
          src="https://cdn.botpress.cloud/webchat/v3.3/inject.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://files.bpcontent.cloud/2025/09/22/22/20250922220413-I5CT5YUF.js"
          strategy="afterInteractive"
        />

        {/* ✅ Tally Embed Script */}
        <Script
          src="https://tally.so/widgets/embed.js"
          strategy="afterInteractive"
        />
      </body>
    </html >
  );
}
