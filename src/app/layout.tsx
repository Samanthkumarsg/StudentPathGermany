import { Header } from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Move to Germany Stress-free",
  description: "All in one platform for Housing, legal registration, bank account, airport pickup, insurance, and jobs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://tally.so/widgets/embed.js"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  mx-auto w-full max-w-4xl  bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]`}
      >
        {children}
        {/* <div className="fixed -z-10 top-10/12 left-1/2 translate-x-1/2 animate-spin animate-bounce [animation-duration:3s] size-180 rounded-full bg-gradient-to-r from-violet-500 via-red-400 to-yellow-300 blur-3xl opacity-50"></div> */}

      </body>
    </html>
  );
}
