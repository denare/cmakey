import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Cmakey Company Limited – Unlock The World",
    template: "%s | Cmakey Company Limited",
  },
  description:
    "Cmakey Company Limited is a Dar es Salaam-based multi-sector company offering Construction, Hospitality, Entertainment, Clearing & Forwarding, Logistics, and General Material Supply services.",
  keywords: [
    "Cmakey",
    "Tanzania",
    "Construction",
    "Logistics",
    "Hospitality",
    "Dar es Salaam",
    "Clearing Forwarding",
  ],
  openGraph: {
    title: "Cmakey Company Limited – Unlock The World",
    description:
      "Your trusted partner for Construction, Logistics, Hospitality, Entertainment, Forwarding and General Supply in Tanzania.",
    type: "website",
    locale: "en_TZ",
    siteName: "Cmakey Company Limited",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { LanguageProvider } from "@/lib/LanguageContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
