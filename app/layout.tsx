import type { Metadata } from "next";
import { Schibsted_Grotesk, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const grotesk = Schibsted_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://garvitoberoi.com"),
  title: "Garvit Oberoi — Product",
  description:
    "Product-focused builder. I analyze products, make trade-off decisions, and ship the result end-to-end. 3 live products, PM internship, DPDP case study.",
  openGraph: {
    title: "Garvit Oberoi — Product",
    description: "Case studies: Project Adhikar, ShipFlow AI, NEXUS, Orderly.",
    url: "https://garvitoberoi.com",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${grotesk.variable} ${serif.variable} ${mono.variable}`}>
      <body className="flex min-h-screen flex-col bg-paper text-ink antialiased">{children}</body>
    </html>
  );
}
