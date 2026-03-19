import type { Metadata } from "next";
import "./globals.css";
// app/layout.tsx
import { IBM_Plex_Sans_Condensed, IBM_Plex_Sans } from 'next/font/google';
import Navbar from "@/components/Navbar";

// Configurazione del font
const ibm_sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: '--font-ibm-plex-sans', // Utile per Tailwind
});

const ibm_sans_condensed = IBM_Plex_Sans_Condensed({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: '--font-ibm-plex-sans-condensed', // Utile per Tailwind
});

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${ibm_sans.variable} ${ibm_sans_condensed.variable} antialiased`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}