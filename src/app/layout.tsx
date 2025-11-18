import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leader Garage Door Services | Dunedin, FL | 24/7 Emergency Service",
  description: "Expert garage door repair, installation, and maintenance in Dunedin, FL. Serving Pinellas, Hillsborough, and Pasco Counties. Call (727) 647-8100 for 24/7 emergency service.",
  keywords: "garage door repair, garage door installation, Dunedin FL, emergency service, spring replacement",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}